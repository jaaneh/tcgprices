import React, { useState } from 'react'
import { getCsrfToken, getSession } from 'next-auth/client'
import { Session } from 'next-auth'

import { Box, Flex, Heading, Text, Stack } from '@chakra-ui/react'

import Layout from '@components/Layout'
import NextChakraLink from '@components/NextChakraLink'
import SignInForm from '@components/Forms/SignInForm'
import SignUpForm from '@components/Forms/SignUpForm'

type Props = {
  csrfToken: string | number | readonly string[]
}

const UserAuthPage: React.FC<Props> = ({ csrfToken }) => {
  const [isSignIn, setSignIn] = useState<boolean>(true)

  const switchAuthModeHandler = () => {
    setSignIn(prevState => !prevState)
  }

  return (
    <Layout>
      <Flex
        mt={8}
        width='full'
        align='center'
        justifyContent='center'
        flexDir='column'
      >
        <Box
          px={4}
          width='full'
          maxWidth='500px'
          borderRadius={4}
          textAlign='center'
        >
          <Box p={4}>
            <Box textAlign='center'>
              <Heading>{isSignIn ? 'Sign In' : 'Create Account'}</Heading>
            </Box>
            <Box mt={8} mb={4} textAlign='left'>
              {isSignIn ? (
                <SignInForm csrfToken={csrfToken} />
              ) : (
                <SignUpForm
                  csrfToken={csrfToken}
                  switchAuthModeHandler={switchAuthModeHandler}
                />
              )}
              <Stack
                justifyContent='space-between'
                alignItems='center'
                mt={4}
                direction={{ base: 'column', sm: 'row' }}
              >
                <Box>
                  <Text
                    onClick={switchAuthModeHandler}
                    textAlign='center'
                    fontSize='sm'
                    color='blue.200'
                    _hover={{
                      cursor: 'pointer',
                      background: 'transparent',
                      textDecoration: 'underline'
                    }}
                  >
                    {isSignIn
                      ? 'Create new account'
                      : 'Already have an account?'}
                  </Text>
                </Box>
                <Box>
                  <NextChakraLink
                    href='/'
                    textAlign='center'
                    fontSize='sm'
                    color='blue.200'
                    _hover={{
                      cursor: 'pointer',
                      background: 'transparent',
                      textDecoration: 'underline'
                    }}
                  >
                    Forgot password?
                  </NextChakraLink>
                </Box>
              </Stack>
            </Box>
          </Box>
        </Box>
      </Flex>
    </Layout>
  )
}

export default UserAuthPage

export async function getServerSideProps({ req }) {
  const session: Session | null = await getSession({ req })

  if (session) {
    return {
      props: {},
      redirect: {
        destination: '/profile',
        permanent: false
      }
    }
  }

  return {
    props: {
      csrfToken: await getCsrfToken({ req })
    }
  }
}
