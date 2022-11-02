import {
  Button,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  VStack,
  Icon as ChakraIcon,
  Box,
  useToast,
  Textarea,
} from '@chakra-ui/react';
import emailjs from '@emailjs/browser';
import { Icon } from '@iconify/react';
import { motion } from 'framer-motion';
import { useRef } from 'react';
import { AiOutlineArrowRight } from 'react-icons/ai';
import { MdEmail } from 'react-icons/md';
import { container, item } from '../helpers/animation';

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);

export const ConnectLight = () => {
  const form = useRef();
  const toast = useToast();
  const handleSubmit = e => {
    e.preventDefault();
    emailjs
      .sendForm(
        'service_z8cjtpq',
        'template_gzq689e',
        form.current,
        'LlrbdIJ0E8xJ7MQf5'
      )
      .then(
        result => {
          toast({
            title: 'Email Sent !',
            description: 'Please wait, I will reach out to you soon.',
            status: 'success',
            duration: 3000,
            isClosable: true,
            position: 'top',
          });
        },
        error => {
          console.log(error.text);
        }
      );
  };
  return (
    <MotionBox
      key={5}
      initial={{ y: '-100%' }}
      animate={{ y: 0 }}
      transition={{ ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 }}
      exit={{ y: '-100%' }}
      color={'redTheme.200'}
      bg={'transparent'}
      w={'100vw'}
      h={'100%'}
      flexShrink={0}
    >
      <VStack
        pos="relative"
        w={'100vw'}
        h={'100%'}
        gap={'10%'}
        textAlign="center"
      >
        {/* 
      <VStack
        pos={'absolute'}
        right={'3px'}
        fontSize={'13.4vw'}
        fontWeight={'900'}
        fontFamily={"'Spartan',serif"}
        color={'transparent'}
        lineHeight={'100%'}
        height={'100%'}
        justifyContent={'space-between'}
        style={{
          WebkitTextStroke: '2px #D3D0C3',
        }}
        maxH={'100%'}
        overflow={'hidden'}
        spacing={0}
      >
        <Box>CONTACT ME</Box>
        <Box>CONTACT ME</Box>
        <Box>CONTACT ME</Box>
        <Box>CONTACT ME</Box>
        <Box>CONTACT ME</Box>
      </VStack> */}
        <MotionHeading
          initial="hidden"
          whileInView="visible"
          exit="exit"
          variants={container}
          fontSize={'4rem'}
          w={'40%'}
          minW={'250px'}
          mx={'auto'}
          my={'5%'}
          textTransform="uppercase"
        >
          <MotionBox display={'inline-block'} variants={item('-100%')}>
            Contact
          </MotionBox>{' '}
          <MotionBox
            color={'blueTheme.300'}
            display={'inline-block'}
            variants={item('100%')}
          >
            Me
          </MotionBox>
        </MotionHeading>
        <HStack
          alignItems={'center'}
          justifyContent={'space-between'}
          pl={'10%'}
          w="75%"
          gap={'10%'}
        >
          <VStack fontSize={'2.8rem'} gap={'20px'}>
            <Button
              as="a"
              href="mailto:namitarastogimwn@gmail.com?body=My custom mail body"
              bg={'redTheme.200'}
              fontWeight={300}
              color={'bgTheme.100'}
              borderRadius={'20px'}
              py={'25px'}
              fontSize={'1.2rem'}
              w="80%"
              transform={'scale(1)'}
              _hover={{ bg: 'redTheme.300', transform: 'scale(1.05)' }}
            >
              Email <ChakraIcon as={MdEmail} fontSize={'1.5rem'} ml={3} />
            </Button>
            <HStack gap={'20px'}>
              <Icon icon="logos:twitter" />
              <Icon icon="logos:linkedin-icon" />
              <Icon icon="ion:logo-github" color="black" fontSize={'3rem'} />
            </HStack>
          </VStack>

          <form onSubmit={handleSubmit} ref={form}>
            <Flex
              w={'500px'}
              flexWrap={'wrap'}
              justifyContent="space-between"
              gap={'40px'}
            >
              <FormControl w={'45%'} variant="floating">
                <Input placeholder=" " name="from_name" />
                <FormLabel>Full Name</FormLabel>
              </FormControl>
              <FormControl w={'45%'} variant="floating">
                <Input placeholder=" " required name="from_email" />
                <FormLabel>Email</FormLabel>
              </FormControl>
              <FormControl variant="floating">
                <Input placeholder=" " name="subject" />
                <FormLabel>Subject</FormLabel>
              </FormControl>
              <FormControl variant="floating">
                <Textarea placeholder=" " name="message" />
                <FormLabel>Message</FormLabel>
              </FormControl>
              <Button
                type={'submit'}
                onSubmit={handleSubmit}
                ml={'auto'}
                bg={'redTheme.200'}
                fontWeight={300}
                color={'bgTheme.100'}
                borderRadius={'20px'}
                w="200px"
                role={'group'}
                _hover={{ bg: 'redTheme.300' }}
              >
                Contact Me{' '}
                <ChakraIcon
                  as={AiOutlineArrowRight}
                  fontSize={'1.5rem'}
                  pos={'relative'}
                  left={2}
                  transition={'all ease-in-out 0.2s'}
                  _groupHover={{ left: 3 }}
                />
              </Button>
            </Flex>
          </form>
        </HStack>
      </VStack>
    </MotionBox>
  );
};
