import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IoIosArrowBack } from "react-icons/io";
import ProductItem from "./ProductItem";
import "swiper/css";
import productsData from "../../mock/productsData";

const ProductSlider = ({ title,category }) => {
  return (
    <div className="  border bg-white rounded-md">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-slate-900  text-lg ">
          <a href="#">{title}</a>
        </h3>
        <a
          href="#"
          className="text-blue-600 font-bold text-sm flex items-center gap-2 "
        >
          {" "}
          مشاهده بیشتر <IoIosArrowBack size={20} />
        </a>
      </div>
      <Swiper
       modules={[Navigation]}
       
       centeredSlides={false}
       slidesPerView='auto'
       navigation={true}
       className="mySwiper"
      >
        {productsData.filter(x=>x.category ===category ).map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem product={product} />
          </SwiperSlide>
        ))}
       
      </Swiper>
    </div>
  );
};

export default ProductSlider;
