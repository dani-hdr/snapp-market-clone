import React,{createContext,useState} from 'react'

export const CartContext = createContext({isCartOpen:false,toggleCart:()=>{}})
const CartContextProvider = ({children}) => {
  const [isCartOpen,setIsCartOpen] = useState(false)
  const toggleCart = ()=>{
    setIsCartOpen(!isCartOpen)
    console.log('toggle cart')
  }
  return (
    <CartContext.Provider value={{isCartOpen,toggleCart}}>{children}</CartContext.Provider>
  )
}

export default CartContextProvider