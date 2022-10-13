import { Box, Center, Heading, Text, VStack } from '@chakra-ui/react';
import { useState } from 'react';
import { useEffect } from 'react';
import { useRef } from 'react';

export const SkillPage = () => {
  const [mainWidth, setMainWidth] = useState(0);
  const mainCircle = useRef();

  let width1 = 0.4 * mainWidth; // 1 , 2
  let top1 = (mainWidth - width1) / 2;
  let side1 = mainWidth / 2 - width1;

  let width2 = 0.3 * mainWidth; // 3 , 4
  let top2 = (mainWidth - 0.97 * width1 - 2 * width2) / 2;
  let side2 = (mainWidth - width2) / 2;

  let width3 = 0.18 * mainWidth; // 5 , 6, 7, 8
  let top3 = (mainWidth - 1.04 * width1 - 2 * width3) / 2;
  let side3 = (mainWidth - 1.04 * width2 - 2 * width3) / 2;

  let width4 = 0.13 * mainWidth; // 9, 10
  let top4 = top1 - 0.75 * width4;
  let side4 = side3 - 0.95 * width4;

  let width5 = 0.1 * mainWidth; // 11, 12, 13, 14
  let top5 = top1 - 0.1 * width5;
  let side5 = side1 - 0.68 * width5;

  let width6 = 0.06 * mainWidth; // 15, 16
  let top6 = top1 - 0.55 * width6;
  let side6 = side3 - 0.45 * width6;

  let width7 = 0.04 * mainWidth;
  /* const renderSmallCircles = () => {
    var indents = [];
    for (let i = 0; i < 2 * Math.PI; i = i + Math.PI / 18) {
      console.log(i);
      indents.push(
        <Box
          w={0.04 * mainWidth}
          h={0.04 * mainWidth}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          top={(mainWidth * (0.95 - 1.05 * Math.cos(i).toFixed(2))) / 2}
          right={(mainWidth * (0.95 - 1.05 * Math.sin(i).toFixed(2))) / 2}
        ></Box>
      );
    }
    return indents;
  }; */
  useEffect(() => {
    let main = mainCircle.current;
    setMainWidth(main.clientWidth);
    window.addEventListener('resize', () => {
      setMainWidth(main.clientWidth);
    });
    return () => {
      window.removeEventListener('resize', () => {
        setMainWidth(main.clientWidth);
      });
    };
  }, []);
  return (
    <VStack>
      <Box
        w={'70vh'}
        h={'70vh'}
        maxW={'700px'}
        maxH={'700px'}
        borderRadius={'50%'}
        bg={'gray.100'}
        ref={mainCircle}
        pos={'relative'}
      >
        <Box
          w={width1}
          h={width1}
          borderRadius={'50%'}
          bg={'gray.200'}
          pos={'absolute'}
          top={top1}
          left={side1 - 5}
        ></Box>
        <Box
          w={width1}
          h={width1}
          borderRadius={'50%'}
          bg={'gray.200'}
          pos={'absolute'}
          top={top1}
          right={side1 - 5}
        ></Box>
        <Box
          w={width2}
          h={width2}
          borderRadius={'50%'}
          bg={'gray.300'}
          pos={'absolute'}
          top={top2 + 20}
          left={side2}
        ></Box>
        <Box
          w={width2}
          h={width2}
          borderRadius={'50%'}
          bg={'gray.300'}
          pos={'absolute'}
          bottom={top2 + 20}
          left={side2}
        ></Box>
        <Box
          w={width3}
          h={width3}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          top={top3}
          left={side3}
        ></Box>
        <Box
          w={width3}
          h={width3}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          top={top3}
          right={side3}
        ></Box>
        <Box
          w={width3}
          h={width3}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          bottom={top3}
          left={side3}
        ></Box>
        <Box
          w={width3}
          h={width3}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          bottom={top3}
          right={side3}
        ></Box>
        <Box
          w={width4}
          h={width4}
          borderRadius={'50%'}
          bg={'gray.200'}
          pos={'absolute'}
          top={top4}
          left={side4}
        ></Box>
        <Box
          w={width4}
          h={width4}
          borderRadius={'50%'}
          bg={'gray.200'}
          pos={'absolute'}
          bottom={top4}
          right={side4}
        ></Box>
        <Box
          w={width5}
          h={width5}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          top={top5}
          right={side5}
        ></Box>
        <Box
          w={width5}
          h={width5}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          bottom={top5}
          left={side5}
        ></Box>
        <Box
          w={width5}
          h={width5}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          top={top5 - 1.1 * width5}
          right={side3 - 1.1 * width5}
        ></Box>
        <Box
          w={width5}
          h={width5}
          borderRadius={'50%'}
          bg={'gray.400'}
          pos={'absolute'}
          bottom={top5 - 1.1 * width5}
          left={side3 - 1.1 * width5}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.300'}
          pos={'absolute'}
          top={top6}
          right={side6}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.300'}
          pos={'absolute'}
          bottom={top6}
          left={side6}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.300'}
          pos={'absolute'}
          top={top5 + 1.1 * width5}
          right={side5}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.300'}
          pos={'absolute'}
          bottom={top5 + 1.1 * width5}
          left={side5}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.500'}
          pos={'absolute'}
          top={top3 - 0.7 * width6}
          left={side2 - 0.8 * width6}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.600'}
          pos={'absolute'}
          top={top3 - 1.6 * width6}
          left={side2}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.700'}
          pos={'absolute'}
          top={top3 - 1.3 * width6}
          right={side2 - 7}
        ></Box>
        <Box
          w={width6}
          h={width6}
          borderRadius={'50%'}
          bg={'gray.500'}
          pos={'absolute'}
          top={-1}
          right={side2 + 0.7 * width6}
        ></Box>
        <Box
          w={width7}
          h={width7}
          borderRadius={'50%'}
          bg={'gray.500'}
          pos={'absolute'}
          top={top2}
          left={side2 + width6 + 5}
        ></Box>
        <Box
          w={width7}
          h={width7}
          borderRadius={'50%'}
          bg={'gray.500'}
          pos={'absolute'}
          top={top3 - 0.5 * width7}
          right={side2 - 0.8 * width7}
        ></Box>
      </Box>
    </VStack>
  );
};
