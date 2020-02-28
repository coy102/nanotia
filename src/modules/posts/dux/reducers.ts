import { handleActions } from 'redux-actions';
import { combineReducers } from 'redux';
import { GET_MORE_POSTS, GET_POSTS } from './constants';
import { InitialState } from '../types/state';

const initialState: InitialState = {
  listingPost: {
    errorMessage: '',
    isLoading: false,
    posts: [],
    morePost: [],
    page: 1,
  },
};

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
      isLoading: false,
    }),
    [GET_POSTS.FAILURE]: (state, { payload: { errorMessage } }) => ({
      ...state,
      errorMessage,
      isLoading: false,
    }),
    // Get more listing (infinity scroll fetch)
    [GET_MORE_POSTS.REQUEST]: state => ({ ...state, isFetching: true }),
    [GET_MORE_POSTS.SUCCESS]: (state, { payload: { morePost } }) => ({
      ...state,
      isFetching: false,
      page: state.page + 1,
      pokemons: [...state.posts, ...morePost],
    }),
    [GET_MORE_POSTS.FAILURE]: state => ({
      ...state,
      isFetching: false,
    }),
  },
  initialState.listingPost
);

export default combineReducers({
  listingPost: postsReducer,
});
