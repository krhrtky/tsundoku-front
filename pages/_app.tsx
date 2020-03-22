import '@/style/global.scss';
import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { useBooksProvider } from '@/components/context';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  const BookProvider = useBooksProvider();

  return (
    <BookProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookProvider>
  );
}

export default App;
