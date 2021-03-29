import { GetServerSideProps } from 'next'
import Image from 'next/image'
import {
  SimpleGrid,
  Box,
  Text,
  Container,
  Heading,
  Flex
} from '@chakra-ui/react'

import { IPokemonCard, IPokemonSetPageContent } from '@interfaces'
import Layout from '@components/Layout'
import { NextChakraLink } from '@components/NextChakraLink'
import { cleanName } from '@utils/helpers'
import { getSetIdsByPaths } from '@utils/paths'

const PokemonSingleSetPage = ({ content }: IPokemonSetPageContent) => {
  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Heading textAlign='left' mb={8} as='h1' size='lg'>
          {content[0].set.series}: {content[0].set.name}
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 4, lg: 5, xl: 6 }} gap={6}>
          {content.map((card: IPokemonCard) => (
            <NextChakraLink
              key={card.id}
              href={`/pokemon/${cleanName(card.set.series)}/${cleanName(
                card.set.name
              )}/${card.number}`}
              style={{ textDecoration: 'none' }}
            >
              <Box
                minW={0}
                overflow='hidden'
                bg='gray.900'
                rounded='lg'
                shadow='xs'
                transition='all 0.3s ease'
                _hover={{
                  shadow: 'lg',
                  transform: 'translateY(-4px)',
                  bg: 'gray.800'
                }}
              >
                <Flex alignItems='center' p={4}>
                  <Box w='100%'>
                    <Text
                      fontSize='sm'
                      fontWeight='semibold'
                      color='gray.200'
                      pb={2}
                      as='h3'
                    >
                      {card.name}
                    </Text>
                    <Image
                      src={card.images.small}
                      alt={card.name}
                      loading='eager'
                      layout='responsive'
                      width={100}
                      height={139}
                    />
                  </Box>
                </Flex>
              </Box>
            </NextChakraLink>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default PokemonSingleSetPage

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req
}) => {
  const { setSeries, setName } = query
  let content = null

  const setId = getSetIdsByPaths(setSeries, setName)

  if (!setId) {
    return {
      props: {},
      redirect: {
        destination: '/pokemon',
        permanent: false
      }
    }
  }

  const hostname = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const options = { headers: { cookie: req.headers.cookie } }
  const response = await fetch(
    `${hostname}/api/v1/pokemon/cards/${setId}`,
    options
  )
  const json = await response.json()
  if (json.success && json.data) {
    content = json.data
  }

  return {
    props: {
      content
    }
  }
}