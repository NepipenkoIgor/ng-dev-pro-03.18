import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public placeholder;

  @Output()
  public searchSequence = new EventEmitter();

  constructor() {
    console.log(1, this.placeholder);
  }

  ngOnInit() {
    console.log(2, this.placeholder);
  }

}
