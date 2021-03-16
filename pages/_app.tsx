import { AppProps } from 'next/app'
import Head from 'next/head';
import 'antd/dist/antd.css';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <meta charSet="utf-8"/>
        <title>kakao</title>
      </Head>
      <Component {...pageProps}/>
    </>
    );
}

export default MyApp
