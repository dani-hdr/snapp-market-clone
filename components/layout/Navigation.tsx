import React, { useEffect } from "react";
import { useContext } from "react";
import { MenuConext } from "../../context/MenuContext";
import { AiOutlineHome } from "react-icons/ai";
import { BiCategoryAlt } from "react-icons/bi";
import { MdOutlineShoppingCart } from "react-icons/md";
const Navigation = () => {
  const [showMenu, setShowMenu] = useContext(MenuConext);
  
  // useEffect(() => {
  //   if (showMenu && window.innerWidth < 768) {
  //     document.body.style.overflow = "hidden";
  //   } else {
  //     document.body.style.overflow = "scroll";
  //   }
  // }, [showMenu]);

  // useEffect(()=>{

  //   const handleResize = ()=>{
  //     if(window.innerWidth < 768){
  //       document.body.style.overflow = "hidden";
  //     }else{
  //       document.body.style.overflow = "scroll";
  //     }
  //   }
  //   window.addEventListener('resize',handleResize)

  //   return () =>{
  //     window.removeEventListener('resize',handleResize)
  //   }
  // },[])

  return (
    <div className="fixed md:hidden px-12 py-4  w-full bottom-0 z-20 bg-white border-t shadow-md">
      <div className="flex items-center justify-between text-slate-600 text-sm font-bold">
        <div className="group">
          <a
            href="#"
            className="flex flex-col gap-1 items-center group-hover:text-primary"
          >
            <AiOutlineHome className="group-hover:text-primary" size={25} />
            خانه
          </a>
        </div>
        <div className="group">
          <button
            onClick={() => setShowMenu(!showMenu)}
            className="flex flex-col gap-1 items-center group-hover:text-primary"
          >
            <BiCategoryAlt className="group-hover:text-primary" size={25} />
            دسته بندی
          </button>
        </div>
        <div className="group">
          <button className="flex flex-col gap-1 items-center group-hover:text-primary">
            <MdOutlineShoppingCart size={25} />
            <span className="badge badge-primary badge-sm top-3 left-20 rounded-badge absolute">
              1
            </span>
            سبد خرید
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navigation;
