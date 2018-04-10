import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Menu } from '../shared/menu';
import { Allergy } from '../shared/allergy';
import { Reservation } from '../shared/reservation';
import { environment } from 'environments/environment';

const Api_Url = environment.menuUrl;

@Injectable() 

export class MenuService {
	private menuSubject: BehaviorSubject<any> = new BehaviorSubject<Menu[]>([]);
    public menuChanges = this.menuSubject.asObservable().distinctUntilChanged();
    private userMenu: Menu[] = [];

    public reservation: Reservation[] = [];
    private reserveSubject: BehaviorSubject<any> = new BehaviorSubject<Reservation[]>([]);
    public guestReservation = this.reserveSubject.asObservable().distinctUntilChanged();

  	private dishSubject: BehaviorSubject<any> = new BehaviorSubject<Menu[]>([]);
    public selectedDish = this.dishSubject.asObservable().distinctUntilChanged();

	public allergies: Allergy[] = [];
	private allergySubject: BehaviorSubject<any> = new BehaviorSubject<Allergy[]>([]);
    public allergicReaction = this.allergySubject.asObservable().distinctUntilChanged();

	constructor(private http: Http) {}

	getMenu(): Observable<Menu[]>  {
	   return this.http
	   .get(Api_Url + '/menus')
	   .map((res:Response) => res.json() || {})
	     .do(data => console.log(JSON.parse(JSON.stringify(data))))
       .catch((error: any) => Observable.throw(error.json().error || 'Server error'));  
  }

	setMenu(menu) {
	    this.menuSubject.next(menu);
	    this.userMenu.push(menu);
	}

	theMenu() {
    	return this.menuSubject.value;
	}

	reserve(reservation, time){
		let confirm = new Reservation(reservation.name, reservation.party, reservation.myDate.formatted,
			time, this.allergySubject.value);
		this.reservation.push(confirm);

	}

	updateMenu(allergicItem) {
		let originalItem = this.menuSubject.value.indexOf(this.userMenu[0][allergicItem.id]);
		this.userMenu.splice(originalItem, -1);
    	this.menuSubject.next(this.userMenu[0]);
	}

	dishToView(dish) {
	    this.dishSubject.next(dish);
	} 

	getDishPic() {
	    return this.dishSubject.value;
	}

	setAllergies(allergy) {
		this.allergies.push(allergy);
	    this.allergySubject.next(this.allergies);
	}

	getAllergies() {
		return this.allergySubject.value;
	}

	removeAllergy(allergy) {
		for (var i = 0; i < this.allergies.length; i++) {
	      if (allergy['id'] == this.allergies[i].id) {
	      	let takeBack = this.allergies.indexOf(this.allergies[i]);
	      	this.allergies.splice(takeBack, 1);
	  	    this.allergySubject.next(this.allergies);
	      }
		}
	}	

	makeReservation(guestDetails, reservationTime) {
		let confirm = new Reservation(guestDetails.name, guestDetails.party,
			guestDetails.myDate.formatted, reservationTime, this.allergySubject.value);
		this.reservation.push(confirm);
	    this.reserveSubject.next(this.reservation);
	} 

	getReservation() {
	    return this.reserveSubject.value;
	}

}	