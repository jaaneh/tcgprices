import { useRef, FormEvent, useState, useEffect } from 'react'
import { signIn, getCsrfToken, getSession } from 'next-auth/client'
import { Session } from 'next-auth'
import { useRouter } from 'next/router'
import { toast } from 'react-toastify'
import {
  useColorMode,
  Box,
  Flex,
  Text,
  Heading,
  Checkbox,
  Stack,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from '@chakra-ui/react'

import { NextChakraLink } from '@components/NextChakraLink'
import Layout from '@components/Layout'

import { IJoiError } from '@interfaces'
import MotionBox from '@components/MotionBox'
import { shakeAnimationVariants } from '@utils/animation'

const createUser = async (
  username: string,
  email: string,
  password: string,
  repeatPassword: string
) => {
  const response = await fetch('/api/auth/signup', {
    method: 'POST',
    body: JSON.stringify({
      username,
      email,
      password,
      repeat_password: repeatPassword,
      signed_up: Date.now(),
      last_signin: Date.now()
    }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  const data = await response.json()

  return data
}

const SignUpPage = ({ csrfToken }) => {
  const usernameInputRef = useRef<HTMLInputElement>()
  const emailInputRef = useRef<HTMLInputElement>()
  const passwordInputRef = useRef<HTMLInputElement>()
  const repeatPasswordInputRef = useRef<HTMLInputElement>()
  const rememberMeRef = useRef<HTMLInputElement>()

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false)

  const [usernameError, setUsernameError] = useState<boolean>(false)
  const [emailError, setEmailError] = useState<boolean>(false)
  const [passwordError, setPasswordError] = useState<boolean>(false)
  const [repeatPassError, setRepeatPassError] = useState<boolean>(false)

  const [signInError, setSignInError] = useState<boolean>(false)
  const [signUpError, setSignUpError] = useState<boolean>(false)

  const [isSignIn, setSignIn] = useState<boolean>(true)
  const [rememberedUser, setRememberedUser] = useState<string>('')

  const { colorMode } = useColorMode()
  const router = useRouter()

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('savedUser'))
    if (user && user.username) {
      setRememberedUser(user.username.toString())
    }
  }, [])

  const switchAuthModeHandler = () => {
    setAllErrorsToFalse()
    setSignIn(prevState => !prevState)
  }

  const setAllErrorsToFalse = () => {
    setUsernameError(false)
    setEmailError(false)
    setPasswordError(false)
    setRepeatPassError(false)
    setSignInError(false)
    setSignUpError(false)
  }

  const validateSignIn = () => {
    const username = usernameInputRef.current.value
    const password = passwordInputRef.current.value

    return {
      username: username.length >= 4 && username.length <= 16,
      password: password.length >= 8
    }
  }

  const validateSignUp = () => {
    const email = emailInputRef.current.value
    const username = usernameInputRef.current.value
    const password = passwordInputRef.current.value
    const repeatPassword = repeatPasswordInputRef.current.value

    return {
      username: username.length >= 4 && username.length <= 16,
      email: email.match(/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/g),
      password: password.length >= 8,
      repeatPassword: repeatPassword.length >= 8
    }
  }

  const submitFormHandler = async (e: FormEvent) => {
    e.preventDefault()
    setAllErrorsToFalse()
    setSubmitDisabled(true)

    const username = usernameInputRef.current.value
    const password = passwordInputRef.current.value

    if (isSignIn) {
      if (!validateSignIn().username || !validateSignIn().password) {
        if (!validateSignIn().username) {
          setUsernameError(true)
        }
        if (!validateSignIn().password) {
          setPasswordError(true)
        }

        setSubmitDisabled(false)
        return
      }

      const rememberMeValue = rememberMeRef.current.checked
      if (rememberMeValue) {
        localStorage.setItem(
          'savedUser',
          JSON.stringify({
            username,
            last_signin: new Date().getTime()
          })
        )
      }
      const result = await signIn('credentials', {
        redirect: false,
        username,
        password
      })

      if (result.error) {
        setSignInError(true)
        setSubmitDisabled(false)
      } else {
        await router.replace('/profile')
      }
    } else {
      const email = emailInputRef.current.value
      const repeatPassword = repeatPasswordInputRef.current.value

      if (
        !validateSignUp().username ||
        !validateSignUp().email ||
        !validateSignUp().password ||
        !validateSignUp().repeatPassword
      ) {
        if (!validateSignUp().username) {
          setUsernameError(true)
        }
        if (!validateSignUp().email) {
          setEmailError(true)
        }
        if (!validateSignUp().password) {
          setPasswordError(true)
        }
        if (!validateSignUp().repeatPassword) {
          setRepeatPassError(true)
        }

        setSubmitDisabled(false)
        return
      }

      try {
        const result = await createUser(
          username,
          email,
          password,
          repeatPassword
        )

        if (result.error) {
          const errors = result.error.message

          if (Array.isArray(errors)) {
            errors.forEach((error: IJoiError) => {
              switch (error.context.key) {
                case 'username':
                  setUsernameError(true)
                  break
                case 'email':
                  setEmailError(true)
                  break
                case 'password':
                  setPasswordError(true)
                  setRepeatPassError(true)
                  break
                case 'repeat_password':
                  setRepeatPassError(true)
                  break
                default:
                  break
              }
            })
          }

          setSignUpError(true)
          setSubmitDisabled(false)
        } else {
          setSubmitDisabled(false)
          switchAuthModeHandler()
          toast.success('Account created. You may now log in.')
          setAllErrorsToFalse()
          passwordInputRef.current.value = ''
        }
      } catch (err) {
        console.error(err)
        throw err
      }
    }
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
        <MotionBox
          borderWidth={1}
          px={4}
          width='full'
          maxWidth='500px'
          borderRadius={4}
          textAlign='center'
          boxShadow='lg'
          variants={shakeAnimationVariants}
          initial='initial'
          animate={
            usernameError ||
            emailError ||
            passwordError ||
            repeatPassError ||
            signInError ||
            signUpError
              ? 'visible'
              : 'hidden'
          }
        >
          <Box p={4}>
            <Box textAlign='center'>
              <Heading pt={4}>{isSignIn ? 'Sign In' : 'Sign Up'}</Heading>
            </Box>
            <Box mt={8} mb={4} textAlign='left'>
              <form noValidate onSubmit={submitFormHandler}>
                <Input
                  name='csrfToken'
                  type='hidden'
                  defaultValue={csrfToken}
                />
                <FormControl isRequired isInvalid={usernameError}>
                  <FormLabel>Username</FormLabel>
                  <Input
                    type='text'
                    placeholder='Enter username'
                    id='user-username'
                    defaultValue={rememberedUser}
                    ref={usernameInputRef}
                  />
                  <FormErrorMessage>
                    Must be between 4 and 16 characters
                  </FormErrorMessage>
                </FormControl>

                {!isSignIn && (
                  <FormControl mt={4} isRequired isInvalid={emailError}>
                    <FormLabel>Email address</FormLabel>
                    <Input
                      type='email'
                      placeholder='Enter email address'
                      id='user-email'
                      ref={emailInputRef}
                    />
                    <FormErrorMessage>Must be a valid email</FormErrorMessage>
                  </FormControl>
                )}

                <FormControl mt={4} isRequired isInvalid={passwordError}>
                  <FormLabel>Password</FormLabel>
                  <Input
                    type='password'
                    placeholder='Enter password'
                    id='user-password'
                    ref={passwordInputRef}
                  />
                  <FormErrorMessage>
                    Must be at least 8 characters
                  </FormErrorMessage>
                </FormControl>
                {!isSignIn && (
                  <FormControl mt={4} isRequired isInvalid={repeatPassError}>
                    <FormLabel>Repeat Password</FormLabel>
                    <Input
                      type='password'
                      placeholder='Repeat password'
                      id='user-repeatpassword'
                      ref={repeatPasswordInputRef}
                    />
                    <FormErrorMessage>
                      {repeatPasswordInputRef.current?.value?.length < 7
                        ? 'Must be at least 8 characters'
                        : 'Passwords do not match'}
                    </FormErrorMessage>
                  </FormControl>
                )}

                {isSignIn && (
                  <Stack
                    justifyContent='space-between'
                    alignItems='center'
                    mt={4}
                    direction={{ base: 'column', sm: 'row' }}
                  >
                    <Box>
                      <Checkbox ref={rememberMeRef}>Remember Me</Checkbox>
                    </Box>
                    <Box>
                      <NextChakraLink
                        href='/auth/forgot-password'
                        color='gray.500'
                      >
                        Forgot password?
                      </NextChakraLink>
                    </Box>
                  </Stack>
                )}

                <Button
                  mt={5}
                  variant='brand-blue'
                  width='full'
                  type='submit'
                  isLoading={submitDisabled}
                >
                  {isSignIn ? 'Sign In' : 'Create Account'}
                </Button>
                <Text
                  mt={4}
                  onClick={switchAuthModeHandler}
                  textAlign='center'
                  fontSize='sm'
                  color={colorMode === 'light' ? 'blue.400' : 'blue.200'}
                  _hover={{
                    cursor: 'pointer',
                    background: 'transparent'
                  }}
                >
                  {isSignIn
                    ? 'Create new account'
                    : 'Sign in with existing account'}
                </Text>
              </form>
            </Box>
          </Box>
        </MotionBox>
      </Flex>
    </Layout>
  )
}

export default SignUpPage

export async function getServerSideProps({ req }) {
  const session: Session = await getSession({ req })

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
