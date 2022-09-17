import { extendTheme } from '@chakra-ui/react';
import { Global } from '@emotion/react';
export const Fonts = () => (
  <Global
    styles={`
        /* latin */
        @font-face {
          font-family: 'Gambetta';
          font-style: normal;
          font-weight: 700;
          font-display: swap;
          src: local("Gambetta"),
          url("./fonts/Gambetta-Variable.ttf") format("truetype");
        }
        /* latin */
        @font-face {
          font-family: 'Plein';
          font-style: normal;
          font-weight: 400;
          font-display: swap;
          src: local("Plein"),
          url("./fonts/Plein-Variable.ttf") format("truetype");
        }
        `}
  />
);
const theme = extendTheme({
  fonts: {
    heading: `'Gambetta', serif`,
    body: `'Plein', sans-serif`,
  },
  /* styles: {
    global: {
      '*': {
        '-ms-overflow-style': 'none',
        'scrollbar-width': 'none',
      },
      '::-webkit-scrollbar': {
        width: 0,
      },
    },
  }, */
  styles: {
    global: {
      body: {
        overflowY: 'hidden',
        height: '100vh',
      },
    },
  },
});

export default theme;
