import { call, takeLatest, put, all, select } from 'redux-saga/effects';

import { GET_MORE_POSTS, GET_POSTS } from './constants';
import { getMorePosts, getPosts } from './actions';
import postSelector from './selectors';
import { PostsState } from '../types/state';
import { PostResponse } from '../types/post';
import postServiceApi from '../services/api';

const PER_PAGE = 10;
const _postApi = postServiceApi();
const _postSelect = postSelector();

function* getMorePostsSaga() {
  try {
    const { page }: PostsState = yield select(_postSelect.selectPosts());
    const res: PostResponse = yield call(_postApi.getPostList, page, PER_PAGE);
    const { results } = res.data;
    yield put(getMorePosts.success({ morePost: results.posts }));
  } catch (error) {
    yield put(getMorePosts.failure({ errorMessage: error.message }));
  }
}

/**
 * get listing posts saga
 */
function* getPostsSaga() {
  try {
    const res: PostResponse = yield call(_postApi.getPostList, 1, PER_PAGE);
    const { results } = res.data;
    yield put(getPosts.success({ posts: results.posts }));
  } catch (error) {
    yield put(getPosts.failure({ errorMessage: error.message }));
  }
}

export default function* postSaga() {
  yield all([
    takeLatest(GET_POSTS.REQUEST, getPostsSaga),
    takeLatest(GET_MORE_POSTS.REQUEST, getMorePostsSaga),
  ]);
}
