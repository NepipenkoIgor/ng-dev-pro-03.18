// counter.actions.ts
import {Action} from '@ngrx/store';

export enum ProductsActionTypes {
  GET_PRODUCTS_PENDING = '[Products] GET_PRODUCTS_PENDING',
  GET_PRODUCTS_SUCCESS = '[Products] GET_PRODUCTS_SUCCESS',
  GET_PRODUCTS_ERROR = '[Products] GET_PRODUCTS_ERROR'
}

export class GetProductsPending implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_PENDING;
}

export class GetProductsSuccess implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_SUCCESS;

  public constructor(public payload: any[]) {
  }
}

export class GetProductsError implements Action {
  readonly type = ProductsActionTypes.GET_PRODUCTS_ERROR;

  constructor(public payload: any) {
  }
}

export type ProductsActions
  = GetProductsSuccess
  | GetProductsError;
