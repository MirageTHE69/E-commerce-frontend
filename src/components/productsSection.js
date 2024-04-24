import React from "react";
import LeftSVG from "../images/earrings2.svg";

function ProductSection(){
    return(
        <div className=" min-w-screen  bg-[#1E1E1E] p-8">
            <div className="h-full   grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
                {/* Card 1 */}
                <div className="bg-[#1E1E1E] h-full p-5 flex items-center justify-center  flex-col border rounded-xl">
                    {/* SVG image */}
                    <img src={LeftSVG} alt="" className=" top-0 left-0 w-full h-full" />
                    <div className="text-white flex flex-col z-10">
                        {/* Title */}
                        <span className="text-lg font-semibold">Earring Necklace Jewellery Chain Gemstone</span>
                        {/* Price */}
                        <span className="text-2xl font-semibold mt-2">RS 12000</span>
                    </div>
                </div>

                {/* Card 2 */}
                <div className="bg-[#1E1E1E] p-5 flex items-center justify-center  border rounded-xl flex-col">
                    {/* SVG image */}
                    <img src={LeftSVG} alt="" className="top-0 left-0 " />
                    <div className="text-white flex flex-col z-10">
                        {/* Title */}
                        <span className="text-lg font-semibold">Earring Necklace Jewellery Chain Gemstone</span>
                        {/* Price */}
                        <span className="text-2xl font-semibold mt-2">RS 12000</span>
                    </div>
                </div>

                {/* Card 3 */}
                <div className="bg-[#1E1E1E] p-5 flex items-center justify-center  border rounded-xl flex-col">
                    {/* SVG image */}
                    <img src={LeftSVG} alt="" className=" top-0 left-0 w-full h-full" />
                    <div className="text-white flex flex-col z-10">
                        {/* Title */}
                        <span className="text-lg font-semibold">Earring Necklace Jewellery Chain Gemstone</span>
                        {/* Price */}
                        <span className="text-2xl font-semibold mt-2">RS 12000</span>
                    </div>
                </div>

                {/* Card 4 */}
                <div className="bg-[#1E1E1E] p-5 flex items-center justify-center  border rounded-xl flex-col">
                    {/* SVG image */}
                    <img src={LeftSVG} alt="" className=" top-0 left-0 w-full h-full" />
                    <div className="text-white flex flex-col z-10">
                        {/* Title */}
                        <span className="text-lg font-semibold">Earring Necklace Jewellery Chain Gemstone</span>
                        {/* Price */}
                        <span className="text-2xl font-semibold mt-2">RS 12000</span>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProductSection;
