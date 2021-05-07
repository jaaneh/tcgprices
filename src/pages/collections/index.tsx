import { Container, Flex, Heading, Text } from '@chakra-ui/react'

import Layout from '@components/Layout'

const CardCollectionsPage = () => {
  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Flex mb={8}>
          <Heading textAlign='left' as='h1' size='lg' flexGrow={1}>
            Collections
          </Heading>
        </Flex>
        <Text>A place to look at public collections.</Text>
      </Container>
    </Layout>
  )
}

export default CardCollectionsPage
