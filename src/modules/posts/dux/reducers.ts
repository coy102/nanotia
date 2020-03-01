import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { GET_MORE_POSTS, GET_POSTS, GET_POST } from './constants';
import { InitialState } from '../types/state';

const initialState: InitialState = {
  listingPost: {
    errorMessage: '',
    isLoading: false,
    posts: [],
    morePost: [],
    page: 1,
  },
  detailPost: {
    errorMessage: '',
    isLoading: false,
    post: {},
  },
};

const postReducer = handleActions(
  {
    [GET_POST.REQUEST]: state => ({
      ...state,
      message: '',
      isLoading: true,
    }),
    [GET_POST.SUCCESS]: (state, { payload: { post } }) => ({
      ...state,
      post,
      isLoading: false,
    }),
    [GET_POST.FAILURE]: (state, { payload: { errorMessage } }) => ({
      ...state,
      errorMessage,
      isLoading: false,
    }),
  },
  initialState.detailPost
);

const postsReducer = handleActions(
  {
    // Get initial listing post
    [GET_POSTS.REQUEST]: state => ({
      ...state,
      message: '',
      isLoading: true,
    }),
    [GET_POSTS.SUCCESS]: (state, { payload: { posts } }) => ({
      ...state,
      posts,
      page: state.page + 1,
      isLoading: false,
    }),
    [GET_POSTS.FAILURE]: (state, { payload: { errorMessage } }) => ({
      ...state,
      errorMessage,
      isLoading: false,
    }),
    // Get more listing (infinity scroll fetch)
    [GET_MORE_POSTS.REQUEST]: state => ({ ...state, isLoading: true }),
    [GET_MORE_POSTS.SUCCESS]: (state, { payload: { morePost } }) => ({
      ...state,
      isLoading: false,
      page: state.page + 1,
      posts: [...state.posts, ...morePost],
    }),
    [GET_MORE_POSTS.FAILURE]: state => ({
      ...state,
      isLoading: false,
    }),
  },
  initialState.listingPost
);

export default combineReducers({
  listingPost: postsReducer,
  detailPost: postReducer,
});
