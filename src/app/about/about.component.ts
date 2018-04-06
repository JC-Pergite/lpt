import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lpt-about',
  template: `
	<div class="aboutInfo">
		<div class="aboutContainer">
			<h3 class="aboutMsg" (click)="active = true; isActive()" 
      [ngClass]="{'aboutChoice' : !active, 'switch' : chefHover && active == true}" 
      (mouseover)="msgHover=true" (mouseleave)="msgHover=false"> 
        Our Message
      </h3>
			<h3 class="aboutChef" (click)="active = false; isActive()"
      [ngClass]="{'aboutChoice' : active, 'reverse' : msgHover && !active}" 
       (mouseover)="chefHover=true" (mouseleave)="chefHover=false">
        Our Chef
      </h3>
			<p class="message" *ngIf="ourMsg == true && !chefBio">
				There's but one goal that matters: transforming dining from being part of the rut,
				to being part of the dream.
			</p>
			<p class="bio" *ngIf="chefBio == true && !active">
				"A meal should be that of decadent simplicity, or minimilistic extravagance." - 
				Chef Furansu brings his mantra to life in each and every one of his creations.
				Born to a Japanese mother and a French father, Chef Furansu achieves the ideal mélange
				of both cultures in his cuisine; thus begetting incomparable gastronomic satiation. 
			</p>
		</div>		
	</div>
  `,
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  public chefBio: boolean = false; 
  public ourMsg: boolean = true;
  public active: boolean = true;
  public msgHover: boolean;
  public chefHover: boolean;

  constructor() { }

  ngOnInit() {
  }

  isActive() {
   	if(this.active == true) {
            this.chefBio = false;
            this.ourMsg = true;
   	}
   	if(this.active == false) {
       this.ourMsg = false;
   		   	this.chefBio = true;
   	}
  }
}