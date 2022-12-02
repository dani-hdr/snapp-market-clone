import Image from "next/image";
import { TfiLocationPin } from "react-icons/tfi";
import { IoIosArrowDown } from "react-icons/io";
import { AiOutlineUser, AiOutlineClockCircle } from "react-icons/ai";
import { BiShoppingBag,BiCategory } from "react-icons/bi";
import { MdLocalShipping } from "react-icons/md";
import SearchInput from './../UI/SearchInput';
import Container from "./Container";

const Header: React.FC = () => {
  return (
    <header
      dir="rtl"
      style={{
        backgroundImage: "url('/images/heroBackground.jpg')",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
      className=" pt-2 pb-5 "
    >
      <Container >
        {/* Top header */}
        <div className="flex justify-between items-center  border-b border-slate-400 border-opacity-20 ">
          {/* Righ side */}
          <div className="flex gap-5">
            <Image
              alt="logo"
              width={70}
              height={70}
              className=""
              src={"/images/logo.png"}
            />
            <button className="flex items-center  text-white text-xs hover:text-slate-400">
              <TfiLocationPin />
              <span className="mx-2">
                تهران، جمال زاده ، آزادی تقاطع کارگر جنوبی، بانک ...
              </span>
              <IoIosArrowDown size={20} />
            </button>
          </div>
          {/* Left side */}
          <div className="flex items-center gap-4 ">
            <button className="flex items-center text-white hover:text-slate-400 cursor-pointer">
              <AiOutlineUser size={25} />
              <span className="mr-2">ورود / عضویت</span>
            </button>

            <button className="btn gap-2 bg-white hover:bg-white text-blue-600 ">
              <BiShoppingBag size={20} />
              <span >سبد خرید </span>
              <span className="px-2 font-bold bg-blue-50 rounded-full">2</span>
            </button>
          </div>
        </div>

        {/* Bottom header */}
        <div className="flex mt-5 items-center justify-between">
          {/* Right side */}
          <div className="flex w-2/5  flex-col  gap-4">
            <div className="flex items-center gap-4 ">
              <Image
                className="rounded-full"
                alt=""
                width={60}
                height={60}
                src={"/images/hyper.jpg"}
              />
              <span className="text-white">
                خرید از <strong>هایپراستار صبا</strong>
              </span>
              <button className="btn btn-xs bg-white hover:bg-white text-xs font-normal rounded-full  text-blue-500 ">
                تغییر فروشگاه
                <IoIosArrowDown className="mr-1"/>
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <button className="btn text-slate-600 font-normal bg-white hover:bg-white"><BiCategory size={20} className="ml-1"/> دسته بندی ها</button>
              <SearchInput/>
            </div>
          </div>
          {/* Left side */}
          <div className="flex gap-4 flex-col text-xs text-white">
            <span className="flex items-center">
              <AiOutlineClockCircle size={20} className="ml-2" /> تحویل از امروز
              ساعت 18:00
            </span>
            <span className="flex items-center">
              <MdLocalShipping size={20} className="ml-2" /> ارسال رایگان برای
              سفارش بالای 200000 تومان
            </span>
          </div>
        </div>
      </Container>
    </header>
  );
};

export default Header;
