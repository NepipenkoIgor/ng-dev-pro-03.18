import {Injectable} from '@angular/core';
import {Resolve, Router} from '@angular/router';
import {ActivatedRouteSnapshot, RouterStateSnapshot} from '@angular/router/src/router_state';
import {Observable} from 'rxjs/Observable';
import {ProductsService} from '../products.service';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/of';
import 'rxjs/add/observable/throw';

@Injectable()
export class ProductResolveService implements Resolve<any> {

  constructor(private _usersService: ProductsService,
              private _router: Router) {
  }


  public resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<any> {
    return this._usersService.getUsers()
      .map((users: any[]) => {
        const user = users
          .find((u) => u.id.toString() === route.params.id.toString());
        if (!user) {
          throw new Error('User not found');
        }
        return user;
      })
      .catch((err) => {
        console.log(err);
        this._router.navigate(['/users']);
        return Observable.of(null);
      });
  }

}
