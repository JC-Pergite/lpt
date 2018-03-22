import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormControl, 
		 FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions, IMyDateModel } from 'angular4-datepicker/src/my-date-picker/interfaces';
import { Allergy } from '../shared/allergy';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'lpt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush    
})
export class ContactComponent implements OnInit {

	reserve: FormGroup;
  public time = { hour: 12, minute: 0 };
  public myDatePickerOptions: IMyDpOptions = {
            dateFormat: 'mm/dd/yyyy',
  }; 
  public dinner: boolean = false;
  public meal: Array<string> = ['Lunch', 'Dinner'];
  allergies: Allergy[];

  constructor(private fb: FormBuilder, private menuService: MenuService,
              private detect: ChangeDetectorRef) { }

  ngOnInit() {
   	this.reserve = this.fb.group({
     	name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
     	party: ['', [Validators.required] ],
      myDate: [null, Validators.required],
    });
    this.allergyList();
	}

  get name() { return this.reserve.get('name'); }
  get party() { return this.reserve.get('party'); }

  allergyList() {
    this.allergies = this.menuService.getAllergies();
    this.detect.markForCheck();
  }

  onSubmit({ value, valid }: { value: string, valid: boolean }) {
    	console.log('Reservation Info: ', value);
      console.log('Guest Allergies: ', this.allergies);
  }

  setDate(): void {
    let date = new Date();
    this.reserve.patchValue({myDate: {
    date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
    this.detect.markForCheck();
  }
 
  clearDate(): void {
    this.reserve.patchValue({myDate: null});
    this.detect.markForCheck();
  }

  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    if(!this.dinner) {
      if (value.hour < 12) {
        return {tooEarly: true};
      }
      if (value.hour > 16) {
        return {tooLate: true};
      }
    }

    else {
       if (value.hour < 19) {
        return {tooEarly: true};
      }
      if (value.hour > 23) {
        return {tooLate: true};
      }
    }
    return null;
  });

}