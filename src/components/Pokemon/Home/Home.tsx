import Image from 'next/image'
import { Box, Text } from '@chakra-ui/react'

import { NextChakraLink } from '@components/NextChakraLink'
import MotionBox from '@components/MotionBox'
import { ICustomPokemonSet } from '@interfaces'

const PokemonHomeViewOld = ({ sets }) => {
  const allSets = sets.sort((a, b) => {
    const dateOne = new Date(a.releaseDate).getTime()
    const dateTwo = new Date(b.releaseDate).getTime()
    if (dateOne < dateTwo) return 1
    if (dateOne > dateTwo) return -1
    return 0
  })

  return (
    <>
      {allSets.map((set: ICustomPokemonSet) => (
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
      ))}
    </>
  )
}

const PokemonHomeView = ({ sets }) => {
  return (
    <>
      {sets.map((set: ICustomPokemonSet) => (
        <NextChakraLink
          key={set.id}
          href={`/pokemon/${set.seriesPath}/${set.namePath}`}
          style={{ textDecoration: 'none' }}
        >
          <MotionBox
            minH='100%'
            display='flex'
            alignItems='center'
            justifyContent='center'
            overflow='hidden'
            bg='gray.900'
            rounded='lg'
            shadow='xs'
            border='1px'
            borderColor='gray.700'
            whileHover={{
              scale: 1.03,
              rotate: Math.random() < 0.5 ? -0.35 : 0.35
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
          >
            <Box bg='gray.700' w='3.6rem' fontWeight='medium' roundedLeft='md'>
              <Box w='100%' p={2}>
                <Image
                  src={set.images.symbol}
                  alt={set.name}
                  objectFit='contain'
                  layout='responsive'
                  width={12}
                  height={12}
                />
              </Box>
            </Box>

            <Box
              display='flex'
              flex='1'
              alignItems='center'
              justifyContent='between'
              bg='gray.900'
              roundedRight='md'
            >
              <Box flex='1' px={4} py={2} fontSize='sm'>
                <Text color='gray.400' fontWeight='medium' isTruncated>
                  {set.name}
                </Text>
                <Text color='gray.500' isTruncated>
                  18 kort
                </Text>
              </Box>
            </Box>
          </MotionBox>
        </NextChakraLink>
      ))}
    </>
  )
}

export default PokemonHomeView
