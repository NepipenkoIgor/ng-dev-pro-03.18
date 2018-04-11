import {Component, forwardRef, HostListener, OnInit} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR} from '@angular/forms';

@Component({
  selector: 'app-switcher',
  templateUrl: './switcher.component.html',
  styleUrls: ['./switcher.component.css'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SwitcherComponent),
      multi: true
    }
  ]
})
export class SwitcherComponent implements ControlValueAccessor {

  public checked: boolean;
  private _onChange: (_: any) => any;
  private _onTouched: (_: any) => any;

  @HostListener('click')
  public trigger(): void {
    this.checked = !this.checked;
    this._onChange(this.checked);
  }

  public writeValue(checked: boolean): void {
    this.checked = checked;
  }


  public registerOnChange(fn: any): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: any): void {
    this._onTouched = fn;
  }
}
