import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export class SearchService {

  private _searchSequence$$: Subject<string> = new Subject();

  public set search(term: string) {
    this._searchSequence$$.next(term);
  }

  public get searchSequence$(): Observable<string> {
    return this._searchSequence$$.asObservable();
  }

}
