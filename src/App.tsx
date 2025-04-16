// import HomePage from "./customer/pages/HomePage";
import Footer from "./customer/components/Footer/Footer";
import { useState, useEffect } from "react";
// import { useTheme } from "./context/ThemeContext";
// import { MoonIcon, SunIcon } from "@heroicons/react/24/outline";
import Navigation from "./components/Navigation";
import Product from "./customer/components/Product/Product";

function App() {
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

  return (
    <div className="relative min-h-screen">
      <div
        className={`fixed top-0 left-0 right-0 z-50 bg-white  shadow-md transition-all duration-100 ${
          isNavVisible ? "translate-y-0" : "-translate-y-full"
        }`}
      >
        <Navigation />

        {/* Dark mode toggle */}
        {/* <button
          onClick={toggleDarkMode}
          className="text-gray-400 hover:text-gray-500 dark:hover:text-gray-300"
        >
          {isDarkMode ? (
            <SunIcon className="h-6 w-6" aria-hidden="true" />
          ) : (
            <MoonIcon className="h-6 w-6" aria-hidden="true" />
          )}
        </button> */}
      </div>
      <div className="pt-20">
        {/* <HomePage /> */}
        <Product />
      </div>
      <Footer />
    </div>
  );
}

export default App;
