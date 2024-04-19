import React from "react"
import Icon from "../images/insta.svg"
import Icon2 from "../images/faebook.svg"
import Icon3 from "../images/twitter.svg"
import Logo from "../images/logo.svg"

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
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none "
        >
          Home
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none"
        >
          Gallery
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none"
        >
          Info
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none"
        >
          Event
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none"
        >
          Store Location
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold hover:text-yellow-300 focus:text-gray-300 focus:outline-none"
        >
          Contact Us
        </span>
        <span
          href="#"
          className="text-white mr-4 text-lg font-semibold outline-none hover:text-yellow-300 focus:text-gray-300 focus:outline-none"
        >
          Login
        </span>
        {/* Add more menu items as needed */}

        {/* Add more menu items as needed */}
      </div>

      {/* Social Media Icons */}
    </nav>
  )
}

export default Navbar
