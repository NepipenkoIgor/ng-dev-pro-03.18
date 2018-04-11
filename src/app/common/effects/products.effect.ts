import {Injectable} from '@angular/core';
import {Action} from '@ngrx/store';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {Observable} from 'rxjs/Observable';
import {of} from 'rxjs/observable/of';
import {catchError, map, switchMap} from 'rxjs/operators';
import {GetProductsError, GetProductsSuccess, ProductsActionTypes} from '../actions/products.action';
import {ProductsService} from '../../products/products.service';

@Injectable()
export class ProductsEffects {
  // Listen for the 'LOGIN' action
  @Effect() products$: Observable<Action> = this._actions$.pipe(
    ofType(ProductsActionTypes.GET_PRODUCTS_PENDING),
    switchMap(action =>
      this._productsService.getUsers().pipe(
        // If successful, dispatch success action with result
        map(products => {
          return new GetProductsSuccess(products);
        }),
        // If request fails, dispatch failed action
        catchError((err) => of(new GetProductsError(err)))
      )
    )
  );


  constructor(private _productsService: ProductsService,
              private _actions$: Actions) {
  }
}
