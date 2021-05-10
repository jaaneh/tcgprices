import Image from 'next/image'
import { Box, Text, useColorMode } from '@chakra-ui/react'

import NextChakraLink from '@components/NextChakraLink'
import MotionBox from '@components/MotionBox'
import { ICustomPokemonSet } from '@interfaces'

const PokemonHomeView = ({ sets }) => {
  const { colorMode } = useColorMode()

  return (
    <>
      {sets.map((set: ICustomPokemonSet) => (
        <NextChakraLink
          key={set.id}
          href={`/pokemon/${set.seriesPath}/${set.namePath}`}
          noUnderline
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
            borderColor={colorMode === 'light' ? 'gray.200' : 'gray.700'}
            whileHover={{
              scale: 1.03,
              rotate: Math.random() < 0.5 ? -0.35 : 0.35
            }}
            whileTap={{ scale: 0.98 }}
            transition={{ ease: 'easeInOut', duration: 0.2 }}
          >
            <Box
              bg={colorMode === 'light' ? 'gray.300' : 'gray.700'}
              w='3.6rem'
              fontWeight='medium'
              roundedLeft='md'
            >
              <Box w='100%' p={2}>
                <Image
                  src={set.images.symbol}
                  alt={set.name}
                  objectFit='contain'
                  layout='responsive'
                  width={12}
                  height={12}
                  priority={true}
                />
              </Box>
            </Box>

            <Box
              display='flex'
              flex='1'
              alignItems='center'
              justifyContent='between'
              bg={colorMode === 'light' ? 'gray.50' : 'gray.900'}
              roundedRight='md'
            >
              <Box flex='1' px={4} py={2} fontSize='sm'>
                <Text
                  color={colorMode === 'light' ? 'gray.600' : 'gray.400'}
                  fontWeight='medium'
                  noOfLines={1}
                >
                  {set.name}
                </Text>
                <Text color='gray.500' isTruncated>
                  {set.total} cards
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
