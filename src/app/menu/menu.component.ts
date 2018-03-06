import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, 
  EventEmitter, Output, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Menu } from '../shared/menu';
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
          <h4 [ngClass]="{'strikeThru': dish.allergic[0].susceptible}" (click)="viewDishPic(dish)">
          {{dish?.name}}
          </h4>
          <span id="allergyWarning" *ngIf="dish.allergic[0].susceptible">
              {{warning}} {{dish.allergic[0].susceptibleTo}}
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
	    <h3>Allergens</h3>
	    <div *ngFor="let allergy of allergens" class="mainAllergies">
       <div *ngIf="!allergy.sensitivity; then notAllergic else allergic" class="allergies">
       </div>
          <ng-template #notAllergic>
  	        <label>
  		        <input type="radio" name="allergy" [value]="allergy.value" 
                (click)="allergyCheck(allergy)" />
              {{allergy.type}}
  	        </label>
          </ng-template>
          <ng-template #allergic>
            <button type="button" (click)="removeAllergy(allergy)" class="btn btn-outline-danger">
              X
            </button>
            <li class="notAllergic">{{allergy.type}}</li>
          </ng-template>
	    </div>
	</div>  
	`,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class MenuComponent implements OnInit {

  /*ng-template if dishSubject is empty, then show hidden div which is activated via a function
    where the message is set to either dishPopup, or wikiPopup if that's clear instead.
        the entire thing is obvi inside a setTimeout*/

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

  private dishes: Menu[] = [];
  warning = " **This dish contains ";

  constructor(private route: ActivatedRoute, private menuService: MenuService,
  	          private router: Router, private detect: ChangeDetectorRef, 
              private wiki: PopupWikiService, private dishPopup: PopupPicsComponent) { 
  }

  ngOnInit() {
    if(this.menuService.theMenu().length) {
      this.dishes = this.menuService.theMenu();
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
      if (allergy.type == this.dishes[i].allergens) {
        let allergicTo = this.dishes[i].id;
        let caution = { susceptibleTo: allergy.type, susceptible: true };
        this.dishes[allergicTo]['allergic'][0] = caution;
        this.menuService.updateMenu(this.dishes[allergicTo]);
        this.menuService.setAllergies(allergy.type);
        this.detect.markForCheck();
      }
    }
    allergy.sensitivity = true;
  }

  removeAllergy(allergy) {
    this.menuService.removeAllergy(allergy);
    for (var i = 0; i < this.dishes.length; i++) {
      if (allergy.type == this.dishes[i].allergens) {
        let allergicTo = this.dishes[i].id;
        let noWorries = { susceptibleTo: '', susceptible: false };
        this.dishes[allergicTo]['allergic'][0] = noWorries;
        this.menuService.updateMenu(this.dishes[allergicTo]);
        this.detect.markForCheck();
      }
    }
    allergy.sensitivity = false;
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