import { RootState } from '../../store';
import { LoadingState } from './contracts/state';

export const selectTags = (state: RootState) => state.tags;

export const selectTagsItems = (state: RootState) => state.tags.items;

export const selectIsLoadedState = (state: RootState): boolean =>
  state.tags.loadingState === LoadingState.LOADED;

export const selectIsLoadingState = (state: RootState): boolean =>
  state.tags.loadingState === LoadingState.LOADING;
