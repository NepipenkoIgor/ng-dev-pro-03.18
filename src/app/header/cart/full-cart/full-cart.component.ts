import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import { cartProductsWithBonuses} from '../../../common/reducers/cart.reducer';
import {DecrementProductInCart, IncrementProductInCart, RemoveProductFromCart} from '../../../common/actions/cart.action';

@Component({
  selector: 'app-full-cart',
  templateUrl: './full-cart.component.html',
  styleUrls: ['./full-cart.component.css']
})
export class FullCartComponent implements OnInit {

  public cartProducts$;

  constructor(
    private _store: Store<any>
  ) {
  }

  ngOnInit() {
    this.cartProducts$ = this._store.select(cartProductsWithBonuses);
  }

  public incrementProduct(product: ICartProduct): void {
    this._store.dispatch(new IncrementProductInCart(product));
  }

  public decrementProduct(product: ICartProduct): void {
    this._store.dispatch(new DecrementProductInCart(product));
  }

  public removeProduct(product: ICartProduct): void {
    this._store.dispatch(new RemoveProductFromCart(product._id));
  }
}
