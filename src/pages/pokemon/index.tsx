import { Fragment } from 'react'
import { SimpleGrid, Container, Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'
import PokemonHomeSeriesView from '@components/Pokemon/Home'
import { NextChakraLink } from '@components/NextChakraLink'
import Breadcrumb from '@components/Breadcrumb'

import { IBreadcrumbItem, ICustomPokemonSet } from '@interfaces'
import allSeries from '@data/pokemon/series.json'

const PokemonSetsPage = () => {
  const series = allSeries.series

  const breadcrumbs: IBreadcrumbItem[] = [
    {
      href: '/pokemon',
      text: 'Pokémon',
      isCurrentPage: true
    }
  ]

  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Breadcrumb items={breadcrumbs} />
        <Heading textAlign='left' mb={8} as='h1' size='lg'>
          Pokémon Sets
        </Heading>
        {series.map((sets: any) => (
          <Fragment key={sets.map((set: ICustomPokemonSet) => set.id)}>
            <NextChakraLink
              href={`/pokemon/${sets[0]?.seriesPath}`}
              _focus={{ boxShadow: 'none' }}
              noUnderline
            >
              <Heading textAlign='left' mt={8} as='h3' size='md'>
                {sets[0]?.series || null}
              </Heading>
            </NextChakraLink>
            <SimpleGrid columns={{ sm: 2, md: 3, xl: 4 }} gap={6} py={6}>
              <PokemonHomeSeriesView sets={sets} />
            </SimpleGrid>
          </Fragment>
        ))}
      </Container>
    </Layout>
  )
}

export default PokemonSetsPage
