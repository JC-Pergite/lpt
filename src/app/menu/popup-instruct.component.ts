import { Component, HostBinding, Input } from '@angular/core';
import { Router }                 from '@angular/router';

@Component({
  template: `
  <div class="modal">
  <div class="modal-dialog" role="document">
    <div class="modal-content alert">
      <div class="modal-header">
        <h5 class="modal-title">How-To-Use Our Interactive Menu</h5>
      </div>
      <div class="modal-body" id="instructions">
        <p id="guideline"><span class="what">Desire visuals?</span>
          - Click on the menu item's name for a photo
        </p>
        <p id="guideline"><span class="what">Unsure what a menu ingredient is?</span>
          - Simply click it to activate in-app Wiki-searches
        </p>
        <p id="guideline"><span class="what">Allergy concern?</span> - Click on "Allergens" to
          update the menu so it can notify you of any possible allergy-containing dishes
        </p>
      </div>
      <div class="modal-footer instruct" id="instruct-close">
        <button type="button" class="btn btn-outline-primary" data-dismiss="modal" (click)="closePopup()">
          Close
        </button>
      </div>
    </div>
  </div>
</div>
  `,
  styleUrls: ['./popup.component.css']
})
export class PopupInstructComponent { 
  @HostBinding('style.display')   display = 'block';

  constructor(private router: Router) {};

  closePopup() {
    this.router.navigate([{ outlets: { guidePopup: null }}]);
  }
}