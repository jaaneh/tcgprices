import { FormEvent, useState, useRef } from 'react'
import {
  Heading,
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  FormErrorMessage,
  useToast
} from '@chakra-ui/react'

import { IResponse } from '@interfaces'

import MotionBox from '@components/MotionBox'
import { shakeAnimationVariants } from '@utils/animation'

const ChangePassword = () => {
  const toast = useToast()

  const oldPasswordInputRef = useRef<HTMLInputElement>()
  const newPasswordInputRef = useRef<HTMLInputElement>()

  const [submitDisabled, setSubmitDisabled] = useState<boolean>(false)
  const [changePasswordError, setChangePasswordError] = useState<boolean>(false)

  const [oldPassError, setOldPassError] = useState<boolean>(false)
  const [newPassError, setNewPassError] = useState<boolean>(false)

  const setAllErrorsToFalse = () => {
    setChangePasswordError(false)
    setOldPassError(false)
    setNewPassError(false)
    setSubmitDisabled(false)
  }

  const validatePasswords = () => {
    const newPassword = newPasswordInputRef.current.value
    const oldPassword = oldPasswordInputRef.current.value

    if (newPassword.length < 8 || oldPassword.length < 8) {
      if (oldPassword.length < 8) {
        setOldPassError(true)
      }
      if (newPassword.length < 8) {
        setNewPassError(true)
      }
      setChangePasswordError(true)
      setSubmitDisabled(false)

      return false
    }

    return true
  }

  const changePasswordHandler = async (e: FormEvent) => {
    e.preventDefault()
    setAllErrorsToFalse()
    setSubmitDisabled(true)
    const oldPassword = oldPasswordInputRef.current.value
    const newPassword = newPasswordInputRef.current.value

    if (!validatePasswords()) {
      return false
    }

    const response = await fetch('/api/v1/user/change-password', {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        current_password: oldPassword,
        new_password: newPassword
      })
    })

    const data: IResponse = await response.json()

    if (
      data.error?.message?.message ===
      '"new_password" contains an invalid value'
    ) {
      toast({
        title: 'Something went wrong',
        description: "Old and new passwords can't be similar.",
        status: 'error',
        isClosable: true
      })
    } else {
      toast({
        title: 'Success',
        description: `${data.data?.message || 'Password changed.'}`,
        status: 'success',
        isClosable: true
      })
    }
    setSubmitDisabled(false)
  }

  return (
    <MotionBox
      width='full'
      maxWidth='500px'
      borderRadius={4}
      variants={shakeAnimationVariants}
      initial='initial'
      animate={changePasswordError ? 'visible' : 'hidden'}
    >
      <Box py={4} px={[0, 4]}>
        <Heading size='lg'>Change Password</Heading>
        <Box mt={8} mb={4} textAlign='left'>
          <form noValidate onSubmit={changePasswordHandler}>
            <FormControl isRequired isInvalid={oldPassError}>
              <FormLabel>Old Password</FormLabel>
              <Input
                type='password'
                placeholder='Enter old password'
                id='old-password'
                ref={oldPasswordInputRef}
              />
              <FormErrorMessage>Must be at least 8 characters</FormErrorMessage>
            </FormControl>

            <FormControl mt={4} isRequired isInvalid={newPassError}>
              <FormLabel>New Password</FormLabel>
              <Input
                type='password'
                placeholder='Enter new password'
                id='new-password'
                ref={newPasswordInputRef}
              />
              <FormErrorMessage>Must be at least 8 characters</FormErrorMessage>
            </FormControl>

            <Button
              mt={5}
              variant='brand-blue'
              width='full'
              type='submit'
              isLoading={submitDisabled}
            >
              Change Password
            </Button>
          </form>
        </Box>
      </Box>
    </MotionBox>
  )
}

export default ChangePassword
