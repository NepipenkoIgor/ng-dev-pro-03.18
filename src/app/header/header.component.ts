import {
  AfterContentInit, Component, ContentChild, ElementRef, InjectionToken, OnInit, TemplateRef, ViewChild,
  ViewContainerRef
} from '@angular/core';

export function debounce(ms: number) {
  return (target: any, propertyKey: string, descriptor: any) => {
    let timeoutId;
    const originalDescValue = descriptor.value;
    return {
      ...descriptor,
      value: function (...args: any[]) {
        clearTimeout(timeoutId);
        timeoutId = setTimeout(() => {
          originalDescValue.apply(this, args);
        }, ms);
      }
    };
  };
}

export const MY_TOKEN = new InjectionToken('MY_TOKEN');

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
  viewProviders: [
    {provide: MY_TOKEN, useValue: 'my value'}
  ]
})
export class HeaderComponent implements OnInit, AfterContentInit {

  @ViewChild('toolbar', {read: ViewContainerRef})
  public toolbar;

  @ContentChild('search', {read: TemplateRef})
  public search;
  @ContentChild('img', {read: TemplateRef})
  public img;

  ngOnInit() {
  }

  ngAfterContentInit() {
    const imgView = this.toolbar.createEmbeddedView(this.img);
    const imgSearch = this.toolbar.createEmbeddedView(this.search);
    console.log(this.toolbar);
    console.log(this.search);
    console.log(this.img);

    setTimeout(() => {
      this.toolbar.move(imgView, 1);
      this.toolbar.move(imgSearch, 0);
    }, 5000);
  }


}
