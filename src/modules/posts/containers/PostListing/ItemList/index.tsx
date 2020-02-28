import React from 'react';
import { Card } from 'react-bootstrap';

import { Post } from '@modules/posts/types/post';

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
            <Card key={post.guid} style={{ marginBottom: 10 }}>
              <Card.Body dangerouslySetInnerHTML={{ __html: post.title }} />
            </Card>
          ))}
        </div>
      )}
    </React.Fragment>
  );
}
