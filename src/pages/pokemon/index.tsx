import * as React from 'react'
import { SimpleGrid, Container, Heading } from '@chakra-ui/react'

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
