import {Component, OnInit} from '@angular/core';
import {IBody, ModalService} from './modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css']
})
export class ModalComponent implements OnInit {

  constructor(private _modalService: ModalService) {
  }

  ngOnInit() {
    this._modalService.modalControlSequence$
      .subscribe((body: IBody) => {

      });
  }

}
