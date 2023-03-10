import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectTweets = (state: RootState) => state.tweets;

export const selectTweetsItems = (state: RootState) => state.tweets.items;

export const selectIsLoadedState = (state: RootState): boolean =>
  state.tweets.loadingState === LoadingState.LOADED;

export const selectIsLoadingState = (state: RootState): boolean =>
  state.tweets.loadingState === LoadingState.LOADING;

export const selectIsAddedTweet = (state: RootState): boolean =>
  state.tweets.addFormLoadingState === LoadingState.LOADED;

export const selectIsErrorAddedTweet = (state: RootState): boolean =>
  state.tweets.addFormLoadingState === LoadingState.ERROR;

export const selectIsLoadingAddedTweet = (state: RootState): boolean =>
  state.tweets.addFormLoadingState === LoadingState.LOADING;
