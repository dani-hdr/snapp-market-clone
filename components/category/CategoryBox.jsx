import Image from "next/image";
import React from "react";

const CategoryBox = ({ name, discount, thumbnail }) => {
  return (
    <>
      <div className={` bg-white  p-2 rounded-md w-full border-2  `}>
        <a href="#">
          <figure className="flex gap-3 items-center justify-start">
            <Image className="" width={70} height={15} src={thumbnail} alt="category" />
            <figcaption>
              <h3 className="flex  items-start flex-col gap-3 tracking-tighter">
                <span className="text-md ">{name}</span>
                <div
                  className={` p-2 text-center text-xs text-success bg-green-100 hover:bg-green-200`}
                >
                  <span className="font-normal ">تخفیف تا </span>
                  <strong >{discount}%</strong>
                </div>
              </h3>
            </figcaption>
          </figure>
        </a>
      </div>
    </>
  );
};

export default CategoryBox;
