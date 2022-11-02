import {
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';

export const ProjectInfo = ({ info, index, lightMode }) => {
  return (
    <HStack
      w={'100%'}
      flexShrink={0}
      h={'350px'}
      borderBottom={lightMode ? '1px solid #D3C3A5' : '1px solid #434141'}
    >
      <HStack
        w={'50%'}
        h={'100%'}
        borderRight={lightMode ? '1px solid #D3C3A5' : '1px solid #434141'}
        p={3}
        gap={'10%'}
      >
        <Flex
          h={'100%'}
          alignItems={'flex-end'}
          color={lightMode ? 'redTheme.100' : '#444'}
        >
          <Text
            lineHeight={0.8}
            fontSize={'7rem'}
            py={0}
            h={'fit-content'}
            letterSpacing={'-20px'}
          >
            1.
          </Text>
        </Flex>
        <VStack
          justifyContent={'space-between'}
          h={'100%'}
          textAlign={'left'}
          alignItems={'left'}
        >
          <Heading
            fontSize={'3rem'}
            fontWeight={600}
            mt={'5%'}
            color={lightMode && 'blueTheme.300'}
          >
            IPRESS
          </Heading>
          <List px={'5px'} fontSize={'0.95rem'} color={lightMode && 'gray.800'}>
            <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
            <ListItem>Lorem ipsum dolor sit amet consectetur</ListItem>
          </List>
        </VStack>
      </HStack>
    </HStack>
  );
};
