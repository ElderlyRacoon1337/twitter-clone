import { LoadingState, Tweet } from './contracts/state';
import { Action } from 'redux';

export enum TweetActionsType {
  SET_TWEET = 'tweet/SET_TWEET',
  FETCH_TWEET = 'tweet/FETCH_TWEET',
  SET_LOADING_STATE = 'tweet/SET_LOADING_STATE',
}

export interface SetTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.SET_TWEET;
  payload: Tweet | undefined;
}

export interface SetTweetLoadingStateActionInterface
  extends Action<TweetActionsType> {
  type: TweetActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTweetActionInterface extends Action<TweetActionsType> {
  type: TweetActionsType.FETCH_TWEET;
  payload: string;
}

export const setTweet = (
  payload: Tweet | undefined
): SetTweetActionInterface => {
  return {
    type: TweetActionsType.SET_TWEET,
    payload,
  };
};

export const setTweetLoadingState = (
  payload: LoadingState
): SetTweetLoadingStateActionInterface => {
  return {
    type: TweetActionsType.SET_LOADING_STATE,
    payload,
  };
};

export const fetchTweet = (payload: string): FetchTweetActionInterface => {
  return {
    type: TweetActionsType.FETCH_TWEET,
    payload,
  };
};

export type TweetActions =
  | SetTweetActionInterface
  | SetTweetLoadingStateActionInterface
  | FetchTweetActionInterface;
