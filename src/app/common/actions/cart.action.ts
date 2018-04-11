import {Action} from '@ngrx/store';

export enum CartActionTypes {
  ADD_PRODUCT_TO_CARD = '[CART] ADD_PRODUCT_TO_CARD',
  INCREMENT_PRODUCT_IN_CART = '[CART] INCREMENT_PRODUCT_IN_CART',
  DECREMENT_PRODUCT_IN_CART = '[CART] DECREMENT_PRODUCT_IN_CART',
  REMOVE_PRODUCT_FROM_CART = '[CART] REMOVE_PRODUCT_FROM_CART'
}


export class AddProductToCart implements Action {
  readonly type = CartActionTypes.ADD_PRODUCT_TO_CARD;

  public constructor(public payload: any) {
  }
}

export class IncrementProductInCart implements Action {
  readonly type = CartActionTypes.INCREMENT_PRODUCT_IN_CART;

  public constructor(public payload: any) {
  }
}

export class DecrementProductInCart implements Action {
  readonly type = CartActionTypes.DECREMENT_PRODUCT_IN_CART;

  public constructor(public payload: any) {
  }
}

export class RemoveProductFromCart implements Action {
  readonly type = CartActionTypes.REMOVE_PRODUCT_FROM_CART;

  public constructor(public payload: any) {
  }
}

export type CartActions
  = AddProductToCart
  | IncrementProductInCart
  | DecrementProductInCart
  | RemoveProductFromCart;
