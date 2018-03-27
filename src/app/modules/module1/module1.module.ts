import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {Module1Component} from './module1.component';
import {MyCommonModule} from '../../common/modules/common/common.module';
import {environment} from '../../../environments/environment';
import {BASE_URL} from '../../config';

@NgModule({
  imports: [
    CommonModule,
    MyCommonModule
  ],
  providers: [
    {provide: BASE_URL, useValue: 'module 1'},
  ],
  declarations: [Module1Component]
})
export class Module1Module {
}
