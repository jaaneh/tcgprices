import { extendTheme } from '@chakra-ui/react'
import { createBreakpoints } from '@chakra-ui/theme-tools'

const breakpoints = createBreakpoints({
  sm: '40em',
  md: '52em',
  lg: '64em',
  xl: '80em'
})

const config = {
  initialColorMode: 'dark',
  useSystemColorMode: false
}

const theme = extendTheme({
  breakpoints,
  config,
  styles: {
    global: props => ({
      body: {
        minH: '100vh',
        bgGradient:
          props.colorMode === 'dark'
            ? 'linear(to-tl, #010101, #0E0E18)'
            : 'linear(to-tl, #f9f9f9, #f7f7f7)'
      }
    })
  },
  colors: {
    gray: {
      800: '#1D1D42'
    },
    brand: {
      'bg-light': '#1D1D42',
      'bg-dark': '#141432',
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
        'brand-blue': {
          bg: 'brand.blue',
          color: 'brand.white',
          borderRadius: 'xl',
          // width: '100%',
          padding: 6,
          fontWeight: '500',
          _hover: {
            bg: 'brand.blue-light'
          },
          _active: {
            bg: 'brand.blue-light'
          }
        },
        'brand-outline': {
          bg: 'transparent',
          color: 'brand.white',
          borderWidth: '1px',
          borderColor: 'brand.white-20',
          borderRadius: 'xl',
          // width: '100%',
          padding: 6,
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
          // width: '100%',
          padding: 6,
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
