import React from 'react'
import { GetServerSideProps } from 'next'
import Image from 'next/image'
import { useRouter } from 'next/router'
import {
  chakra,
  Container,
  Heading,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  Text,
  Flex,
  Button
} from '@chakra-ui/react'
import { useTable, useSortBy } from 'react-table'

import Layout from '@components/Layout'
import { NextChakraLink } from '@components/NextChakraLink'
import Breadcrumb from '@components/Breadcrumb'

import {
  IBreadcrumbItem,
  IPokemonCard,
  IPokemonSetPageContent
} from '@interfaces'
import { getSetIdsByPaths } from '@utils/paths'
import { cleanName } from '@utils/helpers'

import { VscTriangleDown, VscTriangleUp } from 'react-icons/vsc'

const PokemonSingleSetPage = ({
  displayName,
  cards
}: IPokemonSetPageContent) => {
  const router = useRouter()

  const data = React.useMemo(() => cards, [])

  const columns = React.useMemo(
    () => [
      {
        Header: 'Product',
        accessor: 'name',
        style: { paddingTop: '4px', paddingBottom: '4px' },
        Cell: ({ row: { original }, value }) => (
          <Flex alignItems='center'>
            <Image
              src={original.images.small}
              alt={original.name}
              loading='eager'
              layout='fixed'
              width={29}
              height={43}
            />
            <Text ml={3}>{value}</Text>
          </Flex>
        )
      },
      {
        Header: 'Rarity',
        accessor: 'rarity',
        style: { paddingTop: '4px', paddingBottom: '4px' }
      },
      {
        Header: 'Number',
        accessor: 'number',
        style: { paddingTop: '4px', paddingBottom: '4px' }
      },
      {
        Header: 'Market Price',
        style: { paddingTop: '4px', paddingBottom: '4px' },
        accessor: (originalRow: IPokemonCard) => {
          const prices = originalRow?.tcgplayer?.prices
          let accessor: any

          if (prices?.normal) {
            accessor = prices.normal.market
          } else if (prices?.holofoil) {
            accessor = prices.holofoil.market
          } else if (prices?.reverseHolofoil) {
            accessor = prices.reverseHolofoil.market
          }

          return accessor
        },
        Cell: ({ value }) => (
          <>{typeof value === 'number' ? `$${value.toFixed(2)}` : '—'}</>
        )
      },
      {
        Header: 'View',
        accessor: 'set',
        style: { paddingTop: '4px', paddingBottom: '4px' },
        disableSortBy: true,
        Cell: ({ row: { original }, value }) => {
          return (
            <NextChakraLink
              noUnderline
              key={original.id}
              href={`/pokemon/${cleanName(original.set.series)}/${cleanName(
                original.set.name
              )}/${original.number}`}
            >
              <Button>View</Button>
            </NextChakraLink>
          )
        }
      }
    ],
    []
  )

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow
  } = useTable({ columns, data }, useSortBy)

  const breadcrumbs: IBreadcrumbItem[] = [
    {
      href: '/pokemon',
      text: 'Pokémon'
    },
    {
      href: '#',
      text: displayName,
      isCurrentPage: true
    }
  ]

  return (
    <Layout>
      <Container maxW='7xl' mt={8}>
        <Breadcrumb items={breadcrumbs} />
        <Heading textAlign='left' mb={8} as='h1' size='lg'>
          {displayName}
        </Heading>
        <Table {...getTableProps()}>
          <Thead>
            {headerGroups.map(headerGroup => (
              <Tr {...headerGroup.getHeaderGroupProps()}>
                {headerGroup.headers.map(column => (
                  <Th
                    {...column.getHeaderProps(column.getSortByToggleProps())}
                    isNumeric={column.isNumeric}
                  >
                    {column.render('Header')}
                    <chakra.span pl='2' display='inline-block'>
                      {column.isSorted ? (
                        column.isSortedDesc ? (
                          <VscTriangleDown aria-label='sorted descending' />
                        ) : (
                          <VscTriangleUp aria-label='sorted ascending' />
                        )
                      ) : null}
                    </chakra.span>
                  </Th>
                ))}
              </Tr>
            ))}
          </Thead>
          <Tbody {...getTableBodyProps()}>
            {rows.map(row => {
              prepareRow(row)
              return (
                <Tr
                  {...row.getRowProps()}
                  _hover={{
                    cursor: 'pointer'
                  }}
                  onClick={() => {
                    const { set, number } = row.original
                    router.push(
                      `/pokemon/${cleanName(set.series)}/${cleanName(
                        set.name
                      )}/${number}`
                    )
                  }}
                >
                  {row.cells.map(cell => (
                    <Td
                      {...cell.getCellProps([
                        {
                          style: cell.column.style
                        }
                      ])}
                      isNumeric={cell.column.isNumeric}
                    >
                      {cell.render('Cell')}
                    </Td>
                  ))}
                </Tr>
              )
            })}
          </Tbody>
        </Table>
      </Container>
    </Layout>
  )
}

export default PokemonSingleSetPage

export const getServerSideProps: GetServerSideProps = async ({
  query,
  req
}) => {
  const { setSeries, setName } = query
  let content = null

  const setId = getSetIdsByPaths(setSeries, setName)

  if (!setId) {
    return {
      props: {},
      redirect: {
        destination: '/pokemon',
        permanent: false
      }
    }
  }

  const hostname = process.env.NEXTAUTH_URL || 'http://localhost:3000'
  const options = { headers: { cookie: req.headers.cookie } }
  const response = await fetch(
    `${hostname}/api/v1/pokemon/cards/${setId}`,
    options
  )
  const json = await response.json()
  if (json.success && json.data) {
    content = json.data
  }

  const displayName = `${content[0].set.series}: ${content[0].set.name}` || null

  return {
    props: {
      displayName,
      cards: content
    }
  }
}
