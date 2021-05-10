import React, { useRef, useState, useEffect } from 'react'
import { signIn } from 'next-auth/client'
import { useRouter } from 'next/router'
import {
  useToast,
  Box,
  Checkbox,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'

type Props = {
  csrfToken: string | number | readonly string[]
}

type IFormInputs = {
  username: string
  password: string
}

const signInSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .max(16, 'Must be less than 16 characters')
    .required('This field is required'),
  password: yup
    .string()
    .min(8, 'Must be at least 8 characters')
    .max(100, 'Must be less than 100 characters')
    .required('This field is required')
})

const SignInForm: React.FC<Props> = ({ csrfToken }) => {
  const router = useRouter()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(signInSchema)
  })

  const rememberMeRef = useRef<HTMLInputElement>(null)

  const [rememberedUser, setRememberedUser] = useState<string>('')

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('savedUser'))
    if (user && user.username) {
      setRememberedUser(user.username.toString())
    }
  }, [])

  const submitHandler = handleSubmit(async (data: IFormInputs) => {
    const { username, password } = data

    if (rememberMeRef.current.checked) {
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
      toast({
        title: 'Something went wrong',
        description: `${result.error || 'Could not log you in.'}`,
        status: 'error',
        isClosable: true
      })
    } else {
      await router.push('/profile')
    }
  })

  return (
    <form onSubmit={submitHandler} autoComplete='off'>
      <Input name='csrfToken' type='hidden' defaultValue={csrfToken} />
      <FormControl isInvalid={Boolean(errors?.username)} isRequired={true}>
        <FormLabel>Username</FormLabel>
        <Input
          id='username'
          placeholder='Enter username'
          isDisabled={isSubmitting}
          defaultValue={rememberedUser}
          {...register('username')}
        />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl
        mt={4}
        isInvalid={Boolean(errors?.password)}
        isRequired={true}
      >
        <FormLabel>Password</FormLabel>
        <Input
          type='password'
          id='password'
          placeholder='Enter password'
          isDisabled={isSubmitting}
          {...register('password')}
        />
        <FormErrorMessage>
          {errors.password && errors.password.message}
        </FormErrorMessage>
      </FormControl>

      <Box mt={4}>
        <Checkbox ref={rememberMeRef}>Remember Me</Checkbox>
      </Box>

      <Button
        mt={5}
        variant='brand-blue'
        width='full'
        type='submit'
        isDisabled={!isDirty || !isValid}
        isLoading={isSubmitting}
      >
        Sign In
      </Button>
    </form>
  )
}

export default SignInForm
