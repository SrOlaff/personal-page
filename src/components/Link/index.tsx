import React from "react";
import { Link as LinkBase, LinkProps as LinkBaseProps } from "react-scroll";

type LinkProps = Omit<LinkBaseProps, "ref"> & {
  forceActive?: boolean;
};

function Link({ children, forceActive, ...rest }: LinkProps) {
  return (
    <LinkBase
      className={`cursor-pointer transition-colors duration-200
      ${forceActive && "active"}`}
      smooth
      spy
      {...rest}
    >
      {children}
    </LinkBase>
  );
}

export default Link;
