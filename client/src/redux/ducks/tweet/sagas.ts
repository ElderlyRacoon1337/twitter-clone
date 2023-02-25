import {
  TweetActionsType,
  setTweetLoadingState,
  setTweet,
  FetchTweetActionInterface,
} from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/TweetsApi';
import { LoadingState } from './contracts/state';

function* fetchTweetRequest(action: FetchTweetActionInterface) {
  try {
    // @ts-ignore
    const data = yield call(TweetsApi.fetchTweet, action.payload);
    yield put(setTweet(data));
  } catch (error) {
    yield put(setTweetLoadingState(LoadingState.ERROR));
  }
}

export function* tweetSaga() {
  yield takeLatest(TweetActionsType.FETCH_TWEET, fetchTweetRequest);
}
