// counter.actions.ts
import {Action} from '@ngrx/store';

export enum UserActionTypes {
  GET_USER_PENDING = '[USER] GET_USER_PENDING',
  GET_USER_SUCCESS = '[USER] GET_USER_SUCCESS',
  GET_USER_ERROR = '[USER] GET_USER_ERROR'
}

export class GetUserPending implements Action {
  readonly type = UserActionTypes.GET_USER_PENDING;
}

export class GetUserSuccess implements Action {
  readonly type = UserActionTypes.GET_USER_SUCCESS;

  public constructor(public payload: any) {
  }
}

export class GetUserError implements Action {
  readonly type = UserActionTypes.GET_USER_ERROR;

  constructor(public payload: any) {
  }
}

export type UserActions
  = GetUserSuccess
  | GetUserError;
