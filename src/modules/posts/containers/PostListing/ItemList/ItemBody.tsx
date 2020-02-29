import React from 'react';
import dayjs from 'dayjs';
import Link from 'next/link';
import relativeTime from 'dayjs/plugin/relativeTime';

import Author from '@modules/posts/components/Author';

interface Props {
  title: string;
  excerpt: string;
  date: string;
  authorAvatar: string;
  authorName: string;
  slug: string;
}

export default function ItemBody(props: Props) {
  const { date, excerpt, title, authorAvatar, authorName, slug } = props;
  dayjs.extend(relativeTime).locale('id');

  return (
    <div style={{ marginLeft: 30 }}>
      <Link href={`/[slugpost]`} as={`/${slug}`}>
        <a className="link-content">
          <h5 dangerouslySetInnerHTML={{ __html: title }} />
        </a>
      </Link>
      <div dangerouslySetInnerHTML={{ __html: excerpt }} />
      <div id="author__id">
        <Author
          authorAvatar={authorAvatar}
          name={authorName}
          date={dayjs(date).fromNow()}
        />
      </div>
    </div>
  );
}
