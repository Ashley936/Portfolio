import { Box, Container, Heading } from '@chakra-ui/react';
import { useEffect, useRef, useState } from 'react';

export const MainPage = () => {
  const canvasRef = useRef();
  useEffect(() => {
    let canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');

    const particlesArr = [];
    let hue = 0;
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    window.addEventListener('resize', () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    });

    const mouse = {
      x: null,
      y: null,
    };

    class Particle {
      constructor() {
        this.x = mouse.x;
        this.y = mouse.y;
        this.size = Math.random() * 10 + 1;
        this.speedX = Math.random() * 3 - 1.5;
        this.speedY = Math.random() * 3 - 1.5;
        this.color = `hsl(${hue},100%,50%)`;
      }
      update() {
        if (this.size > 0.2) {
          this.size -= 0.1;
        }
        this.x += this.speedX;
        this.y += this.speedY;
      }
      draw() {
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    function cearteParticle() {
      for (let i = 0; i < 2; i++) {
        particlesArr.push(new Particle());
        hue += 5;
      }
    }

    function handleParticles() {
      for (let i = 0; i < particlesArr.length; i++) {
        particlesArr[i].update();
        particlesArr[i].draw();

        for (let j = i; j < particlesArr.length; j++) {
          const dx = particlesArr[i].x - particlesArr[j].x;
          const dy = particlesArr[i].y - particlesArr[j].y;
          const distance = Math.sqrt(dx * dx + dy * dy);
          if (distance > 10 && distance < 100) {
            ctx.beginPath();
            ctx.strokeStyle = particlesArr[i].color;
            ctx.lineWidth = particlesArr[i].size / 5;
            ctx.moveTo(particlesArr[i].x, particlesArr[i].y);
            ctx.lineTo(particlesArr[j].x, particlesArr[j].y);
            ctx.stroke();
          }
        }

        if (particlesArr[i].size <= 0.3) {
          particlesArr.splice(i, 1);
          i--;
        }
      }
    }

    canvas.addEventListener('mousemove', e => {
      mouse.x = e.x;
      mouse.y = e.y;
      cearteParticle();
    });

    canvas.addEventListener('click', e => {
      mouse.x = e.x;
      mouse.y = e.y;
      cearteParticle();
    });

    function animate() {
      /*ctx.fillStyle = 'rgba(0,0,0,0.1)'
        ctx.fillRect(0, 0, canvas.width, canvas.height) */

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      handleParticles();
      requestAnimationFrame(animate);
    }
    animate();
  }, []);
  return (
    <Box w={'100%'} h={'100vh'} pos={'relative'}>
      <canvas
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          background: 'black',
          width: '100%',
          height: '100%',
        }}
        ref={canvasRef}
      ></canvas>
      <Heading pos={'absolute'} zIndex={10} color={'white'}>
        {' '}
        Hi! I am Namita
      </Heading>
    </Box>
  );
};
