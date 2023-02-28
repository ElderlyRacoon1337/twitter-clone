import {
  TweetsActionsType,
  setTweetsLoadingState,
  setTweets,
  addTweet,
  setFormLoadingState,
} from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects';
import { TweetsApi } from '../../../services/TweetsApi';
import { LoadingState } from './contracts/state';
import {
  DeleteTweetActionInterface,
  FetchAddTweetActionInterface,
} from './contracts/actionTypes';
import { addTweetToProfile } from '../profile/actionCreators';

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
    yield put(addTweetToProfile(data));
  } catch (error) {
    yield put(setFormLoadingState(LoadingState.ERROR));
  }
}

function* fetchDeleteTweet(action: DeleteTweetActionInterface) {
  const id = action.payload;
  try {
    // @ts-ignore
    yield call(TweetsApi.deleteTweet, id);
  } catch (error) {
    yield put(setFormLoadingState(LoadingState.ERROR));
  }
}

export function* tweetsSaga() {
  yield takeLatest(TweetsActionsType.FETCH_TWEETS, fetchTweetsRequest);
  yield takeLatest(TweetsActionsType.FETCH_ADD_TWEET, fetchAddTweetRequest);
  yield takeLatest(TweetsActionsType.DELETE_TWEET, fetchDeleteTweet);
}
