import React from 'react';
import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet } from 'styled-components';

type Props = {
  // FIXME: define styleTags.
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  styleTags: any;
};

// FIXME: remove ignore annotation.
// eslint-disable-next-line tsc/config
export default class MyDocument extends Document<Props> {
  // FIXME: define return type.
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  static getInitialProps({ renderPage }: DocumentContext) {
    const sheet = new ServerStyleSheet();

    // FIXME: difine return type.
    // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
    const page = renderPage(App => props =>
      sheet.collectStyles(<App {...props} />)
    );

    const styleTags = sheet.getStyleElement();

    return { ...page, styleTags };
  }

  // FIXME: define return type.
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <Html lang="ja">
        <Head>
          <title>Tsundoku</title>
          <meta charSet="utf-8" />
          {this.props.styleTags}
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
