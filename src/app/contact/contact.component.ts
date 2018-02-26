import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, 
		 FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions, IMyDateModel } from 'angular4-datepicker/src/my-date-picker/interfaces';
import { Allergy } from '../shared/allergy';
import { MenuService } from '../menu/menu.service';

@Component({
  selector: 'lpt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

	reserve: FormGroup;
  public time = { hour: 12, minute: 0 };
  public myDatePickerOptions: IMyDpOptions = {
            dateFormat: 'dd.mm.yyyy',
  }; 
  public dinner: boolean = false;
  public meal: Array<string> = ['Lunch', 'Dinner'];
  allergies: Allergy[];

  constructor(private fb: FormBuilder, private menuService: MenuService) { }

  ngOnInit() {
   	this.reserve = this.fb.group({
     	name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
     	party: ['', [Validators.required] ],
      myDate: [null, Validators.required]
    });
    this.allergyList();
	}

  allergyList() {
    this.allergies = this.menuService.getAllergies();
  }

  onSubmit({ value, valid }: { value: string, valid: boolean }) {
    	console.log(value);
  }

  setDate(): void {
    let date = new Date();
    this.reserve.patchValue({myDate: {
    date: {
        year: date.getFullYear(),
        month: date.getMonth() + 1,
        day: date.getDate()}
    }});
  }
 
  clearDate(): void {
    this.reserve.patchValue({myDate: null});
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