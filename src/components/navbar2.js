import React from "react";
import Icon from "../images/insta.svg";
import Icon2 from "../images/faebook.svg";
import Icon3 from "../images/twitter.svg";
import Logo from "../images/Logo.svg";

const Navbar = () => {
  return (
    <nav className="bg-[#131313] flex flex-col items-center justify-center p-1 px-20">
      {/* Logo */}
      <div className="flex items-center justify-center mt-3">
        <img src={Logo} alt="Logo" className="h-12" />
      </div>

      {/* Menu Items */}
      <div className="flex items-center gap-10 mb-5 ">
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none cursor-pointer"
        >
          Home
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none cursor-pointer"
        >
          Gallery
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none cursor-pointer"
        >
          Info
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none cursor-pointer"
        >
          Event
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none cursor-pointer"
        >
          Store Location
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none cursor-pointer"
        >
          Contact Us
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none cursor-pointer"
        >
          Login
        </span>
        {/* Add more menu items as needed */}

        {/* Add more menu items as needed */}
      </div>

      {/* Social Media Icons */}
    </nav>
  );
};

export default Navbar;
