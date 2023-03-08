import React from "react";
import ProductItem from "./ProductItem";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import productsData from './../../mock/productsData';
import "swiper/css";
import "swiper/css/navigation";

const ProductSilderPrimary = ({title,category}) => {
 
  return (
    <div
      style={{
        backgroundImage: 'url("/images/assets/slider-bg-pattern.png")',
        backgroundPosition: "contain",
      }}
      className="flex items-center p-2 bg-blue-700  rounded-md "
    >
      <div className="px-4">
        <h3 className="text-white  text-2xl font-bold">
          {title}
        </h3>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={10}
        centeredSlides={false}
        slidesPerView="auto"
        navigation={true}
        className="mySwiper"
      >
        {productsData.filter(x=>x.category ===category ).map((product) => (
          <SwiperSlide key={product.id}>
            <ProductItem rounded product={product} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};



export default ProductSilderPrimary;
