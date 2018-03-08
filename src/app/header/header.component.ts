import { Component, OnInit } from '@angular/core';

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


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  public logo = 'assets/ng-logo.png';
  public width = '50';
  public placeholder = 'Search me';
  public content = '<p>Hi</p>';
  constructor() { }

  ngOnInit() {
  }
  @debounce(500)
  public onInput(event: KeyboardEvent): void {
    console.log((event.target as HTMLInputElement).value);
  }

}
