import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'

import {
  chakra,
  useDisclosure,
  Box,
  HStack,
  VStack,
  Flex,
  Button,
  IconButton,
  CloseButton,
  VisuallyHidden,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading,
  Icon,
  Portal
} from '@chakra-ui/react'

import { HiOutlineChevronDown } from 'react-icons/hi'
import { AiOutlineMenu } from 'react-icons/ai'

import { NextChakraLink } from '@components/NextChakraLink'

import SearchBar from '@components/Search'

const Header = () => {
  const router = useRouter()
  const [session] = useSession()
  const mobileNav = useDisclosure()

  const UserMenu = () => (
    <Menu>
      {({ isOpen }) => (
        <>
          <MenuButton isActive={isOpen} as={Button}>
            <Flex justifyContent='center' alignItems='center'>
              <Text mr={2}>{session.account?.username}</Text>
              <Avatar
                size='xs'
                name={session?.account?.username ?? 'User'}
                src={session?.account?.images?.profile_picture}
              />
            </Flex>
          </MenuButton>
          <Portal>
            <MenuList zIndex='100'>
              <NextChakraLink href='/profile' noUnderline>
                <MenuItem>Settings</MenuItem>
              </NextChakraLink>
              <NextChakraLink href='/collections/me' noUnderline>
                <MenuItem>My Collections</MenuItem>
              </NextChakraLink>
              <MenuItem onClick={() => signOut()}>Sign out</MenuItem>
            </MenuList>
          </Portal>
        </>
      )}
    </Menu>
  )

  return (
    <Box
      as='header'
      borderColor='gray.900'
      borderBottomWidth={1}
      w='full'
      px={{ base: 2, sm: 4 }}
      py={4}
      shadow='md'
    >
      <Flex alignItems='center' justifyContent='space-between' mx='auto'>
        <Flex alignItems='center'>
          <Box display={{ base: 'inline-flex', md: 'none' }} zIndex='50'>
            <VStack
              pos='absolute'
              top={0}
              left={0}
              right={0}
              display={mobileNav.isOpen ? 'flex' : 'none'}
              flexDirection='column'
              p={2}
              pb={4}
              m={2}
              bg='brand.bg-light'
              spacing={4}
              rounded='md'
              shadow='lg'
            >
              <CloseButton
                aria-label='Close menu'
                justifySelf='self-end'
                alignSelf='flex-end'
                onClick={mobileNav.onClose}
              />
              <NextChakraLink href='/pokemon' noUnderline>
                Pokémon
              </NextChakraLink>
              <NextChakraLink href='/yugioh' noUnderline>
                Yu-Gi-Oh!
              </NextChakraLink>
              <Box
                direction='row'
                spacing={2}
                display={{ base: 'flex', md: 'none' }}
                mt={{ base: 4, md: 0 }}
              >
                {session ? (
                  <UserMenu />
                ) : (
                  <Button
                    variant='outline'
                    paddingX={8}
                    paddingY={4}
                    onClick={() => router.push('/auth/signin')}
                  >
                    Sign in
                  </Button>
                )}
              </Box>
            </VStack>
          </Box>
          <NextChakraLink href='/' display='flex' alignItems='center'>
            <Heading as='h1' size='lg' letterSpacing={'-.1rem'} tabIndex={1}>
              TCGprices
            </Heading>
            <VisuallyHidden>TCGprices</VisuallyHidden>
          </NextChakraLink>
          <SearchBar />
        </Flex>
        <HStack spacing={3} display='flex' alignItems='center'>
          <HStack
            spacing={2}
            as='nav'
            ml={4}
            display={{ base: 'none', md: 'inline-flex' }}
          >
            <Menu>
              <MenuButton as={Button} variant='ghost'>
                <chakra.span display='flex' alignItems='center'>
                  Games <Icon as={HiOutlineChevronDown} ml={1} />
                </chakra.span>
              </MenuButton>
              <Portal>
                <MenuList>
                  <NextChakraLink href='/pokemon' noUnderline>
                    <MenuItem>Pokémon</MenuItem>
                  </NextChakraLink>
                  <NextChakraLink href='/yugioh' noUnderline>
                    <MenuItem>Yu-Gi-Oh!</MenuItem>
                  </NextChakraLink>
                </MenuList>
              </Portal>
            </Menu>
            <NextChakraLink noUnderline href='/collections'>
              <Button variant='ghost'>Collections</Button>
            </NextChakraLink>
          </HStack>
          <Box
            direction='row'
            spacing={2}
            display={{ base: 'none', md: 'flex' }}
            mt={{ base: 4, md: 0 }}
          >
            {session ? (
              <UserMenu />
            ) : (
              <Button
                variant='outline'
                paddingX={8}
                paddingY={4}
                onClick={() => router.push('/auth/signin')}
              >
                Sign in
              </Button>
            )}
          </Box>
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            aria-label='Open menu'
            fontSize='20px'
            color='white'
            variant='ghost'
            icon={<AiOutlineMenu />}
            onClick={mobileNav.onOpen}
          />
        </HStack>
      </Flex>
    </Box>
  )
}

export default Header
