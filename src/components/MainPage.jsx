import {
  Box,
  Container,
  Flex,
  Heading,
  HStack,
  Link,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

export const MainPage = () => {
  const canvasRef = useRef();
  useEffect(() => {
    let canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let particlesArr = [];
    let hue = 0;
    let adjustX = 14;
    let adjustY = 0;
    const mouse = {
      x: null,
      y: null,
      radius: 100,
    };
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', e => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });
    canvas.addEventListener('mousemove', e => {
      mouse.x = e.x;
      mouse.y = e.y;
    });
    ctx.fillStyle = 'white';
    ctx.font = '20px Ariel';
    ctx.fillText('Namita', 0, 25); // fourth arg gives max width of text
    const textCoordinates = ctx.getImageData(0, 0, 150, 100);
    class Particle {
      constructor(x, y) {
        this.x = x;
        this.y = y;
        this.size = 3;
        this.baseX = this.x;
        this.baseY = this.y;
        this.density = Math.random() * 30 + 1;
      }
      update() {
        let dx = this.x - mouse.x;
        let dy = this.y - mouse.y;
        let distance = Math.sqrt(dx * dx + dy * dy);
        let forceDistanceX = dx / distance;
        let forceDistanceY = dy / distance;
        let maxDistance = mouse.radius;
        // force contains the fraction of speed the particle should have
        let force = (maxDistance - distance) / maxDistance;
        let directionX = forceDistanceX * force * this.density;
        let directionY = forceDistanceY * force * this.density;
        if (distance < mouse.radius) {
          // my dx and dy are -ve so directionX and directionY are also -ve so '+' here actually pushes the particles away
          this.x += directionX;
          this.y += directionY;
        } else {
          if (this.x !== this.baseX) {
            let dx = this.x - this.baseX;
            this.x -= dx / 2;
          }
          if (this.y !== this.baseY) {
            let dy = this.y - this.baseY;
            this.y -= dy / 2;
          }
        }
      }
      draw() {
        ctx.fillStyle = 'white';
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function init() {
      particlesArr = [];
      for (let y = 0, y2 = textCoordinates.height; y < y2; y++) {
        for (let x = 0, x2 = textCoordinates.width; x < x2; x++) {
          if (
            textCoordinates.data[4 * y * textCoordinates.width + x * 4 + 3] >
            128
          ) {
            let positionX = x + adjustX;
            let positionY = y + adjustY;
            particlesArr.push(new Particle(positionX * 15, positionY * 15));
          }
        }
      }
    }

    function animate() {
      requestAnimationFrame(animate);
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particlesArr.length; i++) {
        particlesArr[i].draw();
        particlesArr[i].update();
      }
      connect();
    }
    init();

    function connect() {
      let opacity = 1;
      for (let a = 0; a < particlesArr.length; a++) {
        for (let b = a; b < particlesArr.length; b++) {
          let dx = particlesArr[a].x - particlesArr[b].x;
          let dy = particlesArr[a].y - particlesArr[b].y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          opacity = 1 - distance / 35;
          if (distance < 25) {
            ctx.strokeStyle = 'rgba(255,255,255,' + opacity + ')';
            ctx.lineWidth = 2;
            ctx.beginPath();
            ctx.moveTo(particlesArr[a].x, particlesArr[a].y);
            ctx.lineTo(particlesArr[b].x, particlesArr[b].y);
            ctx.stroke();
          }
        }
      }
    }
    //animate();
  }, []);
  return (
    <Box
      w={'100%'}
      h={'100vh'}
      pos={'relative'}
      bg={'linear-gradient(#25364f, #4d71a5, #9bc4ff)'}
    >
      <canvas
        style={{
          position: 'absolute',
          zIndex: 2,
          top: 0,
          left: 0,
          background: 'transparent',
        }}
        ref={canvasRef}
      ></canvas>
      <HStack
        as="nav"
        gap={5}
        alignSelf={'flex-end'}
        px={10}
        py={4}
        fontSize={{ base: 'sm', md: 'xl' }}
      >
        <Link href={'#'}>Home</Link>
        <Link href={'#'}>Skills</Link>
        <Link href={'#'}>Projects</Link>
        <Link href={'#'}>Contact me</Link>
        <Link href={'#'}>Resume</Link>
      </HStack>
    </Box>
  );
};
