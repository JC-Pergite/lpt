import { browser, by, element } from 'protractor';

export class LptPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('lpt-root h1')).getText();
  }
}
