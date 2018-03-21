import { Component, HostBinding, Input } from '@angular/core';
import { Router }                 from '@angular/router';
import { Menu } from '../shared/menu';
import { MenuService } from './menu.service';

@Component({
  template: `
  <div class="modal dishPic">
    <div class="modal-dialog" role="document">
      <div class="modal-content dishPic">
        <div class="modal-body" *ngFor="let ingredient of dish">
          <img src="{{dish[0].photoUrl}}" alt="Responsive image">
        </div>
        <div class="modal-footer">
          <h5 class="popupTitle">{{dish[0].name}}</h5>
          <button type="button" class="btn btn-outline-danger dishPic" data-dismiss="modal"
          (click)="closePopup()">
            Close
          </button>
        </div>
      </div>
    </div>
  </div>   
  `,
  styleUrls: ['./popup.component.css']
})
export class PopupPicsComponent { 
  @HostBinding('style.display')   display = 'block';
  @Input() dish: Menu[];

  constructor(private router: Router, private menuService: MenuService) { 
    this.dish = Array(this.menuService.getDishPic());
  }

  closePopup() {
    this.router.navigate([{ outlets: { dishPopup: null }}]);
  }
}