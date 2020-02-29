import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { Post } from '@modules/posts/types/post';
import ItemImage from './ItemImage';
import ItemBody from './ItemBody';

interface Props {
  posts: Array<Post>;
}

export default function(props: Props) {
  const { posts } = props;

  return (
    <React.Fragment>
      {posts && (
        <div>
          {posts.map(post => (
            <Row key={post.slug} style={{ marginBottom: 40 }}>
              <Col md={4}>
                <ItemImage image={post.featured_image} slug={post.slug} />
              </Col>
              <Col md={8}>
                <ItemBody
                  date={post.date}
                  excerpt={post.excerpt}
                  title={post.title}
                  slug={post.slug}
                  authorAvatar={post.author.avatar_url}
                  authorName={post.author.display_name}
                />
              </Col>
            </Row>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
