import {Component, ComponentFactoryResolver, HostListener, OnInit, ViewChild, ViewContainerRef} from '@angular/core';
import {IBody, ModalService} from './modal.service';
import {ComponentRef} from '@angular/core/src/linker/component_factory';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  @ViewChild('modalContent', {read: ViewContainerRef})
  public viewContainer: ViewContainerRef;

  public isOpen = false;

  private _componentRef;

  constructor(private _modalService: ModalService,
              private _cfr: ComponentFactoryResolver) {
  }

  ngOnInit() {
    this._modalService.modalControlSequence$
      .subscribe((body: IBody | null) => {
        if (!body) {
          this.close();
          return;
        }
        this.isOpen = true;
        const componentFactory = this._cfr.resolveComponentFactory(body.component);
        this._componentRef = this.viewContainer.createComponent(componentFactory);
        Object.keys(body.context).forEach((key: string) => {
          this._componentRef.instance[key] = body.context[key];
        });
      });
  }

  @HostListener('window:keyup', ['$event.keyCode'])
  public close(code: number = 27): void {
    if (code !== 27) {
      return;
    }
    this._componentRef && this._componentRef.destroy();
    this.isOpen = false;
  }

}
