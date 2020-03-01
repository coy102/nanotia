import React from 'react';
import LazyLoad from 'react-lazyload';
import Link from 'next/link';

import { Featuredimage } from '@modules/posts/types/post';

interface Props {
  image: Featuredimage;
  slug: string;
}

export default function ImageMedia(props: Props) {
  const { image, slug } = props;
  const { medium: mediumImage } = image.attachment_meta.sizes;

  return (
    <LazyLoad height={mediumImage.height}>
      <Link href={`/[slugpost]`} as={`/${slug}`}>
        <a className="link-content">
          <img
            style={{ width: '100%' }}
            src={mediumImage.url}
            alt={image.title}
          />
        </a>
      </Link>
    </LazyLoad>
  );
}
