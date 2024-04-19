import React from "react";
import Item1 from "../images/bangals.svg";
import Item2 from "../images/neckles.svg";
import Item3 from "../images/earrings.svg";

function Item() {
  return (
    <div className="bg-[#131313] p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <div className="bg-[#2f2f2f] flex items-center justify-between gap-6 p-8">
          {/* Left side SVG */}
          <img src={Item1} alt="Bangals" className=" w-auto" />
          {/* Right side info */}
          <div className="text-white flex flex-col ">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Gold & Bracelets</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam</p>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-[#2f2f2f] flex items-center justify-between gap-6 p-8">
          {/* Left side SVG */}
          <img src={Item2} alt="Neckles" className=" w-auto" />
          {/* Right side info */}
          <div className="text-white flex flex-col">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Gold & Dimonds Rings</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam</p>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-[#2f2f2f] flex items-center justify-between gap-6 p-8">
          {/* Left side SVG */}
          <img src={Item3} alt="Earrings" className=" w-auto" />
          {/* Right side info */}
          <div className="text-white flex flex-col">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Gold & Bracelets</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Item;
