import React from 'react';
import Document, {
  Html,
  Main,
  NextScript,
  DocumentContext
} from 'next/document';
import { ServerStyleSheet as StyledServerStyleSheet } from 'styled-components';
import { ServerStyleSheets as MaterialServerStyleSheets } from '@material-ui/core';

export default class MyDocument extends Document<{ styles: JSX.Element }> {
  static async getInitialProps(ctx: DocumentContext) {
    const styledSheet = new StyledServerStyleSheet();
    const materialSheet = new MaterialServerStyleSheets();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: App => props =>
            materialSheet.collect(styledSheet.collectStyles(<App {...props} />))
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: [
          <React.Fragment key="styles">
            {initialProps.styles}
            {materialSheet.getStyleElement()}
            {styledSheet.getStyleElement()}
          </React.Fragment>
        ]
      };
    } finally {
      styledSheet.seal();
    }
  }
  // FIXME: define return type.
  // eslint-disable-next-line @typescript-eslint/explicit-function-return-type
  render() {
    return (
      <Html lang="ja">
        <head>
          <title>Tsundoku</title>
          <meta charSet="utf-8" />
          {this.props.styles}
        </head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
