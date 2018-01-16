import { Injectable } from '@angular/core';
import { Jsonp, URLSearchParams } from '@angular/http';

@Injectable()
export class PopupWikiService {

  constructor(private jsonp: Jsonp) {}

  search (term: string) {

    let wikiUrl = 'https://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
	params.set('search', term);
	params.set('action', 'opensearch');
	params.set('format', 'json');
	params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(response => <string[]> response.json()[1]);
  }

  define (selectedTerm: string) {

    let wikiUrl = 'https://en.wikipedia.org/w/api.php';

    let params = new URLSearchParams();
	params.set('search', selectedTerm);
	params.set('action', 'opensearch');
	params.set('rvprop', 'content');
	params.set('format', 'json');
	params.set('callback', 'JSONP_CALLBACK');

    return this.jsonp
               .get(wikiUrl, { search: params })
               .map(response => <string[]> response.json()[2]);
  }
}