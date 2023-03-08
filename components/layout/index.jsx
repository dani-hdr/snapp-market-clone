import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import MobileNav from "./MobileNav";
import MobileMenu from "./MobileMenu";
import Container from "./Container";
import CartMenu from "./CartMenu";

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <CartMenu />
      <Container>
        <div className="flex flex-col gap-5">{children}</div>
      </Container>
      <Footer />
      <MobileNav />
      <MobileMenu />
    </>
  );
};

export default Layout;
