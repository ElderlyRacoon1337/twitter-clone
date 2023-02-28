import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectProfileData = (state: RootState) => state.profile.data;

export const selectIsLoadedState = (state: RootState): boolean =>
  state.user.loadingState === LoadingState.LOADED;

export const selectIsLoadingState = (state: RootState): boolean =>
  state.user.loadingState === LoadingState.LOADING;

export const selectIsMyProfile = (state: RootState): boolean =>
  // @ts-ignore
  state?.user?.data?._id === state?.profile?.data?._id;
