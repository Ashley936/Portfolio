import {
  Flex,
  Heading,
  HStack,
  List,
  ListItem,
  Text,
  VStack,
} from '@chakra-ui/react';

export const ProjectInfo = ({ info, index }) => {
  return (
    <HStack
      w={'100%'}
      flexShrink={0}
      h={'350px'}
      borderBottom={'1px solid #434141'}
    >
      <HStack
        w={'50%'}
        h={'100%'}
        borderRight={'1px solid #434141'}
        p={3}
        gap={'10%'}
      >
        <Flex h={'100%'} alignItems={'flex-end'} color={'#444'}>
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
          <Heading fontSize={'3rem'} fontWeight={600} mt={'5%'}>
            IPRESS
          </Heading>
          <List px={'5px'} fontSize={'0.9rem'}>
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
