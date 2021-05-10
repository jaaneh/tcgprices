import * as React from 'react'
import {
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button
} from '@chakra-ui/react'

import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { YUP_SIGNUP_ERRORS } from '@utils/helpers'

type Props = {
  csrfToken: string | number | readonly string[]
  switchAuthModeHandler: () => void
}

type IFormInputs = {
  username: string
  email: string
  password: string
  repeatPassword: string
}

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

const signUpSchema = yup.object().shape({
  username: yup
    .string()
    .min(4, 'Must be at least 4 characters')
    .max(16, 'Must be less than 16 characters')
    .required('This field is required'),
  email: yup
    .string()
    .email('Must be a valid email')
    .required('This field is required'),
  password: yup
    .string()
    .min(8, 'Must be at least 8 characters')
    .max(100, 'Must be less than 100 characters')
    .required('This field is required'),
  repeatPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords do not match')
    .required('This field is required')
})

const SignUpForm: React.FC<Props> = ({ csrfToken, switchAuthModeHandler }) => {
  const toast = useToast()
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isDirty, isValid }
  } = useForm<IFormInputs>({
    mode: 'onChange',
    resolver: yupResolver(signUpSchema)
  })

  const submitHandler = handleSubmit(async (data: IFormInputs) => {
    const { username, email, password, repeatPassword } = data

    try {
      const result = await createUser(username, email, password, repeatPassword)

      if (result.error) {
        toast({
          title: 'Something went wrong',
          description: `${YUP_SIGNUP_ERRORS[result.error.message[0].message] ||
            result.error.message ||
            'Something went wrong.'}`,
          status: 'error',
          isClosable: true
        })
      } else {
        switchAuthModeHandler()
        toast({
          title: 'Success',
          description: 'Account created. You may now log in.',
          status: 'success',
          isClosable: true
        })
      }
    } catch (err) {
      console.error(err)
      throw err
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
          {...register('username')}
        />
        <FormErrorMessage>
          {errors.username && errors.username.message}
        </FormErrorMessage>
      </FormControl>

      <FormControl mt={4} isInvalid={Boolean(errors?.email)} isRequired={true}>
        <FormLabel>Email address</FormLabel>
        <Input
          id='email'
          placeholder='Enter email address'
          isDisabled={isSubmitting}
          {...register('email')}
        />
        <FormErrorMessage>
          {errors.email && errors.email.message}
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

      <FormControl
        mt={4}
        isInvalid={Boolean(errors?.repeatPassword)}
        isRequired={true}
      >
        <FormLabel>Repeat Password</FormLabel>
        <Input
          type='password'
          id='repeat-password'
          placeholder='Repeat password'
          isDisabled={isSubmitting}
          {...register('repeatPassword')}
        />
        <FormErrorMessage>
          {errors.repeatPassword && errors.repeatPassword.message}
        </FormErrorMessage>
      </FormControl>

      <Button
        mt={5}
        variant='brand-blue'
        width='full'
        type='submit'
        isDisabled={!isDirty || !isValid}
        isLoading={isSubmitting}
      >
        Create Account
      </Button>
    </form>
  )
}

export default SignUpForm
