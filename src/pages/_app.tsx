import '@fontsource/roboto/300.css'
import '@fontsource/roboto/400.css'
import '@fontsource/roboto/500.css'
import '@fontsource/roboto/700.css'

import { Roboto } from '@next/font/google'

import '../styles/globals.css'

import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client'
import type { AppProps } from 'next/app'
import { Provider } from 'react-redux'

const client = new ApolloClient({
  uri: 'https://rickandmortyapi.com/graphql',
  cache: new InMemoryCache(),
})

import store from '../store'

const roboto = Roboto({
  weight: ['400', '700'],
  subsets: ['latin'],
})

export default function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ApolloProvider client={client}>
      <Provider store={store}>
        <main className={roboto.className}>
          <Component {...pageProps} />
        </main>
      </Provider>
    </ApolloProvider>
  )
}
