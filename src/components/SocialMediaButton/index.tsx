import React from "react";
import { IconBaseProps } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_MEDIA_ICONS = {
  github: {
    Component: (props?: IconBaseProps) => <FaGithub {...props} />,
    link: "https://github.com/SrOlaff",
  },
  linkedin: {
    Component: (props?: IconBaseProps) => <FaLinkedin {...props} />,
    link: "https://linkedin.com/in/pedroolavo",
  },
};

type SocialMediaIcons = "github" | "linkedin";

interface SocialMediaButtonProps {
  iconName: SocialMediaIcons;
}

function SocialMediaButton({ iconName }: SocialMediaButtonProps) {
  const SocialMediaIcon = SOCIAL_MEDIA_ICONS[iconName];

  return (
    <a
      href={SocialMediaIcon.link}
      target="_blank"
      rel="noopener noreferrer"
      className="flex justify-center items-center p-4 2xl:p-5 mr-3 rounded-full bg-surface hover:opacity-70 transition-all duration-200"
    >
      <SocialMediaIcon.Component className="text-text text-2xl 2xl:text-3xl" />
    </a>
  );
}

export default SocialMediaButton;
