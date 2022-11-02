import {
  Box,
  Center,
  Heading,
  HStack,
  Image,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import ScrollDown from '../images/Scrolldown.svg';
import { IsoIcon } from './Icons/Icons';
import { FaGithub, FaLinkedinIn, FaTwitter } from 'react-icons/fa';

export const HomeSectionLight = () => {
  return (
    <VStack
      w={'100%'}
      h={'100%'}
      flexShrink={0}
      justifyContent={'flex-start'}
      bg={'bgTheme.100'}
      color={'redTheme.200'}
    >
      <HStack
        as={'nav'}
        w={'100%'}
        p={'20px 50px'}
        justifyContent={'space-between'}
        fontSize={{ base: '13px', md: '16px' }}
        fontWeight={500}
      >
        <Text fontWeight={'900'} fontSize={'1.2rem'}>
          Namita
        </Text>
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
      <Center h={'80vh'} w={'80vw'}>
        <Heading
          fontWeight={700}
          fontSize={'10rem'}
          pos={'absolute'}
          zIndex={500}
        >
          NAMITA
        </Heading>
      </Center>
      <Box pos="absolute" top="25%" left="10%">
        <IsoIcon icon={FaGithub} />
      </Box>
      <Box pos="absolute" top="25%" right="20%">
        <IsoIcon icon={FaLinkedinIn} />
      </Box>
      <Box pos="absolute" bottom="20%">
        <IsoIcon icon={FaTwitter} />
      </Box>
      <Box
        pos="absolute"
        bottom="10%"
        left="20px"
        w="150px"
        h="200px"
        rounded="full"
        color="black"
      >
        <Image src={ScrollDown} />
      </Box>
    </VStack>
  );
};
