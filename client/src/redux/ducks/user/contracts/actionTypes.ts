import { Action } from 'redux';
import { FormSigninType, LoadingState, User } from './state';

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  FETCH_SIGNIN_DATA = 'user/FETCH_SIGNIN_DATA',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: User;
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGNIN_DATA;
  payload: FormSigninType;
}

export interface SetUserLoadingStateActionInterface
  extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
