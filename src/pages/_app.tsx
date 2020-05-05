import React from 'react';
import { AppProps } from 'next/app';
import { SnackbarProvider } from 'notistack';
import { Application } from '@/app';
import { Layout } from '@/components/Layout';
import { BooksProvider, ConfirmModalProvider } from '@/components/context';
import { UserProvider } from '@/components/hooks';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles({
  anchorOriginTopRight: {
    top: '60px'
  }
});

function App({ Component, pageProps }: AppProps): React.ReactElement {
  Application.initialize();
  const classes = useStyles();
  return (
    <SnackbarProvider
      maxSnack={3}
      anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
      classes={{ ...classes }}
    >
      <UserProvider>
        <BooksProvider>
          <ConfirmModalProvider>
            <style jsx global>{`
              html,
              body {
                padding: 0;
                margin: 0;
                font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto,
                  Oxygen, Ubuntu, Cantarell, Fira Sans, Droid Sans,
                  Helvetica Neue, sans-serif;
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
      </UserProvider>
    </SnackbarProvider>
  );
}

export default App;
