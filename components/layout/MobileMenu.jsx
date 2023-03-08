import React from "react";
import { useContext } from "react";
import { MenuContext } from "../../context/MenuContext";
import { AiOutlineClose } from "react-icons/ai";
import Portal from "../utils/Portal";
import categoryData from "../../mock/categoryData";

const MobileMenu = () => {
  const { isOpen, toggle } = useContext(MenuContext);

  return (
    <Portal>
      <div
        className={`p-5 w-80 fixed z-20 md:hidden lg top-0 bottom-0 right-0 transition-transform  ${
          isOpen ? " " : "translate-x-96"
        }  bg-white z-10 `}
      >
        <div className=" flex justify-between top-5">
          <span className="font-bold tracking-tight text-lg">دسته بندی ها</span>
          <button onClick={() => toggle()}>
            <AiOutlineClose size={20} />
          </button>
        </div>

        <ul className="flex flex-col gap-5 list-disc mt-10 mr-7 h-full overflow-y-auto">
          {categoryData.map((category) => (
            <li key={category.id} className="group">
              <a href="" className="flex flex-col">
                <span className="text-primary text-sm font-bold">
                  {category.name}
                </span>
                <span className="text-slate-400 group-hover:text-success truncate">
                  {category.subCategory.join(" , ")}
                </span>
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Portal>
  );
};

export default MobileMenu;
