import {Component, OnInit} from '@angular/core';
import {SearchService} from '../../common/services/search.service';
import {ProductsService} from '../products.service';
import {ModalService} from '../../common/components/modal/modal.service';
import {FullCardComponent} from '../full-card/full-card.component';
import {Store} from '@ngrx/store';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.css']
})
export class ProductsListComponent implements OnInit {

  public products$; // = users$;
  public text: string;

  constructor(private _usersService: ProductsService,
              private _searchService: SearchService,
              private _modalService: ModalService,
              private _store: Store<any>) {
  }

  public ngOnInit(): void {
    this.products$ = this._store.select('products');
    this._searchService.searchSequence$
      .subscribe((term: string) => this.text = term);
  }

  public openFullCard(product: any) {
    this._modalService.open({
      component: FullCardComponent,
      context: {product}
    });
  }
}
