import {Injectable} from '@angular/core';
import {PreloadingStrategy} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Route} from '@angular/router/src/config';
import {of} from 'rxjs/observable/of';
import {delay, mergeMap} from 'rxjs/operators';

@Injectable()
export class PreloadingService implements PreloadingStrategy {

  constructor() {
  }

  public preload(route: Route, fn: () => Observable<any>): Observable<any> {
    return of(route).pipe(
      delay(5000),
      mergeMap(() => fn())
    );
  }

}
