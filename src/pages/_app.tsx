import React from 'react';
import { AppProps } from 'next/app';
import { Layout } from '@/components/Layout';
import { BooksProvider, ConfirmModalProvider } from '@/components/context';
import '@/libs/Auth/Firebase';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <BooksProvider>
      <ConfirmModalProvider>
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
      </ConfirmModalProvider>
    </BooksProvider>
  );
}

export default App;
