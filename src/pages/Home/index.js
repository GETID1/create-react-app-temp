import React from "react";
import Header from "../../components/Header/Header";
import Products from "../../components/Products/Products";
import HeroBanner from "../../components/HeroBanner";
import Footer from "../../components/Footer";

function Home() {
  return (
    <div>
      <Header />
      <HeroBanner />
      <Products />
      <Footer />
    </div>
  );
}
export default Home;
