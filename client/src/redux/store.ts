import { TagsState } from './ducks/tags/contracts/state';
import { TweetsState } from './ducks/tweets/contracts/state';
import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootReducer } from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './saga';
import { TweetState } from './ducks/tweet/contracts/state';

const sagaMiddleware = createSagaMiddleware();

export interface RootState {
  tweets: TweetsState;
  tags: TagsState;
  tweet: TweetState;
}

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(sagaMiddleware))
);

sagaMiddleware.run(rootSaga);
