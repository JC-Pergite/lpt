import { Component, OnInit, ChangeDetectionStrategy, ChangeDetectorRef } from '@angular/core';
import { FormArray, FormControl, 
		 FormBuilder, FormGroup, Validators } from '@angular/forms';
import { IMyDpOptions, IMyDateModel } from 'angular4-datepicker/src/my-date-picker/interfaces';
import { Allergy } from '../shared/allergy';
import { MenuService } from '../menu/menu.service';
import { Reservation } from '../shared/reservation';

@Component({
  selector: 'lpt-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush    
})
export class ContactComponent implements OnInit {

	reserve: FormGroup;
  reservationTime: string;
  confirmation: Reservation;
  public time = { hour: 12, minute: 0 };
  public myDatePickerOptions: IMyDpOptions = {
            dateFormat: 'mm/dd/yyyy',
  }; 
  public dinner: boolean = null;
  public meal: Array<string> = ['Lunch', 'Dinner'];
  allergies: Allergy[];

  constructor(private fb: FormBuilder, public menuService: MenuService,
              private detect: ChangeDetectorRef) { 
                if(this.menuService.reservation.length) {
                  this.confirmation = this.menuService.getReservation()[0];
                }
  }

  ngOnInit() {
   	this.reserve = this.fb.group({
     	name: ['', [Validators.required, Validators.minLength(2), Validators.maxLength(9)]],
     	party: ['', [Validators.required] ],
      myDate: [null, Validators.required],
    });
	}

  get name() { return this.reserve.get('name'); }
  get party() { return this.reserve.get('party'); }

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

  mealTime () {
    if(this.dinner == false){
      this.time = { hour: 13, minute: 0 };
    } 
    else {
      this.time = { hour: 19, minute: 0 };
    }
    this.detect.markForCheck();
  };

  ctrl = new FormControl('', (control: FormControl) => {
    const value = control.value;
    if (!value) {
      return null;
    }
    if(!this.dinner && this.dinner != null) {
      if (value.hour < 12) {
        return {tooEarly: true};
      }
      if (value.hour > 16) {
        return {tooLate: true};
      }
    }

    else {
       if (value.hour < 19 && this.dinner != null) {
        return {tooEarly: true};
      }
      if (value.hour > 23) {
        return {tooLate: true};
      }
    }
    return null;
  });

  allergyList() {
    this.allergies = this.menuService.getAllergies();
    this.detect.markForCheck();
  }

  onSubmit({ value, valid }: { value: string, valid: boolean }) {
      this.allergyList();
      if(this.ctrl.value['minute'] < 10) {
        let minute = 0 + '' + this.ctrl.value['minute'];
        this.reservationTime = "" + this.ctrl.value['hour'] + ':' + minute;
      }
      else {
        this.reservationTime = "" + this.ctrl.value['hour'] + ':' + this.ctrl.value['minute'] + "";
      }
      this.menuService.makeReservation(value, this.reservationTime);
      this.confirmation = this.menuService.getReservation()[0];
      this.detect.markForCheck();
  }

}