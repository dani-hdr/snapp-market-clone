import React from "react";
import Container from "./Container";
import { MdLocalShipping } from "react-icons/md";
import { TbDiscount2 } from "react-icons/tb";
import { GiJigsawBox,GiBasket } from "react-icons/gi";


const Footer = () => {
  return (
  
     <footer className="bg-white mt-7 py-6 min-h-screen">
      <Container>
        {/* top footer */}
        <div className="flex justify-between">
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
        <div className="flex justify-between  mt-10 border-b">
          <div className="flex flex-col gap-4">
            <h4 className="font-bold">دانلود اپلیکیشن</h4>
            <span className="text-slate-500 text-sm">
              اپلیکیشن اسنپ مارکت را دانلود کنید و هر روز تخفیفات هیجان انگیز
              مشاهده کنید
            </span>
            <div className="flex flex-wrap gap-2">
              <img
                className="h-12"
                src="https://snapp.market/v2/static/images/bazzar.cb6ed78f.png"
              />
              <img
                className="h-12"
                src="https://snapp.market/v2/static/images/google-play.3e883a26.png"
              />
              <img
                className="h-12"
                src="https://snapp.market/v2/static/images/sibapp.13144cae.png"
              />
              <img
                className="h-12"
                src="https://snapp.market/v2/static/images/iapps.b73e78b6.png"
              />
            </div>
          </div>
          <div className="flex ">
            <img
              className="h-52 -ml-28"
              src="https://snapp.market/v2/static/images/newMobile-2.84a4e251.png"
              alt=""
            />
            <img
              className="h-52"
              src="https://snapp.market/v2/static/images/newMobile-1.4a44f07a.png"
              alt=""
            />
          </div>
        </div>
        {/* bottom footer */}
        <div className="mt-10">
          <div className="flex gap-3 justify-between">
            <div className="w-1/4">
              <h4 className="font-bold mb-4 ">درباره ما</h4>
              <p className="text-sm text-slate-500 leading-8">
                اسنپ مارکت حاصل همکاری دو شرکت بزرگ اسنپ و‌هایپراستار است تا
                کالاهای مورد نیاز کاربران را در اسرع وقت برای آنها ارسال کند.
                هایپر استار | مایلی
              </p>
            </div>
            <div className="w-1/4">
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
            <div className="w-1/4">
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
            <div className="flex gap-2 w-1/4">
              <div className="border w-28 h-28 p-3 rounded-md shadow-md">
                <img
                  src="https://snapp.market/v2/static/images/ecunion.70a7f898.png"
                  alt=""
                />
              </div>
              <div className="border w-28 h-28 p-3 rounded-md shadow-md">
                <img
                  src="https://snapp.market/v2/static/images/ecunion.70a7f898.png"
                  alt=""
                />
              </div>
              <div className="border w-28 h-28 p-3 rounded-md shadow-md">
                <img
                  src="https://snapp.market/v2/static/images/ecunion.70a7f898.png"
                  alt=""
                />
              </div>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
