import { LptPage } from './app.po';

describe('lpt App', () => {
  let page: LptPage;

  beforeEach(() => {
    page = new LptPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to lpt!!'))
      .then(done, done.fail);
  });
});
