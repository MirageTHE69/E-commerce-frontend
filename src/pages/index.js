import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { motion, useAnimation } from "framer-motion";

import Layout from "../components/layout";
import Seo from "../components/seo";
import * as styles from "../components/index.module.css";
import Navbar from "../components/navBar";
import Navbar2 from "../components/navbar2";
import Hero from "../components/hero";
import Item from "../components/item";
import InfoSection from "../components/infoSection";

const IndexPage = () => {
  // Controls for animations
  const heroControls = useAnimation();
  const itemControls = useAnimation();
  const infoControls = useAnimation();

  // State to manage background color
  const [bgColor, setBgColor] = React.useState("bg-black");

  // Function to handle scroll animation
  const handleScrollAnimation = () => {
    const scrollPosition = window.scrollY;

    // Define thresholds for animations
    const heroThreshold = 200; // Adjust this threshold based on when you want the animation to start
    const itemThreshold = 50; // Adjust this threshold based on when you want the animation to start
    const infoThreshold = 1000; // Adjust this threshold based on when you want the animation to start

    // Check scroll position and trigger animations
    if (scrollPosition >= heroThreshold) {
      heroControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
    if (scrollPosition >= itemThreshold) {
      itemControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }
    if (scrollPosition >= infoThreshold) {
      infoControls.start({ opacity: 1, y: 0, transition: { duration: 1 } });
    }

    // Change background color based on scroll position
    if (scrollPosition > 0) {
      setBgColor("bg-black");
    } else {
      setBgColor(""); // Set default background color
    }
  };

  // Add event listener for scroll
  React.useEffect(() => {
    window.addEventListener("scroll", handleScrollAnimation);
    return () => window.removeEventListener("scroll", handleScrollAnimation);
  }, []);

  return (
    <div className={`min-w-screen h-screen ${bgColor}`}>
      <Navbar />
      <Navbar2 />
      <Hero />
      <motion.div initial={{ opacity: 0, y: 30 }} animate={itemControls} className=" bg-black">
        <Item />
      </motion.div>
      <InfoSection />
    </div>
  );
};

export const Head = () => <Seo title="Home" />;

export default IndexPage;
