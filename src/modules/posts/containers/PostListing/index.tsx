import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPosts } from '../../dux/actions';
import postSelector from '../../dux/selectors';
import { PostsState } from '../../types/state';

import ItemList from './ItemList';

export default function PostListingContainer() {
  const dispatch = useDispatch();
  const { selectPosts } = postSelector();

  const { isLoading, posts }: PostsState = useSelector(selectPosts());

  useEffect(() => {
    handleFetchPosts();
  }, []);

  const handleFetchPosts = () => dispatch(getPosts.request());

  if (isLoading) {
    return <span>loading...</span>;
  }

  return (
    <React.Fragment>
      <ItemList posts={posts} />
    </React.Fragment>
  );
}
