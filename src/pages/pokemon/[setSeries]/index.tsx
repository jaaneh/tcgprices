import { GetStaticPaths, GetStaticProps } from 'next'
import Image from 'next/image'
import { SimpleGrid, Box, Text, Container, Heading } from '@chakra-ui/react'

import Layout from '@components/Layout'
import MotionBox from '@components/MotionBox'
import { NextChakraLink } from '@components/NextChakraLink'

import { getSetSeries, getSetSeriesPaths } from '@utils/paths'

import { ICustomPokemonSet } from '@interfaces'

const PokemonSetName = ({ sets }: { sets: ICustomPokemonSet[] }) => {
  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Heading textAlign='left' mb={8} as='h1' size='lg'>
          {sets[0].series}
        </Heading>
        <SimpleGrid columns={{ sm: 2, md: 4, lg: 5, xl: 6 }} gap={6}>
          {sets.map((set: ICustomPokemonSet) => (
            <NextChakraLink
              key={set.id}
              href={`/pokemon/${set.seriesPath}/${set.namePath}`}
              noUnderline
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
                      loading='eager'
                    />
                  </Box>
                </Box>
              </MotionBox>
            </NextChakraLink>
          ))}
        </SimpleGrid>
      </Container>
    </Layout>
  )
}

export default PokemonSetName

export const getStaticProps: GetStaticProps = async ({ params }: any) => {
  const data = getSetSeries(params.setSeries)

  return {
    props: {
      sets: data
    }
  }
}

export const getStaticPaths: GetStaticPaths = async () => {
  const allPaths = getSetSeriesPaths()

  return {
    paths: allPaths?.map(({ seriesPath }) => `/pokemon/${seriesPath}`) ?? [],
    fallback: false
  }
}
