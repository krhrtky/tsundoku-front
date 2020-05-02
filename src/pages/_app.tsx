import React from 'react';
import { AppProps } from 'next/app';
import '@/libs/Auth/Firebase';
import { Layout } from '@/components/Layout';
import { BooksProvider, ConfirmModalProvider } from '@/components/context';
import { UserContext } from '@/components/hooks';

function App({ Component, pageProps }: AppProps): React.ReactElement {
  return (
    <UserContext>
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
    </UserContext>
  );
}

export default App;
