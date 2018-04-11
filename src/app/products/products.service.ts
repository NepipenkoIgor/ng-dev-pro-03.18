import {Injectable, Injector} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';
import {catchError, map} from 'rxjs/operators';
import 'rxjs/add/observable/of';
import {BASE_URL} from '../config';

@Injectable()
export class ProductsService {

  private _http: HttpClient;
  private _baseUrl: string;

  constructor(private _injector: Injector) {
    this._http = this._injector.get(HttpClient);
    this._baseUrl = this._injector.get<string>(BASE_URL);
  }

  public getUsers(): Observable<any> {
    return this._http.get(`${this._baseUrl}/products`)
      .pipe(
        map((products: any) => products.data),
        catchError((err) => {
          console.log(err);
          return Observable.of([]);
        })
      );
  }

}
