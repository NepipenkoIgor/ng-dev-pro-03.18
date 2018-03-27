import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ModuleComponent} from './module.component';
import {MyCommonModule} from '../../common/modules/common/common.module';
import {BASE_URL} from '../../config';

@NgModule({
  imports: [
    CommonModule,
    MyCommonModule
  ],
  providers: [
    {provide: BASE_URL, useValue: 'module'},
  ],
  declarations: [ModuleComponent]
})
export class ModuleModule {
}
