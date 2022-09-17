import { Box, Container, Heading, HStack, Text } from '@chakra-ui/react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { AboutMe } from './AboutMe';

export const Hero = () => {
  const container = useRef();
  const mainContainer = useRef();
  const [height, setHeight] = useState(0);
  useEffect(() => {
    let scrollDir = true;
    let mainBox = container.current;
    let outerBox = mainContainer.current;
    setHeight(mainBox.clientWidth + mainBox.clientHeight);
    const handleScroll = e => {
      if (e.target.scrollLeft < mainBox.clientWidth && scrollDir) {
        outerBox.scrollTo(e.target.scrollLeft + 0.005 * mainBox.clientWidth, 0);
      } else if (
        e.target.scrollTop <= mainBox.clientHeight &&
        e.target.scrollLeft >= mainBox.clientWidth &&
        scrollDir
      ) {
        setTimeout(() => (scrollDir = false), 500);
        outerBox.scrollTo(mainBox.clientWidth, 0);
      } else if (
        e.target.scrollLeft === 0 &&
        e.target.scrollTop === 0 &&
        !scrollDir
      ) {
        scrollDir = true;
        outerBox.scrollTo(0, 0);
      }
    };
    outerBox.addEventListener('scroll', e => handleScroll(e));
    outerBox.addEventListener('resize', () =>
      setHeight(mainBox.clientWidth + mainBox.clientHeight)
    );
    return () => {
      console.log('over');
      outerBox.removeEventListener('scroll', e => handleScroll(e));
      outerBox.removeEventListener('resize', () =>
        setHeight(mainBox.clientWidth + mainBox.clientHeight)
      );
    };
  }, []);
  return (
    <Box
      ref={mainContainer}
      overflowY={'scroll'}
      overflowX={'hidden'}
      h={'100vh'}
      style={{
        '&::-webkit-scrollbar': {
          background: 'red',
        },
      }}
    >
      {' '}
      {/* MAIN container */}
      <HStack // HORIZONTAL MAIN
        ref={container}
        bg={'gray.500'}
        w={'full'}
        h={'100vh'}
        color={'white'}
        maxW={'full'}
        spacing={0}
      >
        {/* HOME PAGE 1 */}
        <HStack w={'100vw'} h={'100vh'} maxW={'100%'} flexShrink={0}>
          <Text>Namita</Text>
          <Text>Home</Text>
          <Text>Projects</Text>
          <Text>Skills</Text>
          <Text>Resume</Text>
          <Text>Contact</Text>
        </HStack>
        {/* PAGE 2 */}
        <AboutMe outerBox={mainContainer.current} />
      </HStack>
      {/* HORIZONTAL SCROLL HELPER */}
    </Box>
  );
};
