import { useState } from 'react'
import {
  useColorModeValue,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Stack
} from '@chakra-ui/react'
import { NextChakraLink } from '@components/NextChakraLink'

import DarkModeSwitch from '../DarkModeSwitch'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mx={4} display='block'>
    {children}
  </Text>
)

const Header = props => {
  const [show, setShow] = useState(false)
  const handleToggle = () => setShow(!show)

  return (
    <Flex
      as='nav'
      align='center'
      pos='relative'
      justify='space-between'
      wrap='wrap'
      padding='1.5rem'
      boxShadow={{ base: show ? 'lg' : 'none', md: 'none' }}
      {...props}
    >
      <Flex align='center' mr={5}>
        <NextChakraLink href='/'>
          <Heading as='h1' size='lg' letterSpacing={'-.1rem'}>
            TCG site
          </Heading>
        </NextChakraLink>
      </Flex>

      <Box display={{ base: 'block', md: 'none' }} onClick={handleToggle}>
        <svg
          fill={useColorModeValue('black', 'white')}
          width='24px'
          viewBox='0 0 20 20'
          xmlns='http://www.w3.org/2000/svg'
        >
          <title>Menu</title>
          <path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
        </svg>
      </Box>

      <Box
        display={{ base: show ? 'block' : 'none', md: 'flex' }}
        width={{ base: 'full', md: 'auto' }}
        alignItems='center'
        flexGrow={1}
      >
        <MenuItems>
          <NextChakraLink href='/pokemon'>Pokémon</NextChakraLink>
        </MenuItems>
        <MenuItems>
          <NextChakraLink href='/yugioh'>Yu-Gi-Oh!</NextChakraLink>
        </MenuItems>
      </Box>

      <Stack
        direction='row'
        spacing={2}
        display={{ base: show ? 'flex' : 'none', md: 'flex' }}
        mt={{ base: 4, md: 0 }}
      >
        <Button
          variant='outline'
          paddingX={8}
          paddingY={4}
          rounded={12}
          disabled={true}
        >
          Sign in
        </Button>
      </Stack>
    </Flex>
  )
}

export default Header
