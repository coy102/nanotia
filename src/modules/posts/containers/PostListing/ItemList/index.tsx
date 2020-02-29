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
            <Row key={post.slug} style={{ marginBottom: 20 }}>
              <Col md={3}>
                <ItemImage image={post.featured_image} />
              </Col>
              <Col md={8}>
                <ItemBody
                  date={post.date}
                  excerpt={post.excerpt}
                  title={post.title}
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
