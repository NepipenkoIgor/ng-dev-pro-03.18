import {Route} from '@angular/router';
import {InfoComponent} from './info/info.component';
import {UsersComponent} from './users/users.component';
import {UsersListComponent} from './users/users-list/users-list.component';
import {UserComponent} from './users/user/user.component';
import {UserResolveService} from './users/user/user-resolve.service';

export const routes: Route [] = [
  {
    path: '',
    redirectTo: 'users',
    pathMatch: 'full'
  },
  {
    path: 'info',
    loadChildren: 'app/info/info.module#InfoModule'
  },
  {
    path: 'users',
    component: UsersComponent,
    children: [
      {
        path: '',
        component: UsersListComponent
      },
      {
        path: ':id',
        component: UserComponent,
        data: {
          title: 'Info about user'
        },
        resolve: {
          user: UserResolveService
        }
      },
      {
        path: '**',
        redirectTo: ''
      },
    ]
  },
  {
    path: '**',
    redirectTo: 'info'
  },
];
