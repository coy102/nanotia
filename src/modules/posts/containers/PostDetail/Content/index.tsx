import React from 'react';
import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { Post } from '@modules/posts/types/post';
import Author from '@modules/posts/components/Author';
import Banner from './Banner';
import Categories from './Categories';

interface Props {
  posts: Post;
}

export default function DetailContent(props: Props) {
  const { posts } = props;
  const { author, title, date, featured_image, content, categories } = posts;
  dayjs.extend(relativeTime).locale('id');

  return (
    <div>
      <Categories categories={categories} />
      <Author
        authorAvatar={author.avatar_url}
        name={author.display_name}
        date={dayjs(date).fromNow()}
      />
      <hr />
      <h4 dangerouslySetInnerHTML={{ __html: title }} />
      <br />
      <Banner source={featured_image.source} alt={featured_image.title} />

      <div
        className="content-post"
        dangerouslySetInnerHTML={{ __html: content }}
      />
    </div>
  );
}
