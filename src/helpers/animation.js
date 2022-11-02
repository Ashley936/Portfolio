export const container = {
  hidden: {
    transition: {
      staggerChildren: 0.025,
    },
  },
  visible: {
    transition: {
      staggerChildren: 0.05,
    },
  },
  exit: {
    transition: {
      staggerChildren: 0.05,
    },
  },
};
export const item = pos => ({
  hidden: {
    x: pos,
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: { ease: [0.455, 0.03, 0.515, 0.955], duration: 0.5 },
  },
  exit: {
    x: pos,
    opacity: 0,
    transition: { ease: [0.455, 0.03, 0.515, 0.955] },
  },
});
