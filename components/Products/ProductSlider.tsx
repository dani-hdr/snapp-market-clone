import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import { IoIosArrowBack } from "react-icons/io";
import ProductItem from "./ProductItem";

interface Props {
  title:string,
  productsUrl?:string,
  showMoreUrl:string,

}
const ProductSlider = ({title,productsUrl,showMoreUrl}:Props) => {
  return (
    <div className="  border bg-white rounded-md">
      <div className="flex justify-between items-center p-4">
        <h3 className="text-slate-900  text-lg ">
          <a href={showMoreUrl}>{title}</a>
        </h3>
        <a href={showMoreUrl} className="text-blue-600 font-bold text-sm flex items-center gap-2">  مشاهده بیشتر <IoIosArrowBack size={20}/></a>
      </div>
      <Swiper
        modules={[Navigation]}
        spaceBetween={0}
        slidesPerView={5}
        navigation={true}
        pagination={{ clickable: true }}
        scrollbar={{ draggable: true }}
      >
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
        <SwiperSlide>
          <ProductItem />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default ProductSlider;
