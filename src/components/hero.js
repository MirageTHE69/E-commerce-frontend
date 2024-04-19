import React from "react";
import Background from "../images/herobackground.png";
import LeftSVG from "../images/ring.svg";

function Hero() {
  return (
    <div className="relative h-screen flex items-center justify-center overflow-hidden">
      <img
        src={Background}
        alt="Hero Background"
        className="absolute inset-0 w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-50"></div>
      <div className="text-white w-full text-center z-10">
        <div className="container mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center justify-around mb-8">
            <img src={LeftSVG} alt="Left Icon" className=" mb-4 lg:mb-0" />
            <div className="text-left lg:text-center lg:max-w-lg">
              <h1 className="text-4xl lg:text-5xl font-bold mb-4">
                NEW COLLECTION <span className="text-yellow-500">“DIAMOND”</span>
              </h1>
              <p className="text-lg lg:text-xl mb-4">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer lorem amet arcu egestas congue.
                Rhoncus scelerisque mi, ac sed lacus aliquam at tortor. Risus nulla massa ut vitae phasellus dictum.
                Lacus feugiat mollis aenean ac. Cursus in at sagittis vivamus consequat.
              </p>
              <button className="mt-4 text-yellow-500 border border-yellow-500 py-2 px-4 rounded-md hover:bg-yellow-700 hover:border-hidden hover:text-black">
                View Collection
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
