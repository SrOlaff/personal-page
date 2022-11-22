import React from "react";
import { motion, Variants } from "framer-motion";
import { IconBaseProps } from "react-icons";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_MEDIA_ICONS = {
  github: {
    Component: (props?: IconBaseProps) => <FaGithub {...props} />,
    link: "https://github.com/pedro-olavo",
  },
  linkedin: {
    Component: (props?: IconBaseProps) => <FaLinkedin {...props} />,
    link: "https://linkedin.com/in/pedroolavo",
  },
  email: {
    Component: (props?: IconBaseProps) => <FaEnvelope {...props} />,
    link: "https://linkedin.com/in/pedroolavo",
  },
};

type SocialMediaIcons = "github" | "linkedin" | "email";

interface SocialMediaButtonProps {
  iconName: SocialMediaIcons;
  animation?: Variants;
}

function SocialMediaButton({ iconName, animation }: SocialMediaButtonProps) {
  const SocialMediaIcon = SOCIAL_MEDIA_ICONS[iconName];

  return (
    <motion.a
      variants={animation}
      href={SocialMediaIcon.link}
      target="_blank"
      rel="noopener noreferrer"
      className="mr-3 flex w-fit items-center justify-center rounded-full bg-surface p-4 transition-all duration-200 hover:opacity-70 2xl:p-5"
    >
      <SocialMediaIcon.Component className="text-2xl text-text 2xl:text-3xl" />
    </motion.a>
  );
}

export default SocialMediaButton;
