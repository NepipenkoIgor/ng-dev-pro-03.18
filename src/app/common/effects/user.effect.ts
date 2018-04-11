import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GetUserError, GetUserSuccess, UserActions, UserActionTypes} from '../actions/user.action';

@Injectable()
export class UserEffects {
  // Listen for the 'LOGIN' action
  @Effect() user$: Observable<Action> = this._actions$.pipe(
    ofType(UserActionTypes.GET_USER_PENDING),
    switchMap(action =>
      of({
        name: 'Igor',
        bonuses: 0.9
      }).pipe(
        // If successful, dispatch success action with result
        map(user => {
          return new GetUserSuccess(user);
        }),
        // If request fails, dispatch failed action
        catchError((err) => of(new GetUserError(err)))
      )
    )
  );


  constructor(private _actions$: Actions) {
  }
}
