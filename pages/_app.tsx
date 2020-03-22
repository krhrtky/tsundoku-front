import '@/style/global.scss';
import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { BooksProvider } from '@/components/context';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <BooksProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BooksProvider>
  );
}

export default App;
