import { ProfileActions } from './actionCreators';
import { LoadingState, ProfileState } from './contracts/state';
import produce, { Draft } from 'immer';
import { ProfileActionsType } from './contracts/actionTypes';

const initialUserState: ProfileState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const profileReducer = produce(
  (draft: Draft<ProfileState>, action: ProfileActions) => {
    switch (action.type) {
      case ProfileActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case ProfileActionsType.FETCH_PROFILE_DATA:
        draft.loadingState = LoadingState.LOADING;
        break;

      case ProfileActionsType.SET_PROFILE_DATA:
        draft.data = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case ProfileActionsType.ADD_TWEET:
        // @ts-ignore
        draft?.data?.tweets?.unshift(action.payload);
        draft.loadingState = LoadingState.LOADED;
        break;

      case ProfileActionsType.REMOVE_TWEET:
        // @ts-ignore
        draft.data.tweets = draft.data.tweets.filter(
          // @ts-ignore
          (el) => el._id !== action.payload
        );
        draft.loadingState = LoadingState.LOADED;
        break;

      default:
        break;
    }
  },
  initialUserState
);
