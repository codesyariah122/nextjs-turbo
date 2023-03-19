import * as React from 'react'
import '@/styles/tailwind.css'
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from '@tanstack/react-query'

import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = React.useState(() => new QueryClient())
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Component {...pageProps}/>
      </Hydrate>
    </QueryClientProvider>
  )
}
