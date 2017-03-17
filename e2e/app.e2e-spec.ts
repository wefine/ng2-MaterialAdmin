import { BuscaxmlAdministrativoPage } from './app.po';

describe('buscaxml-administrativo App', () => {
  let page: BuscaxmlAdministrativoPage;

  beforeEach(() => {
    page = new BuscaxmlAdministrativoPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
