import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {Store} from '@ngrx/store';
import {GetProductsPending} from './common/actions/products.action';
import {GetUserPending} from './common/actions/user.action';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: []
})
export class AppComponent implements OnInit {
  public logo = 'assets/ng-logo.png';
  public width = '50';
  public placeholder = 'Search me';

  public constructor(private _router: Router,
                     private _store: Store<any>) {
  }

  public ngOnInit(): void {
    this._store.dispatch(new GetProductsPending());
    this._store.dispatch(new GetUserPending());
  }
}
