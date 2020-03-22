import '@/style/global.scss';
import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { BooksProvider } from '@/components/context';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <BooksProvider>
      <style jsx global>{`
        html,
        body {
          padding: 0;
          margin: 0;
          font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
            Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue,
            sans-serif;
        }

        * {
          box-sizing: border-box;
        }
      `}</style>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </BooksProvider>
  );
}

export default App;
