import React from 'react';
import Head from 'next/head';

interface Props {
  title?: string;
  desc?: string;
  image?: string;
}
const SITE_NAME = 'Nano Tech in Asia';

export default function HeadDocument(props: Props) {
  const { title = SITE_NAME, desc, image } = props;

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
        <meta property="og:image" content={image} />
        <meta name="twitter:image" content={image} />
      </Head>
    </React.Fragment>
  );
}
