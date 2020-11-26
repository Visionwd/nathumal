import React from 'react'
import cart1 from "../img/banner/banner1.jpg";
import cart2 from "../img/banner/banner2.jpg";
import Banner1 from "../img/Carousel/lohri-banner.jpg"
import logo from "../img/logo/logo.png"
import midbg from "../img/bg/midsection-bg_02.jpg"
import category1 from "../img/product/cat11.jpg"
import category2 from "../img/product/cat22.jpg"
import category3 from "../img/product/cat33.jpg"


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link,navigate } from 'gatsby';


function MyCarousel() {


    // handleClick=()=>{

    // }


    return (
        <div>
            <div className="slider-area">
    <div className="slider-active owl-carousel nav-style-1">
        
    <Carousel
   autoPlay
   infiniteLoop
   swipeable
   emulateTouch
   showStatus={false}>

        <div className="slider-height-7 bg-glaucous d-flex align-items-center"  style={{background:`url(${Banner1})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="container">
                <div className="row align-items-center slider-h9-mrg">
                    <div className="col-lg-12 col-md-12 col-12 col-sm-12 text-white">
                        <div className="slider-content-7 slider-animated-1" >
                            <h3 className="animated">New Arrival</h3>
                            <h1 className="animated">Special Lohri <br />Sweets</h1>
                            <div className="slider-btn-9 btn-hover">
                                <Link
                                 to="/collections/shop"
                                 state={{id:1}}
                                 className="animated" >SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

        <div className="slider-height-7 bg-glaucous d-flex align-items-center" style={{background:`url(${cart2})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="container">
                <div className="row align-items-center slider-h9-mrg">
                    <div className="col-lg-12 col-md-12 col-12 col-sm-12">
                        <div className="slider-content-7 slider-animated-1">
                            <h3 className="animated">New Arrival</h3>
                            <h1 className="animated">Festival <br />Sweets</h1>
                            <div className="slider-btn-9 btn-hover">
                                <Link 
                                 to="/collections/shop"
                                 state={{id:2}}className="animated" >SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </Carousel>
    </div>
</div>




<div className="collections-area  pt-40 pb-70 mb-80"  style={{backgroundImage:`url(${midbg})`,backgroundPosition:"center bottom",backgroundRepeat:"repeat-x",backgroundSize:"cover"}}>
    <div className="container">
        <div className="collection-wrap-2">
            <div className="collection-active-2 ">
               
                
               <div className="row" >
               <div className="collection-product-2 col-md-4 mb-10 ">
                    <Link 
                    to="/collections/shop"
                    state={{id:1}}
                    >
                    <img src={category1} alt="sweeet category first" /></Link>
                    <div className="collection-content-2 text-center">
                        <h3>Winter Special</h3> 
                    </div>
                </div>
                <div className="collection-product-2 col-md-4 mb-10">
                    <Link
                    to="/collections/shop"
                    state={{id:2}}
                     ><img src={category2} alt="sweeet category second" /></Link>
                    <div className="collection-content-2 text-center">
                        <h3>Mithai</h3> 
                    </div>
                </div>
                <div className="collection-product-2 col-md-4 mb-10">
                    <Link 
                    to="/collections/shop"
                    state={{id:3}}
                    ><img src={category3} alt="sweeet category third" /></Link>
                    <div className="collection-content-2 text-center">
                        <h3>Wedding Bhaaji</h3>
                    </div>
                </div>
               </div>

            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default MyCarousel
