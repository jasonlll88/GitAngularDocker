import { ProplistingsPage } from './app.po';

describe('proplistings App', () => {
  let page: ProplistingsPage;

  beforeEach(() => {
    page = new ProplistingsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect<any>(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
