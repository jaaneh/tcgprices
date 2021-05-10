import * as React from 'react'
import { getSession } from 'next-auth/client'
import { Session } from 'next-auth'

import { Tabs, TabList, Tab, TabPanels, TabPanel, Flex } from '@chakra-ui/react'

import Layout from '@components/Layout'
import ChangePassword from '@components/Profile/ChangePassword'

const UserProfilePage: React.FC = () => {
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
              Account Settings
            </Tab>
          </TabList>

          <TabPanels>
            <TabPanel>
              <ChangePassword />
            </TabPanel>
          </TabPanels>
        </Tabs>
      </Flex>
    </Layout>
  )
}

export default UserProfilePage

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
