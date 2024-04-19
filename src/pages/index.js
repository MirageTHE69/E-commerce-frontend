import * as React from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import Navbar from "../components/navBar"
import Navbar2 from "../components/navbar2"
import Hero from "../components/hero"
import Item from "../components/item"
import InfoSection from "../components/infoSection"



const IndexPage = () => (
  
  <div className="  min-w-screen  h-screen bg-black ">
    <Navbar/>
    <Navbar2/>
    <Hero/>
    <Item/>
    <InfoSection/>
  </div>

)


export const Head = () => <Seo title="Home" />

export default IndexPage
