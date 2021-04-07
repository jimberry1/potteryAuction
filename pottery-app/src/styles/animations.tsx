export const artPageFadeInVariants = {
  hidden: {
    opacity: 0,
    y: 50,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.5,
    },
  },
};

export const authenticationCardDropInVariants = {
  hidden: {
    y: '-100vh',
  },
  visible: {
    y: 0,
    transition: {
      delay: 1,
      type: 'spring',
      damping: 20,
    },
  },
};
