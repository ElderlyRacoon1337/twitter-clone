import { UserActions } from './actionCreators';
import { LoadingState, UserState } from './contracts/state';
import produce, { Draft } from 'immer';
import { UserActionsType } from './contracts/actionTypes';

const initialUserState: UserState = {
  data: undefined,
  loadingState: LoadingState.NEVER,
};

export const userReducer = produce(
  (draft: Draft<UserState>, action: UserActions) => {
    switch (action.type) {
      case UserActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case UserActionsType.FETCH_SIGNIN_DATA:
        draft.loadingState = LoadingState.LOADING;
        break;

      case UserActionsType.SET_USER_DATA:
        draft.data = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case UserActionsType.FETCH_MY_DATA:
        draft.loadingState = LoadingState.LOADING;
        break;

      case UserActionsType.FETCH_SIGNUP_DATA:
        draft.loadingState = LoadingState.LOADING;
        break;

      case UserActionsType.LOGOUT:
        draft.data = undefined;
        draft.loadingState = LoadingState.ERROR;
        localStorage.removeItem('token');
        break;

      default:
        break;
    }
  },
  initialUserState
);
