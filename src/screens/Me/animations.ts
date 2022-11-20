import { Variants } from "framer-motion";

export const typographyAnimations: Variants = {
  hidden: { y: "100vh" },
  show: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

export const checkoutSocialMediaAnimation: Variants = {
  hidden: { opacity: 0, x: "-100%" },
  show: {
    opacity: 1,
    x: 0,
    transition: {
      type: "spring",
      bounce: 0.6,
    },
  },
};
