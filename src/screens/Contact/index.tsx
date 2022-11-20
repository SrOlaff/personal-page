import { motion } from "framer-motion";
import React from "react";
import typographyAnimations from "./animations";

function Contact() {
  return (
    <div
      id="contact"
      className="flex h-[40vh] items-center justify-center overflow-hidden bg-accent px-5 py-5 text-text"
    >
      <div className="container">
        <motion.div
          className="mx-auto w-full text-justify lg:w-2/3"
          transition={{
            staggerChildren: 0.3,
          }}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 0.6 }}
        >
          <motion.h1
            variants={typographyAnimations}
            className="mb-5 text-center text-3xl font-bold sm:text-4xl lg:text-5xl 2xl:text-6xl md:portrait:text-5xl "
          >
            contact
          </motion.h1>

          <motion.div variants={typographyAnimations}>
            <span className="md:text-lg xl:text-xl 2xl:text-2xl">
              I also work with freelancing, feel free to share your idea and
              build a solution along with me, my{" "}
            </span>
            <span className="w-fit border-b border-background font-medium text-background md:text-lg xl:text-xl 2xl:text-2xl">
              <a href="mailto:olavo.dev@proton.me">inbox</a>
            </span>
            <span className="md:text-lg xl:text-xl 2xl:text-2xl">
              {" "}
              is always open :)
            </span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}

export default Contact;
