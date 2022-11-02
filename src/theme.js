import { extendTheme } from '@chakra-ui/react';
import '@fontsource/spartan/800.css';
import '@fontsource/spartan/600.css';
import '@fontsource/spartan/700.css';
import '@fontsource/spartan/400.css';
import '@fontsource/spartan/300.css';
import '@fontsource/roboto';
const activeLabelStyles = {
  transform: 'scale(0.85) translateY(-24px)',
  bg: '#405681',
};
const inputStyle = {
  placeholder: 'Full Name',
  borderRadius: '20px',
  bg: '#405681',
  color: '#EAE7DC',
  _placeholder: { color: '#EAE7DC' },
  _focus: {
    outline: '1px solid #405681',
    outlineOffset: '0',
    bg: 'transparent',
    color: '#405681',
  },
  _focusVisible: {
    border: 'none',
    boxShadow: 'none',
    color: '#405681',
  },
};
const theme = extendTheme({
  colors: {
    bgTheme: {
      100: '#EAE7DC',
      200: '#D3C3A5',
    },
    greyTheme: {
      100: '#8E8D8A',
    },
    redTheme: {
      100: '#E98074',
      200: '#E85A4F',
      300: '#F13C20',
    },
    blueTheme: {
      100: '#C5CBE3',
      200: '#405681',
      300: '#123C69',
    },
  },
  fonts: {
    heading: `'Spartan',serif`,
    body: `'Roboto',sans-serif`,
  },
  styles: {
    global: {
      /* '*': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      '::-webkit-scrollbar': {
        width: 0,
      }, */
      body: {
        overflowY: 'hidden',
        height: '100vh',
      },
    },
  },
  components: {
    Form: {
      variants: {
        floating: {
          container: {
            _focusWithin: {
              label: {
                ...activeLabelStyles,
              },
            },
            'input:not(:placeholder-shown) + label, .chakra-select__wrapper + label, textarea:not(:placeholder-shown) ~ label':
              {
                ...activeLabelStyles,
              },
            label: {
              top: 0,
              left: 0,
              zIndex: 2,
              position: 'absolute',
              color: '#EAE7DC',
              pointerEvents: 'none',
              mx: 3,
              px: 1,
              my: 2,
              transformOrigin: 'left top',
              px: '2%',
              borderRadius: '8px',
            },
            input: inputStyle,
            textarea: inputStyle,
          },
        },
      },
    },
  },
});

export default theme;
