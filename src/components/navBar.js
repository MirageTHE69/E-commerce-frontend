import React from "react"
import Icon from "../images/insta.svg"
import Icon2 from "../images/faebook.svg"
import Icon3 from "../images/twitter.svg"

const Navbar = () => {
  return (
    <nav className="bg-[#131313] flex items-center justify-between p-1  px-20 ">
      {/* Left Side - Phone Number */}
      <div className="flex items-center justify-center  mt-5 ">
        <p className="text-white text-base font-semibold">+91 9825720827</p>
      </div>

      {/* Middle - Search Bar */}
      <div className="  flex-grow flex items-center justify-center">
        <input
          className="px-4 w-full mx-10 py-2 rounded-full bg-black border border-white text-white placeholder-gray-400 focus:outline-none"
          type="text"
          placeholder="Search for Gold jewellery, Diamond Jewellery and more ..."
        />
      </div>

      {/* Right Side - Social Media Icons */}
      <div className="flex items-center mt-5 ">
        <img src={Icon} alt="Instagram Icon" className="h-6 w-6 mr-4" />
        <img src={Icon2} alt="Facebook Icon" className="h-6 w-6 mr-4" />
        <img src={Icon3} alt="Twitter Icon" className="h-6 w-6 mr-4" />
      </div>
    </nav>
  )
}

export default Navbar
