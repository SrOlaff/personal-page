import React from "react";
import { IconBaseProps, IconType } from "react-icons";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const SOCIAL_MEDIA_ICONS = {
  GITHUB: {
    Component: (props?: IconBaseProps) => <FaGithub {...props} />,
    link: "https://google.com",
  },
  LINKEDIN: {
    Component: (props?: IconBaseProps) => <FaLinkedin {...props} />,
    link: "https://google.com",
  },
};

type SocialMediaIcons = "GITHUB" | "LINKEDIN";

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
      className="flex justify-center items-center p-4 rounded-full bg-surface hover:opacity-70 transition-all duration-200"
    >
      <SocialMediaIcon.Component className="text-text text-2xl" />
    </a>
  );
}

export default SocialMediaButton;
