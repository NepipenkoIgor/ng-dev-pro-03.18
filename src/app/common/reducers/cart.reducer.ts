import {createEntityAdapter, EntityAdapter} from '@ngrx/entity';
import {CartActions, CartActionTypes} from '../actions/cart.action';
import {createFeatureSelector, createSelector} from '@ngrx/store';


export const adapter: EntityAdapter<ICartProduct> = createEntityAdapter<ICartProduct>(
  {
    selectId: (model: ICartProduct) => model._id
  }
);

const cartInitialState = adapter.getInitialState({});


export function cartReducer(state = cartInitialState,
                            action: CartActions) {
  switch (action.type) {
    case CartActionTypes.ADD_PRODUCT_TO_CARD: {
      const cartProduct: ICartProduct = {...action.payload, count: 1};
      return adapter.addOne(cartProduct, state);
    }
    case CartActionTypes.REMOVE_PRODUCT_FROM_CART: {
      return adapter.removeOne(action.payload, state);
    }

    case CartActionTypes.INCREMENT_PRODUCT_IN_CART: {
      const count = action.payload.count + 1;
      const updateObj = {id: action.payload._id, changes: {count}};
      return adapter.updateOne(updateObj, state);
    }

    case CartActionTypes.DECREMENT_PRODUCT_IN_CART: {
      const count = action.payload.count - 1;
      const updateObj = {id: action.payload._id, changes: {count}};
      return adapter.updateOne(updateObj, state);
    }

    default:
      return state;
  }
}

export const {
  selectAll,
  selectTotal
} = adapter.getSelectors(createFeatureSelector('cart'));

const userSelector = createFeatureSelector('user');

export const cartProductsWithBonuses = createSelector(
  selectAll,
  userSelector,
  (products: ICartProduct[], user: any) => {
    return products.map((product) => {
      if (!user.bonuses) {
        return product;
      }
      return {...product, price: Number(product.price) * user.bonuses};
    });
  }
);
