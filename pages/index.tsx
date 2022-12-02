import Container from "../components/layout/Container";
import Header from "../components/layout/Header";
import { HiOutlineLocationMarker } from "react-icons/hi";
import { MdKeyboardArrowLeft } from "react-icons/md";
import Banner from "../components/UI/Banner";
import ProductSilderPrimary from "../components/Products/ProductSilderPrimary";
import CategoryBox from "../components/category/CategoryBox";
import CategoryCoordian from "../components/category/CategoryCoordian";
const Home: React.FC = () => {
  return (
    <>
      <Header />
      <Container>
        <section className="pt-7">
          <Banner
            title="حراج اول ماه"
            link="#"
            imageUrl="/images/banner/banner1.jpg"
          />
        </section>
        <section className="pt-7">
          <ProductSilderPrimary />
        </section>
        <section className="pt-7">
          <Banner
            title="حراج اول ماه"
            link="#"
            imageUrl="/images/banner/banner1.jpg"
          />
        </section>
        <section className="pt-7">
          <div className="flex justify-center mb-5 items-center">
            <div className="border-t-2 flex-grow"></div>
            <h3 className="text-center font-bold text-xl px-7">دسته بندی ها</h3>
            <div className="border-t-2 flex-grow"></div>
          </div>
        <div>
          <CategoryCoordian/>
        </div>

        </section>
      </Container>
    </>
  );
};

export default Home;
