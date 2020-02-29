import { call, takeLatest, put, all, select } from 'redux-saga/effects';

import { GET_MORE_POSTS, GET_POSTS, GET_POST } from './constants';
import { getMorePosts, getPosts, getPost } from './actions';
import postSelector from './selectors';
import { PostsState } from '../types/state';
import { PostsResponse } from '../types/post';
import postServiceApi from '../services/api';

const PER_PAGE = 10;
const _postApi = postServiceApi();
const _postSelect = postSelector();

function* getPostSaga(action: any) {
  try {
    const { payload: slug } = action;
    const res: PostsResponse = yield call(_postApi.getPost, slug);
    const { posts } = res.data;
    yield put(getPost.success({ post: posts[0] }));
  } catch (error) {
    yield put(getPost.failure({ errorMessage: error.message }));
  }
}

function* getMorePostsSaga() {
  try {
    const { page }: PostsState = yield select(_postSelect.selectPosts());
    const res: PostsResponse = yield call(_postApi.getPostList, page, PER_PAGE);
    const { posts } = res.data;
    yield put(getMorePosts.success({ morePost: posts }));
  } catch (error) {
    yield put(getMorePosts.failure({ errorMessage: error.message }));
  }
}

/**
 * get listing posts saga
 */
function* getPostsSaga() {
  try {
    const res: PostsResponse = yield call(_postApi.getPostList, 1, PER_PAGE);
    const { posts } = res.data;
    yield put(getPosts.success({ posts }));
  } catch (error) {
    yield put(getPosts.failure({ errorMessage: error.message }));
  }
}

export default function* postSaga() {
  yield all([
    takeLatest(GET_POSTS.REQUEST, getPostsSaga),
    takeLatest(GET_MORE_POSTS.REQUEST, getMorePostsSaga),
    takeLatest(GET_POST.REQUEST, getPostSaga),
  ]);
}
