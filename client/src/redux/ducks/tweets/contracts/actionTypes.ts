import { Action } from 'redux';
import { TweetsActionsType } from '../actionCreators';
import { LoadingState, Tweet } from './state';

export interface SetTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_TWEETS;
  payload: Tweet[];
}

export interface SetTweetsLoadingStateActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchAddTweetActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_ADD_TWEET;
  payload: object;
}

export interface AddTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.ADD_TWEET;
  payload: Tweet;
}

export interface FetchTweetsActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.FETCH_TWEETS;
}

export interface SetFormLoadingActionInterface
  extends Action<TweetsActionsType> {
  type: TweetsActionsType.SET_FORM_LOADING_STATE;
  payload: LoadingState;
}

export interface DeleteTweetActionInterface extends Action<TweetsActionsType> {
  type: TweetsActionsType.DELETE_TWEET;
  payload: String;
}
