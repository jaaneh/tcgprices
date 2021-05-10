import { Text, Container, Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'

const YuGiOhSetsPage = () => {
  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Heading textAlign='left' as='h1' size='lg' mb={8}>
          Yu-Gi-Oh!
        </Heading>
        <Text>Soon.. 👀</Text>
      </Container>
    </Layout>
  )
}

export default YuGiOhSetsPage
