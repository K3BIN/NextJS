import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return {...initialProps}
  }

  render() {
    return (
      <Html>
        <Head>
          <title> My Portfolio </title>
          <link rel="shortcut icon" href="icon.jpg" />
          <meta
            name="description"
            content="Kevin Hernández Portfolio website"
          />
        </Head>
        <body>
          
            <Main />
            <NextScript />
          
        </body>
      </Html>
    );
  }
}

export default MyDocument
