
import React from "react";
interface IProp {
  title: string;
  discount: number;
  imageUrl: string;
  link: string;
}
const CategoryBox: React.FC<IProp> = ({ title, discount, imageUrl, link }) => {
  return (
    <>
      <div
        className={`hidden lg:block bg-white  px-2 py-1 rounded-md min-w-max border-2  `}
      >
        <a href={link}>
          <figure className="flex gap-1 items-center justify-start">
            <img className="h-20 lg:h-24" src={imageUrl} alt="category" />
            <figcaption>
              <h3 className="flex items-center flex-col gap-3 tracking-tighter">
                <span className="text-md ">{title}</span>
                <div className={`btn btn-sm btn-block border-none gap-2 text-success bg-green-100`}>
                  <span className="font-normal ">تخفیف تا </span>
                  <strong className="text-md">{discount}%</strong>
                </div>
              </h3>
            </figcaption>

            
          </figure>
        </a>
      </div>
      <a className="lg:hidden" href={link}>
        <div className=" flex flex-col gap-2  items-center mb-4">
          <div className="bg-white rounded-md border p-3">
            <picture>
              <img className="" src={imageUrl} alt="" />
            </picture>
          </div>
          <h3>{title}</h3>
        </div>
      </a>
    </>
  );
};

export default CategoryBox;
