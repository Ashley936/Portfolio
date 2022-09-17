import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { SkillPage } from './components/SkillPage';
import { Projects } from './components/Projects';
import theme, { Fonts } from './theme';
import { MainPage } from './components/MainPage';
import { Hero } from './components/Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <Hero />
      {/* 
      <MainPage />
      <SkillPage />
      <Projects /> */}
    </ChakraProvider>
  );
}

export default App;
