import { AppProps } from 'next/app'
import { Provider as NextAuthProvider } from 'next-auth/client'
import { ChakraProvider } from '@chakra-ui/react'

import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

import theme from '../theme'

function MyApp({ Component, pageProps, router }: AppProps) {
  return (
    <NextAuthProvider session={pageProps.session}>
      <ChakraProvider resetCSS theme={theme}>
        <ToastContainer
          position='bottom-right'
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
        />
        <Component {...pageProps} key={router.route} />
      </ChakraProvider>
    </NextAuthProvider>
  )
}

export default MyApp
