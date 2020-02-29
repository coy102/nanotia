import React from 'react';
import PostListing from '@modules/posts/containers/PostListing';
import MainLayout from '@components/layouts/main';

export default function Index() {
  return (
    <MainLayout>
      <PostListing />
    </MainLayout>
  );
}
