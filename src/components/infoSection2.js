import React from "react"
import LeftSVG from "../images/earrings2.svg"
import RightSVG from "../images/girl.svg"
import JwellerySVG from "../images/jwellery.svg"

function InfoSection2() {
  return (
    <div className="h-[50%] bg-[#2f2f2f] flex flex-col lg:flex-row items-center justify-between px-4 lg:px-8 xl:px-28">
      {/* Left SVG */}

      {/* Text Section */}
      <div className="text-white text-center lg:text-left lg:max-w-lg items-center flex flex-col">
        <img src={JwellerySVG} alt="Right Icon" className=" h-auto" />
        <h2 className="text-xl lg:text-2xl font-semibold relative text-center text-yellow-300 mb-8">
          Make A gift
        </h2>

        <p className="text-sm lg:text-base text-center">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer
          lorem amet arcu egestas congue. Rhoncus scelerisque m aenean.{" "}
        </p>
      </div>

      {/* Right SVG */}
      <div className="flex items-center justify-center flex-col gap-y-7">
        <h2 className="text-xl lg:text-2xl font-semibold relative text-center text-yellow-300 mb-8">
          Our Store{" "}
        </h2>
        <p className=" text-white  text-center w-[90%]">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer lorem amet arcu egestas congue. Rhoncus scelerisque m aenean ac. Cursus in at sagittis vivamus  Rhoncus scelerisque m aenean amet arcu egestas congue. Rhoncuue m aenean amet arcu egestas congue. Rhoncus scelerisque m aenean ac.  sagittis vivamus  Rhoncus scelerisque m aenean
        </p>
        <button className="mt-4 text-yellow-500 border border-yellow-500 py-2 px-4 rounded-md hover:bg-yellow-700 hover:border-hidden hover:text-black">
                Find out more
              </button>
      </div>
    </div>
  )
}

export default InfoSection2
