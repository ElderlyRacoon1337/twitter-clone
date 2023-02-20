import { LoadingState, Tag } from './contracts/state';
import { Action } from 'redux';

export enum TagsActionsType {
  SET_ITEMS = 'tags/SET_ITEMS',
  FETCH_ITEMS = 'tags/FETCH_ITEMS',
  SET_LOADING_STATE = 'tags/SET_LOADING_STATE',
}

export interface SetTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.SET_ITEMS;
  payload: Tag[];
}

export interface SetTagsLoadingStateActionInterface
  extends Action<TagsActionsType> {
  type: TagsActionsType.SET_LOADING_STATE;
  payload: LoadingState;
}

export interface FetchTagsActionInterface extends Action<TagsActionsType> {
  type: TagsActionsType.FETCH_ITEMS;
}

export const setTags = (payload: Tag[]): SetTagsActionInterface => {
  return {
    type: TagsActionsType.SET_ITEMS,
    payload,
  };
};

export const setTagsLoadingState = (
  payload: LoadingState
): SetTagsLoadingStateActionInterface => {
  return {
    type: TagsActionsType.SET_LOADING_STATE,
    payload,
  };
};

export const fetchTags = (): FetchTagsActionInterface => {
  return {
    type: TagsActionsType.FETCH_ITEMS,
  };
};

export type TagsActions =
  | SetTagsActionInterface
  | SetTagsLoadingStateActionInterface
  | FetchTagsActionInterface;
