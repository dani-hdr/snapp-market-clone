import React from "react";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
import { CartContext } from './../../context/CartContext';
import { useSelector } from 'react-redux';


const MobileNav = () => {
  const {toggle} = useContext(MenuContext);
  const {toggleCart} = useContext(CartContext) 
  const products = useSelector(state=>state.cart.products)



  return (
    <div className="fixed md:hidden px-12 py-4  w-full bottom-0 z-30 bg-white border-t shadow-md">
      <div className="flex items-center justify-between text-slate-600 text-sm font-bold">
        <div className="group">
          <a
            href="#"
            className="flex flex-col gap-1 items-center group-hover:text-primary"
          >
            <AiOutlineHome className="group-hover:text-primary" size={25} />
            خانه
          </a>
        </div>
        <div className="group">
          <button
            onClick={() => toggle()}
            className="flex flex-col gap-1 items-center group-hover:text-primary"
          >
            <BiCategoryAlt className="group-hover:text-primary" size={25} />
            دسته بندی
          </button>
        </div>
        <div className="group">
          <button onClick={()=>toggleCart()} className="flex flex-col gap-1 items-center group-hover:text-primary">
            <MdOutlineShoppingCart size={25} />
            <span className="badge badge-primary badge-sm top-3 left-20 rounded-badge absolute">
              {products.length}
            </span>
            سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default MobileNav;
