import { Component, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  interpolation: ['[', ']']
})
export class AppComponent {
  title = 'app';

  public k = 0.3;
  public base = 2000;

  private _money = 3000;

  public calc(): number {
    return this._money * this.k;
  }

}
