import React, { useRef } from 'react';
import './style.css';
import { useSpring, animated, to } from 'react-spring';

const calcX = y => -(y - window.innerHeight / 2) / 20;
const calcY = x => (x - window.innerWidth / 2) / 20;

export function ProjectCard() {
  const domTarget = useRef(null);
  const [{ rotateX, rotateY, rotateZ, scale }, api] = useSpring(() => ({
    rotateX: 0,
    rotateY: 0,
    rotateZ: 0,
    scale: 1,
    config: { mass: 5, tension: 350, friction: 40 },
  }));

  return (
    <animated.div
      ref={domTarget}
      className="card"
      onMouseMove={({ clientX: px, clientY: py }) => {
        api({
          rotateX: calcX(py),
          rotateY: calcY(px),
          scale: 1.1,
        });
      }}
      onMouseLeave={() => api({ rotateX: 0, rotateY: 0, scale: 1 })}
      style={{
        transform: 'perspective(600px)',
        scale,
        rotateX,
        rotateY,
        rotateZ,
      }}
    ></animated.div>
  );
}
