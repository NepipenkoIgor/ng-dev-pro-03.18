import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  public position;
  @Input()
  public isOdd;
  @Input()
  public user;

  constructor() {
  }

  ngOnInit() {
  }

}
