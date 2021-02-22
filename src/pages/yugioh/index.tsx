import { Text, Container, Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'

const YuGiOhSetsPage = () => {
  return (
    <Layout>
      <Container maxW='7xl'>
        <Heading textAlign='left' mb={8} as='h1' size='lg'>
          Yu-Gi-Oh!
        </Heading>
        <Text>Soon.. 👀</Text>
      </Container>
    </Layout>
  )
}

export default YuGiOhSetsPage
