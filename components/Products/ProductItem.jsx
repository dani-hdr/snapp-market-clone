import Image from "next/image";
import { useDispatch } from "react-redux";
import { cartActions } from "../../redux/cartSlice";
import { separate, priceWithDiscount } from "../../utils/currencyHelpers";
import Link from "next/link";
import { toast } from "react-toastify";

const ProductItem = ({ rounded, product }) => {
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch(cartActions.addToCart(product));
    toast.success("به سبد اضافه شد");
  };

  if (!product) return;
  return (
    <div
      className={`p-4 border ${
        rounded && "rounded-md"
      }    bg-white  h-[23rem]  group hover:shadow-xl transition-all`}
    >
      <figure dir="rtl" className="flex flex-col  justify-between gap-4">
        <picture className="self-center ">
          <Link href={`/products/${product.id}`}>
            <Image
              className="group-hover:scale-110 transition-all"
              alt=""
              src={product.thumbnail}
              width={150}
              height={150}
            />
          </Link>
        </picture>
        <figcaption className="h-16">
          <Link href={`/products/${product.id}`}>
            {" "}
            <h2 className="text-slate-600 tracking-tight text-md ">
              {product.title}
            </h2>
          </Link>
          {product.quantity && (
            <p className="text-sm text-slate-500 mt-2">{product.quantity}</p>
          )}
        </figcaption>
        <footer className="flex items-end gap-2 justify-between h-20 ">
          <div>
            {product.discount && (
              <div className="flex items-center gap-2">
                <label className="bg-red-500 font-bold text-white p-1 rounded-md">
                  %{product.discount}
                </label>
                <small className="text-xs line-through text-slate-600">
                  {separate(product.price)}
                </small>
              </div>
            )}
            <div className="flex items-center gap-1 mt-2">
              <strong className="text-lg text-slate-800">
                {separate(priceWithDiscount(product.price, product.discount))}
              </strong>
              <small className="text-slate-600">تومان</small>
            </div>
          </div>

          <button
            onClick={addToCart}
            className="btn btn-sm font-normal btn-primary btn-outline rounded-full"
          >
            افزودن به سبد
          </button>
        </footer>
      </figure>
    </div>
  );
};

export default ProductItem;
