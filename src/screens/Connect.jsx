import { Box, Button, Heading, HStack, Text } from '@chakra-ui/react';
import { Icon } from '@iconify/react';
import Globe from '../images/globe.jpg';
export const Connect = () => {
  return (
    <Box
      w={'100vw'}
      h={'100%'}
      flexShrink={0}
      display={'flex'}
      flexDirection={'column'}
      bgImg={Globe}
      bgPos={'center'}
      bgSize={'cover'}
      bgRepeat={'no-repeat'}
      alignItems={'center'}
      justifyContent={'center'}
    >
      <Heading
        textTransform={'uppercase'}
        color={'transparent'}
        fontSize={'3.8rem'}
        fontWeight={900}
        style={{ WebkitTextStroke: '1px white' }}
        letterSpacing={2}
      >
        Connect with me
      </Heading>
      <Button
        mt={'40px'}
        bg={'transparent'}
        border={'2px solid white'}
        fontSize={'2rem'}
        color={'white'}
        p={'30px 60px'}
        fontFamily={'Spartan'}
        fontWeight={300}
        display={'flex'}
        alignItems={'center'}
        _hover={{
          background: 'lightBlue',
          borderColor: 'lightBlue',
          color: '#333',
        }}
      >
        <Text>Mail</Text>
      </Button>
      <HStack fontSize={'2.5rem'} gap={3} my={'30px'}>
        <Icon icon="logos:twitter" />
        <Icon icon="logos:linkedin-icon" />
        <Icon icon="ion:logo-github" color="white" />
      </HStack>
    </Box>
  );
};
