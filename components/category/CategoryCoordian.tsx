import React from "react";
import { useState } from "react";
import { AiOutlineArrowDown, AiOutlineArrowUp } from "react-icons/ai";
import CategoryBox from "./CategoryBox";

const CategoryCoordian: React.FC = () => {
  const defaultCategoryItems = 8;
  const [showMore, setShowMore] = useState<boolean>(true);
  const [visibleItems, setVisibleItems] = useState<number>(defaultCategoryItems);
  const categoryData: {
    bgColor: "white" | "red" | "blue";
    title: string;
    discount: number;
    imageUrl: string;
    link: string;
  }[] = [
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
    {
      bgColor: "white",
      title: "دستمال و شوینده",
      discount: 27,
      imageUrl:
        "https://api.snapp.market/uploads/images/mobile-sliders/61e6a5d4ab909.png",
      link: "#",
    },
  ];

  const handleShow = (): void => {
    setShowMore(!showMore);
    console.log(showMore);
    if (showMore) setVisibleItems(30);
    else setVisibleItems(defaultCategoryItems);
  };
  return (
    
      < >
        <div className="grid grid-cols-3 md:grid-cols-4 gap-3 mt-4 lg:nth-child-3:bg-red-400  ">
          {categoryData.slice(0, visibleItems).map((data) => (
            <CategoryBox
              key={Math.random()}

              discount={data.discount}
              link={data.link}
              title={data.title}
              imageUrl={data.imageUrl}
            />
          ))}
        </div>
        <div className="flex justify-center">
       {showMore ? ( <button
          className=" flex gap-2 font-bold text-md mt-3"
          onClick={handleShow}
        >
          <AiOutlineArrowDown/> نمایش موارد بیشتر
        </button>) :  <button
          className=" flex gap-2 font-bold text-md mt-3"
          onClick={handleShow}
        >
          <AiOutlineArrowUp/> نمایش موارد کمتر
        </button>}
        </div>
      </>
 
  );
};

export default CategoryCoordian;
