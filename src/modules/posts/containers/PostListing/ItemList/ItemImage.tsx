import React from 'react';
import LazyLoad from 'react-lazyload';

import { Featuredimage } from '@modules/posts/types/post';

interface Props {
  image: Featuredimage;
}

export default function ImageMedia(props: Props) {
  const { image } = props;
  const { medium: mediumImage } = image.attachment_meta.sizes;

  return (
    <LazyLoad height={mediumImage.height}>
      <img src={mediumImage.url} alt={image.title} />
    </LazyLoad>
  );
}
