import { Post } from './post';

export interface BaseState {
  isLoading: boolean;
  errorMessage: string;
}

export interface PostsState extends BaseState {
  posts: Array<Post>;
  morePost: Array<Post>;
  page: number;
}

export interface PostState extends BaseState {
  posts: Post;
}

export interface InitialState {
  listingPost?: PostsState;
  detailPost?: PostState;
}
