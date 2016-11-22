import { ArbookPage } from './app.po';

describe('arbook App', function() {
  let page: ArbookPage;

  beforeEach(() => {
    page = new ArbookPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
