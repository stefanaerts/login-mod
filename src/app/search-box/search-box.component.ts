import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
//  template: `<input placeholder="{{text}}"><button>Clear</button>`
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {
  title = 'search box works!';

  @Input()
  text: string;
}
