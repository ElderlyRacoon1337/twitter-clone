import { Action } from 'redux';
import { LoadingState, User } from './state';

export enum UserActionsType {
  SET_USER_DATA = 'user/SET_USER_DATA',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  FETCH_SIGNIN_DATA = 'user/FETCH_SIGNIN_DATA',
  FETCH_MY_DATA = 'user/FETCH_MY_DATA',
  FETCH_SIGNUP_DATA = 'user/FETCH_SIGNUP_DATA',
}

export interface SetUserDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.SET_USER_DATA;
  payload: User;
}

export interface FetchSignInActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGNIN_DATA;
  payload: any;
}

export interface FetchMyDataActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_MY_DATA;
}

export interface FetchSignUpActionInterface extends Action<UserActionsType> {
  type: UserActionsType.FETCH_SIGNUP_DATA;
  payload: any;
}

export interface SetUserLoadingStateActionInterface
  extends Action<UserActionsType> {
  type: UserActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
