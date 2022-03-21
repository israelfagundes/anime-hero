import '../styles/globals.less';
import type { AppProps } from 'next/app';
import NextNProgress from 'nextjs-progressbar';

import { Default } from '../components/_layouts';

import AppProviders from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Default>
        <>
          <NextNProgress color="#FF0167" />
          <Component {...pageProps} />
        </>
      </Default>
    </AppProviders>
  );
}

export default MyApp;
