import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-search-box',
//  template: `<input placeholder="{{text}}"><button>Clear</button>`
  templateUrl: './search-box.component.html'
})
export class SearchBoxComponent {

  @Input()
  text: string;
}
