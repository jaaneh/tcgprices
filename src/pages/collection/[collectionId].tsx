import * as React from 'react'
import { GetServerSideProps } from 'next'
import {
  Container,
  Flex,
  Heading,
  Text,
  SimpleGrid,
  Box
} from '@chakra-ui/react'

import Layout from '@components/Layout'
import { ICardCollectionCard } from '@interfaces'

const CardCollectionPage = ({ collection }) => {
  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Flex mb={8}>
          <Heading textAlign='left' as='h1' size='lg' flexGrow={1}>
            {collection?.name ?? 'My Collection'}
          </Heading>
        </Flex>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl: 4 }} gap={10}>
          {collection.cards.length ? (
            collection.cards.map((card: ICardCollectionCard, i) => (
              <Box key={i}>{card.name}</Box>
            ))
          ) : (
            <Text fontSize='md'>No cards..</Text>
          )}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default CardCollectionPage

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req
}) => {
  const { collectionId } = query
  let collection = null

  const uuidRegex = new RegExp(
    /^[0-9A-F]{8}-[0-9A-F]{4}-[4][0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i
  )

  const hostname = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const options = { headers: { cookie: req.headers.cookie } }
  const response = await fetch(
    `${hostname}/api/v1/collections/${collectionId}`,
    options
  )
  const json = await response.json()
  if (json.success && json.data) {
    collection = json.data
  }

  if (!uuidRegex.test(collectionId.toString()) || !collection) {
    return {
      props: {},
      redirect: {
        destination: '/',
        permanent: false
      }
    }
  }

  return {
    props: {
      collection
    }
  }
}
