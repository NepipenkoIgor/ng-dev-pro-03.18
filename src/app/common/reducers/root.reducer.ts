import {productsReducer} from './products.reducer';
import {cartReducer} from './cart.reducer';
import {userReducer} from './user.reducer';

export const rootReducer = {
  products: productsReducer,
  cart: cartReducer,
  user: userReducer
};
