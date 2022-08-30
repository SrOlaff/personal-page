export const navItemAnimation = {
  hidden: { opacity: 0, y: "-100%" },
  show: {
    opacity: 1,
    y: 0,
  },
};

export const mobileTabAnimation = {
  hidden: { x: "200%" },
  show: { x: 0 },
};

export const hamburguerMenuAnimations = {
  upperBarOpen: { rotate: "45deg", translateY: "0.5rem" },
  upperBarClosed: { rotate: 0, translateY: 0 },
  middleBarOpen: { opacity: 0 },
  middleBarClosed: { opacity: 1 },
  lowerBarOpen: { rotate: "-45deg", translateY: "-0.5rem" },
  lowerBarClosed: { rotate: 0, translateY: 0 },
};
