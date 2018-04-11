import {Component, HostListener, OnInit} from '@angular/core';
import {FullCartComponent} from './full-cart/full-cart.component';
import {ModalService} from '../../common/components/modal/modal.service';
import {selectTotal} from '../../common/reducers/cart.reducer';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {


  public cartProductsCount$;

  constructor(
              private _modalService: ModalService,
              private _store: Store<any>) {

  }

  ngOnInit() {
    this.cartProductsCount$ = this._store.select(selectTotal);
  }

  @HostListener('click')
  public openFullCart() {
    this._modalService.open({
      component: FullCartComponent,
      context: {}
    });
  }

}
