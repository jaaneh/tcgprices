import { useEffect } from 'react'
import Router from 'next/router'
import Layout from '@components/Layout'
import { Spinner } from '@chakra-ui/react'

const Custom404 = () => {
  useEffect(() => {
    Router.push('/')
  }, [])

  return (
    <Layout>
      <Spinner />
    </Layout>
  )
}

export default Custom404
