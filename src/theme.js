import { extendTheme } from '@chakra-ui/react';
import '@fontsource/spartan/800.css';
import '@fontsource/spartan/600.css';
import '@fontsource/spartan/700.css';
import '@fontsource/spartan/400.css';
import '@fontsource/spartan/300.css';
import '@fontsource/roboto';

const theme = extendTheme({
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
});

export default theme;
