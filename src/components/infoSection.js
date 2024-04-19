import React from "react";
import LeftSVG from "../images/earrings2.svg";
import RightSVG from "../images/girl.svg";

function InfoSection() {
  return (
    <div className="h-[50%] bg-[#2f2f2f] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 xl:px-16">
      {/* Left SVG */}
      <div className="flex items-center justify-center mb-8 lg:mb-0 lg:mr-16">
        <img src={LeftSVG} alt="Left Icon" className="" />
      </div>

      {/* Text Section */}
      <div className="text-white text-center lg:text-left lg:max-w-lg">
        <h2 className="text-xl lg:text-2xl font-semibold relative text-center text-yellow-300 mb-8">
          Section Title
        </h2>

        <p className="text-sm lg:text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
          lorem amet arcu egestas congue. Rhoncus scelerisque m aenean ac.
          Cursus in at sagittis vivamus Rhoncus scelerisque m aenean{" "}
        </p>
      </div>

      {/* Right SVG */}
      <div className="flex items-center justify-center">
        <img src={RightSVG} alt="Right Icon" className=" h-auto" />
      </div>
    </div>
  );
}

export default InfoSection;
