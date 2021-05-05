import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '30em',
  md: '48em',
  lg: '62em',
  xl: '80em',
  '2xl': '96em'
})

// #0e0e18 -> #151523
const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  breakpoints,
  //@ts-ignore
  config,
  styles: {
    global: ({ colorMode }) => ({
      body: {
        minH: '100vh',
        bgGradient:
          colorMode === 'dark'
            ? 'linear(to-tl, #010101, #151523)'
            : 'linear(to-tl, #f9f9f9, #f7f7f7)'
      }
    })
  },
  colors: {
    gray: {
      800: '#1D1D42'
    },
    brand: {
      'bg-light': '#151523',
      'bg-dark': '#010101',
      'card-light': '#26264E',
      'card-dark': '#1B1A43',
      blue: '#524EEE',
      'blue-light': '#6663F5',
      green: '#6FCF97',
      white: '#FFFFFF',
      gray: '#D2D2D9',
      'white-20': 'rgba(255,255,255,0.2)',
      'white-05': 'rgba(255,255,255,0.05)'
    }
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`
  },
  components: {
    Button: {
      variants: {
        //@ts-ignore
        'brand-blue': {
          bg: 'brand.blue',
          color: 'brand.white',
          borderRadius: 'xl',
          fontWeight: '500',
          _hover: {
            bg: 'brand.blue-light'
          },
          _active: {
            bg: 'brand.blue-light'
          },
          ':disabled:hover': {
            bg: 'brand.blue'
          }
        },
        'brand-outline': {
          bg: 'transparent',
          color: 'brand.white',
          borderWidth: '1px',
          borderColor: 'brand.white-20',
          borderRadius: 'xl',
          fontWeight: '500',
          _hover: {
            bg: 'brand.white-05'
          },
          _active: {
            bg: 'brand.white-05'
          },
          _focus: {
            boxShadow: '0 0 0 3px rgba(255, 255, 225, 0.6);'
          }
        },
        'brand-blue-ghost': {
          bg: 'transparent',
          color: 'brand.white',
          borderRadius: 'xl',
          fontWeight: '500',
          _hover: {
            bg: '#ffffff15'
          },
          _active: {
            bg: '#ffffff15'
          }
        }
      }
    }
  }
})

export default theme
