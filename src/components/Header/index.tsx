import React from "react";
import { motion } from "framer-motion";
import useIsMenuOpen from "./hooks/useIsMenuOpen";

function Header() {
  const { isOpen, toggle } = useIsMenuOpen();

  const navItem = {
    hidden: { opacity: 0, y: "-100%" },
    show: { opacity: 1, y: 0 },
  };

  const hamburgerBars =
    "w-full h-0.5 mt-1.5 bg-text rounded-full transition ease transform duration-300 ";

  return (
    <>
      <nav>
        <motion.ul
          className="hidden md:flex fixed backdrop-blur-sm z-10 container mx-auto text-white justify-end space-x-14 text-2xl py-8 px-10"
          initial="hidden"
          animate="show"
          transition={{
            staggerChildren: 0.3,
            type: "tween",
            duration: 1,
          }}
        >
          <motion.li variants={navItem}>home</motion.li>
          <motion.li variants={navItem}>me</motion.li>
          <motion.li variants={navItem}>contact</motion.li>
        </motion.ul>
      </nav>

      <nav className="md:hidden fixed right-0 mt-8 mr-5 z-30">
        <button type="button" className="w-10 px-1 " onClick={() => toggle()}>
          <div
            className={`${hamburgerBars} ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          />
          <div
            className={`${hamburgerBars} ${
              isOpen ? "opacity-0" : "opacity-100"
            }`}
          />
          <div
            className={`${hamburgerBars} ${
              isOpen ? "-rotate-45 -translate-y-2 " : ""
            }`}
          />
        </button>
      </nav>

      <aside
        className={`
          fixed w-3/4 h-screen right-0 top-0
          transition-all duration-300 ease-in z-20
          flex justify-center items-center bg-blue-500
          ${isOpen ? "right-0" : "-right-full"}`}
      >
        <ul className="space-y-10 text-white text-2xl">
          <p>home</p>
          <p>me</p>
          <p>contact</p>
        </ul>
      </aside>
    </>
  );
}

export default Header;
