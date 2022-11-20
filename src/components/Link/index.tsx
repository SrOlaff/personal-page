import React from "react";
import { Link as LinkBase, LinkProps as LinkBaseProps } from "react-scroll";

type LinkProps = Omit<LinkBaseProps, "ref">;

function Link({ children, ...rest }: LinkProps) {
  return (
    <LinkBase
      className={`cursor-pointer transition-colors duration-200 ${rest.className}`}
      smooth
      spy
      {...rest}
    >
      {children}
    </LinkBase>
  );
}

export default Link;
