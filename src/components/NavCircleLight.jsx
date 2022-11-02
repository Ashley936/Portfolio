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

export const NavCircleLight = ({ width, setScreen }) => {
  let spin = keyframes`
    to {transform: rotate(360deg) }`;
  return (
    <Center
      w={'100%'}
      h={'100%'}
      border={'1px solid white'}
      borderColor={'redTheme.200'}
      borderRadius={'50%'}
      pos={'relative'}
      zIndex={10000}
    >
      <Center
        w={'60%'}
        h={'60%'}
        p={'20px'}
        border={'7px solid rgba(222, 220, 220, 0.85)'}
        borderColor={'redTheme.100'}
        borderRadius={'50%'}
        boxShadow="0px 4px 20px 12px rgba(233, 128, 116, 0.3)"
      >
        {/*  <Center
          width={'90%'}
          h={'90%'}
          borderRadius={'50%'}
          border={'5px solid transparent'}
          borderLeftColor={'gray.600'}
          borderRightColor={'gray.600'}
          animation={`${spin} 2s linear infinite`}
        >
          <Center
            width={'80%'}
            h={'80%'}
            borderRadius={'50%'}
            border={'5px solid transparent'}
            borderBottomColor={'green.900'}
            borderTopColor={'green.900'}
            animation={`${spin} 3s linear infinite`}
          >
            <Center
              width={'80%'}
              h={'80%'}
              borderRadius={'50%'}
              border={'5px solid transparent'}
              borderLeftColor={'blue.600'}
              borderRightColor={'blue.600'}
              animation={`${spin} 5s linear infinite`}
            ></Center>
          </Center>
        </Center> */}
      </Center>
      <Flex
        w={'200px'}
        pos={'absolute'}
        color={'gray.800'}
        top={'20%'}
        right={'5px'}
        flexDir={'column'}
        textAlign={'right'}
        gap={'35px'}
        fontSize={'1rem'}
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
        <Text
          as={'span'}
          mr={'10%'}
          onClick={() => {
            setScreen('skills');
          }}
        >
          Skills
        </Text>
        <Text
          as={'span'}
          mr={'25%'}
          onClick={() => {
            setScreen('connect');
          }}
        >
          Contact
        </Text>
      </Flex>
    </Center>
  );
};
