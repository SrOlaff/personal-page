import React from "react";
import { motion } from "framer-motion";
import TabPanel from "../../components/TabPanel";
import SocialMediaButton from "../../components/SocialMediaButton";
import {
  checkoutSocialMediaAnimation,
  typographyAnimations,
} from "./animations";

function Me() {
  return (
    <motion.div
      className="container mx-auto flex min-h-screen flex-col justify-evenly  overflow-hidden py-10 px-5 lg:h-screen"
      id="me"
      transition={{
        staggerChildren: 0.3,
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.div className="my-10 text-text" variants={typographyAnimations}>
        <h2 className="mb-5 w-fit border-b border-accent text-3xl font-bold sm:text-4xl lg:text-5xl  md:portrait:text-5xl">
          me
        </h2>
        <p className="text-justify md:text-lg xl:text-xl ">
          Hello! My name is Pedro Olavo, I&apos;mm 18 years old and I have
          worked in the tech industry as a Software developer for a year. Ever
          since my early days I was deeply passionate about technology, and it
          has always been my dream to contribute to the upcoming changes in the
          world.
        </p>
      </motion.div>

      <motion.div
        className="flex flex-1 flex-col"
        variants={typographyAnimations}
      >
        <motion.h2 className="mb-5 w-fit border-b border-accent py-1 text-3xl font-bold text-text sm:text-4xl md:mb-8 lg:text-5xl 2xl:py-3 md:portrait:text-5xl">
          experience
        </motion.h2>

        <TabPanel />

        <motion.div
          className="mt-10 flex items-center"
          transition={{
            staggerChildren: 0.3,
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
        >
          <motion.p
            className="text-sm font-light text-text opacity-40 xl:text-lg"
            variants={checkoutSocialMediaAnimation}
          >
            checkout my
          </motion.p>

          <motion.span
            className="mx-3 h-[0.5px] w-10 bg-text opacity-40"
            variants={checkoutSocialMediaAnimation}
          />

          <motion.div variants={checkoutSocialMediaAnimation}>
            <SocialMediaButton iconName="github" />
          </motion.div>

          <motion.div variants={checkoutSocialMediaAnimation}>
            <SocialMediaButton iconName="linkedin" />
          </motion.div>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}

export default Me;
