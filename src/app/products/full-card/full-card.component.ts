import {Component} from '@angular/core';
import {Store} from '@ngrx/store';
import {AddProductToCart} from '../../common/actions/cart.action';

@Component({
  selector: 'app-full-card',
  templateUrl: './full-card.component.html',
  styleUrls: ['./full-card.component.css']
})
export class FullCardComponent {


  public product: any;

  constructor(
    private _store: Store<any>
  ) {
  }

  public buy(product): void {
    this._store.dispatch(new AddProductToCart(product));
  }
}
