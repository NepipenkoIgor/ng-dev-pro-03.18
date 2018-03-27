import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NoopAnimationsModule} from '@angular/platform-browser/animations';
import {MatToolbarModule, MatInputModule, MatCardModule, MatButtonModule, MatMenuModule} from '@angular/material';
import {AppComponent} from './app.component';
import {HeaderComponent} from './header/header.component';
import {SearchComponent} from './search/search.component';
import {CardComponent} from './users/user/card/card.component';
import {UserFilterPipe} from './common/pipes/user-filter.pipe';
import {UsersService} from './common/services/users.service';
import {HttpClientModule} from '@angular/common/http';
import {BASE_URL} from './config';
import {environment} from '../environments/environment';
import {ModuleModule} from './modules/module/module.module';
import {Module1Module} from './modules/module1/module1.module';
import {InfoComponent} from './info/info.component';
import {RouterModule} from '@angular/router';
import {routes} from './routes';
import {UsersComponent} from './users/users.component';
import {SearchService} from './common/services/search.service';
import {UsersListComponent} from './users/users-list/users-list.component';
import {UserComponent} from './users/user/user.component';
import {UserResolveService} from './users/user/user-resolve.service';
import {PreloadingService} from './common/services/preloading.service';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { NameValidatorDirective } from './users/user/name-validator.directive';
import { AsyncEqualValidatorDirective } from './users/user/async-equal-validator.directive';
import { SwitcherComponent } from './users/user/switcher/switcher.component';
import { TooltipDirective } from './common/directives/tooltip.directive';
import { ModalComponent } from './common/components/modal/modal.component';
import {ModalService} from './common/components/modal/modal.service';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    SearchComponent,
    CardComponent,
    UserFilterPipe,
    UsersComponent,
    UsersListComponent,
    UserComponent,
    NameValidatorDirective,
    AsyncEqualValidatorDirective,
    SwitcherComponent,
    TooltipDirective,
    ModalComponent
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
    // ModuleModule,
    // Module1Module,
  ],
  providers: [
    UsersService,
    {provide: BASE_URL, useValue: environment.baseUrl},
    SearchService,
    UserResolveService,
    PreloadingService,
    ModalService
    // {provide: 'BASE_URL', useValue: 'localhost:4200'},
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}
