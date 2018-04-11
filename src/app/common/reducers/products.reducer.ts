import {ProductsActions, ProductsActionTypes} from '../actions/products.action';

export const productsInitialState = [];

export function productsReducer(state = productsInitialState,
                                action: ProductsActions) {
  switch (action.type) {
    case ProductsActionTypes.GET_PRODUCTS_SUCCESS: {
      return [...action.payload];
    }
    default:
      return state;
  }
}
