import { App1aimPage } from './app.po';

describe('app1aim App', () => {
  let page: App1aimPage;

  beforeEach(() => {
    page = new App1aimPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
