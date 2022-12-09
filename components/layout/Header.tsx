import {useEffect,useContext} from 'react'
import { MenuConext } from '../../context/MenuContext';
import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";
import { BiShoppingBag,BiCategory } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
import SearchInput from './../UI/SearchInput';
import Container from "./Container";

import DesktopMenu from "./DesktopMenu";

const Header: React.FC = () => {

  const [showMenu,setShowMenu] = useContext(MenuConext)
  console.log(showMenu)
  useEffect(()=>{
   if(showMenu){
     document.body.style.overflow="hidden"
  }else {
     document.body.style.overflow="scroll"
  }
  },[showMenu])
  
  return (
    <header
     
      style={{
        backgroundImage: "url('/images/heroBackground.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" pt-2 pb-5 "
    >
      <Container >
        {/* Top header */}
        <div className="flex items-center justify-between  border-b border-slate-400 border-opacity-20  ">
          {/* Righ side */}
          <div className="flex gap-5 ">
            <Image
              alt="logo"
              width={70}
              height={70}
              className=""
              src={"/images/logo.png"}
            />
            <button className="flex items-center  w-56 md:w-xl  text-white text-xs hover:text-slate-400">
              <TfiLocationPin size={40} />
              <span className="mx-2  truncate ">
              تهران، جمال زاده ، آزادی تقاطع کارگر جنوبی، بانک تهران، جمال زاده ، آزادی تقاطع کارگر جنوبی، بانک 
              </span>
              <IoIosArrowDown size={45} />
            </button>
          </div>
          {/* Left side */}
          <div className=" flex items-center  gap-4  ">
            <button className="flex  items-center text-white hover:text-slate-400 cursor-pointer">
              <AiOutlineUser size={25} />
              <span className="mr-2 hidden md:block">ورود / عضویت</span>
            </button>

            <button className="hidden md:inline-flex btn gap-2 bg-white hover:bg-white text-blue-600 ">
              <BiShoppingBag  size={20} />
              <span >سبد خرید </span>
              <span className="px-2 font-bold bg-blue-50 rounded-full">2</span>
            </button>
          </div>
        </div>

        {/* Bottom header */}
        <div className="flex flex-col mt-5  justify-center">
          {/* Top side */}
          <div className="flex  flex-col md:flex-row md:justify-between  gap-4 border-b md:border-none border-slate-400 border-opacity-20 pb-4">
            <div className="flex items-center gap-4 ">
              <Image
                className="rounded-full"
                alt=""
                width={40}
                height={40}
                src={"/images/hyper.jpg"}
              />
              <span className="text-white text-md">
                خرید از <strong>هایپراستار صبا</strong>
              </span>
              <button className="btn btn-xs bg-white hover:bg-white text-xs font-normal rounded-full  text-blue-500 ">
                تغییر فروشگاه
                <IoIosArrowDown className="mr-1"/>
              </button>
            </div>
            <div className="flex md:flex-col gap-4 items-start   frot-light text-white text-xs md:text-md leading-5">
            <span className="flex items-center ">
              <AiOutlineClockCircle  size={20} className="hidden " /> تحویل از امروز
              
              ساعت 18:00
            </span>
            
            <span className="flex   items-center ">
              <MdLocalShipping size={20} className="hidden" /> ارسال رایگان برای
              سفارش بالای 200000 تومان
            </span>
            </div>
          </div>
          {/* Bot side */}
          <div className="relative flex  gap-4 mt-4 text-xs text-white">
          <button onClick={()=> setShowMenu(!showMenu)} className="hidden md:inline-flex btn text-slate-600 font-normal bg-white hover:bg-white"><BiCategory size={20} className="ml-1"/> دسته بندی ها</button>
              <SearchInput/>
           <DesktopMenu/>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
