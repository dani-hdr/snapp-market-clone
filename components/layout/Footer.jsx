import React from "react";
import Container from "./Container";
import { MdLocalShipping } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { GiJigsawBox,GiBasket } from "react-icons/gi";
import Image from "next/image";


const Footer = () => {
  return (
  
     <footer className="bg-white mt-7 py-6 min-h-max pb-24 md:pb-2">
      <Container>
        {/* top footer */}
        <div className="grid grid-cols-2 md:grid-cols-4 text-center gap-3">
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="p-5 border w-20 h-20 rounded-md text-center text-primary">
              <TbDiscount2 size={40} />
            </div>
            <h4 className="font-bold text-md">تخفیف بیشتر محصولات</h4>
            <span className="text-sm text-slate-500 tracking-tight mt-2">
            کالاها با قیمت کمتر از درج شده ارسال می‌شود
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="p-5 border w-20 h-20 rounded-md text-center text-primary">
              <MdLocalShipping size={40} />
            </div>
            <h4 className="font-bold text-md">ارسال به موقع سفارش‌ها</h4>
            <span className="text-sm text-slate-500 tracking-tight mt-2">
              سفارشات شما در زمان مقرر ارسال می‌شود
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="p-5 border w-20 h-20 rounded-md text-center text-primary">
              <GiJigsawBox size={40} />
            </div>
            <h4 className="font-bold text-md">ارسال بهترین کالاها</h4>
            <span className="text-sm text-slate-500 tracking-tight mt-2">
            محصولات ارسالی از بین بهترین‌ها گلچین می‌شود
            </span>
          </div>
          <div className="flex flex-col gap-2 justify-center items-center">
            <div className="p-5 border w-20 h-20 rounded-md text-center text-primary">
              <GiBasket size={40} />
            </div>
            <h4 className="font-bold text-md">بسته بندی مناسب</h4>
            <span className="text-sm text-slate-500 tracking-tight mt-2">
            سفارشات با بسته‌بندی مناسب ارسال می‌شود
            </span>
          </div>
        </div>
        {/* app download */}
        <div className="flex justify-between items-center  mt-10 border-b pb-4">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">دانلود اپلیکیشن</h4>
            <span className="text-slate-500 text-sm">
              اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز
              مشاهده کنید
            </span>
            <div className="flex flex-wrap gap-2">
              <Image
                width={200}
                height={150}
                className="h-12"
                src="https://snapp.market/v2/static/images/bazzar.cb6ed78f.png"
                alt=""
              />
            
            </div>
          </div>
          <div className=" hidden md:flex ">
            <Image
              width={300}
              height={300}
              className="h-32 lg:h-52 -ml-16"
              src="https://snapp.market/v2/static/images/newMobile-2.84a4e251.png"
              alt=""
            />
            <Image
              width={300}
              height={300}
              className="h-32 lg:h-52"
              src="https://snapp.market/v2/static/images/newMobile-1.4a44f07a.png"
              alt=""
            />
          </div>
        </div>
        {/* bottom footer */}
        <div className="mt-10 ">
          <div className="grid grid-cols-2  md:grid-cols-3 lg:grid-cols-4 gap-4 ">
            <div className="col-span-full md:col-span-1">
              <h4 className="font-bold mb-4 ">درباره ما</h4>
              <p className="text-sm text-slate-500 leading-8">
                اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا
                کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.
                هایپر استار | مایلی
              </p>
            </div>
            <div className="">
              <h4 className="font-bold mb-4">دسترسی‌ها</h4>
              <div>
                <ul className="flex flex-col gap-2 text-sm text-slate-500 leading-7">
                  <li>
                    <a href="#">درباره ما</a>
                  </li>
                  <li>
                    {" "}
                    <a href="#">وبلاگ</a>
                  </li>
                  <li>
                    <a href="#">قوانین</a>
                  </li>
                  <li>
                    <a href="#">استخدام</a>
                  </li>
                  <li>
                    <a href="#">گزارش مشکل</a>
                  </li>
                  <li>
                    <a href="#">تبلیغات در اسنپ مارکت</a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="">
              <h4 className="font-bold mb-4">تماس با ما</h4>
              <ul className="flex flex-col gap-2 text-sm text-slate-500 leading-7">
                <li>
                  <span>تلفن : 02196612600</span>
                </li>
                <li>
                  <span>
                    آدرس : خیابان ولیعصر بالاتر از اسفندیار خیابان سعیدی نبش
                    کوچه مهردادپلاک۱ طبقه ۳
                  </span>
                </li>
                <li>
                  <span>ایمیل : info@snapp.market</span>
                </li>
                <li>
                  <span>کد پستی : 02196612600</span>
                </li>
                <li>
                  <span>تلفن : ۱۹۶۷۸۶۵۶۳۱0</span>
                </li>
              </ul>
            </div>
            <div className="flex justify-evenly  gap-2  col-span-full lg:col-span-1">
              <div className="border  w-1/6 lg:w-full  h-min   p-3 rounded-md shadow-md">
                <Image width={150} height={150} className="w-full"
                  src="https://snapp.market/v2/static/images/ecunion.70a7f898.png"
                  alt=""
                />
              </div>
              <div className="border  w-1/6 lg:w-full  h-min  p-3 rounded-md shadow-md">
                <Image width={150} height={150} className="w-full"
                  src="https://snapp.market/v2/static/images/ecunion.70a7f898.png"
                  alt=""
                />
              </div>
              <div className="border  w-1/6 lg:w-full  h-min  p-3 rounded-md shadow-md">
                <Image width={150} height={150} className="w-full"
                  src="https://snapp.market/v2/static/images/ecunion.70a7f898.png"
                  alt=""
                />
              </div>
            </div>
          </div>
         
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
