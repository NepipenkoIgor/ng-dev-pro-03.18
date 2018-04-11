import {ProductsActions, ProductsActionTypes} from '../actions/products.action';
import {UserActions, UserActionTypes} from '../actions/user.action';

export const userInitialState = {};

export function userReducer(state = userInitialState,
                                action: UserActions) {
  switch (action.type) {
    case UserActionTypes.GET_USER_SUCCESS: {
      return {...action.payload};
    }
    default:
      return state;
  }
}
