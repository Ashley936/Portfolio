import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { SkillPage } from './components/SkillPage';
import { Projects } from './components/Projects';
import theme from './theme';
import { MainPage } from './components/MainPage';
import { Hero } from './screens/Hero';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Hero />
      {/* 
      <MainPage />
      <SkillPage />
      <Projects /> */}
    </ChakraProvider>
  );
}

export default App;
