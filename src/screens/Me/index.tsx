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
      id="me"
      className="container mx-auto flex shrink-0 flex-col justify-between space-y-4 py-5 xl:h-[110vh]"
      transition={{
        staggerChildren: 0.3,
      }}
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.4 }}
    >
      <motion.section
        className="mt-4 px-5 text-text lg:mt-16"
        variants={typographyAnimations}
      >
        <h2 className="mb-2 w-fit border-b border-accent text-3xl font-bold sm:text-4xl md:portrait:text-5xl lg:text-5xl 2xl:text-6xl">
          me
        </h2>
        <p className="text-justify md:text-lg xl:text-xl 2xl:text-2xl">
          Hello! My name is Pedro Olavo, I&apos;m 19 years old and I work in the
          tech industry as a software developer. Ever since my early days I was
          deeply passionate about technology, and it has always been my dream to
          contribute to the upcoming changes in the world.
        </p>
      </motion.section>

      <motion.section
        className="flex flex-1 flex-col xl:max-h-[70vh]"
        variants={typographyAnimations}
      >
        <h2 className="mx-5 mb-4 w-fit border-b border-accent text-3xl font-bold text-white sm:text-4xl md:portrait:text-5xl lg:text-5xl 2xl:text-6xl">
          experience
        </h2>

        <TabPanel />
      </motion.section>

      <motion.section
        className="flex items-center px-5"
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

        <SocialMediaButton iconName="github" />

        <SocialMediaButton iconName="linkedin" />
      </motion.section>
    </motion.div>
  );
}

export default Me;
