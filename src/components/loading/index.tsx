import React from 'react';
import { Spinner } from 'react-bootstrap';

export default function Loading() {
  return (
    <div style={{ textAlign: 'center', marginBottom: 20 }}>
      <Spinner animation="border" role="status">
        <span className="sr-only">Loading...</span>
      </Spinner>
    </div>
  );
}
