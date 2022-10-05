import {
  Box,
  Center,
  Container,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { NavCircle } from './NavCircle';
import Home from '../images/home.png';

export const HomeSection = () => {
  return (
    <VStack
      color={'white'}
      bg={'#000'}
      w={'100vw'}
      h={'100%'}
      flexShrink={0}
      justifyContent={'flex-start'}
    >
      <HStack
        as={'nav'}
        w={'100%'}
        p={'20px 50px'}
        justifyContent={'space-between'}
        fontSize={{ base: '13px', md: '16px' }}
      >
        <Text>Namita</Text>
        <HStack
          w={'40%'}
          justifyContent={'space-evenly'}
          textTransform={'uppercase'}
        >
          <Link>Works</Link>
          <Link>About Me</Link>
          <Link>Resume</Link>
        </HStack>
        <Text textTransform={'uppercase'}>Contact</Text>
      </HStack>
      <Center
        h={'80vh'}
        w={'80vw'}
        bgColor={'black'}
        backgroundImage={Home}
        backgroundSize={'contain'}
        backgroundRepeat={'no-repeat'}
        backgroundPosition={'center'}
        pr={'10%'}
      >
        <Heading fontWeight={700} fontSize={'10rem'}>
          NAMITA
        </Heading>
        {/* ADD CANVAS */}
      </Center>
    </VStack>
  );
};
