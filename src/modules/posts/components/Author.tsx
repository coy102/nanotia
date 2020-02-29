import React from 'react';
import { Image } from 'react-bootstrap';
interface Props {
  name: string;
  date: string;
  authorAvatar: string;
}

export default function Author({ date, name, authorAvatar }: Props) {
  return (
    <React.Fragment>
      <Image
        src={authorAvatar}
        style={{ width: 30, height: 30 }}
        roundedCircle
        alt={name}
      />

      <span> · </span>
      <small>{name}</small>
      <span> · </span>
      <small>{date}</small>
    </React.Fragment>
  );
}
