import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Link from "../Link";

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

  const [atBottom, setIsAtBottom] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isAtBottom =
        Math.ceil(window.innerHeight + window.scrollY) >=
        document.documentElement.scrollHeight;

      setIsAtBottom(isAtBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <nav className="container mx-auto">
        <motion.ul
          className="container fixed z-10 hidden justify-end space-x-14 py-8 px-10 text-2xl text-white backdrop-blur-sm lg:flex"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.2 }}
        >
          <motion.li variants={navItemAnimation}>
            <Link to="home" activeClass={!atBottom ? "active" : " "}>
              home
            </Link>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <Link to="me" activeClass={!atBottom ? "active" : " "}>
              me
            </Link>
          </motion.li>
          <motion.li variants={navItemAnimation}>
            <Link to="contact" className={atBottom ? "active" : ""}>
              contact
            </Link>
          </motion.li>
        </motion.ul>
      </nav>

      <nav className="fixed right-0 z-30 mt-8 mr-5 lg:hidden ">
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
        className="fixed right-0 top-0 z-20 flex h-screen w-3/4 items-center justify-center bg-accent lg:hidden"
      >
        <ul className="space-y-10 text-2xl text-background">
          <li>
            <Link
              to="home"
              onClick={() => toggle()}
              activeClass={!atBottom ? "active" : " "}
            >
              home
            </Link>
          </li>
          <li>
            <Link
              to="me"
              onClick={() => toggle()}
              activeClass={!atBottom ? "active" : " "}
            >
              me
            </Link>
          </li>
          <li>
            <Link
              to="contact"
              onClick={() => toggle()}
              className={atBottom ? "active" : ""}
            >
              contact
            </Link>
          </li>
        </ul>
      </motion.aside>
    </>
  );
}

export default Header;
