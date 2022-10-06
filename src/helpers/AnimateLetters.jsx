import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
const MotionBox = motion(Box);
export const AnimatedLetters = ({ text, pos }) => {
  const item = {
    hidden: {
      x: '100%',
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    visible: {
      x: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    exit: {
      x: '100%',
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
  };
  const letters = text.split('');

  return (
    <Box overflow={'hidden'}>
      {letters.map((letter, index) => {
        return (
          <MotionBox
            as="span"
            display="inline-block"
            variants={item}
            key={index}
            style={{ WebkitTextStroke: '2px gray' }}
            pos={'relative'}
            _before={{
              content: `"${letter}"`,
              position: 'absolute',
              top: '10px',
              left: '10px',
              color: 'white',
              WebkitTextStroke: '2px white',
            }}
          >
            {letter}
          </MotionBox>
        );
      })}
    </Box>
  );
};
