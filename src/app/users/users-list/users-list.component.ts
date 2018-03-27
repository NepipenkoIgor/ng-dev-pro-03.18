import { Component, OnInit } from '@angular/core';
import {SearchService} from '../../common/services/search.service';
import {debounce} from '../../header/header.component';
import {UsersService} from '../../common/services/users.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html',
  styleUrls: ['./users-list.component.css']
})
export class UsersListComponent implements OnInit {

  public users$; // = users$;
  public text: string;

  constructor(private _usersService: UsersService,
              private _searchService: SearchService) {
  }

  public ngOnInit(): void {
    this.users$ = this._usersService.getUsers();
    this._searchService.searchSequence$
      .subscribe((term: string) => this.text = term);
  }

  @debounce(500)
  public onInput(event: KeyboardEvent): void {
    console.log((event.target as HTMLInputElement).value);
  }

}
