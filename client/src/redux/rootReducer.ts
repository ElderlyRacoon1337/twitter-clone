import { tweetReducer } from './ducks/tweet/reducer';
import { tagsReducer } from './ducks/tags/reducer';
import { tweetsReducer } from './ducks/tweets/reducer';
import { combineReducers } from 'redux';
import { userReducer } from './ducks/user/reducer';
import { profileReducer } from './ducks/profile/reducer';

export const rootReducer = combineReducers({
  tweets: tweetsReducer,
  tags: tagsReducer,
  tweet: tweetReducer,
  user: userReducer,
  profile: profileReducer,
});
