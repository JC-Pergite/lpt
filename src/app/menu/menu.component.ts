import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, 
  EventEmitter, Output, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Menu } from '../shared/menu';
import { Allergy } from '../shared/allergy';
import { MenuService } from './menu.service';
import { PopupWikiService } from '../wiki/popup-wiki.service';
import { PopupPicsComponent } from './popup-pics.component';

@Component({
  selector: 'lpt-menu',
  // templateUrl: './menu.component.html',
  template: `
  <h3>MENU</h3>
  	<div *ngFor="let dish of dishes">
  		<ul>
  			<li>
          <h4 [ngClass]="{'strikeThru': dish?.allergic[0]?.susceptible}" (click)="viewDishPic(dish)">
          {{dish?.name}}
          </h4>
          <span id="allergyWarning" *ngIf="dish?.allergic[0]?.susceptible">
              {{warning}} {{dish?.allergic[0]?.susceptibleTo}}
          </span>
  				<p class="dishDetails" [innerHTML]="dish?.description | clickify"
            (click)="lookUp($event.toElement.innerHTML)">
          </p>
  			</li>
  		</ul>
      <router-outlet name="dishPopup"></router-outlet>
      <router-outlet name="wikiPopup"></router-outlet>
  	</div>
  	<div>
      <h3 (click)="allergyChecker = true">Allergens</h3>
      <fieldset>
        <div class="form-group" [ngClass]="{'mainAllergies': !allergyChecker}" #allergy>
          <label for="exampleSelect2" (click)="allergyChecker = false">[ Done ]</label>
          <select multiple class="form-control" id="allergyOptions" [(ngModel)]="allergy.value" 
          (ngModelChange)="allergyCheck(allergy.value[0]); allergy.value=''">
            <option value="" disabled>Select All Applicable Allergies: </option>
            <option *ngFor="let allergy of allergens" [ngValue]="allergy">
              {{allergy.value}}
            </option>
          </select>
          <div *ngIf="this.customerAllergies.length">
            <select multiple class="form-control" id="removableAllergy" [(ngModel)]="allergy.value" 
              (ngModelChange)="removeAllergy(allergy.value[0]); allergy.value=''">
              <option value="" disabled>Click to Remove an Allergy: </option>
              <option *ngFor="let allergy of customerAllergies" [ngValue]="allergy">
                {{allergy.value}}
              </option>
            </select>
          </div>
        </div>
      </fieldset>
  	</div>  
	`,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class MenuComponent implements OnInit {

  /*ng-template if dishSubject is empty, then show hidden div which is activated via a function
    where the message is set to either dishPopup, or wikiPopup if that's clear instead.
        the entire thing is obvi inside a setTimeout*/
  allergyChecker: boolean = false;
  customerAllergies = this.menuService.allergies;
  private allergens = [
  	{id: 0, value: 'eggs', type: 'eggs', sensitivity: false},
  	{id: 1, value: 'fish', type: 'fish', sensitivity: false},
  	{id: 2, value: 'gluten', type: 'gluten', sensitivity: false},
  	{id: 3, value: 'milk', type: 'milk', sensitivity: false},
  	{id: 4, value: 'peanuts', type: 'peanuts', sensitivity: false},
  	{id: 5, value: 'shellfish', type: 'shellfish', sensitivity: false},
  	{id: 6, value: 'soy', type: 'soy', sensitivity: false},
  	{id: 7, value: 'treenuts', type: 'treenuts', sensitivity: false}
  ];
  caution: Array<Allergy[]>;
  private dishes: Menu[] = [];
  warning = " **This dish contains ";

  constructor(private route: ActivatedRoute, private menuService: MenuService,
  	          private router: Router, private detect: ChangeDetectorRef, 
              private wiki: PopupWikiService, private dishPopup: PopupPicsComponent) { 
  }

  ngOnInit() {
    if(this.menuService.theMenu().length) {
      this.dishes = this.menuService.theMenu()[0];
      for (var i = 0; i < this.allergens.length; i++) {
        if (this.menuService.allergies.find((thing: any) => thing ==  this.allergens[i].type )) {   
          this.allergens[i].sensitivity = true;
          this.detect.markForCheck();
        }  
      }
    }
    else {
      this.menuService.getMenu()
        .subscribe(menuItems => { 
          this.dishes = menuItems; 
          this.menuService.setMenu(menuItems);
          this.detect.markForCheck();
        });
    }
  }

  allergyCheck(allergy) {
    for (var i = 0; i < this.dishes.length; i++) {
      if (allergy['type'] == this.dishes[i].allergens) {
        let allergicTo = this.dishes[i].id;
        let caution = { susceptibleTo: allergy['type'], susceptible: true };
        this.dishes[allergicTo]['allergic'][0] = caution;
        this.menuService.updateMenu(this.dishes[allergicTo]);
        this.detect.markForCheck();
      }
    }
    allergy['sensitivity'] = true;
    this.menuService.setAllergies(allergy);
    this.detect.markForCheck();
  }

  removeAllergy(allergy) {
    for (var i = 0; i < this.dishes.length; i++) {
      if (allergy['type'] == this.dishes[i].allergens) {
        let allergicTo = this.dishes[i].id;
        let noWorries = { susceptibleTo: '', susceptible: false };
        this.dishes[allergicTo]['allergic'][0] = noWorries;
        this.menuService.updateMenu(this.dishes[allergicTo]);
        this.detect.markForCheck();
      }
    }
    allergy['sensitivity'] = false;
    this.menuService.removeAllergy(allergy);
    this.detect.markForCheck();
  }

  viewDishPic(dish) {
    this.menuService.dishToView(dish);
    this.router.navigate([{ outlets: { dishPopup: ['viewDish'] } }]);
  }

  lookUp(term) {
    if(term.length !< 15) {
      this.wiki.searchTerm(term);
      this.router.navigate([{ outlets: { wikiPopup: ['wikiSearch'] } }]);
    }
  }

}      