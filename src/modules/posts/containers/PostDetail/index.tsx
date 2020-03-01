import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getPost } from '../../dux/actions';
import postSelector from '../../dux/selectors';
import { PostState } from '../../types/state';

import Loading from '@components/loading';
import Head from '@components/layouts/Head';
import Content from './Content';

import { useRouter } from 'next/router';
import { isEmpty } from 'lodash';
import './style.css';
import ErrorMessage from '@components/result/ErrorMessage';

export default function PostDetail() {
  const dispatch = useDispatch();
  const router = useRouter();
  const { selectPost } = postSelector();
  const { slugpost } = router.query;
  const { isLoading, post, errorMessage }: PostState = useSelector(
    selectPost()
  );

  useEffect(() => {
    handleFetchPost(slugpost);
  }, []);

  // handle fetch post
  const handleFetchPost = slug => dispatch(getPost.request({ slug }));

  if (isLoading) return <Loading />;
  if (errorMessage) return <ErrorMessage message={errorMessage} />;
  return (
    <div>
      {!isEmpty(post) && (
        <div>
          <Head
            title={post.title}
            desc={post.seo.description}
            image={post.seo.image}
          />

          <Content posts={post} />
        </div>
      )}
    </div>
  );
}
