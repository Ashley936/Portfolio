import {
  Box,
  Center,
  Container,
  Flex,
  keyframes,
  Text,
  VStack,
} from '@chakra-ui/react';
import Moon from '../images/moon.jpg';

export const NavCircle = ({ width, setScreen }) => {
  let spin = keyframes`
  to { background-position: right }`;
  return (
    <Center
      w={'100%'}
      h={'100%'}
      border={'1px solid white'}
      borderRadius={'50%'}
      pos={'relative'}
      zIndex={10000}
    >
      <Box
        w={'60%'}
        h={'60%'}
        p={'20px'}
        border={'7px solid rgba(222, 220, 220, 0.85)'}
        borderRadius={'50%'}
        boxShadow="0px 4px 56px 12px rgba(222, 220, 220, 0.15)"
      >
        <Box
          width={'100%'}
          h={'100%'}
          borderRadius={'50%'}
          backgroundImage={Moon}
          boxShadow={'-20px -20px 50px 2px #000 inset, 0px 0px 20px 2px #000'}
          backgroundSize={'cover'}
          animation={`${spin} 10s linear alternate infinite`}
          backgroundColor={'rgba(0,0,0,1)'}
        ></Box>
      </Box>
      <Flex
        w={'200px'}
        pos={'absolute'}
        color={'white'}
        top={'15%'}
        right={'7px'}
        flexDir={'column'}
        textAlign={'right'}
        gap={'35px'}
        fontSize={'14px'}
      >
        <Text as={'span'} mr={'25%'}>
          Home
        </Text>
        <Text
          as={'span'}
          alignSelf={'left'}
          mr={'10%'}
          onClick={() => {
            setScreen('about');
          }}
        >
          About
        </Text>
        <Text
          as={'span'}
          onClick={() => {
            setScreen('projects');
          }}
        >
          Projects
        </Text>
        <Text as={'span'} mr={'10%'}>
          Skills
        </Text>
        <Text as={'span'} mr={'25%'}>
          Contact
        </Text>
      </Flex>
    </Center>
  );
};
