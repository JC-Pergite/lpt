import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PopupWikiService {
  private wikiUrl = 'https://en.wikipedia.org/w/api.php';
  private newTerm : BehaviorSubject<any> = new BehaviorSubject<string>('');

  constructor(private jsonp: Jsonp) {}

  searchTerm(term: string) {
    this.newTerm.next(term);
  }

  getTerm() {
    return this.newTerm.value;
  }

  search(term: string) {
    let params = new URLSearchParams();
  	params.set('search', term);
  	params.set('action', 'opensearch');
  	params.set('format', 'json');
  	params.set('callback', 'JSONP_CALLBACK');
      return this.jsonp
                 .get(this.wikiUrl, { search: params })
                 .map(response => <string[]> response.json()[1]);
  }

  define (selectedTerm: string) {
    let params = new URLSearchParams();
  	params.set('search', selectedTerm);
  	params.set('action', 'opensearch');
  	params.set('rvprop', 'content');
  	params.set('format', 'json');
  	params.set('callback', 'JSONP_CALLBACK');
      return this.jsonp
                 .get(this.wikiUrl, { search: params })
                 .map(response => <string[]> response.json()[2][0]);
  }
}