import {
  TweetsActionsType,
  setTweetsLoadingState,
  setTweets,
  addTweet,
  setFormLoadingState,
} from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/TweetsApi';
import { LoadingState, Tweet } from './contracts/state';
import { FetchAddTweetActionInterface } from './contracts/actionTypes';

function* fetchTweetsRequest() {
  try {
    // @ts-ignore
    const data = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(data));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

function* fetchAddTweetRequest(action: FetchAddTweetActionInterface) {
  const tweet = action.payload;
  try {
    // @ts-ignore
    const data = yield call(TweetsApi.addTweet, tweet);
    yield put(addTweet(data));
  } catch (error) {
    yield put(setFormLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
}
