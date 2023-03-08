import React from "react";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import Overlay from "./Overlay";
import categoryData from "../../mock/categoryData";

const DesktopMenu = () => {
  const { isOpen, toggle } = useContext(MenuContext);

  return (
    <>
      {isOpen && <Overlay onClick={() => toggle()} />}
      <div
        className={`${
          isOpen ? "md:block" : "hidden"
        } hidden  absolute bg-white p-10 z-20 top-14 left-0 right-0   shadow-md`}
      >
        <ul className="grid grid-cols-4 gap-5 list-disc ">
          {categoryData.map((category) => (
            <li key={category.id} className="group ">
              <a href="" className="flex flex-col">
                <span className="text-primary text-base font-bold">
                  {category.name}
                </span>
                <span className="text-slate-400 text-sm mt-2 group-hover:text-success truncate">
                  {category.subCategory.join(" , ")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};

export default DesktopMenu;
