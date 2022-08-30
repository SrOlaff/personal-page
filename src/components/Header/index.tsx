import React from "react";
import { motion } from "framer-motion";

import {
  navItemAnimation,
  hamburguerMenuAnimations,
  mobileTabAnimation,
} from "./animations";

interface HeaderProps {
  toggle: () => void;
  isOpen: boolean;
}

function Header({ toggle, isOpen }: HeaderProps) {
  const hamburgerBars = "w-full h-0.5 mt-1.5 bg-text rounded-full";

  return (
    <>
      <nav className="container mx-auto">
        <motion.ul
          className="hidden md:flex fixed backdrop-blur-md z-10 container text-white justify-end space-x-14 text-2xl py-8 px-10"
          initial="hidden"
          animate="show"
          transition={{
            staggerChildren: 0.3,
            type: "tween",
            duration: 1,
          }}
        >
          <motion.li variants={navItemAnimation}>home</motion.li>
          <motion.li variants={navItemAnimation}>me</motion.li>
          <motion.li variants={navItemAnimation}>contact</motion.li>
        </motion.ul>
      </nav>

      <nav className="md:hidden fixed right-0 mt-8 mr-5 z-30 ">
        <button type="button" className="w-10 px-1 " onClick={() => toggle()}>
          <motion.div
            className={hamburgerBars}
            variants={hamburguerMenuAnimations}
            animate={isOpen ? "upperBarOpen" : "upperBarClosed"}
            transition={{ ease: "easeIn", duration: 0.2 }}
          />
          <motion.div
            className={hamburgerBars}
            variants={hamburguerMenuAnimations}
            animate={isOpen ? "middleBarOpen" : "middleBarClosed"}
            transition={{ ease: "linear" }}
          />
          <motion.div
            className={hamburgerBars}
            variants={hamburguerMenuAnimations}
            animate={isOpen ? "lowerBarOpen" : "lowerBarClosed"}
            transition={{ ease: "easeIn", duration: 0.2 }}
          />
        </button>
      </nav>

      <motion.aside
        variants={mobileTabAnimation}
        initial="hidden"
        animate={isOpen ? "show" : "hidden"}
        transition={{ ease: "easeIn", duration: 0.4 }}
        className="md:hidden fixed w-3/4 h-screen right-0 top-0 z-20 flex justify-center items-center bg-accent"
      >
        <ul className="space-y-10 text-text text-2xl">
          <p>home</p>
          <p>me</p>
          <p>contact</p>
        </ul>
      </motion.aside>
    </>
  );
}

export default Header;
