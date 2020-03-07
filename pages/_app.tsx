import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';

function MyApp({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}

export default MyApp;
