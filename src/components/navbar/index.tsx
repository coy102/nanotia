import React from 'react';
import { Navbar, Container } from 'react-bootstrap';
import './style.css';

export default () => (
  <Navbar fixed="top" className="light-nav">
    <Container>
      <Navbar.Brand href="/">
        <img
          alt=""
          src="/techinasia.png"
          width="100"
          height="30"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
    </Container>
  </Navbar>
);
