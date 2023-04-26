/**
 * @author: puji ermanto <pujiermanto@gmail.com>
 * @return: Hydration
 */
import * as React from 'react';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';
import { appWithI18Next, useSyncLanguage } from 'ni18n';
import { ni18nConfig } from '@/ni18n.config';
import {
  Hydrate,
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { AnyObject } from '@/types';
import '@/styles/tailwind.css';
import '@/styles/scss/main.scss';

export type NextPageWithLayout<P = AnyObject, IP = P> = NextPage<P, IP> & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

type AppPropsWithLayout = AppProps & {
  Component?: NextPageWithLayout;
};

function App({ Component, pageProps }: AppPropsWithLayout) {
  const getLayout = Component?.getLayout ?? ((page) => page);
  const locale: string | any =
    typeof window !== 'undefined' && localStorage.getItem('locale');

  useSyncLanguage(locale);

  const [queryClient] = React.useState(() => new QueryClient());
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        {/* <Component {...pageProps} /> */}
        {getLayout(<Component {...pageProps} />)}
        <ReactQueryDevtools />
      </Hydrate>
    </QueryClientProvider>
  );
}
export default appWithI18Next(App, ni18nConfig);
