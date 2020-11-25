import React from 'react'
import cart1 from "../img/banner/banner1.jpg";
import cart2 from "../img/banner/banner2.jpg";
import logo from "../img/logo/logo.png"

import category1 from "../img/product/cat11.jpg"
import category2 from "../img/product/cat22.jpg"
import category3 from "../img/product/cat33.jpg"


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'gatsby';


function MyCarousel() {
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

        <div className="slider-height-7 bg-glaucous d-flex align-items-center"  style={{background:`url(${cart1})`, backgroundSize: "cover", backgroundPosition: "center"}}>
            <div className="container">
                <div className="row align-items-center slider-h9-mrg">
                    <div className="col-lg-12 col-md-12 col-12 col-sm-12 text-white">
                        <div className="slider-content-7 slider-animated-1" >
                            <h3 className="animated">New Arrival</h3>
                            <h1 className="animated">Diwali Festival <br />Barfi</h1>
                            <div className="slider-btn-9 btn-hover">
                                <Link className="animated" to="/collections/shop">SHOP NOW</Link>
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
                            <h1 className="animated">New Festival <br />Sweets</h1>
                            <div className="slider-btn-9 btn-hover">
                                <Link className="animated" to="/collections/shop">SHOP NOW</Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>


        </Carousel>
    </div>
</div>




<div className="collections-area pb-95">
    <div className="container">
        <div className="collection-wrap-2">
            <div className="collection-active-2 ">
                {/* <Carousel centerMode 
                infiniteLoop 
                centerSlidePercentage={34}
                showStatus={false}
                showIndicators={false}
                showArrows={false}
                > */}
                
               <div className="row">
               <div className="collection-product-2 col-md-4 mb-10 ">
                    <a href="/"><img src={category1} alt="sweeet category first" /></a>
                    <div className="collection-content-2 text-center">
                        <h3>Winter Special</h3> 
                    </div>
                </div>
                <div className="collection-product-2 col-md-4 mb-10">
                    <a href="/"><img src={category2} alt="sweeet category second" /></a>
                    <div className="collection-content-2 text-center">
                        <h3>Mithai</h3> 
                    </div>
                </div>
                <div className="collection-product-2 col-md-4 mb-10">
                    <a href="/"><img src={category3} alt="sweeet category third" /></a>
                    <div className="collection-content-2 text-center">
                        <h3>Dry Fruits Sweet</h3>
                    </div>
                </div>
               </div>

            {/* </Carousel> */}
            </div>
        </div>
    </div>
</div>

        </div>
    )
}

export default MyCarousel
