import React from 'react';
import { Alert, Button } from 'react-bootstrap';

interface Props {
  message: string;
  onClick: any;
  buttonLabel: string;
}

export default function ErrorMessage(props: Props) {
  const { buttonLabel, message, onClick } = props;

  return (
    <Alert variant="danger">
      {message} -{' '}
      <Button variant="danger" onClick={() => onClick}>
        {buttonLabel}
      </Button>
    </Alert>
  );
}
