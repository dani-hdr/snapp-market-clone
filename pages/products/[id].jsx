import React,{useState,useEffect} from "react";
import { useRouter } from "next/router";
import Card from "../../components/UI/Card";
import ProductImagesSlider from '../../components/Products/ProductImageSlider';
import productsData from './../../mock/productsData';
import {separate,priceWithDiscount} from '../../utils/currencyHelpers'
import { useDispatch } from 'react-redux';
import { cartActions } from './../../redux/cartSlice';
import { toast } from 'react-toastify';

const ProductDetail = () => {
  const [product,setProduct] = useState()
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch()
  useEffect(()=>{
    if(productsData){
      const result =  productsData.find(x=>x.id == id);
      setProduct(result)
      console.log(result)
    }
   
  },[id])
  
  const addToCart = ()=>{
    dispatch(cartActions.addToCart(product))
    toast.success('به سبد خرید اضافه شد')
  }

  if(!product) return


  return (
    <div>
      <Card>
        <div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8 lg:gap-14 p-5">
          {/* Product Gallery */}
          <div className=""><ProductImagesSlider  images={product.images}/></div>
          {/* Product Info */}
          <div className="grow">
            <h1 className="text-xl tracking-tight text-black font-bold mb-4 select-none">
            {product.title}
            </h1>
            <ul className="flex flex-col gap-2 border-b-2 border-dotted border-slate-300  tracking-normal pb-4 mb-4">
              <li className="select-none">
                برند :{" "}
                <a className="text-primary text-sm font-bold " href="#">
                  {product.brand}
                </a>
              </li>
              <li className="select-none">
                دسته بندی ها :{" "}
                <a className="text-primary text-sm font-bold " href="#">
                  {product.category}
                </a>
              </li>
              <li className="select-none">
                فروشنده :{" "}
                <a className="text-primary text-sm font-bold " href="#">
                  {product.seller}
                </a>
              </li>
            </ul>
            <div className="flex flex-col md:flex-row gap-5 justify-between items-start">
              <span>قیمت مصرف کننده</span>
              <div className="flex flex-col gap-2">
                {product.discount && <small className="flex items-center gap-2 text-lg text-slate-600 ">
                  <span className="line-through">{separate(product.price)}</span>
                  <span className="badge badge-error text-white">{product.discount}%</span>
                </small>}
                <strong className="text-2xl text-slate-600">{separate(priceWithDiscount(product.price,product.discount))} تومان</strong>
              </div>
            </div>
            <button onClick={addToCart} className="btn btn-primary text-white btn-wide mt-5">افزودن به سبد</button>
          </div>
        </div>
      </Card>
    </div>
  );
};

export default ProductDetail;
