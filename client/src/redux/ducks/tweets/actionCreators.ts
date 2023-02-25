import {
  AddTweetActionInterface,
  FetchAddTweetActionInterface,
  FetchTweetsActionInterface,
  SetFormLoadingActionInterface,
  SetTweetsActionInterface,
  SetTweetsLoadingStateActionInterface,
} from './contracts/actionTypes';
import { LoadingState, Tweet } from './contracts/state';

export enum TweetsActionsType {
  SET_TWEETS = 'tweets/SET_TWEETS',
  FETCH_TWEETS = 'tweets/FETCH_TWEETS',
  SET_LOADING_STATE = 'tweets/SET_LOADING_STATE',
  FETCH_ADD_TWEET = 'tweets/FETCH_ADD_TWEET',
  ADD_TWEET = 'tweets/ADD_TWEET',
  SET_FORM_LOADING_STATE = 'tweets/SET_FORM_LOADING_STATE',
}

export const setTweets = (payload: Tweet[]): SetTweetsActionInterface => {
  return {
    type: TweetsActionsType.SET_TWEETS,
    payload,
  };
};

export const fetchAddTweet = (
  payload: string
): FetchAddTweetActionInterface => {
  return {
    type: TweetsActionsType.FETCH_ADD_TWEET,
    payload,
  };
};

export const addTweet = (payload: Tweet): AddTweetActionInterface => {
  return {
    type: TweetsActionsType.ADD_TWEET,
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

export const setFormLoadingState = (
  payload: LoadingState
): SetFormLoadingActionInterface => {
  return {
    type: TweetsActionsType.SET_FORM_LOADING_STATE,
    payload,
  };
};

export type TweetsActions =
  | SetTweetsActionInterface
  | SetTweetsLoadingStateActionInterface
  | FetchTweetsActionInterface
  | AddTweetActionInterface
  | FetchAddTweetActionInterface
  | SetFormLoadingActionInterface;
