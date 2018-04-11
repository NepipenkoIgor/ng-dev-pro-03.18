import {
  AfterContentInit, Component, ContentChild, InjectionToken, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';

export const MY_TOKEN = new InjectionToken('MY_TOKEN');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  viewProviders: [
    {provide: MY_TOKEN, useValue: 'my value'}
  ]
})
export class HeaderComponent implements AfterContentInit {

  @ViewChild('toolbar', {read: ViewContainerRef})
  public toolbar;

  @ContentChild('search', {read: TemplateRef})
  public search;
  @ContentChild('img', {read: TemplateRef})
  public img;

  ngAfterContentInit() {
    this.toolbar.createEmbeddedView(this.img);
    this.toolbar.createEmbeddedView(this.search);
  }


}
