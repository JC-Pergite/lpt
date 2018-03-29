import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, 
  EventEmitter, Output, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { Observable } from 'rxjs/Observable';

import { Menu } from '../shared/menu';
import { Dishes } from '../shared/dishes';

import { Allergy } from '../shared/allergy';
import { MenuService } from './menu.service';
import { PopupWikiService } from '../wiki/popup-wiki.service';
import { PopupPicsComponent } from './popup-pics.component';
import { PopupInstructComponent } from './popup-instruct.component';

@Component({
  selector: 'lpt-menu',
  // templateUrl: './menu.component.html',
  template: `
  <div class="mainContainer">
    <router-outlet name="guidePopup"></router-outlet>
    <div class="theMenus">
        <div *ngIf="this.lunch == true; then lunchh else dinner"></div>
        <ng-template #dinner>
          <h3 id="otherMeal" (click)="dineSelect(1)">{{meal[1]}}</h3>
          <h2>{{this.meal[0]}}</h2>
        </ng-template>
        <ng-template #lunchh>
          <h3 id="otherMeal" (click)="dineSelect(0)">{{meal[0]}}</h3>
          <h2>{{this.meal[1]}}</h2>
        </ng-template>
      <div>
        <div class="clientAllergies" [style.visibility]="allergyChecker ? 'hidden' : 'initial'">
          <h4 (click)="allergyChecker = true">
            Allergens
          </h4>
        </div>
        <fieldset>
          <div class="form-group" [ngClass]="{'mainAllergies': !allergyChecker}" #allergy>
            <label for="exampleSelect2" (click)="allergyChecker = false">[ Done ]</label>
            <select multiple class="form-control" id="allergyOptions" [(ngModel)]="allergy.value" 
            (ngModelChange)="allergyCheck(allergy.value[0]); allergy.value=''">
              <option class="instruction" value="" disabled>Select All Applicable Allergies: </option>
              <option *ngFor="let allergy of allergens" [ngValue]="allergy" 
              (click)="hasAllergies = true">
                {{allergy.value}}
              </option>
            </select>
            <div *ngIf="hasAllergies || customerAllergies?.length >= 1">
              <select multiple class="form-control" id="removableAllergy" [(ngModel)]="allergy.value" 
                (ngModelChange)="removeAllergy(allergy.value[0]); allergy.value=''">
                <option class="removeInstruction" value="" disabled>
                  Click to Remove an Allergy: 
                </option>
                <option *ngFor="let allergy of customerAllergies" [ngValue]="allergy">
                  {{allergy.value}}
                </option>
              </select>
            </div>
          </div>
        </fieldset>
      </div>  
    	<div class="dishes" *ngFor="let dish of dishes">
        <div *ngIf="[(dish?.allergic)?.susceptible]; then clientAllergies"></div>
        <ng-template #clientAllergies>
    		  <ul *ngFor="let dishAllergies of dish?.allergic">
      			<li class="dishDetails">
              <h3 class="dishName" [ngClass]="{'strikeThru': dishAllergies.susceptible}" 
                (click)="viewDishPic(dish)">
              {{dish?.name}}
              </h3>
              <span id="allergyWarning" *ngIf="dishAllergies.susceptible">
                  {{warning}} {{dishAllergies.susceptibleTo}}
              </span>
      				<p class="dishDetails" [innerHTML]="dish?.description | clickify"
                (click)="lookUp($event.toElement.innerHTML)">
              </p>
      			</li>
      		</ul>
        </ng-template>
        <router-outlet name="dishPopup"></router-outlet>
      </div>
      <router-outlet name="wikiPopup"></router-outlet>
  	</div>
  </div>
	`,
  styleUrls: ['./menu.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush  
})
export class MenuComponent implements OnInit {

  public meal: Array<string> = ['Lunch', 'Dinner'];
  lunch: boolean = true;
  allergyChecker: boolean = false;
  hasAllergies: boolean = false;
  customerAllergies: Allergy[] = [];
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
  @Input() dishes: Dishes[] = [];
  menu: Menu[];
  warning = " **This dish contains ";

  constructor(private route: ActivatedRoute, private menuService: MenuService,
  	          private router: Router, private detect: ChangeDetectorRef, 
              private wiki: PopupWikiService, private dishPopup: PopupPicsComponent) 
              {
                if(this.menuService.allergies.length) {
                  this.customerAllergies = this.menuService.getAllergies();
                } 
              } 

  ngOnInit() {
    if(this.menuService.theMenu().length) {
      this.menu = this.menuService.theMenu();
      this.dishes = this.menuService.theMenu()[1].dishes;
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
          this.menu = menuItems;
          this.dishes = this.menu[1].dishes; 
          this.menuService.setMenu(this.menu);
          this.detect.markForCheck();
        });
      this.router.navigate([{ outlets: { guidePopup: ['instruct'] } }]);
      this.detect.markForCheck();
    }
  }

  dineSelect(mealType){       
    this.dishes = this.menu[mealType].dishes;
    mealType === 1 ? this.lunch = true : this.lunch = false;
    this.detect.markForCheck();
  }

  allergyCheck(allergy) {
    if(!this.customerAllergies.find((allergy: Allergy) => allergy.id !== allergy.id)) { 
      allergy['sensitivity'] = true;
      this.menuService.setAllergies(allergy);
      this.customerAllergies = this.menuService.getAllergies();
      this.detect.markForCheck();
      for(var j = 0; j < this.menu.length; j++){ 
        for (var i = 0; i < this.menu[j].dishes.length; i++) {
          if (allergy['type'] == this.menu[j].dishes[i].allergens) {
            let allergicTo = this.menu[j].dishes[i].id;
            let caution = { susceptibleTo: allergy['type'], susceptible: true };
            this.menu[j].dishes[allergicTo]['allergic'][0] = caution;
            this.menuService.updateMenu(this.menu[j].dishes[allergicTo]);
            this.detect.markForCheck();
          }
        }
      }
    }  
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