import React from "react";
import Navbar from "../../components/navBar";
import Navbar2 from "../../components/navbar2";
import ProductDetailSection from "../../components/productDeatail";
import ProductSection from "../../components/productsSection";
import Gendersection from "../../components/genderSection";



function Index(){
    return(
        <div className=" min-w-screen bg-[#131313] min-h-screen">
            <Navbar/>
            <Navbar2/>
            <div className=" w-full h-full p-16">
            <ProductDetailSection/>
            </div>
            <ProductSection/>
            <Gendersection/>

        </div>


    )
}


export default Index