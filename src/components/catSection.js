import React from "react";
import CatImg1 from "../images/cat1.png"
import CatImg2 from "../images/cat2.png"
import CatImg3 from "../images/cat3.png"
import CatImg4 from "../images/cat4.png"
import CatImg5 from "../images/cat5.png"
import CatImg6 from "../images/cat6.png"

function Catsection() {
  return (
    <div className="min-w-screen p-10 bg-[#1E1E1E]">
      <div className="w-full h-auto flex flex-col items-center">
        <span className="text-3xl text-yellow-400 mt-10">Shop by category</span>
        <span className="text-white capitalize text-lg mt-5">
          Browse through your favourite categories. We've got them all!
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 p-5">
        {/* Card 1 */}
        <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg1} alt=" image " className=" object-contain  w-full h-full" />
          </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg2} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg5} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>

        {/* Card 4 */}
        <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg3} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>

         {/* Card 4 */}
         <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg3} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>

         {/* Card 4 */}
         <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg4} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>

         {/* Card 4 */}
         <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg5} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>

         {/* Card 4 */}
         <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={CatImg6} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-col">
            <span>Earring Necklace Jewellery Chain Gemstone</span>
            <span className="text-2xl font-semibold">RS 12000</span>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Catsection;
