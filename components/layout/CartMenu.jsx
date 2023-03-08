
import React from "react";
import { BsTrash } from "react-icons/bs";
import { AiOutlineClose } from "react-icons/ai";

import Portal from "./../utils/Portal";
import { CartContext } from "../../context/CartContext";
import { useContext } from "react";
import { useSelector, useDispatch } from "react-redux";
import Overlay from "./Overlay";
import CartItem from './CartItem';
import { separate } from './../../utils/currencyHelpers';
import { cartActions } from "../../redux/cartSlice";

const CartMenu = () => {
  const dispatch = useDispatch();
  const { isCartOpen, toggleCart } = useContext(CartContext);
  const totalPrice = useSelector((state) => state.cart.totalPrice);
  const totalDiscount = useSelector((state) => state.cart.totalDiscount);
  const products = useSelector((state) => state.cart.products);
  return (
    <>
      {isCartOpen && <Overlay onClick={() => toggleCart()} />}
      <Portal>
        <div
          className={`fixed top-0 ${
            isCartOpen ? "left-0" : "-left-96"
          } z-50 transition-all`}
        >
          <div className="flex flex-col  bg-white w-80 md:w-96 h-screen shadow-sm pb-4 ">
            {/* basket info */}
            <div className="shadow-lg z-10 w-full  flex flex-col justify-center">
              {/* my basket */}
              <div className="flex justify-between gap-2 items-center p-4 border-b">
                <span>سبد خرید من</span>
                <small>{products.length} کالا</small>
                <button onClick={()=>dispatch(cartActions.deleteAllCart())} className="bg-slate-50 hover:bg-slate-100 text-slate-500 p-2 rounded-full">
                  <BsTrash />
                </button>
                <button onClick={() => toggleCart()} className="mr-auto">
                  <AiOutlineClose />
                </button>
              </div>
              {/* progress */}
              <div className="p-4">
                <ul className="flex justify-between text-xs">
                  <li className="text-slate-500">مبلغ سفارش</li>
                  <li className="text-green-500">{separate(totalPrice)} تومان</li>
                </ul>
                <progress
                  className="progress  progress-success w-full"
                  value={totalPrice}
                  max="200000"
                ></progress>
                <ul className="flex justify-between text-xs">
                  <li className="text-slate-500">هزینه ارسال(سفارش بالای 200000 رایگان)</li>
                  {totalPrice >=200000 ? <li className="text-green-500">رایگان</li> : <li className="text-green-500">{separate(15000)}</li>}
                </ul>
              </div>
            </div>
            {/* products */}
            <div className=" overflow-y-scroll border-b">
            
              {products.map((product,index) => 
                <CartItem product={product} key={index}/>
              )}
            </div>
            {/* Checkout */}
            <div className="p-4 mt-auto">
              <div className="p-2 bg-blue-50 text-blue-600 text-sm rounded-lg text-center select-none ">
               سود شما : {separate(totalDiscount)} تومان
              </div>
              <button className="btn btn-success hover:bg-green-500 w-full text-white text-md mt-2">
                حساب
              </button>
            </div>
          </div>
        </div>
      </Portal>
    </>
  );
};

export default CartMenu;
