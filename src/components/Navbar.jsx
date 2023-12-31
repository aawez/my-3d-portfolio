import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);
  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-navbar`}
      style={{ boxShadow: "0px 4px 25px rgba(0, 0, 0, 0.5)" }}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          {/* <p className="text-white text-[18px] font-bold cursor-pointer flex">
          &nbsp; Aawez Mansuri &nbsp;{" "}
            <span className="sm:block hidden">| Tech Geek</span>
          </p> */}
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
      {navLinks.map((link) => (
        <li key={link.id} className="hover:text-white text-[18px] font-medium cursor-pointer">
          <ScrollLink
            to={link.id} // link.id should match the name prop of the corresponding Element component
            spy={true}
            smooth={true}
            duration={0}
            offset={-70} // Adjust according to your navbar height
            activeClass="text-white font-bold"
            className="text-secondary"
          >
            {link.title}
          </ScrollLink>
        </li>
      ))}
    </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />
          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px]`}
                  onClick={() => {
                    setToggle(!toggle);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
