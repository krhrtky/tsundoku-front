import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { useBooksContext } from '@/components/context';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, BookProvider] = useBooksContext();

  return (
    <BookProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BookProvider>
  );
}

export default App;
