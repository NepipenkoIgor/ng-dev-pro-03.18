import {Route} from '@angular/router';
import {ProductsComponent} from './products/products.component';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductComponent} from './products/product/product.component';
import {ProductResolveService} from './products/product/product-resolve.service';

export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'info',
    loadChildren: 'app/info/info.module#InfoModule'
  },
  {
    path: 'users',
    component: ProductsComponent,
    children: [
      {
        path: '',
        component: ProductsListComponent
      },
      {
        path: ':id',
        component: ProductComponent,
        data: {
          title: 'Info about user'
        },
        resolve: {
          user: ProductResolveService
        }
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'info'
  },
];
