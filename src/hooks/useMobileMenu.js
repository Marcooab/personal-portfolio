import { useState } from "react";

function useMobileMenu() {
  const [isOpen, setIsOpen] = useState(false);

  function toggle() {
    setIsOpen((prev) => !prev);
  }

  return { isOpen, toggle };
}

export default useMobileMenu;