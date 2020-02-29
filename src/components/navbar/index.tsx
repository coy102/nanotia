import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './style.css';

export default () => (
  <Navbar fixed="top" className="light-nav">
    <Container>
      <Navbar.Brand href="/">Nano TIA</Navbar.Brand>
    </Container>
  </Navbar>
);
