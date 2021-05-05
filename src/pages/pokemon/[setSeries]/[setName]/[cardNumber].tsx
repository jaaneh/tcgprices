import { GetServerSideProps } from 'next'
import { useRouter } from 'next/router'
import Image from 'next/image'
import { Box, Text, Container, Flex, Button } from '@chakra-ui/react'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'

import Layout from '@components/Layout'
import Breadcrumb from '@components/Breadcrumb'

import { IBreadcrumbItem, IPokemonCard } from '@interfaces'
import { upperFirst, createURL, CARD_PRINTING } from '@utils/helpers'
import { getSetIdsByPaths } from '@utils/paths'

const PokemonSingleCardPage = ({
  session,
  card
}: {
  session: any
  card: IPokemonCard
}) => {
  const router = useRouter()

  const saveCard = async () => {
    const data = {
      card: {
        id: card.id,
        name: card.name,
        number: card.number,
        path: `/pokemon/${createURL([
          card.set.series,
          card.set.name,
          card.number
        ])}`,
        set: card.set,
        prices: card.tcgplayer.prices
      }
    }

    const res = await fetch('/api/v1/user/collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    console.log(json)
  }

  const renderPrices = prices => {
    return Object.keys(prices).map((item, index) => (
      <Box key={index} pb={2}>
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
        <Text fontSize='lg' mt={4} mb={2} fontWeight='medium' color='gray.200'>
          No card..
        </Text>
        <Button onClick={() => router.push('/')}>Back Home</Button>
      </Layout>
    )
  }

  const breadcrumbs: IBreadcrumbItem[] = [
    {
      href: '/pokemon',
      text: 'Pokémon'
    },
    {
      href: `/pokemon/${createURL([card.set.series])}`,
      text: card.set.series
    },
    {
      href: `/pokemon/${createURL([card.set.series, card.set.name])}`,
      text: card.set.name
    },
    {
      href: `/pokemon/${createURL([
        card.set.series,
        card.set.name,
        card.number
      ])}`,
      text: card.name,
      isCurrentPage: true
    }
  ]

  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Breadcrumb items={breadcrumbs} />
        <Flex direction={{ base: 'column', sm: 'row' }}>
          <Box width={{ base: '100%', sm: '40%', md: '33.3%', lg: '25%' }}>
            <Box w='100%'>
              <Image
                src={card.images?.large || '/images/pokemon/card_back.png'}
                alt={card.name}
                priority={true}
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
            <Box mt={4}>
              <Text fontSize='2xl' fontWeight='semibold' color='gray.200'>
                TCGplayer prices
              </Text>
              {renderPrices(card.tcgplayer.prices)}
            </Box>
          </Flex>
        </Flex>
        {session && (
          <Flex direction='column' pl={0} pt={{ base: 6, sm: 0 }}>
            <Box mt={8}>
              <Button width={{ base: 'full', sm: 200 }} onClick={saveCard}>
                Save
              </Button>
            </Box>
          </Flex>
        )}
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
  const session: Session | null = await getSession({ req })

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
  if (json.success && json.data.length) {
    content = json.data[0]
  }

  return {
    props: {
      session,
      card: content
    }
  }
}
