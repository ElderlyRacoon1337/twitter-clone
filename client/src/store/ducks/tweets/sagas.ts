import {
  TweetsActionsType,
  setTweetsLoadingState,
  setTweets,
} from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/TweetsApi';
import { LoadingState } from './contracts/state';

export function* fetchTweetsRequest() {
  try {
    // @ts-ignore
    const data = yield call(TweetsApi.fetchTweets);
    yield put(setTweets(data));
  } catch (error) {
    yield put(setTweetsLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
}
