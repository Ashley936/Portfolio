import React from 'react';
import { motion } from 'framer-motion';
import { Box } from '@chakra-ui/react';
const MotionBox = motion(Box);
export const AnimatedCharacters = ({ text, pos }) => {
  const item = {
    hidden: {
      y: pos,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    exit: {
      y: pos,
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
  };
  const splitWords = text.split(' ');

  const words = [];

  for (const [, item] of splitWords.entries()) {
    words.push(item, '\u00A0');
  }
  return (
    <Box overflow={'hidden'}>
      {words.map((word, index) => {
        return (
          <MotionBox
            as="span"
            display="inline-block"
            variants={item}
            key={index}
          >
            {word}
          </MotionBox>
        );
      })}
    </Box>
  );
};
