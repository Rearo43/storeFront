import React from "react";
import CurrentCategory from "./components/storefront/current-category.js";
import Categories from "./components/storefront/categories.js";
import Header from './components/Header/';
import Footer from './components/Footer/';
// import Products from './components/storefront/products.js';

export default function Album() {
  return (
    <>
      <Header />
      <main>
        <Categories />
        <CurrentCategory />
        {/* <Products /> */}
      </main>
      <Footer />
    </>
  );
}
