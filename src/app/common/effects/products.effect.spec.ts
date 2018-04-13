import {Observable} from 'rxjs/Observable';
import {inject, TestBed} from '@angular/core/testing';
import {ProductsEffects} from './products.effect';
import {provideMockActions} from '@ngrx/effects/testing';
import {ProductsService} from '../../products/products.service';
import {of} from 'rxjs/observable/of';
import {BASE_URL} from '../../config';
import {environment} from '../../../environments/environment';
import {cold, hot} from 'jasmine-marbles';

import * as ProductActions from '../actions/products.action';


describe('My Effects', () => {
  let actions: Observable<any>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [],
      providers: [
        ProductsEffects,
        provideMockActions(() => actions),
        {
          provide: ProductsService, useValue: {getUsers: () => of([1, 2, 3])}
        }, {provide: BASE_URL, useValue: environment.baseUrl},
      ],
    });
  });

  it('should work', inject([ProductsEffects], (effects: ProductsEffects) => {
    const action = new ProductActions.GetProductsPending();
    const completion = new ProductActions.GetProductsSuccess([1, 2, 3]);

    actions = hot('--a-', {a: action});

    const expected = cold('--b', {b: completion});

    expect(effects.products$).toBeObservable(expected);
  }));
});
