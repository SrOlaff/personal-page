import { Variants } from "framer-motion";

export const navItemAnimation: Variants = {
  hidden: { opacity: 0, y: "-100%" },
  show: {
    transition: {
      type: "spring",
      bounce: 0.6,
      duration: 1,
    },
    opacity: 1,
    y: 0,
  },
};

export const mobileTabAnimation: Variants = {
  hidden: { x: "200%" },
  show: { x: 0 },
};

export const hamburguerMenuAnimations: Variants = {
  upperBarOpen: { rotate: "45deg", translateY: "0.5rem" },
  upperBarClosed: { rotate: 0, translateY: 0 },
  middleBarOpen: { opacity: 0 },
  middleBarClosed: { opacity: 1 },
  lowerBarOpen: { rotate: "-45deg", translateY: "-0.5rem" },
  lowerBarClosed: { rotate: 0, translateY: 0 },
};
