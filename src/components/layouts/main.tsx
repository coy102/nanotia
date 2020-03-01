import React from 'react';
import { Container } from 'react-bootstrap';
import Navbar from '../navbar';

interface Props {
  children: React.ReactNode;
}

export default function MainLayout(props: Props) {
  const { children } = props;
  return (
    <React.Fragment>
      <Navbar />
      <div style={{ marginTop: 100 }}>
        <Container>{children}</Container>
      </div>
    </React.Fragment>
  );
}
