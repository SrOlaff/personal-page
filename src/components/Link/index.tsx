import React from "react";
import { Link as LinkBase, LinkProps as LinkBaseProps } from "react-scroll";

type LinkProps = Omit<LinkBaseProps, "ref">;

function Link({ children, ...rest }: LinkProps) {
  return (
    <LinkBase
      smooth
      className="transition-colors duration-200 cursor-pointer"
      activeClass="active"
      spy
      {...rest}
    >
      {children}
    </LinkBase>
  );
}

export default Link;
