import {
  FetchMyDataActionInterface,
  FetchSignInActionInterface,
  FetchSignUpActionInterface,
  LogOutActionInterface,
  SetUserDataActionInterface,
  SetUserLoadingStateActionInterface,
  UserActionsType,
} from './contracts/actionTypes';
import { LoadingState, User } from './contracts/state';

export const setLoadingState = (
  payload: LoadingState
): SetUserLoadingStateActionInterface => {
  return {
    type: UserActionsType.SET_LOADING_STATE,
    payload,
  };
};

export const setUserData = (payload: User): SetUserDataActionInterface => {
  return {
    type: UserActionsType.SET_USER_DATA,
    payload,
  };
};

export const fetchSigninData = (payload: any): FetchSignInActionInterface => {
  return {
    type: UserActionsType.FETCH_SIGNIN_DATA,
    payload,
  };
};

export const fetchMyData = (): FetchMyDataActionInterface => {
  return {
    type: UserActionsType.FETCH_MY_DATA,
  };
};

export const fetchSignupData = (payload: any): FetchSignUpActionInterface => {
  return {
    type: UserActionsType.FETCH_SIGNUP_DATA,
    payload,
  };
};

export const logOut = (): LogOutActionInterface => {
  return {
    type: UserActionsType.LOGOUT,
  };
};

export type UserActions =
  | SetUserLoadingStateActionInterface
  | SetUserDataActionInterface
  | FetchSignInActionInterface
  | FetchMyDataActionInterface
  | FetchSignUpActionInterface
  | LogOutActionInterface;
