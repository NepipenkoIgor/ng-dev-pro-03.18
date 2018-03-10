import {Component, ViewEncapsulation} from '@angular/core';
import {debounce} from './header/header.component';
import {users$} from './users';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public logo = 'assets/ng-logo.png';
  public width = '50';
  public placeholder = 'Search me';

  public users$ = users$;

  constructor() {
  }

  @debounce(500)
  public onInput(event: KeyboardEvent): void {
    console.log((event.target as HTMLInputElement).value);
  }
}
