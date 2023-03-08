import React from "react";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import CategoryBox from "./CategoryBox";
import categoryData from "../../mock/categoryData";


const CategoryCoordian = () => {
  const defaultCategoryItems = 8;
  const [showMore, setShowMore] = useState(true);
  const [visibleItems, setVisibleItems] = useState(defaultCategoryItems);

  const handleShow = () => {
    setShowMore(!showMore);
    console.log(showMore);
    if (showMore) setVisibleItems(30);
    else setVisibleItems(defaultCategoryItems);
  };
  return (
    <>
      <div className="grid  grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-4 lg:nth-child-3:bg-red-400  ">
        {categoryData.slice(0, visibleItems).map((data) => (
          <CategoryBox
            key={data.id}
            name={data.name}
            discount={data.discount}
            thumbnail={data.thumbnail}
          />
        ))}
      </div>
      <div className="flex justify-center">
        {showMore ? (
          <button
            className=" flex gap-2 font-bold text-md mt-3"
            onClick={handleShow}
          >
            <AiOutlineArrowDown /> نمایش موارد بیشتر
          </button>
        ) : (
          <button
            className=" flex gap-2 font-bold text-md mt-3"
            onClick={handleShow}
          >
            <AiOutlineArrowUp /> نمایش موارد کمتر
          </button>
        )}
      </div>
    </>
  );
};

export default CategoryCoordian;
