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
    yield put(setLoadingState(LoadingState.AUTH_ERROR));
  }
}

function* fetchMyDataRequest(action: any) {
  try {
    // @ts-ignore
    const data = yield call(AuthApi.getMe);
    yield put(setUserData(data));
  } catch (error) {
    yield put(setLoadingState(LoadingState.ERROR));
  }
}

function* fetchSignUpRequest(action: any) {
  const userData = action.payload;
  try {
    // @ts-ignore
    const data = yield call(AuthApi.signUp, userData);
    yield put(setUserData(data));
    window.localStorage.setItem('token', data.token);
  } catch (error) {
    yield put(setLoadingState(LoadingState.AUTH_ERROR));
  }
}

export function* userSaga() {
  yield takeLatest(UserActionsType.FETCH_SIGNIN_DATA, fetchSignInRequest);
  yield takeLatest(UserActionsType.FETCH_MY_DATA, fetchMyDataRequest);
  yield takeLatest(UserActionsType.FETCH_SIGNUP_DATA, fetchSignUpRequest);
}
