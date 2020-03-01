import React from 'react';
import PostDetail from '@modules/posts/containers/PostDetail';
import MainLayout from '@components/layouts/main';

export default function Index() {
  return (
    <MainLayout>
      <PostDetail />
    </MainLayout>
  );
}
