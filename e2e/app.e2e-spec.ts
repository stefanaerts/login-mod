import { TestcliwebpackPage } from './app.po';

describe('testcliwebpack App', function() {
  let page: TestcliwebpackPage;

  beforeEach(() => {
    page = new TestcliwebpackPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Clearbox');
  });
});
