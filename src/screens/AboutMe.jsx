import { AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import { VStack } from '@chakra-ui/react';
import { AboutPart1 } from '../components/AboutSection/AboutPart1';
import { AboutPart2 } from '../components/AboutSection/AboutPart2';
import { AboutPart3 } from '../components/AboutSection/AboutPart3';

export const AboutMe = () => {
  const [done, setDone] = useState('page1');
  return (
    <VStack
      color={'white'}
      bg={'#000'}
      w={'100vw'}
      h={'100%'}
      flexShrink={0}
      textAlign={'center'}
    >
      <AnimatePresence exitBeforeEnter={true}>
        {done === 'page1' && <AboutPart1 setDone={setDone} key={1} />}
        {done === 'page2' && <AboutPart2 setDone={setDone} key={2} />}
        {done === 'page3' && <AboutPart3 setDone={setDone} key={3} />}
      </AnimatePresence>
    </VStack>
  );
};
