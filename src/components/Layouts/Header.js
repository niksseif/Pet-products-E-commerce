import { Link } from "react-router-dom";
import Logo from "../../assets/logo32x33.png";

export function Header() {
  return (
    <header>
      <nav className="bg-white border-gray-200 dark:bg-gray-900">
        <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4">
          <Link
            to="/"
            className="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img src={Logo} className="h-8" alt="Pet products Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
              Pet Products
            </span>
          </Link>
          <div className="flex items-center space-x-6 rtl:space-x-reverse">
            <div className="flex items-center relative">
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5  bi bi-gear"></span>
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-search-heart-fill"></span>
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-bag-heart"></span>
              <span className="cursor-pointer text-xl text-gray-700 dark:text-white mr-5 bi bi-person"></span>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}
