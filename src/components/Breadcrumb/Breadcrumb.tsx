import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Text
} from '@chakra-ui/react'
import { NextChakraLink } from '@components/NextChakraLink'

import { IBreadcrumbItem } from '@interfaces'

const Breadcrumbs = ({ items }: { items: IBreadcrumbItem[] }) => (
  <>
    <Breadcrumb fontWeight='medium' fontSize='sm' mb={4}>
      <BreadcrumbItem>
        <BreadcrumbLink as={NextChakraLink} href='/'>
          Home
        </BreadcrumbLink>
      </BreadcrumbItem>
      {items?.map((item: IBreadcrumbItem, i) => (
        <BreadcrumbItem isCurrentPage={item.isCurrentPage} key={i}>
          {item.isCurrentPage ? (
            <Text cursor='default'>{item.text}</Text>
          ) : (
            <BreadcrumbLink as={NextChakraLink} href={item.href}>
              {item.text}
            </BreadcrumbLink>
          )}
        </BreadcrumbItem>
      ))}
    </Breadcrumb>
  </>
)

export default Breadcrumbs
