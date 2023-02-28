import { ProfileActionsType } from './contracts/actionTypes';
import { setLoadingState, setProfileData } from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects';
import { AuthApi } from '../../../services/AuthApi';
import { LoadingState } from './contracts/state';

function* fetchProfileDataRequest(action: any) {
  const username = action.payload;
  try {
    // @ts-ignore
    const data = yield call(AuthApi.getProfileData, username);
    yield put(setProfileData(data));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* profileSaga() {
  yield takeLatest(
    ProfileActionsType.FETCH_PROFILE_DATA,
    fetchProfileDataRequest
  );
}
