import { Link } from "react-router-dom";
import Logo from "../../assets/logo32x33.png";
import { useEffect, useState } from "react";
import { Search } from "../Sections/Search";
export function Header() {
  const [darkMode, setDarkMode] = useState(
    JSON.parse(localStorage.getItem("darkMode")) || false
  );

  useEffect(() => {
    localStorage.setItem("darkMode", JSON.stringify(darkMode));

    if (darkMode) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, [darkMode]);

  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src={Logo}
              className="mr-3 h-6 sm:h-9"
              alt="Pet products Logo"
            />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pet Products
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center relative">
              <span
                onClick={() => setDarkMode(!darkMode)}
                className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5  bi bi-gear"
              ></span>
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search-heart-fill"></span>
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-bag-heart"></span>
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person"></span>
            </div>
          </div>
        </div>
      </nav>
      <Search/>
    </header>
  );
}
