import React from "react";
import { createContext, useState } from "react";

export const MenuContext = createContext({ isOpen: false, toggle: () => {} });

const MenuContextProvider = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => {
    setIsOpen(!isOpen);
  };
  return (
    <MenuContext.Provider value={{ isOpen, toggle }}>
      {children}
    </MenuContext.Provider>
  );
};

export default MenuContextProvider;
