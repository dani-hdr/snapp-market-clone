import Image from "next/image";
import React from "react";

const CategoryBox = ({ name, discount, thumbnail }) => {
  return (
    <>
      <div className={` bg-white  p-2 rounded-md min-w-max border-2  `}>
        <a href="#">
          <figure className="flex gap-3 items-center justify-start">
            <Image width={70} height={15} src={thumbnail} alt="category" />
            <figcaption>
              <h3 className="flex  items-start flex-col gap-3 tracking-tighter">
                <span className="text-md ">{name}</span>
                <div
                  className={`btn btn-sm btn-block border-none gap-2 text-success bg-green-100 hover:bg-green-200`}
                >
                  <span className="font-normal ">تخفیف تا </span>
                  <strong className="text-md">{discount}%</strong>
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
