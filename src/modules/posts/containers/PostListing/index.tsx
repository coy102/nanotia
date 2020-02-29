import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import debounce from 'lodash/debounce';

import { getPosts, getMorePosts } from '../../dux/actions';
import postSelector from '../../dux/selectors';
import { PostsState } from '../../types/state';

import ItemList from './ItemList';
import ErrorMessage from '@components/result/ErrorMessage';
import Loading from '@components/loading';

export default function PostListingContainer() {
  const dispatch = useDispatch();
  const { selectPosts } = postSelector();

  const { isLoading, posts, errorMessage }: PostsState = useSelector(
    selectPosts()
  );

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    handleFetchPosts();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // handle fetch post
  const handleFetchPosts = () => dispatch(getPosts.request());

  // handle fetch more post infinite scroll logic
  const handleScroll = debounce(() => {
    if (
      window.innerHeight + window.scrollY >=
      document.body.offsetHeight - 500
    ) {
      dispatch(getMorePosts.request());
    }
  }, 100);

  return (
    <React.Fragment>
      <ItemList posts={posts} />
      {isLoading && <Loading />}
      {errorMessage && (
        <ErrorMessage
          message={errorMessage}
          onClick={handleFetchPosts}
          buttonLabel="Refresh"
        />
      )}
    </React.Fragment>
  );
}
