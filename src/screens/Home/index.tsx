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
      className="h-screen container mx-auto flex portrait:flex-col-reverse landscape:flex-row"
      id="home"
    >
      <div className="flex lg:flex-1 portrait:h-1/3 landscape:h-full justify-center lg:items-center ">
        <motion.div
          transition={{
            delayChildren: 1.5,
            staggerChildren: 0.3,
          }}
          initial="hidden"
          animate="show"
          className="text-text space-y-3 flex text-center flex-col items-center landscape:justify-center portrait:pt-3 text-3xl sm:text-4xl md:portrait:text-5xl lg:text-5xl 2xl:text-7xl"
        >
          <motion.h1 variants={typographyAnimation}>
            HELLO<span className="text-accent">!</span>
          </motion.h1>

          <motion.h1 variants={typographyAnimation}>
            I<span className="text-accent">&apos;</span>M PEDRO OLAVO
          </motion.h1>

          <motion.h1
            variants={typographyAnimation}
            className="text-base md:text-lg xl:text-xl 2xl:text-2xl text-accent"
          >
            <span className="pr-2 text-text">{"<"}</span>
            software developer
            <span className="pl-2 text-text">{"/>"}</span>
          </motion.h1>
        </motion.div>
      </div>

      <div className="flex flex-1 justify-center portrait:items-end ">
        <motion.img
          className="w-full md:w-3/4 lg:w-full opacity-0"
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
