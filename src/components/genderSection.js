import React from "react";
import Male from "../images/male.svg"
import Female from "../images/female.svg"
import Kid from "../images/kid.svg"


function Gendersection() {
  return (
    <div className="min-w-screen p-10 bg-black">
      <div className="w-full h-auto flex flex-col items-center">
        <span className="text-3xl text-yellow-400 mt-10">Shop by Gender</span>
        <span className="text-white capitalize text-lg mt-5">
        Explore our latest designs curated just for you!
        </span>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 p-5">
       
         {/* Card 4 */}
         <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={Male} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-row justify-between">
            <span className="text-2xl">Male</span>
            <span className="text-2xl text-yellow-300  font-semibold">View More</span>
          </div>
        </div>

         {/* Card 4 */}
         <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={Female} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-row justify-between">
            <span className="text-2xl">Female</span>
            <span className="text-2xl text-yellow-300  font-semibold">View More</span>
          </div>
        </div>

         {/* Card 4 */}
         <div className="bg-transparent flex flex-col border rounded-xl p-5">
          <div className="w-full h-[300px]  rounded-t-xl">
            <img src={Kid} alt=" image " className=" object-contain  w-full h-full" />
            </div>
          <div className="p-5 text-white flex flex-row justify-between">
            <span className=" text-2xl">Kids</span>
            <span className="text-2xl  text-yellow-300 font-semibold">View More</span>
          </div>
        </div>


      </div>
    </div>
  );
}

export default Gendersection;
