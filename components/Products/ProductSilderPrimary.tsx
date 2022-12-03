import React from "react";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";

const ProductSilderPrimary = () => {
  return (
    <div style={{backgroundImage:'url("/images/assets/slider-bg-pattern.png")',backgroundPosition:'contain'}} className="flex items-center p-2 bg-blue-700 rounded-md">
      <div className="px-4" >
            <h3 className="text-white  text-xl font-bold">
              <a href="#">حراج اول ماه</a>
            </h3>
          </div>
      <Swiper
        
        modules={[Navigation]}
        spaceBetween={10}
        slidesPerView={4}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
       
        <SwiperSlide>
          <ProductItem rounded />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem rounded />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem rounded />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem  rounded/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem rounded/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem rounded/>
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem rounded/>
        </SwiperSlide>
       
        
      </Swiper>
    </div>
  );
};

export default ProductSilderPrimary;
