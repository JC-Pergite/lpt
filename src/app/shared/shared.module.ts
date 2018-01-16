import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { MyDatePickerModule } from 'angular4-datepicker/src/my-date-picker/my-date-picker.module';
import { NgbTimepickerModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule ({
	imports: [ CommonModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, NgbTimepickerModule ], 
	exports: [ CommonModule, FormsModule, ReactiveFormsModule, MyDatePickerModule, NgbTimepickerModule ]
})
export class SharedModule { }