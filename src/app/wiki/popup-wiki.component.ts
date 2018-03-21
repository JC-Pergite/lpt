import { Component, OnInit, HostBinding } from '@angular/core';
import { Router }            from '@angular/router';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { PopupWikiService } from './popup-wiki.service';

@Component({
  template: 
` 
 <div class="modal wiki">
    <div class="modal-dialog" role="document">
      <div class="modal-content wiki">
          <div class="modal-body header">
            <h4 class="wikiTitle">Wikipedia Results</h4>
          </div>  
          <div class="modal-body" *ngFor="let ingredient of dish">
            <ul>
              <li (click)="investigate(ingredient)">{{ingredient}}</li>
            </ul>  
          </div>  
          <div class="modal-footer">
            <p>{{description}}</p>
          </div>
          <button type="button" class="btn btn-outline-danger" 
            data-dismiss="modal" (click)="closePopup()">
              Cancel
          </button>
      </div>
  </div>   
  `,
  styleUrls: ['./popup-wiki.component.css']
})
export class PopupWikiComponent implements OnInit {
  @HostBinding('style.display')   display = 'block';
  @HostBinding('style.position')  position = 'absolute';

  dish: string[];
  description: Array<string>;
  term: string;

  constructor (private router: Router, private popupWikiService: PopupWikiService) {
    this.term = this.popupWikiService.getTerm();
  }

  ngOnInit() {
    this.popupWikiService.search(this.term).subscribe(results => 
      { this.dish = results },
      error => { 'Not Found' },
      () => { if(!this.dish.length) {this.notFound()} }
    );
  }

  notFound() {
    this.description = ["Sorry, there's no Wiki for this yet."];
  }

  investigate(ingredient) {
    this.popupWikiService.define(ingredient).subscribe(termInfo => {
      this.description = termInfo;
    });
  }

  closePopup() {
    this.router.navigate([{ outlets: { wikiPopup: null }}]);
  }
  
}
