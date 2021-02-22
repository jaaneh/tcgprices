import { Flex } from '@chakra-ui/react'
import Header from '@components/Header'
import Footer from '@components/Footer'

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <Flex
        direction='column'
        alignItems='center'
        justifyContent='flex-start'
        as='main'
        minH='calc(100vh - 90px)'
      >
        {children}
      </Flex>
      <Footer />
    </>
  )
}

export default Layout
