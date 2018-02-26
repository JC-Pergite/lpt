import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Menu } from '../shared/menu';
import { Allergy } from '../shared/allergy';

@Injectable() 

export class MenuService {
	private menuSubject: BehaviorSubject<any> = new BehaviorSubject<Menu[]>([]);
  public menuChanges = this.menuSubject.asObservable().distinctUntilChanged();
  private userMenu: Menu[] = [];

	public allergies: Allergy[] = [];
	private allergySubject: BehaviorSubject<any> = new BehaviorSubject<Allergy[]>([]);
  public allergicReaction = this.allergySubject.asObservable().distinctUntilChanged();

	private menuUrl = 'http://localhost:4200/lpt/menus';

	constructor(private http: Http) {}

	setAllergies(allergy) {
		this.allergies.push(allergy);
    this.allergySubject.next(this.allergies);
	}

	getAllergies() {
		return this.allergySubject.value;
	}

	setMenu(menu) {
    this.menuSubject.next(menu);
    this.userMenu.push(menu);
	}

	theMenu() {
    return this.menuSubject.value;
	}

	updateMenu(allergicItem) {
		let originalItem = this.menuSubject.value.indexOf(this.userMenu[0][allergicItem.id]);
		this.userMenu.splice(originalItem, -1);
    this.menuSubject.next(this.userMenu);
	}

	getMenu(): Observable<Menu[]>  {
	   return this.http
	   .get(`${this.menuUrl}`)
	   .map((res:Response) => res.json() || {})
     .catch((error: any) => Observable.throw(error.json().error || 'Server error'));  
  }

}	