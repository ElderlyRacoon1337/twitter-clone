import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectUser = (state: RootState) => state.user;

export const selectUserData = (state: RootState) => state.user.data;

export const selectIsLoadedState = (state: RootState): boolean =>
  state.user.loadingState === LoadingState.LOADED;

export const selectIsLoadingState = (state: RootState): boolean =>
  state.user.loadingState === LoadingState.LOADING;

export const isAuth = (state: RootState): boolean => Boolean(state.user.data);
