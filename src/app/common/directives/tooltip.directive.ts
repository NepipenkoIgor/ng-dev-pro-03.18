import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit} from '@angular/core';

@Directive({
  selector: '[appTooltip]',
  exportAs: 'tooltip'
})
export class TooltipDirective implements OnInit {

  @Input()
  public set appTooltip(value: string) {
    if (!value) {
      return;
    }
    this._tooltipEl.textContent = value;
  }

  @HostBinding('class')
  public tooltipContainer = 'tooltip-container';

  private _tooltipEl: HTMLDivElement = document.createElement('div');


  constructor(private _elementRef: ElementRef) {
  }

  public ngOnInit() {
    this._tooltipEl.classList.add('tooltip');
    this._elementRef.nativeElement.appendChild(this._tooltipEl);
  }

  @HostListener('mouseenter')
  public show(): void {
    this._tooltipEl.classList.add('tooltip-active');
  }

  @HostListener('mouseleave')
  public hide(): void {
    this._tooltipEl.classList.remove('tooltip-active');
  }

}
