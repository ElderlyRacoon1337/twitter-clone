import { Action } from 'redux';
import { LoadingState, Profile } from './state';

export enum ProfileActionsType {
  SET_PROFILE_DATA = 'user/SET_PROFILE_DATA',
  SET_LOADING_STATE = 'user/SET_LOADING_STATE',
  FETCH_PROFILE_DATA = 'user/FETCH_PROFILE_DATA',
  ADD_TWEET = 'user/ADD_TWEET',
  REMOVE_TWEET = 'user/REMOVE_TWEET',
}

export interface SetProfileDataActionInterface
  extends Action<ProfileActionsType> {
  type: ProfileActionsType.SET_PROFILE_DATA;
  payload: Profile;
}

export interface FetchProfileDataInterface extends Action<ProfileActionsType> {
  type: ProfileActionsType.FETCH_PROFILE_DATA;
  payload: string;
}

export interface SetProfileLoadingStateActionInterface
  extends Action<ProfileActionsType> {
  type: ProfileActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface AddTweetActionInterface extends Action<ProfileActionsType> {
  type: ProfileActionsType.ADD_TWEET;
  payload: any;
}

export interface RemoveTweetActionInterface extends Action<ProfileActionsType> {
  type: ProfileActionsType.REMOVE_TWEET;
  payload: any;
}
