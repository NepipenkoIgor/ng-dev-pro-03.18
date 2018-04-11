import {Component, Input, Inject, Optional} from '@angular/core';
import {MY_TOKEN} from '../header/header.component';
import {SearchService} from '../common/services/search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {

  @Input()
  public placeholder;

  constructor(private _searchService: SearchService) {
  }

  public onSearch(term: string) {
    this._searchService.search = term;
  }

}
