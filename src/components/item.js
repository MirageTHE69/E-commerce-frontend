import React, { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import Item1 from "../images/bangals.svg";
import Item2 from "../images/neckles.svg";
import Item3 from "../images/earrings.svg";

const Item = () => {
  // Controls for animations
  const controls = useAnimation();

  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    const scrollPosition = window.scrollY;
    const windowHeight = window.innerHeight;
    const cardElements = document.querySelectorAll(".card");

    cardElements.forEach((card, index) => {
      const cardTop = card.getBoundingClientRect().top;
      if (cardTop < windowHeight * 0.9) {
        controls.start((i) => ({
          opacity: 1,
          y: 0,
          transition: { duration: 1 },
          delay: i * 0.2 // Adjust the delay to control the stagger effect
        }));
      }
    });
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className="bg-[#131313] p-8">
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Card 1 */}
        <motion.div
          className="bg-[#2f2f2f] flex items-center justify-between gap-6 p-8 card"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          {/* Left side SVG */}
          <img src={Item1} alt="Bangals" className="w-auto" />
          {/* Right side info */}
          <div className="text-white flex flex-col">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Gold & Bracelets</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam</p>
          </div>
        </motion.div>

        {/* Card 2 */}
        <motion.div
          className="bg-[#2f2f2f] flex items-center justify-between gap-6 p-8 card"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          {/* Left side SVG */}
          <img src={Item2} alt="Neckles" className="w-auto" />
          {/* Right side info */}
          <div className="text-white flex flex-col">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Gold & Dimonds Rings</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam</p>
          </div>
        </motion.div>

        {/* Card 3 */}
        <motion.div
          className="bg-[#2f2f2f] flex items-center justify-between gap-6 p-8 card"
          initial={{ opacity: 0, y: 100 }}
          animate={controls}
        >
          {/* Left side SVG */}
          <img src={Item3} alt="Earrings" className="w-auto" />
          {/* Right side info */}
          <div className="text-white flex flex-col">
            <h2 className="text-xl font-semibold text-yellow-300 mb-2">Gold & Bracelets</h2>
            <p className="text-gray-300">Lorem ipsum dolor sit amet consectetur adipiscing elit Malesuada integer id diam</p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Item;
