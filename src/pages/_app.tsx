import '../styles/globals.less';
import type { AppProps } from 'next/app';

import { Default } from '../components/_layouts';

import AppProviders from '../contexts';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <AppProviders>
      <Default>
        <Component {...pageProps} />
      </Default>
    </AppProviders>
  );
}

export default MyApp;
