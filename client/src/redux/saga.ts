import { all } from 'redux-saga/effects';
import { profileSaga } from './ducks/profile/sagas';
import { tagsSaga } from './ducks/tags/sagas';
import { tweetSaga } from './ducks/tweet/sagas';
import { tweetsSaga } from './ducks/tweets/sagas';
import { userSaga } from './ducks/user/sagas';

export default function* rootSaga() {
  yield all([tweetsSaga(), tagsSaga(), tweetSaga(), userSaga(), profileSaga()]);
}
