import React, { useState } from 'react'
import { useRouter } from 'next/router'
// import Image from 'next/image'
import { signOut, useSession } from 'next-auth/client'

import {
  useColorModeValue,
  Box,
  Heading,
  Flex,
  Text,
  Button,
  Stack,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Img
} from '@chakra-ui/react'

// import { HiChevronDown } from 'react-icons/hi'

import { NextChakraLink } from '@components/NextChakraLink'
// import DarkModeSwitch from '../DarkModeSwitch'

const MenuItems = ({ children }) => (
  <Text mt={{ base: 4, md: 0 }} mx={4} display='block'>
    {children}
  </Text>
)

const Header = props => {
  const [show, setShow] = useState(false)
  const router = useRouter()
  const [session] = useSession()

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

      {!session && (
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
            onClick={() => router.push('/auth/signin')}
          >
            Sign in
          </Button>
        </Stack>
      )}
      {session && (
        <Box
          direction='row'
          spacing={2}
          display={{ base: show ? 'flex' : 'none', md: 'flex' }}
          mt={{ base: 4, md: 0 }}
        >
          <Menu>
            {({ isOpen }) => (
              <>
                <MenuButton isActive={isOpen} as={Button}>
                  <Flex justifyContent='center' alignItems='center'>
                    <Box boxSize='24px' mr={2} rounded='full'>
                      <Img
                        src={session.account?.images?.profile_picture}
                        alt={session.account?.username}
                        objectFit='contain'
                        rounded='full'
                      />
                    </Box>
                    <Text>{session.account?.username}</Text>
                  </Flex>
                </MenuButton>
                <MenuList>
                  <NextChakraLink href='/profile' noUnderline>
                    <MenuItem>Profile</MenuItem>
                  </NextChakraLink>
                  <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
                </MenuList>
              </>
            )}
          </Menu>
        </Box>
      )}
    </Flex>
  )
}

export default Header
