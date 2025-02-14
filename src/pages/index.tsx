import React from 'react';
import PostListing from '@modules/posts/containers/PostListing';
import MainLayout from '@components/layouts/main';
import Head from '@components/layouts/Head';

export default function Index() {
  return (
    <MainLayout>
      <Head />
      <PostListing />
    </MainLayout>
  );
}
