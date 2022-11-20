import { Variants } from "framer-motion";

const typographyAnimations: Variants = {
  hidden: { y: "100vh" },
  show: {
    y: 0,
    transition: {
      type: "spring",
      bounce: 0.2,
    },
  },
};

export default typographyAnimations;
