import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AboutMe } from './AboutMe';
import { HomeSection } from '../components/Home';
import { NavCircle } from '../components/NavCircle';
import { Projects } from './Projects';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';

export const Hero = () => {
  const [height, setHeight] = useState(0);
  const container = useRef();
  const mainContainer = useRef();
  const [screen, setScreen] = useState('about');
  const width = 0.6 * window.innerHeight;
  useEffect(() => {
    let innerBox = container.current;
    let outerBox = mainContainer.current;
    console.log(innerBox.clientWidth);
    setHeight(innerBox.clientWidth);
    const handleScroll = e => {
      innerBox.scrollTo(e.target.scrollTop, 0);
    };
    outerBox.addEventListener('scroll', handleScroll);
    return () => {
      outerBox.removeEventListener('scroll', handleScroll);
    };
  }, []);
  return (
    <Box
      ref={mainContainer}
      h={'100vh'}
      overflowY={'scroll'}
      pos={'relative'}
      overflowX={'hidden'}
      bg={'black'}
    >
      <Box
        pos="sticky"
        top={0}
        h={'100%'}
        translateX={'500px'}
        w={'100%'}
        overflowX={'scroll'}
        ref={container}
        display={'flex'}
      >
        <HomeSection />
        <Box
          pos={'absolute'}
          top={(window.innerHeight - width) / 2}
          right={-(width / 2)}
          w={width}
          h={width}
        >
          <NavCircle width={width} setScreen={setScreen} />
        </Box>
        <AnimatePresence exitBeforeEnter={true}>
          {screen === 'about' && <AboutMe key={1} />}
          {screen === 'projects' && <Projects key={2} />}
        </AnimatePresence>
      </Box>
      <Box h={height}></Box>
    </Box>
  );
};
