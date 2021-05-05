import { Fragment } from 'react'
import { useSession } from 'next-auth/client'
import { v4 as uuidv4 } from 'uuid'
import {
  Flex,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Button,
  Box
} from '@chakra-ui/react'

import MotionBox from '@components/MotionBox'
import { NextChakraLink } from '@components/NextChakraLink'
import { ICardCollectionModel } from '@interfaces'

import { HiOutlinePlus } from 'react-icons/hi'

type Props = {
  collections: ICardCollectionModel[]
}

const CollectionMotionBox = ({ createNew = false, children }) => (
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
      // rotate: Math.random() < 0.5 ? -0.35 : 0.35
    }}
    whileTap={{ scale: 0.98 }}
    transition={{ ease: 'easeInOut', duration: 0.2 }}
  >
    {children}
  </MotionBox>
)

const MyCollections: React.FC<Props> = ({ collections }) => {
  const [session] = useSession()

  const createNewCollection = async () => {
    const data = {
      owner_id: session.account.uuid,
      collection_id: uuidv4()
    }

    const res = await fetch('/api/v1/collections', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    const json = await res.json()
    console.log(json)
  }

  return (
    <>
      <Flex mb={8}>
        <Heading textAlign='left' as='h1' size='lg' flexGrow={1}>
          My Collections
        </Heading>
        <Button colorScheme='blue'>New Collection</Button>
      </Flex>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl: 6 }} gap={10}>
        {collections.length ? (
          collections.map((collection: ICardCollectionModel, i) => (
            <Fragment key={i}>
              <NextChakraLink
                href={`/collection/${collection.collection_id}`}
                noUnderline
                _focus={{ boxShadow: 'none' }}
                aria-label={`${collection.name}`}
              >
                <CollectionMotionBox>
                  <Flex
                    flexDir='column'
                    justifyContent='center'
                    alignItems='center'
                  ></Flex>
                </CollectionMotionBox>
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
              <CollectionMotionBox createNew>
                <Flex
                  flexDir='column'
                  justifyContent='center'
                  alignItems='center'
                >
                  <Icon as={HiOutlinePlus} w={10} h={10}></Icon>
                  <Text fontSize='md'>New collection</Text>
                </Flex>
              </CollectionMotionBox>
            </Fragment>
          ))
        ) : (
          <CollectionMotionBox>
            <Flex flexDir='column' justifyContent='center' alignItems='center'>
              <Icon as={HiOutlinePlus} w={10} h={10}></Icon>
              <Text fontSize='md'>New Collection</Text>
            </Flex>
          </CollectionMotionBox>
        )}
      </SimpleGrid>
    </>
  )
}

export default MyCollections