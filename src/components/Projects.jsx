import { Box, Heading, HStack, Text, VStack } from '@chakra-ui/react';
import { ProjectCard } from './ProjectCard/ProjectCard';
import { Deck } from './ProjectCard/ProjectCard2';

export const Projects = () => {
  return (
    <Box mt={'100px'}>
      <VStack
        zIndex={0}
        w={'100%'}
        h={'100vh'}
        bg={'blackAlpha.500'}
        borderRadius={'40px 40px 0 0'}
        pos={'sticky'}
        top={0}
        alignItems={'flex-start'}
        p={{ base: '20px 10px', sm: '20px 40px' }}
        gap={'50px'}
      >
        <Heading fontStyle={'italic'}>1. Project Name</Heading>
        <HStack
          w={'full'}
          justifyContent={'space-evenly'}
          display={{ base: 'none', md: 'flex' }}
        >
          <Text
            w={{ base: '100%', md: '50%' }}
            style={{ wordSpacing: '3px' }}
            fontSize={{ base: '14px', md: '16px', lg: '18px' }}
          >
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam
            voluptatum fugiat tempore odit eum reiciendis asperiores! Earum
            iusto cumque necessitatibus obcaecati natus, dicta cum quis officia
            sapiente atque dolores aliquam. Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Quam voluptatum fugiat tempore odit
            eum reiciendis asperiores! Earum iusto cumque necessitatibus
            obcaecati natus, dicta cum quis officia sapiente atque dolores
            aliquam. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            Quam voluptatum fugiat tempore odit eum reiciendis asperiores! Earum
            iusto cumque necessitatibus obcaecati natus, dicta cum quis officia
            sapiente atque dolores aliquam.
          </Text>
          <ProjectCard />
        </HStack>
        <Box
          display={{ md: 'none' }}
          w={'100%'}
          h={'100%'}
          overflow={'hidden'}
          pos={'relative'}
        >
          <Deck />
        </Box>
      </VStack>
      {/* <Box
        zIndex={1}
        w={'100%'}
        h={'100vh'}
        bg={'grey'}
        borderRadius={'40px 40px 0 0'}
        pos={'sticky'}
        top={'80px'}
      ></Box>
      <Box
        zIndex={2}
        w={'100%'}
        h={'100vh'}
        bg={'black'}
        borderRadius={'40px 40px 0 0'}
        pos={'sticky'}
        top={'200px'}
      ></Box> */}
    </Box>
  );
};
