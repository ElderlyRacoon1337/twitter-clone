import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectTweet = (state: RootState) => state.tweet;

export const selectTweetItem = (state: RootState) => state.tweet.tweet;

export const selectIsLoadedState = (state: RootState): boolean =>
  state.tweet.loadingState === LoadingState.LOADED;

export const selectIsLoadingState = (state: RootState): boolean =>
  state.tweet.loadingState === LoadingState.LOADING;
