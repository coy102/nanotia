import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Image } from 'react-bootstrap';
import LazyLoad from 'react-lazyload';

interface Props {
  title: string;
  excerpt: string;
  date: string;
  authorAvatar: string;
  authorName: string;
}

export default function ItemBody(props: Props) {
  const { date, excerpt, title, authorAvatar, authorName } = props;
  dayjs.extend(relativeTime).locale('id');

  return (
    <div style={{ marginLeft: 30 }}>
      <h5 dangerouslySetInnerHTML={{ __html: title }} />
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      <div id="author__id">
        <LazyLoad>
          <Image
            src={authorAvatar}
            style={{ width: 30, height: 30 }}
            roundedCircle
          />
        </LazyLoad>
        <span> · </span>
        <small>{authorName}</small>
        <span> · </span>
        <small>{dayjs(date).fromNow()}</small>
      </div>
    </div>
  );
}
