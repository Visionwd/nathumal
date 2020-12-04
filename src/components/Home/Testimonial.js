import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import TestimonialBg from "../../img/bg/bg-4.jpg"
import leftLaef from "../../img/bg/sep-leaf-left.png"
import rightLaef from "../../img/bg/sep-leaf-right.png"

function Testimonial() {
    return (
        <section style={{backgroundImage:`url(${TestimonialBg})`}} className="section-full   bg-cover">
        {/* <div className="container">
        <div class="center wt-small-separator-outer ">
                     <div class="wt-small-separator">
                         <div class="sep-leaf-left"><img src={leftLaef} alt="" /></div>
                         <div>What our clients say</div>
                         <div class="sep-leaf-right"><img src={rightLaef} alt="" /></div>
                     </div>
                     <h2 data-title="Clients">Testimonials</h2>
                 </div>
             <div className="section-content testimonial-home testimonial-home-2">
                 <div id="testimonial" className="testimonial-2-content">
        
    <Carousel
   autoPlay
   infiniteLoop
   swipeable
   emulateTouch
   showStatus={false}>

                <div class="item" >
                    <div class="testimonial-2 corner-radius">
                        <div class="testimonial-content">
                            <div class="testimonial-text">
                            <i class="fas fa-quote-left"></i>
                                <p>In this tutorial I will show you how to easily create pagination
                                     in your ReactJs app. Pagination is important if you are building a blog site. This helps in easy navigation through pages.</p>
                            </div>
                            <div class="testimonial-detail clearfix">
                                <div class="testimonial-info">
                                    <span class="testimonial-name  title-style-2">~ React ~</span>
                                    <span class="testimonial-position">Tech</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div class="item" >
                    <div class="testimonial-2 corner-radius">
                        <div class="testimonial-content">
                            <div class="testimonial-text">
                            <i class="fas fa-quote-left"></i>
                                <p>Design, animate, collaborate and present your projects with an extensive library of assets and templates right in the browser</p>
                            </div>
                            <div class="testimonial-detail clearfix">
                                <div class="testimonial-info">
                                    <span class="testimonial-name  title-style-2">~ ArtBoard ~</span>
                                    <span class="testimonial-position">Design</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>


        </Carousel>
        </div>
           </div> 
        </div>
       */}

<div class="testimonial-area  pt-100 pb-95 ml-70 mr-70">
    <div class="container">
        <div class="row">
            <div class="col-lg-10 ml-auto mr-auto">
                    <div class="center wt-small-separator-outer ">
                        <div class="wt-small-separator">
                            <div class="sep-leaf-left"><img src={leftLaef} alt="" /></div>
                            <div>What Customers Say</div>
                            <div class="sep-leaf-right"><img src={rightLaef} alt="" /></div>
                        </div>
                        <h2 data-title="Clients">Testimonials</h2>
                    </div>

                <div class="testimonial-active owl-carousel nav-style-1 nav-testi-style">
                <Carousel
   autoPlay
   infiniteLoop
   swipeable
   emulateTouch
   showStatus={false}
   showIndicators={false}
   showArrows={false}
   >
                    <div class="single-testimonial text-center">
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div class="client-info">
                            <i class="fa fa-map-signs"></i>
                            <h5>Grace Alvarado</h5>
                            <span>Customer</span>
                        </div>
                    </div>

                    <div class="single-testimonial text-center">
                        
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                        <div class="client-info">
                            <i class="fa fa-map-signs"></i>
                            <h5>Grace Alvarado</h5>
                            <span>Customer</span>
                        </div>
                    </div>
    </Carousel>
                </div>
            </div>
        </div>
    </div>
</div>
      
       </section>
    )
}

export default Testimonial
