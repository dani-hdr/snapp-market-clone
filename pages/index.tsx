import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import Banner from "../components/UI/Banner";
import ProductSilderPrimary from "../components/Products/ProductSilderPrimary";
import CategoryCoordian from "../components/category/CategoryCoordian";
import ProductSlider from "./../components/Products/ProductSlider";
import Footer from "../components/layout/Footer";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <section className="mt-7">
          <Banner
            title="حراج اول ماه"
            link="#"
            imageUrl="/images/banner/banner1.jpg"
          />
        </section>
        <section className="mt-7">
          <ProductSilderPrimary />
        </section>
        <section className="mt-7">
          <Banner
            title="حراج اول ماه"
            link="#"
            imageUrl="/images/banner/banner1.jpg"
          />
        </section>
        <section className="mt-7">
          <div className="flex justify-center mb-5 items-center">
            <div className="border-t-2 flex-grow"></div>
            <h3 className="text-center font-bold text-xl px-7">دسته بندی ها</h3>
            <div className="border-t-2 flex-grow"></div>
          </div>
          <div>
            <CategoryCoordian />
          </div>
        </section>
        <section className="mt-7">
          <ProductSlider title="لوازم بهداشتی" showMoreUrl="#" />
        </section>
        <section className="mt-7 bg-white p-5 border-2 rounded-md">
          <h1 className="text-xl font-bold text-slate-900 mb-4">
            سوپرمارکت اینترنتی اسنپ مارکت
          </h1>
          <p className="text-slate-600 leading-7">
            اسنپ‌مارکت جهت تسریع و تسهیل فرایند خرید اینترنتی و خدمت‌رسانی به
            هم‌وطنان عزیز، همکاری خود با مجموعه فروشگاه‌های زنجیره‌ای
            هایپراستار، سوپرمارکت‌ها و فروشگاه‌های لوازم آرایشی و بهداشتی مایلی
            را آغاز کرده و در زمینه فروش آنلاین کالاهای سوپرمارکتی و سایر
            مایحتاج روزمره و کالاهای آرایشی و بهداشتی مشغول به خدمت‌رسانی به
            هم‌میهنان عزیز در برخی از کلان‌شهرهای ایران است.
            <br />
            هدف اسنپ‌مارکت بر این است تا با ارائه کالاهای باکیفیت و در عین حال
            با قیمت مناسب، امکان خرید را برای کلیه اقشار جامعه مهیا سازد.
            <br />
            <br />
            سوپرمارکت اینترنتی اسنپ‌مارکت بیش از ۵۰۰۰ کالای متنوع در
            دسته‌بند‌ی‌های گوناگون نظیر لبنیات، خواربار، میوه و سبزیجات تازه،
            نان، مواد پروتئینی، لوازم بهداشتی و آرایشی ... را به صورت آنلاین
            عرضه می‌کند و گستردگی این محصولات این امکان را به کاربران می‌دهد که
            تمامی اجناس مورد نیاز خود را به صورت یکباره تهیه کرده و با توجه به
            موقعیت جغرافیایی ثبت شده در اپلیکیشن و یا وب‌سایت، اجناس خریداری شده
            را در زمانی کوتاه و از نزدیکترین شعبه هایپراستار، درب منزل خود تحویل
            بگیرند.
          </p>
        </section>
      </Container>
      <Footer/>
    </>
  );
};

export default Home;
