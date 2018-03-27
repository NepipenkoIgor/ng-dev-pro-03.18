import {Inject, Injectable, Injector, Optional} from '@angular/core';
import {users$} from '../../users';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {BASE_URL} from '../../config';

@Injectable()
export class UsersService {

  // constructor(@Optional() public a: string,
  //             private _http: HttpClient,
  //             @Inject(BASE_URL) private _baseUrl: string) {
  //   console.log(this._baseUrl);
  // }
  private _http: HttpClient;
  private _baseUrl: string;

  constructor(private _injector: Injector) {
    this._http = this._injector.get(HttpClient);
    this._baseUrl = this._injector.get<string>(BASE_URL);
  }

  public getUsers(): Observable<any> {
    let count = 0;
    return this._http.get(`${this._baseUrl}/participants?key=o5dpbb`)
      .pipe(
        map((users: any[]) =>
          users.map(user => ({...user, id: count++}))),
        catchError((err) => {
          console.log(err);
          return Observable.of([]);
        })
      );
  }

}
