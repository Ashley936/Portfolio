import { Box, Center, Icon } from '@chakra-ui/react';
import { FaGithub } from 'react-icons/fa';
export const IsoIcon = ({ icon }) => {
  return (
    <Center
      bg="#fff"
      color={'blueTheme.200'}
      fontSize={'40px'}
      w={'100px'}
      h={'100px'}
      transition="0.5s"
      cursor="pointer"
      boxShadow={'-20px 10px 10px rgba(0,0,0,.5)'}
      transform={
        'perspective(1000px) rotate(-30deg) skew(25deg) translate(0,0)'
      }
      _before={{
        content: `""`,
        position: 'absolute',
        top: '10px',
        left: '-20px',
        height: '100px',
        width: '20px',
        background: '#b1b1b1',
        transition: '0.5s',
        transform: 'rotate(0deg) skewY(-45deg)',
      }}
      _after={{
        content: `""`,
        position: 'absolute',
        bottom: '-20px',
        left: '-10px',
        height: '20px',
        width: '100%',
        background: '#ccc',
        transition: '0.5s',
        transform: 'rotate(0deg) skewX(-45deg)',
      }}
      _hover={{
        transform:
          'perspective(1000px) rotate(-30deg) skew(25deg) translate(0,0)',
        boxShadow: '-50px 50px 50px rgba(0,0,0,0.5)',
      }}
    >
      <Icon as={icon}></Icon>
    </Center>
  );
};
