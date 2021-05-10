import * as React from 'react'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'
import useSWR, { mutate } from 'swr'
import { useForm } from 'react-hook-form'

import {
  useDisclosure,
  useToast,
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Button,
  Box,
  Container,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input
} from '@chakra-ui/react'

import Layout from '@components/Layout'
import MotionBox from '@components/MotionBox'
import { MyCollectionsSkeleton } from '@components/Skeletons'
import NextChakraLink from '@components/NextChakraLink'

import { ICardCollectionModel } from '@interfaces'
import { fetcher } from '@utils/SWR'

import { FiPlus } from 'react-icons/fi'

interface Props {
  collections: ICardCollectionModel[]
  error?: string
  data?: string
}

const CreateCollectionModal = ({
  onClose,
  reset,
  isOpen,
  submitHandler,
  register,
  errors,
  isSubmitting,
  fieldName,
  placeholder,
  isRequired = false
}) => {
  return (
    <Modal
      isCentered
      size='md'
      onEsc={() => {
        onClose()
        reset()
      }}
      onClose={() => {
        onClose()
        reset()
      }}
      isOpen={isOpen}
      motionPreset='slideInBottom'
      preserveScrollBarGap
    >
      <ModalOverlay />
      <ModalContent bg='brand.bg-light'>
        <ModalHeader>Create Collection</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form onSubmit={submitHandler} autoComplete='off'>
            <FormControl
              isInvalid={Boolean(errors?.[fieldName])}
              pb={2}
              isRequired={isRequired}
            >
              <FormLabel>{placeholder}</FormLabel>
              <Input
                placeholder={placeholder}
                isDisabled={isSubmitting}
                {...register(fieldName, {
                  validate: value =>
                    (value && value.length >= 3 && value.length <= 25) ||
                    'Must be between 3 and 25 characters.'
                })}
              />
              <FormErrorMessage>
                {errors[fieldName] && errors[fieldName].message}
              </FormErrorMessage>
            </FormControl>

            <Flex alignItems='center' justifyContent='flex-end' py={4}>
              <Button colorScheme='red' mr={3} onClick={onClose}>
                Close
              </Button>
              <Button type='submit' isLoading={isSubmitting}>
                Create
              </Button>
            </Flex>
          </form>
        </ModalBody>
      </ModalContent>
    </Modal>
  )
}

const CollectionMotionBox = ({
  createNew = false,
  onClick = null,
  children = null
}) => {
  return (
    <MotionBox
      height='200px'
      border={`${createNew ? '3px dotted #222c3c' : 'none'}`}
      borderRadius='md'
      background={`${createNew ? 'transparent' : 'brand.bg-light'}`}
      display='flex'
      justifyContent='center'
      alignItems='center'
      cursor='pointer'
      whileHover={{
        scale: 1.03
      }}
      whileTap={{ scale: 0.98 }}
      transition={{ ease: 'easeInOut', duration: 0.2 }}
      onClick={onClick}
    >
      {children}
    </MotionBox>
  )
}

const MyCollectionsPage: React.FC<Props> = () => {
  const { data, error } = useSWR('/api/v1/collections', fetcher)

  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
    reset
  } = useForm({ mode: 'onChange' })

  const submitHandler = handleSubmit(async data => {
    reset()
    onClose()

    const body = {
      collection_name: data.collectionName
    }

    const res = await fetch('/api/v1/collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    const json = await res.json()

    if (!!json.success) {
      mutate('/api/v1/collections')
      toast({
        title: 'Success',
        description: 'Collection created.',
        status: 'success',
        isClosable: true
      })
    } else {
      toast({
        title: 'Something went wrong',
        description: 'Could not create collection',
        status: 'error',
        isClosable: true
      })
    }
  })

  if (error)
    return (
      <Layout>
        <Text mt={8}>Something went wrong.</Text>
      </Layout>
    )
  if (!data)
    return (
      <Layout>
        <MyCollectionsSkeleton />
      </Layout>
    )

  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Flex mb={8}>
          <Heading textAlign='left' as='h1' size='lg' flexGrow={1}>
            My Collections
          </Heading>
          <Button colorScheme='blue' onClick={onOpen}>
            New Collection
          </Button>
        </Flex>
        <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl: 4 }} gap={10}>
          {data.data.length ? (
            data.data.map(
              (collection: ICardCollectionModel, i: string | number) => (
                <React.Fragment key={i}>
                  <NextChakraLink
                    href={`/collections/${collection.collection_id}`}
                    noUnderline
                    _focus={{ boxShadow: 'none' }}
                    aria-label={`${collection.name}`}
                  >
                    <CollectionMotionBox />
                    <Box mt={3} mb={2}>
                      <Text
                        fontSize='md'
                        fontWeight='semibold'
                        color='gray.200'
                        as='h3'
                      >
                        {collection.name}
                      </Text>
                    </Box>
                  </NextChakraLink>
                </React.Fragment>
              )
            )
          ) : (
            <CollectionMotionBox createNew onClick={onOpen}>
              <Flex
                flexDir='column'
                justifyContent='center'
                alignItems='center'
              >
                <Icon as={FiPlus} w={10} h={10}></Icon>
                <Text fontSize='md' userSelect='none'>
                  New collection
                </Text>
              </Flex>
            </CollectionMotionBox>
          )}
        </SimpleGrid>
        <CreateCollectionModal
          onClose={onClose}
          reset={reset}
          isOpen={isOpen}
          submitHandler={submitHandler}
          register={register}
          errors={errors}
          isSubmitting={isSubmitting}
          fieldName='collectionName'
          placeholder='Collection Name'
          isRequired={true}
        />
      </Container>
    </Layout>
  )
}

export default MyCollectionsPage

export async function getServerSideProps({ req }) {
  const session: Session | null = await getSession({ req })

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
        permanent: false
      }
    }
  }

  return {
    props: {}
  }
}
