import React from 'react';
import Head from 'next/head';
import { Container } from 'react-bootstrap';
import Navbar from '../navbar';

interface Props {
  children: React.ReactNode;
  title?: string;
  desc?: string;
}

const SITE_NAME = 'Nano Tech in Asia';

export default function MainLayout(props: Props) {
  const { children, title = SITE_NAME, desc } = props;
  return (
    <React.Fragment>
      <Head>
        <title>{title}</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <meta property="og:type" content="website" />
        <meta property="og:site_name" content={SITE_NAME} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={desc} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:title" content={title} />
        <meta name="twitter:description" content={desc} />
      </Head>
      <Navbar />
      <div style={{ marginTop: 100 }}>
        <Container>{children}</Container>
      </div>
    </React.Fragment>
  );
}
