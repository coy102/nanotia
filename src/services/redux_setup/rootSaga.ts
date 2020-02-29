import { all, fork } from 'redux-saga/effects';
import postSaga from '@modules/posts/dux/sagas';
function* sagas() {
  yield all([fork(postSaga)]);
}

export default sagas;
