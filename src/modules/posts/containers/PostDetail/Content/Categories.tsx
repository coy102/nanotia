import React from 'react';
import Breadcrumb from 'react-bootstrap/Breadcrumb';
import { Category } from '@modules/posts/types/post';

interface Props {
  categories: Array<Category>;
}

export default function Categories({ categories }: Props) {
  return (
    <div>
      <Breadcrumb>
        {categories.map(item => (
          <Breadcrumb.Item
            key={item.id}
            href={`https://id.techinasia.com/category/${item.slug}`}>
            {item.name}
          </Breadcrumb.Item>
        ))}
      </Breadcrumb>
    </div>
  );
}
