import { createAction } from 'redux-actions';
import { GET_MORE_POSTS, GET_POSTS } from './constants';

export const getPosts = {
  request: createAction(GET_POSTS.REQUEST),
  success: createAction(GET_POSTS.SUCCESS),
  failure: createAction(GET_POSTS.FAILURE),
};

export const getMorePosts = {
  request: createAction(GET_MORE_POSTS.REQUEST),
  success: createAction(GET_MORE_POSTS.SUCCESS),
  failure: createAction(GET_MORE_POSTS.FAILURE),
};
