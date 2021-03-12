import Document, { Head, Html, Main, NextScript } from 'next/document';
import ThemeScriptTag from '../src/setTheme';

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx);
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang='en'>
        <Head>
          <link rel='preconnect' href='https://fonts.gstatic.com' />

          <meta charSet='UTF-8' />
          <ThemeScriptTag />
        </Head>
        <body className='bg-gray-300 dark:bg-gray-800'>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
