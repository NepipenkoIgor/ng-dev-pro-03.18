import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {debounce} from './header/header.component';
import {UsersService} from './common/services/users.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent {
  public logo = 'assets/ng-logo.png';
  public width = '50';
  public placeholder = 'Search me';

  public constructor(private _router: Router) {
    // setTimeout(() => {
    //   this._router.navigate(['info']);
    // }, 5000);
  }
}
