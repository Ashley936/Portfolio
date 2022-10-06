import { motion } from 'framer-motion';
import { Box, Heading } from '@chakra-ui/react';
const MotionBox = motion(Box);
export const projects = () => {
  const container = {
    hidden: {
      y: '-100%',
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    visible: {
      y: 0,
      opacity: 1,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
    exit: {
      y: '100%',
      opacity: 0,
      transition: { ease: [0.455, 0.03, 0.515, 0.955] },
    },
  };
  return (
    <MotionBox variant={container}>
      <Heading>PROJECTS</Heading>
    </MotionBox>
  );
};
