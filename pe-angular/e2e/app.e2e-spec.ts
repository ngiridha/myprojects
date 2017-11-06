import { PeAngularPage } from './app.po';

describe('pe-angular App', function() {
  let page: PeAngularPage;

  beforeEach(() => {
    page = new PeAngularPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
