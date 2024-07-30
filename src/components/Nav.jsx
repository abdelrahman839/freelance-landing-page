import { useState, useEffect } from "react";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
import { logoDark, logoWhite } from "../assets/images";
import { navLinks } from "../assets/constants/index.js";

const Nav = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  const [isScrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`padding-x py-2 z-20 w-full fixed top-0 transition-all duration-300 ${
        isScrolled ? "bg-black" : "bg-transparent"
      }`}
    >
      <nav className="flex lg:justify-between justify-between items-center max-container">
        <a href="/">
          <img
            src={isScrolled ? logoDark : logoWhite}
            alt="logo"
            width={200}
            height={10}
          />
        </a>
        <ul className="flex-1 flex justify-center items-center gap-28 max-lg:hidden">
          {navLinks.map((item) => (
            <li key={item.label}>
              <a
                href={item.href}
                className="font-montserrat leading-normal text-lg text-slate-400"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <div>
          <FiMenu
            onClick={() => setMenu(true)}
            className={`text-3xl cursor-pointer lg:hidden transition-colors duration-300 ${
              isScrolled ? "text-white" : "text-black"
            }`}
          />
        </div>
        <div
          className={`fixed h-full w-screen lg:hidden top-0 right-0 transition-all duration-300 ${
            isSideMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          onClick={() => setMenu(false)}
        >
          <section className="text-white bg-black flex-col absolute right-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="text-white mt-0 text-3xl cursor-pointer"
            />
            <ul className="flex flex-1 flex-col justify-start">
              {navLinks.map((item) => (
                <li key={item.label} className="mb-10">
                  <a
                    href={item.href}
                    className="font-montserrat leading-normal text-lg text-slate-400"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
