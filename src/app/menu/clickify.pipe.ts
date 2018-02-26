import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer } from '@angular/platform-browser';

@Pipe({
  name: 'clickify'
})
export class ClickifyPipe implements PipeTransform {

  constructor(private _domSanitizer: DomSanitizer) {}

  transform(value: any, args?: any): any {
    return this._domSanitizer.bypassSecurityTrustHtml(this.stylize(value));
  }

  stylize(text: string): string {
    let stylizedText: string = '';
    if (text && text.length > 0) {
      for (let t of text.split(" ")) {
        if (t !== 'and' && t !== 'with')
        stylizedText += `<span>${t}</span> `;
      
        else stylizedText += t + " ";
      }    
      return stylizedText;
    }
    else return text;
  }
}