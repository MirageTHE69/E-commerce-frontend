import React  from "react";
import LeftSVG from "../images/ring.svg";
import Background from "../images/herobackground.png";





function ProductDetailSection() {

    return(
        <div className="relative h-screen flex items-center  overflow-hidden">
       
        <div className="absolute inset-0 bg-[#2f2f2f] opacity-50"></div>
        <div className="text-white w-full text-center z-10 p-10 ">
          <div className="container mx-auto px-4">
            <div className="flex flex-col lg:flex-row items-center justify-around mb-8">
              <img src={LeftSVG} alt="Left Icon" className=" mb-4 lg:mb-0" />
              <div className="text-left lg:text-center lg:max-w-lg  flex flex-col gap-y-10">
                <h1 className="text-4xl lg:text-5xl font-bold mb-4 items-start text-start">
                  <span className="text-yellow-500">Gold & Dimonds Rings</span>
                </h1>
                <p className="text-lg lg:text-xl mb-4 text-start">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Amet integer lorem amet arcu egestas congue.
                  Rhoncus scelerisque mi, ac sed lacus aliquam at tortor. Risus nulla massa ut vitae phasellus dictum.
                  Lacus feugiat mollis aenean ac. Cursus in at sagittis vivamus consequat.
                </p>
                <span className="text-yellow-500 text-start text-xl">50$</span>

                <button className="mt-4 text-yellow-500 border border-yellow-500 py-2 px-4 rounded-md hover:bg-yellow-700 hover:border-hidden hover:text-black">
                  Add to cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

    )

}

export default ProductDetailSection