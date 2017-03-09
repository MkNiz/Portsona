import { PortsonaPage } from './app.po';

describe('portsona App', () => {
  let page: PortsonaPage;

  beforeEach(() => {
    page = new PortsonaPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
