import { TweetsActions, TweetsActionsType } from './actionCreators';
import { LoadingState, TweetsState } from './contracts/state';
import produce, { Draft } from 'immer';

const initialTweetsState: TweetsState = {
  items: [],
  loadingState: LoadingState.NEVER,
  addFormLoadingState: LoadingState.NEVER,
};

export const tweetsReducer = produce(
  (draft: Draft<TweetsState>, action: TweetsActions) => {
    switch (action.type) {
      case TweetsActionsType.FETCH_TWEETS:
        draft.items = [];
        draft.loadingState = LoadingState.LOADING;
        break;

      case TweetsActionsType.SET_TWEETS:
        draft.items = action.payload;
        draft.loadingState = LoadingState.LOADED;
        break;

      case TweetsActionsType.SET_LOADING_STATE:
        draft.loadingState = action.payload;
        break;

      case TweetsActionsType.FETCH_ADD_TWEET:
        draft.addFormLoadingState = LoadingState.LOADING;
        break;

      case TweetsActionsType.ADD_TWEET:
        draft.items.unshift(action.payload);
        draft.addFormLoadingState = LoadingState.LOADED;
        break;

      case TweetsActionsType.SET_FORM_LOADING_STATE:
        draft.addFormLoadingState = action.payload;
        break;

      case TweetsActionsType.DELETE_TWEET:
        draft.items = draft.items.filter((el) => el._id !== action.payload);
        break;

      default:
        break;
    }
  },
  initialTweetsState
);
