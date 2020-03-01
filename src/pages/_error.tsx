import React from 'react';
import MainLayout from '@components/layouts/main';
import ErrorMessage from '@components/result/ErrorMessage';

function Error({ statusCode }: any) {
  return (
    <MainLayout>
      <ErrorMessage
        message={
          statusCode ? `An error ${statusCode} ` : 'An error occurred on client'
        }
      />
    </MainLayout>
  );
}

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error;
