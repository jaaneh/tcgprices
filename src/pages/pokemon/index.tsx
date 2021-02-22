import * as React from 'react'
import { SimpleGrid, Box, Text, Container, Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'
import PokemonHomeSeriesView from '@components/Pokemon/Home'

import { ICustomPokemonSet } from '@interfaces'
import { series } from '@data/pokemon/series.json'

const PokemonSetsPage = () => {
  series.reverse()

  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Heading textAlign='left' mb={8} as='h1' size='lg'>
          Pokémon Sets
        </Heading>
        {series.map((sets: any) => (
          <React.Fragment key={sets.map((set: ICustomPokemonSet) => set.id)}>
            <Heading textAlign='left' mt={8} as='h3' size='md'>
              {sets[0].series}
            </Heading>
            <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} gap={6} py={6}>
              <PokemonHomeSeriesView sets={sets.reverse()} />
            </SimpleGrid>
          </React.Fragment>
        ))}
      </Container>
    </Layout>
  )
}

export default PokemonSetsPage

{
  /* {sets.map(set => (
  <NextChakraLink
    key={set.id}
    href={`/pokemon/${set.seriesPath}/${set.namePath}`}
    style={{ textDecoration: 'none' }}
  >
    <MotionBox
      minH='100%'
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
      <Box textAlign='center' p={4}>
        <Text
          fontSize='sm'
          fontWeight='semibold'
          color='gray.400'
          pb={4}
          as='h3'
        >
          {set.name}
        </Text>
        <Box w='100%'>
          <Image
            src={set.images.logo}
            alt={set.name}
            objectFit='contain'
            layout='responsive'
            width={100}
            height={40}
          />
        </Box>
      </Box>
    </MotionBox>
  </NextChakraLink>
))} */
}
