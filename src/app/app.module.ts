import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule, MatMenuModule} from '@angular/material';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {ProductFilterPipe} from './common/pipes/product-filter.pipe';
import {ProductsService} from './products/products.service';
import {HttpClientModule} from '@angular/common/http';
import {BASE_URL} from './config';
import {environment} from '../environments/environment';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {SearchService} from './common/services/search.service';
import {PreloadingService} from './common/services/preloading.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {TooltipDirective} from './common/directives/tooltip.directive';
import {ModalComponent} from './common/components/modal/modal.component';
import {ModalService} from './common/components/modal/modal.service';
import {CartComponent} from './header/cart/cart.component';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {EffectsModule} from '@ngrx/effects';
import {ProductsEffects} from './common/effects/products.effect';
import {StoreModule} from '@ngrx/store';
import {rootReducer} from './common/reducers/root.reducer';
import {CardComponent} from './products/card/card.component';
import {ProductsComponent} from './products/products.component';
import {NameValidatorDirective} from './products/product/name-validator.directive';
import {ProductsListComponent} from './products/products-list/products-list.component';
import {ProductComponent} from './products/product/product.component';
import {AsyncEqualValidatorDirective} from './products/product/async-equal-validator.directive';
import {SwitcherComponent} from './products/product/switcher/switcher.component';
import {FullCardComponent} from './products/full-card/full-card.component';
import {ProductResolveService} from './products/product/product-resolve.service';
import {FullCartComponent} from './header/cart/full-cart/full-cart.component';
import {UserEffects} from './common/effects/user.effect';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    ProductFilterPipe,
    ProductsComponent,
    ProductsListComponent,
    ProductComponent,
    NameValidatorDirective,
    AsyncEqualValidatorDirective,
    SwitcherComponent,
    TooltipDirective,
    ModalComponent,
    FullCardComponent,
    CartComponent,
    FullCartComponent
  ],
  imports: [
    BrowserModule,
    NoopAnimationsModule,
    MatToolbarModule,
    MatInputModule,
    MatCardModule,
    MatButtonModule,
    MatMenuModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {
      useHash: true,
      preloadingStrategy: PreloadingService
    }),
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(rootReducer),
    EffectsModule.forRoot([ProductsEffects, UserEffects]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production // Restrict extension to log-only mode
    }),
  ],
  providers: [
    ProductsService,
    {provide: BASE_URL, useValue: environment.baseUrl},
    SearchService,
    ProductResolveService,
    PreloadingService,
    ModalService
  ],
  entryComponents: [FullCardComponent, FullCartComponent],
  bootstrap: [AppComponent]
})
export class AppModule {
}
