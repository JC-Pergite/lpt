import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
import { PopupWikiService } from './popup-wiki.service';

@Component({
  selector: 'lpt-popup-wiki',
  template: `
    <h2>Know Your Food: </h2>
    <input #term (keyup)="search(term.value)"/>
    <ul>
      <li *ngFor="let ingredient of dish | async" (click)="investigate(ingredient)">
        {{ingredient}}
      </li>
    </ul>
    <div>
      <p>{{description}}</p>
    </div>  
    `,
  providers: [ PopupWikiService ]
})
export class PopupWikiComponent implements OnInit {
  dish: Observable<string[]>;
  description: Array<string>;

  constructor (private popupWikiService: PopupWikiService) {}

  private searchTermStream = new Subject<string>();
  search(term: string) { this.searchTermStream.next(term); }

  ngOnInit() {
    this.dish = this.searchTermStream
      .debounceTime(500)
      .distinctUntilChanged()
      .switchMap((term: string) => this.popupWikiService.search(term));
  }

  investigate(ingredient) {
    this.popupWikiService.define(ingredient).subscribe(termInfo => this.description = termInfo);
  }
}
