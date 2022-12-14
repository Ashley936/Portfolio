import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AboutMe } from './AboutMe';
import { HomeSection } from '../components/Home';
import { NavCircle } from '../components/NavCircle';
import { Projects } from './Projects';
import { useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { Skills } from './Skills';
import { Features } from './Features';
import { Connect } from './Connect';
import { HomeSectionLight } from '../components/HomeLight';
import { NavCircleLight } from '../components/NavCircleLight';
import { ConnectLight } from './ConnectLight';

export const Hero = () => {
  const [height, setHeight] = useState(0);
  const [lightMode, setLightMode] = useState(true);
  const container = useRef();
  const mainContainer = useRef();
  const [screen, setScreen] = useState('about');
  const width = 0.6 * window.innerHeight;
  useEffect(() => {
    let innerBox = container.current;
    let outerBox = mainContainer.current;
    setHeight(innerBox.clientWidth);
    const handleScroll = e => {
      if (e.target.scrollTop < 2 * window.innerWidth) {
        setScreen('about');
        innerBox.scrollTo(e.target.scrollTop, 0);
      } else if (
        e.target.scrollTop > 2 * window.innerWidth &&
        e.target.scrollTop < 2.5 * window.innerWidth
      )
        setScreen('projects');
      else if (
        e.target.scrollTop > 2.5 * window.innerWidth &&
        e.target.scrollTop < 3 * window.innerWidth
      )
        setScreen('skills');
      else if (
        e.target.scrollTop > 3.5 * window.innerWidth &&
        e.target.scrollTop < 4 * window.innerWidth
      )
        setScreen('features');
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
      bg={lightMode ? 'bgTheme.100' : 'black'}
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
        {lightMode ? <HomeSectionLight /> : <HomeSection />}
        <Box
          pos={'absolute'}
          top={(window.innerHeight - width) / 2}
          right={-(width / 2)}
          w={width}
          h={width}
        >
          {!lightMode ? (
            <NavCircle width={width} setScreen={setScreen} />
          ) : (
            <NavCircleLight width={width} setScreen={setScreen} />
          )}
        </Box>
        <AnimatePresence exitBeforeEnter={true}>
          {screen === 'about' && <AboutMe key={1} lightMode={lightMode} />}
          {screen === 'projects' && <Projects key={2} lightMode={lightMode} />}
          {screen === 'skills' && <Skills key={3} lightMode={lightMode} />}
          {screen === 'features' &&
            (lightMode ? (
              <ConnectLight key={5} />
            ) : (
              <Features key={4} lightMode={lightMode} />
            ))}
          {screen === 'connect' &&
            (lightMode ? (
              <ConnectLight key={5} />
            ) : (
              <Connect key={5} lightMode={lightMode} />
            ))}
        </AnimatePresence>
      </Box>
      <Box h={'400vw'}></Box>
    </Box>
  );
};
