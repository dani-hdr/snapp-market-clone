import React from 'react'
import { createContext, useState } from 'react';

export const MenuConext = createContext<any>(false)

const MenuContext = ({children} : {children : React.ReactNode}) => {
  const [showMenu,setShowMenu] = useState<boolean>(false)
  return (
    <MenuConext.Provider value={[showMenu,setShowMenu]}>
        {children}
    </MenuConext.Provider>
  )
}

export default MenuContext