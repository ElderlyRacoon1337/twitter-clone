import {
  TagsActionsType,
  setTagsLoadingState,
  setTags,
} from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects';
import { TagsApi } from '../../../services/TagsApi';
import { LoadingState } from './contracts/state';

function* fetchTagsRequest() {
  try {
    // @ts-ignore
    const data = yield call(TagsApi.fetchTags);
    yield put(setTags(data));
  } catch (error) {
    yield put(setTagsLoadingState(LoadingState.ERROR));
  }
}

export function* tagsSaga() {
  yield takeLatest(TagsActionsType.FETCH_ITEMS, fetchTagsRequest);
}
