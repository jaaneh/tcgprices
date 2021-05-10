import { PropsWithChildren } from 'react'
import NextLink from 'next/link'
import { LinkProps as NextLinkProps } from 'next/dist/client/link'
import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps
} from '@chakra-ui/react'

export type NextChakraLinkProps = PropsWithChildren<
  NextLinkProps &
    Omit<ChakraLinkProps, 'as'> & {
      noUnderline?: boolean
    }
>

const NextChakraLink = ({
  href,
  as,
  replace,
  scroll,
  shallow,
  prefetch,
  children,
  noUnderline,
  ...chakraProps
}: NextChakraLinkProps) => {
  return (
    <NextLink
      passHref={true}
      href={href}
      as={as}
      replace={replace}
      scroll={scroll}
      shallow={shallow}
      prefetch={prefetch}
    >
      <ChakraLink
        {...chakraProps}
        _hover={{
          textDecoration: `${noUnderline ? 'none' : 'underline'}`
        }}
      >
        {children}
      </ChakraLink>
    </NextLink>
  )
}

export default NextChakraLink
