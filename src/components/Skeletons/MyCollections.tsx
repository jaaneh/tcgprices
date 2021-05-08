import * as React from 'react'

import {
  Container,
  Flex,
  Box,
  SimpleGrid,
  Skeleton,
  Spacer
} from '@chakra-ui/react'

const MyCollectionsSkeleton = () => {
  return (
    <Container maxW='7xl' mt={8}>
      <Flex flexDir='row' mb={8}>
        <Skeleton height='40px' width='250px' borderRadius='md' />
        <Spacer />
        <Skeleton height='40px' width='150px' borderRadius='md' />
      </Flex>
      <SimpleGrid columns={{ sm: 2, md: 3, lg: 3, xl: 4 }} gap={10}>
        {[1, 2, 3].map((_, i) => (
          <React.Fragment key={i}>
            <Box>
              <Skeleton
                height='200px'
                borderRadius='md'
                background='brand.bg-light'
                display='flex'
                justifyContent='center'
                alignItems='center'
              />
              <Box mt={4} mb={2}>
                <Skeleton height='20px' borderRadius='md' />
              </Box>
            </Box>
          </React.Fragment>
        ))}
      </SimpleGrid>
    </Container>
  )
}

export default MyCollectionsSkeleton
