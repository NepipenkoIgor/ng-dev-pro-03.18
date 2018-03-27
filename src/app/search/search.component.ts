import {Component, OnInit, Input, Output, EventEmitter, Inject, Optional} from '@angular/core';
import {MY_TOKEN} from '../header/header.component';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  @Input()
  public placeholder;

  constructor(@Optional() @Inject(MY_TOKEN) private _token: string,
              private _searchService: SearchService) {
    console.log('Search', this._token);
  }

  ngOnInit() {
    console.log(2, this.placeholder);
  }

  public onFocus(event: any) {
    console.log(event);
  }

  public onSearch(term: string) {
    this._searchService.search = term;
  }

}
