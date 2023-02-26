import { UserActionsType } from './contracts/actionTypes';
import { setLoadingState, setUserData } from './actionCreators';
import { call, takeLatest, put } from 'redux-saga/effects';
import { AuthApi } from '../../../services/AuthApi';
import { LoadingState } from './contracts/state';

function* fetchSignInRequest(action: any) {
  const userData = action.payload;
  try {
    // @ts-ignore
    const data = yield call(AuthApi.signIn, userData);
    yield put(setUserData(data));
    window.localStorage.setItem('token', data.token);
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGNIN_DATA, fetchSignInRequest);
}
