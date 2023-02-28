import {
  AddTweetActionInterface,
  FetchProfileDataInterface,
  ProfileActionsType,
  RemoveTweetActionInterface,
  SetProfileDataActionInterface,
  SetProfileLoadingStateActionInterface,
} from './contracts/actionTypes';
import { LoadingState, Profile } from './contracts/state';

export const setLoadingState = (
  payload: LoadingState
): SetProfileLoadingStateActionInterface => {
  return {
    type: ProfileActionsType.SET_LOADING_STATE,
    payload,
  };
};

export const setProfileData = (
  payload: Profile
): SetProfileDataActionInterface => {
  return {
    type: ProfileActionsType.SET_PROFILE_DATA,
    payload,
  };
};

export const fetchProfileData = (payload: any): FetchProfileDataInterface => {
  return {
    type: ProfileActionsType.FETCH_PROFILE_DATA,
    payload,
  };
};

export const addTweetToProfile = (payload: any): AddTweetActionInterface => {
  return {
    type: ProfileActionsType.ADD_TWEET,
    payload,
  };
};

export const removeTweetFromProfile = (
  payload: any
): RemoveTweetActionInterface => {
  return {
    type: ProfileActionsType.REMOVE_TWEET,
    payload,
  };
};

export type ProfileActions =
  | FetchProfileDataInterface
  | SetProfileDataActionInterface
  | SetProfileLoadingStateActionInterface
  | AddTweetActionInterface
  | RemoveTweetActionInterface;
