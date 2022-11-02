import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
const MotionBox = motion(Box);
export const AnimatedLetters = ({ text, pos, lightMode }) => {
  const item = {
    hidden: {
      x: pos,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    exit: {
      x: pos,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
  };
  const letters = text.split('');

  return (
    <Box overflow={'hidden'} display={'inline-block'}>
      {letters.map((letter, index) => {
        return (
          <MotionBox
            as="span"
            display="inline-block"
            variants={item}
            key={index}
            style={{
              WebkitTextStroke: lightMode ? '2px #E98074' : '2px gray',
              _before: {},
            }}
            pos={'relative'}
            _before={{
              content: `"${letter}"`,
              position: 'absolute',
              top: '10px',
              left: '10px',
              color: lightMode ? 'blueTheme.300' : 'white',
              WebkitTextStroke: lightMode ? '2px transparent' : '2px white',
            }}
          >
            {letter}
          </MotionBox>
        );
      })}
    </Box>
  );
};
