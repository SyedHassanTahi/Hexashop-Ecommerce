import { ChevronDown, ListMinus, X } from "lucide-react";
import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";
import logo from "../../assets/images/logo.png";
import { useState } from "react";
import { FaShoppingCart } from 'react-icons/fa';

const Navbar = ({ pageRefs }) => {
  const [isOpen, setIsOpen] = useState(false);

  function scrollIntoView(type) {
    pageRefs.current[type].scrollIntoView({ behavior: "smooth" });
    if (isOpen) {
      setIsOpen(false);
    }
  }
  function scrolltop() {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: "smooth"
    });
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white z-50 shadow-sm">
      <div className="flex justify-around p-4 items-center">
        {/* Logo */}
        <Link to="/" className="logo w-[150px]">
          <img src={logo} alt="Hexashop logo" />
        </Link>
        {/* Navigation */}
        <ul
          className={`${isOpen ? "flex" : "hidden"
            } lg:flex flex-col lg:flex-row gap-8 lg:gap-8 text-[16px] font-bold items-center absolute lg:static top-25 w-full lg:w-auto bg-[#f7f7f7] lg:bg-transparent p-8 lg:p-0 z-50 transition-all duration-300`}
        >
          <li className="hover:text-[#aaa] transition">
            <Link onClick={() => scrollIntoView("home")}
              className="cursor-pointer" to="/"> Home</Link>
          </li>

          <li className="hover:text-[#aaa] transition">
            <Link onClick={() => scrollIntoView("men")}
              className="cursor-pointer" to="#">
              Men's
            </Link>
          </li>

          <li className="hover:text-[#aaa] transition">
            <Link onClick={() => scrollIntoView("women")} className=" cursor-pointer" to="#">Women's</Link>
          </li>

          <li className="hover:text-[#aaa] transition">
            <Link onClick={() => scrollIntoView("kids")}
              className="cursor-pointer" to="#">Kid's</Link>
          </li>

          {/* Pages Dropdown */}
          <li className={styles.dropdown}>
            <button className="flex items-center gap-1 hover:text-[#aaa] transition">
              Pages <ChevronDown size={18} />
            </button>
            <div className={styles.dropdownContent}>
              <Link onClick={scrolltop} to="/about">About</Link>
              <Link onClick={scrolltop} to="/product">Product</Link>
              <Link onClick={scrolltop} to="/singleproduct">Single Product</Link>
              <Link onClick={scrolltop} to="/contact">Contact Us</Link>
            </div>
          </li>

          {/* Features Dropdown */}
          <li className={styles.dropdown}>
            <button className="flex items-center gap-1 hover:text-[#aaa] transition">
              Features <ChevronDown size={18} />
            </button>
            <div className={styles.dropdownContent}>
              <Link onClick={scrolltop} to="#">Feature Page 1</Link>
              <Link onClick={scrolltop} to="#">Feature Page 2</Link>
              <Link onClick={scrolltop} to="#">Feature Page 3</Link>
              <Link onClick={scrolltop} to="#">Feature Page 4</Link>
            </div>
          </li>

          <li className="hover:text-[#aaa] transition">
            <Link onClick={() => scrollIntoView("explore")}
              className="cursor-pointer" to="#">
              Explore
            </Link>
          </li>
          <li className="hover:text-[#aaa] transition">
            <Link onClick={() => scrollIntoView("explore")}
              className="cursor-pointer flex items-center gap-3" to="/cart">
              Cart<FaShoppingCart size={20} /> 
            </Link>
          </li>
        </ul>
        {/* Mobile Menu Button */}
        <button
          className="lg:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <ListMinus size={28} />}
        </button>
      </div>
    </header>

  );
};

export default Navbar;
