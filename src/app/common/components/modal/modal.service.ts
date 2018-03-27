import {Injectable} from '@angular/core';
import {Subject} from 'rxjs/Subject';
import {Observable} from 'rxjs/Observable';

export interface IBody {
  component: any;
  context: any;
}

@Injectable()
export class ModalService {

  private _modalControlSequence$$: Subject<IBody | null> = new Subject();

  public get modalControlSequence$(): Observable<IBody | null> {
    return this._modalControlSequence$$.asObservable();
  }

  public open(body: IBody): void {
    this._modalControlSequence$$.next(body);
  }

  public close() {
    this._modalControlSequence$$.next(null);
  }

}
