import React from 'react';
import Head from 'next/head';

import { Header } from '../components/Header';

import { GlobalStyle } from '../styles/global';

function MyApp({ Component, pageProps }) {
  return (
    <>
      <GlobalStyle/>
      <div>
        <main>
          <Header/>
          <Head>
              <title>Netshow.me News</title>
          </Head>
          <Component {...pageProps} />
        </main>
      </div>
     </>
  );
}

export default MyApp
