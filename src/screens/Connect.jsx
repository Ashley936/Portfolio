import { Box, Heading } from '@chakra-ui/react';
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
      <Heading textTransform={'uppercase'} color={'white'} fontSize={'3.5rem'}>
        Connect with me
      </Heading>
    </Box>
  );
};
