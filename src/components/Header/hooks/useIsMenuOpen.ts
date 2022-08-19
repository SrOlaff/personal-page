import React from "react";

export default function useIsMenuOpen() {
  const [isOpen, setIsOpen] = React.useState(false);

  const toggle = () => setIsOpen(!isOpen);

  return { isOpen, toggle };
}
