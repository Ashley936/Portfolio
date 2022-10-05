import { Box } from '@chakra-ui/react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AboutMe } from './AboutMe';
import { HomeSection } from '../components/Home';
import { NavCircle } from '../components/NavCircle';
export const Hero = () => {
  const container = useRef();
  const mainContainer = useRef();
  const width = 0.6 * window.innerHeight;
  useEffect(() => {
    let innerBox = container.current;
    let outerBox = mainContainer.current;
    const handleScroll = e => {
      innerBox.scrollTo(e.target.scrollTop, 0);
    };
    outerBox.addEventListener('scroll', handleScroll);
    return () => {
      console.log('over');
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
          <NavCircle width={width} />
        </Box>
        <AboutMe />
      </Box>
      <Box
        h={container.current ? container.current.clientWidth : '100vw'}
      ></Box>
    </Box>
  );
};
