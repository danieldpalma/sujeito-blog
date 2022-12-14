import { AppProps } from 'next/app';

import '../styles/global.scss';

import { Header } from '../pages/components/Header';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <Header></Header>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
