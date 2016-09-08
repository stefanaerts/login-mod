import { Component } from '@angular/core';
 import { SearchBoxComponent } from './search-box/search-box.component';

@Component({
  selector: 'app-root',
  directives: [SearchBoxComponent],
  templateUrl: './app.component.html'
})
export class AppComponent {
  title = 'app works!';
}
