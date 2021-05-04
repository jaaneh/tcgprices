import { useState } from 'react'
import { useRouter } from 'next/router'
import { signOut, useSession } from 'next-auth/client'

import {
  chakra,
  useColorModeValue,
  useDisclosure,
  Box,
  HStack,
  VStack,
  Flex,
  Button,
  IconButton,
  Stack,
  CloseButton,
  VisuallyHidden,
  Avatar,
  Text,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  Heading
} from '@chakra-ui/react'

import { AiOutlineMenu, AiFillBell } from 'react-icons/ai'

import { NextChakraLink } from '@components/NextChakraLink'

import SearchBar from '@components/Search'

const Header = () => {
  const router = useRouter()
  const [show, setShow] = useState(false)
  const [session] = useSession()
  const bg = useColorModeValue('white', 'gray.800')
  const mobileNav = useDisclosure()

  return (
    <Box shadow='md'>
      <chakra.header
        borderColor='gray.900'
        borderBottomWidth={1}
        w='full'
        px={{ base: 2, sm: 4 }}
        py={4}
      >
        <Flex alignItems='center' justifyContent='space-between' mx='auto'>
          <Flex alignItems='center'>
            <Box display={{ base: 'inline-flex', md: 'none' }} zIndex='50'>
              <IconButton
                display={{ base: 'flex', md: 'none' }}
                aria-label='Open menu'
                fontSize='20px'
                color='white'
                variant='ghost'
                icon={<AiOutlineMenu />}
                onClick={mobileNav.onOpen}
              />
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
                bg={bg}
                spacing={4}
                rounded='md'
                shadow='lg'
              >
                <CloseButton
                  aria-label='Close menu'
                  justifySelf='self-start'
                  alignSelf='flex-start'
                  onClick={mobileNav.onClose}
                />
                <NextChakraLink href='/pokemon' noUnderline>
                  Pokémon
                </NextChakraLink>
                <NextChakraLink href='/yugioh' noUnderline>
                  Yu-Gi-Oh!
                </NextChakraLink>
              </VStack>
            </Box>
            <NextChakraLink href='/' display='flex' alignItems='center'>
              <Heading as='h1' size='lg' letterSpacing={'-.1rem'} tabIndex={1}>
                TCGprices
              </Heading>
              <VisuallyHidden>TCGprices</VisuallyHidden>
            </NextChakraLink>
            <HStack
              spacing={4}
              as='nav'
              ml={8}
              display={{ base: 'none', md: 'inline-flex' }}
            >
              <NextChakraLink href='/pokemon' noUnderline>
                Pokémon
              </NextChakraLink>
              <NextChakraLink href='/yugioh' noUnderline>
                Yu-Gi-Oh!
              </NextChakraLink>
            </HStack>
          </Flex>
          <HStack spacing={3} display='flex' alignItems='center'>
            <SearchBar />
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
              <>
                <chakra.a
                  p={2}
                  color='inherit'
                  rounded='sm'
                  href='#'
                  _hover={{ color: 'gray.200' }}
                >
                  <AiFillBell />
                  <VisuallyHidden>Notifications</VisuallyHidden>
                </chakra.a>
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
                            <Text mr={2}>{session.account?.username}</Text>
                            <Avatar
                              size='xs'
                              name={session?.account?.username ?? 'TCG Prices'}
                              src={session?.account?.images?.profile_picture}
                            />
                          </Flex>
                        </MenuButton>
                        <MenuList>
                          <NextChakraLink href='/profile' noUnderline>
                            <MenuItem>Profile</MenuItem>
                          </NextChakraLink>
                          <NextChakraLink href='/profile' noUnderline>
                            <MenuItem>My Collections</MenuItem>
                          </NextChakraLink>
                          <MenuItem onClick={() => signOut()}>
                            Sign out
                          </MenuItem>
                        </MenuList>
                      </>
                    )}
                  </Menu>
                </Box>
              </>
            )}
          </HStack>
        </Flex>
      </chakra.header>
    </Box>
  )
}

export default Header
