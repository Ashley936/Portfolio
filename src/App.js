import React from 'react';
import { Box, ChakraProvider } from '@chakra-ui/react';
import { SkillPage } from './components/SkillPage';
import { Projects } from './components/Projects';
import theme, { Fonts } from './theme';
import { MainPage } from './components/MainPage';

function App() {
  return (
    <ChakraProvider theme={theme}>
      <Fonts />
      <MainPage />
      {/* 
      <SkillPage />
      <Projects /> */}
    </ChakraProvider>
  );
}

export default App;
