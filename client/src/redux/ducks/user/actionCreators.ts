import {
  FetchSignInActionInterface,
  SetUserDataActionInterface,
  SetUserLoadingStateActionInterface,
  UserActionsType,
} from './contracts/actionTypes';
import { FormSigninType, LoadingState, User } from './contracts/state';

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

export const fetchSigninData = (
  payload: FormSigninType
): FetchSignInActionInterface => {
  return {
    type: UserActionsType.FETCH_SIGNIN_DATA,
    payload,
  };
};

export type UserActions =
  | SetUserLoadingStateActionInterface
  | SetUserDataActionInterface
  | FetchSignInActionInterface;
