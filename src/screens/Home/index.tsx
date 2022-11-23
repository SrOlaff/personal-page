import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { illustrationAnimation, typographyAnimation } from "./animations";

function Home() {
  const animationControls = useAnimation();

  async function logoAnimation() {
    await animationControls.start("show");
    animationControls.start("bounce");
  }

  useEffect(() => {
    logoAnimation();
  }, []);

  return (
    <div
      className="container mx-auto flex h-screen portrait:flex-col-reverse landscape:flex-row"
      id="home"
    >
      <div className="flex justify-center lg:flex-1 lg:items-center portrait:h-1/3 landscape:h-full ">
        <motion.div
          transition={{
            delayChildren: 1.5,
            staggerChildren: 0.3,
          }}
          initial="hidden"
          animate="show"
          className="flex flex-col items-center space-y-3 text-center text-3xl text-text sm:text-4xl lg:text-5xl 2xl:text-7xl portrait:pt-3 md:portrait:text-5xl landscape:justify-center"
        >
          <motion.h1 variants={typographyAnimation}>
            HELLO<span className="text-accent">!</span>
          </motion.h1>

          <motion.h1 variants={typographyAnimation}>
            I<span className="text-accent">&apos;</span>M PEDRO OLAVO
          </motion.h1>

          <motion.h1
            variants={typographyAnimation}
            className="text-base text-accent md:text-lg xl:text-xl 2xl:text-2xl"
          >
            <span className="pr-2 text-text">{"<"}</span>
            software developer
            <span className="pl-2 text-text">{"/>"}</span>
          </motion.h1>
        </motion.div>
      </div>

      <div className="flex flex-1 justify-center portrait:items-end ">
        <motion.img
          className="w-full opacity-0 md:w-3/4 lg:w-full 2xl:w-10/12"
          src="/pc-guy.svg"
          alt="Person with a laptop on his lap"
          initial="hidden"
          animate={animationControls}
          variants={illustrationAnimation}
        />
      </div>
    </div>
  );
}

export default Home;
