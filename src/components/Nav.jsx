import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
import { navLinks } from "../assets/constants/index.js";
import { useState } from "react";
import clsx from "clsx";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { IoCloseOutline } from "react-icons/io5";
import { FiMenu } from "react-icons/fi";
const Nav = () => {
  const [isSideMenuOpen, setMenu] = useState(false);
  return (
    <header className="padding-x py-8 z-20 w-full bg-slate-300 ">
      <nav className="flex justify-betweenitems-center max-containe">
        <a href="/">
          <img src={headerLogo} alt="logo" width={200} height={10} />
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
            className="text-3xl cursor-pointer lg:hidden"
          />
        </div>
        <div
          className={clsx(
            `fixed h-full w-screen lg:hidden bg-black/50  backdrop-blur-sm top-0 right-0  -translate-x-full  transition-all  ${
              isSideMenuOpen && "translate-x-0"
            }`
          )}
        >
          <section className="text-black bg-white flex-col absolute left-0 top-0 h-screen p-8 gap-8 z-50 w-56 flex  ">
            <IoCloseOutline
              onClick={() => setMenu(false)}
              className="mt-0 mb-8 text-3xl cursor-pointer"
            />
            <ul className="flex flex-1 flex-col justify-evenly ">
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
          </section>
        </div>
      </nav>
    </header>
  );
};

export default Nav;
