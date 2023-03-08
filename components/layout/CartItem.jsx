import React from "react";
import { HiPlus, HiMinus } from "react-icons/hi";
import { separate, priceWithDiscount } from "./../../utils/currencyHelpers";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import Image from "next/image";


const CartItem = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex justify-between gap-4 items-start p-4 border-b">
      <div>
        <a href="#">
          <Image
            width={150}
            height={150}
            className="w-20 h-20 object-cover"
            src={product.thumbnail}
            alt=""
          />
        </a>
      </div>

      <div className="flex flex-col gap-4 grow">
        <a href="#">
          <h4 className="text-sm">{product.title}</h4>
        </a>
        {/* footer */}
        <div className="flex justify-between items-center">
          {/* price */}
          <div className="flex flex-col items-start select-none">
            {product.discount && (
              <span>
                <small className="text-sm line-through">
                  {separate(product.price)}
                </small>
                <strong className="badge badge-error mr-2 text-white">
                  {product.discount}%
                </strong>
              </span>
            )}
            <span>
              <strong className="ml-1">
                {separate(priceWithDiscount(product.price, product.discount))}
              </strong>
              <small>تومان</small>
            </span>
          </div>
          {/* buttons */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => dispatch(cartActions.deleteFromCart(product))}
              className="text-primary  border rounded-full p-2 hover:bg-primary hover:text-white "
            >
              <HiMinus />
            </button>
            <span className="text-primary font-bold text-xl">
              {product.quantity}
            </span>
            <button
              onClick={() => dispatch(cartActions.addToCart(product))}
              className="text-primary  border rounded-full p-2 hover:bg-primary hover:text-white "
            >
              <HiPlus />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
