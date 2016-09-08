/* tslint:disable:no-unused-variable */

import { TestBed, async } from '@angular/core/testing';
import { SearchBoxComponent } from './search-box.component';

describe('App: TestSEarchBox Component', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [
        SearchBoxComponent
      ],
    });
  });

  it('should create the app', async(() => {
    let fixture = TestBed.createComponent(SearchBoxComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
  it(`should have as title 'searchbox works!'`, async(() => {
    let fixture = TestBed.createComponent(SearchBoxComponent);
    let app = fixture.debugElement.componentInstance;
    expect(app.title).toEqual('searchBox works!');
  }));
});
