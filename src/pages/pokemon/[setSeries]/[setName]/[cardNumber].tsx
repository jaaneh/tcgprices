import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { Box, Text, Container, Flex } from '@chakra-ui/react'

import Layout from '@components/Layout'
import { IPokemonCardPageContent } from '@interfaces'
import { upperFirst, CARD_PRINTING } from '@utils/helpers'
import { getSetIdsByPaths } from '@utils/paths'

const PokemonSingleCardPage = ({ card }: IPokemonCardPageContent) => {
  const renderPrices = prices => {
    return Object.keys(prices).map((item, index) => (
      <Box key={index}>
        <Text as='h3' fontSize='lg'>
          {upperFirst(CARD_PRINTING[item])}
        </Text>
        <Text fontSize='md'>
          Market price: ${prices[item].market.toFixed(2)}
        </Text>
      </Box>
    ))
  }

  if (!card) {
    return (
      <Layout>
        <Text fontSize='lg' fontWeight='medium' color='gray.600'>
          No card..
        </Text>
      </Layout>
    )
  }

  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Flex
          direction={{
            base: 'column',
            sm: 'row'
          }}
        >
          <Box
            width={{
              base: '100%',
              sm: '40%',
              md: '33.3%',
              lg: '25%'
            }}
          >
            <Box w='100%'>
              <Image
                src={card.images.large ?? '/images/pokemon/card_back.png'}
                alt={card.name}
                loading='eager'
                layout='responsive'
                width={100}
                height={139}
              />
            </Box>
          </Box>
          <Flex
            direction='column'
            pl={{ base: 1, sm: 6 }}
            pt={{ base: 6, sm: 0 }}
          >
            <Text fontSize='3xl' fontWeight='semibold' color='gray.200'>
              {card.name}
            </Text>
            <Text fontSize='lg' color='gray.200' pb={4}>
              {card.rarity}
            </Text>
          </Flex>
        </Flex>
      </Container>
    </Layout>
  )
}

export default PokemonSingleCardPage

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req
}) => {
  const { setSeries, setName, cardNumber } = query
  const setId = getSetIdsByPaths(setSeries, setName)

  let content = null

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
    `${hostname}/api/v1/pokemon/card/${setId}/${cardNumber}`,
    options
  )
  const json = await response.json()
  if (json.success && json.data) {
    content = json.data[0]
  }

  return {
    props: {
      card: content
    }
  }
}
