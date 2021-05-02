import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'

import theme from '../theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider resetCSS theme={theme}>
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
