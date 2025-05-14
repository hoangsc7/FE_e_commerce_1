import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./../customer/pages/HomePage";
import Cart from "./../customer/components/Cart/Cart";
import Product from "./../customer/components/Product/Product";
import Navigation from "../components/Navigation";
import Footer from "./../customer/components/Footer/Footer";
import ProductDetails from "./../customer/components/ProductDetails/ProductDetails";
import Checkout from "./../customer/components/Checkout/Checkout";
import Order from "./../customer/components/Order/Order";
import OrderDetails from "./../customer/components/Order/OrderDetails";

const CustomerRouters = () => {
  const [isNavVisible, setIsNavVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  // const { isDarkMode, toggleDarkMode } = useTheme();
  useEffect(() => {
    const controlNavbar = () => {
      if (typeof window !== "undefined") {
        const currentScrollY = window.scrollY;

        // Nếu cuộn xuống và navigation đang hiện, ẩn nó
        if (currentScrollY > lastScrollY && currentScrollY > 100) {
          setIsNavVisible(false);
        }
        // Nếu cuộn lên hoặc ở đầu trang, hiện nó
        else if (currentScrollY < lastScrollY || currentScrollY < 100) {
          setIsNavVisible(true);
        }

        setLastScrollY(currentScrollY);
      }
    };

    window.addEventListener("scroll", controlNavbar);

    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY, isNavVisible]);
  const handleClose = () => {
    setOpenAuthModal(false);
    navigate("/");
  };
  return (
    <div>
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white  shadow-md transition-all duration-100 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navigation />
      </div>
      <Routes>
        <Route path="/login" element={<HomePage />}></Route>
        <Route path="/register" element={<HomePage />}></Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        ></Route>
        <Route path="/product/:productId" element={<ProductDetails />}></Route>
        <Route path="/checkout" element={<Checkout />}></Route>
        <Route path="/account/order" element={<Order />}></Route>
        <Route
          path="/account/order/:orderId"
          element={<OrderDetails />}
        ></Route>
        {/* <ProductDetails /> */}

        {/* <Order/> */}
        {/* <OrderTracker /> */}
      </Routes>
      {/* <AuthModal open={openAuthModal} handleClose={handleClose} /> */}

      <div className="">
        <Footer />
      </div>
    </div>
  );
};

export default CustomerRouters;
