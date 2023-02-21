import { tweetReducer } from './ducks/tweet/reducer';
import { tagsReducer } from './ducks/tags/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';
import { combineReducers } from 'redux';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
  tweet: tweetReducer,
});
