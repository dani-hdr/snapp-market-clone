import classNames from "classnames";
import React from "react";
import { IoIosArrowBack } from "react-icons/io";
interface IProp {
  title: string;
  discount: number;
  imageUrl: string;
  link: string;
  bgColor: "blue" | "red" | "white";
}
const CategoryBox: React.FC<IProp> = ({
  title,
  discount,
  imageUrl,
  link,
  bgColor,
}) => {
  const bodyClasses = classNames(
    { "bg-blue-100 border-blue-200": bgColor == "blue" },
    { "bg-red-100 border-red-200": bgColor == "red" },
    { "bg-white ": bgColor == "white" }
  );
  const btnClasses = classNames(
    { "btn-success text-white": bgColor !== "white" },
    { "text-success bg-green-100 hover:bg-green-100": bgColor == "white" }
  );

  
  return (
    <div className={`${bodyClasses}   px-4 py-2 rounded-md min-w-max border-2 `}>
      <a href={link}>
        <figure className="flex gap-1 items-center justify-start">
          <img src={imageUrl} alt="category" className={`${bgColor=='white' ? 'h-24' :'h-36'}`} />
          <figcaption >
            <h3 className="flex items-center flex-col gap-3 tracking-tighter">
              <span className="text-lg ">{title}</span>
              <div className={`btn btn-sm btn-block border-none gap-2   ${btnClasses}  `}>
                <span className="font-normal ">تخفیف تا </span>
                <strong className="text-md">{discount}%</strong>
              </div>
            </h3>
          </figcaption>
          {bgColor !== "white" && (
            <IoIosArrowBack size={40} className="mr-11" />
          )}
        </figure>
      </a>
    </div>
  );
};

export default CategoryBox;
