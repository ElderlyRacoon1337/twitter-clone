import { LoadingState } from './contracts/state';
import { Action } from 'redux';
import { TweetsState } from './contracts/state';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
}

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: TweetsState['items'];
}

export interface SetTweetsLoadingStateActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}
export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export const setTweets = (
  payload: TweetsState['items']
): SetTweetsActionInterface => {
  return {
    type: TweetsActionsType.SET_TWEETS,
    payload,
  };
};

export const setTweetsLoadingState = (
  payload: LoadingState
): SetTweetsLoadingStateActionInterface => {
  return {
    type: TweetsActionsType.SET_LOADING_STATE,
    payload,
  };
};

export const fetchTweets = (): FetchTweetsActionInterface => {
  return {
    type: TweetsActionsType.FETCH_TWEETS,
  };
};

export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchTweetsActionInterface;
