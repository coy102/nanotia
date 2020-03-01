import React from 'react';
import { Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

interface Props {
  source: string;
  alt: string;
}

export default function Banner({ source, alt }: Props) {
  return (
    <LazyLoad>
      <Image fluid src={source} alt={alt} />
    </LazyLoad>
  );
}
