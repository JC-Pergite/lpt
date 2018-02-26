import { Component, OnInit, Input, ChangeDetectionStrategy, ChangeDetectorRef, 
  EventEmitter, Output, ViewChild  } from '@angular/core';
import { Router, ActivatedRoute, Params }  from '@angular/router';
import { Observable } from 'rxjs/Observable';

import { Menu } from '../shared/menu';
import { MenuService } from './menu.service';
import { PopupWikiService } from '../wiki/popup-wiki.service';

@Component({
  selector: 'lpt-menu',
  // templateUrl: './menu.component.html',
  template: `
  <h3>MENU</h3>
  	<div *ngFor="let dish of dishes">
  		<ul>
  			<li>
          <h4 [ngClass]="{'strikeThru': dish.allergic[0].susceptible}">{{dish?.name}}</h4>
          <span id="allergyWarning" *ngIf="dish.allergic[0].susceptible">
              {{warning}} {{dish.allergic[0].susceptibleTo}}
          </span>
  				<p class="dishDetails" [innerHTML]="dish.description | clickify"
            (click)="lookUp($event.toElement.innerHTML)">
          </p>
  			</li>
  		</ul>
      <router-outlet name="wikiPopup"></router-outlet>
  	</div>
  	<div>
	    <h3>Allergens</h3>
	    <div *ngFor="let allergy of allergens">
	        <label>
		        <input type="radio" name="allergy" [value]="allergy.value" (click)="allergyCheck(allergy)">
            {{allergy?.type}}
	        </label>
	    </div>
	</div>  
	`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  private allergens = [
  	{id: 0, value: 'eggs', type: 'eggs'},
  	{id: 1, value: 'fish', type: 'fish'},
  	{id: 2, value: 'gluten', type: 'gluten'},
  	{id: 3, value: 'milk', type: 'milk'},
  	{id: 4, value: 'peanuts', type: 'peanuts'},
  	{id: 5, value: 'shellfish', type: 'shellfish'},
  	{id: 6, value: 'soy', type: 'soy'},
  	{id: 7, value: 'treenuts', type: 'treenuts'}
  ];

  private dishes: Menu[] = [];
  warning = " **This dish contains ";
  allergies = [];

  constructor(private route: ActivatedRoute, private menuService: MenuService,
  	          private router: Router, private detect: ChangeDetectorRef, 
              private wiki: PopupWikiService) { }

  ngOnInit() {
    if(this.menuService.theMenu().length) {
      let flatten = this.menuService.theMenu();
      this.dishes = flatten[0];
    }
    else {
      this.menuService.getMenu()
        .subscribe(menuItems => { 
          this.dishes = menuItems; 
          this.menuService.setMenu(menuItems);
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
  }

  lookUp(term) {
    if(term.length !< 15) {
      this.wiki.searchTerm(term);
      this.router.navigate([{ outlets: { wikiPopup: ['wikiSearch'] } }]);
    }
  }

}      

