import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectUser = (state: RootState) => state.user;

export const selectUserData = (state: RootState) => state.user.data;

export const selectIsLoadedState = (state: RootState): boolean =>
  state.user.loadingState === LoadingState.LOADED;

export const selectIsLoadingState = (state: RootState): boolean =>
  state.user.loadingState === LoadingState.LOADING;

export const selectIsAuthError = (state: RootState): boolean =>
  state.user.loadingState === LoadingState.AUTH_ERROR;

export const selectIsAuth = (state: RootState): boolean =>
  Boolean(state.user.data);

export const selectIsLoadedUserData = (state: RootState): boolean =>
  Boolean(
    state.user.loadingState == LoadingState.ERROR ||
      state.user.loadingState == LoadingState.LOADED ||
      state.user.loadingState == LoadingState.AUTH_ERROR
  );
