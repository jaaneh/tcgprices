import Image from 'next/image'
import { SimpleGrid, Box, Text, Container } from '@chakra-ui/react'

import Layout from '@components/Layout'
import MotionBox from '@components/MotionBox'
import { NextChakraLink } from '@components/NextChakraLink'
import { IGameSelection } from '@interfaces'

const gameSelection: IGameSelection[] = [
  {
    enabled: true,
    name: 'pokemon',
    displayName: 'Pokémon',
    path: '/pokemon',
    images: {
      cover: '/images/pokemon_cover.jpg'
    }
  },
  {
    enabled: false,
    name: 'yugioh',
    displayName: 'Yu-Gi-Oh!',
    path: '/yugioh',
    images: {
      cover: '/images/yugioh_cover.jpg'
    }
  }
]

const Index = () => {
  return (
    <Layout>
      <Container mt={8}>
        <SimpleGrid columns={{ sm: 2, md: 2 }} gap={12}>
          {gameSelection.map((game: IGameSelection) => (
            <NextChakraLink key={game.name} href={`${game.path}`} noUnderline>
              <MotionBox
                minW={0}
                minH={350}
                overflow='hidden'
                bg='gray.900'
                rounded='lg'
                shadow='xs'
                whileHover={{
                  scale: 1.03,
                  rotate: Math.random() < 0.5 ? -0.5 : 0.5
                }}
                whileTap={{ scale: 0.98 }}
                transition={{ ease: 'easeInOut', duration: 0.2 }}
              >
                <Image
                  src={game.images.cover}
                  alt={`${game.name} cover`}
                  loading='eager'
                  layout='responsive'
                  objectFit='cover'
                  width={225}
                  height={350}
                />
              </MotionBox>
              <Box mt={4} mb={2}>
                <Text
                  fontSize='xl'
                  fontWeight='semibold'
                  color='gray.200'
                  as='h3'
                >
                  {game.displayName}
                </Text>
              </Box>
            </NextChakraLink>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default Index
