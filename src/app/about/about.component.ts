import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'lpt-about',
  template: `
	<div class="sideInfo">
		<div class="aboutContainer">
			<h3 class="aboutMsg" (click)="chefBio = !chefBio">Our Message</h3>
			<h3 class="aboutChef" (click)="chefBio = !chefBio">Our Chef</h3>
			<p class="message" *ngIf="!chefBio">
				There's but one goal that matters: transforming dining from being part of the rut,
				to being part of the dream.
			</p>
			<p class="bio" *ngIf="chefBio">
				"A meal should be that of decadent simplicity, or minimilistic extravagance." - 
					Chef Furansu brings to life his mantra in each and every one of his creations.
				Born to a Japanese mother and a French father, Chef Furansu achieves the ideal mélange
				of both cultures in his cuisine, thus begetting incomparable gastronomic satiation. 
			</p>
		</div>		
	</div>
  `,
  // templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

	private chefBio = [true, false];

   constructor() { }

   ngOnInit() {
   }

}
