import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import {HiOutlineLocationMarker} from 'react-icons/hi'
import {MdKeyboardArrowLeft} from 'react-icons/md';
import Button from "../components/UI/Button";
import Banner from "../components/UI/Banner";
import ProductItem from "../components/Products/ProductItem";
import ProductSilderPrimary from "../components/Products/ProductSilderPrimary";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <div className="flex items-center justify-end bg-white p-4 border rounded-md ">
          <HiOutlineLocationMarker size={50} className="text-blue-600"/>
          <div className="flex flex-col gap-4 mr-4">
            <span className="text-lg  ">شما در حال مشاهده کالاهای موجود در هایپراستار صبا هستید.</span>
            <p className="text-sm text-slate-800">برای مشاهده موجودی و قیمت دقیق کالاهای نزدیکترین فروشگاه به شما، ابتدا آدرس خود را انتخاب کنید.</p>
          </div>
          <Button bgColor="bg-blue-600 mr-auto" color="text-white" hover="hover:bg-blue-700">تغییر آدرس <MdKeyboardArrowLeft/></Button>
        </div>
        <Banner title="حراج اول ماه" link="#" imageUrl="/images/banner/banner1.jpg"/>
        <section>
          <ProductSilderPrimary/>
        </section>
        
        <Banner title="حراج اول ماه" link="#" imageUrl="/images/banner/banner1.jpg"/>
        
      </Container>
    </>
  );
};

export default Home;
