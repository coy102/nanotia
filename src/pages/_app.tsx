import React from 'react';
import App from 'next/app';
import withRedux from 'next-redux-wrapper';
import withReduxSaga from 'next-redux-saga';
import { Provider } from 'react-redux';
import initStore from '@services/redux_setup/rootStore';

import 'bootstrap/dist/css/bootstrap.min.css';

class MainApp extends App {
  static async getInitialProps({ Component, ctx }: any) {
    let pageProps = {};
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps({ ctx });
    }
    return { pageProps };
  }

  render() {
    const { Component, pageProps, store } = (this as any).props;

    return (
      <React.Fragment>
        <Provider store={store}>
          <Component {...pageProps} />
        </Provider>
      </React.Fragment>
    );
  }
}

export default withRedux(initStore)(withReduxSaga(MainApp));
