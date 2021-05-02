import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'

import {
  Box,
  ListItem,
  List,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Flex
} from '@chakra-ui/react'

import Layout from '@components/Layout'
import ChangePassword from '@components/Profile/ChangePassword'
import { NextChakraLink } from '@components/NextChakraLink'

const UserProfilePage = ({ session, saved_cards }) => {
  return (
    <Layout>
      <Flex
        alignItems='center'
        justifyContent='space-between'
        mx={2}
        borderWidth={0}
        overflowX='auto'
        minW='100%'
      >
        <Tabs defaultIndex={0} borderBottomColor='transparent' minW='100%'>
          <TabList>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Session
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Settings
            </Tab>
            <Tab py={4} m={0} _focus={{ boxShadow: 'none' }}>
              Saved Cards
            </Tab>
          </TabList>
          {/* <Container maxW='7xl' mt={8}> */}
          <TabPanels>
            <TabPanel>
              <Box>
                <pre>{JSON.stringify(session, null, 2)}</pre>
              </Box>
            </TabPanel>
            <TabPanel>
              <ChangePassword />
            </TabPanel>
            <TabPanel>
              <Box>
                {saved_cards && (
                  <Box pb={2}>
                    <List>
                      {saved_cards.cards.map(card => (
                        <NextChakraLink
                          key={card.id}
                          href={card.path}
                          noUnderline
                          _focus={{ boxShadow: 'none' }}
                        >
                          <ListItem mb={1}>
                            {card.set.name}: {card.name}
                          </ListItem>
                        </NextChakraLink>
                      ))}
                    </List>
                  </Box>
                )}
              </Box>
            </TabPanel>
          </TabPanels>
          {/* </Container> */}
        </Tabs>
      </Flex>
    </Layout>
  )
}

export default UserProfilePage

export async function getServerSideProps({ req }) {
  const session: Session = await getSession({ req })
  let saved_cards = null

  if (!session) {
    return {
      props: {},
      redirect: {
        destination: '/auth/signin',
        permanent: false
      }
    }
  }

  const hostname = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const options = { headers: { cookie: req.headers.cookie } }
  const response = await fetch(`${hostname}/api/v1/user/collections`, options)
  const json = await response.json()
  if (json.success && json.data) {
    saved_cards = json.data
  }

  return {
    props: {
      session,
      saved_cards
      // user: content
    }
  }
}
