import React from 'react'

// import cart2 from "../img/banner/banner2.jpg";

import midbg from "../img/bg/midsection-bg_02.jpg"
import category1 from "../img/product/cat111.jpg"
import category2 from "../img/product/cat222.jpg"
import category3 from "../img/product/cat33.jpg"

import bannerImg1 from "../img/Carousel/banner1.jpg"
import bannerImg2 from "../img/Carousel/banner2.jpg"
import bannerImg3 from "../img/Carousel/banner3.jpg"
import bannerImg4 from "../img/Carousel/new-banner5.jpeg"
import bannerImg5 from "../img/Carousel/banner4.jpg"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { Link, graphql,useStaticQuery } from 'gatsby';
import CarouselItem from './Home/Caraosel/CarouselItem'



function MyCarousel() {

    const data = useStaticQuery( graphql`
    {
        file(relativePath: { eq: "Carousel/lohri-banner.jpg" }) {
            childImageSharp {
              # Specify the image processing specifications right in the query.
              # Makes it trivial to update as your page's design changes.
              original{
                src
              }
            }
          }
      }
    `)

    return (
      <div>
        <div className="slider-area">
          <div className="slider-active owl-carousel nav-style-1">
            {console.log("image data=>", data)}
            <Carousel
              autoPlay
              infiniteLoop
              swipeable
              emulateTouch
              showStatus={false}
            >
              <CarouselItem bannerImg={bannerImg1} />
              <CarouselItem bannerImg={bannerImg2} />
              <CarouselItem bannerImg={bannerImg3} />
              <CarouselItem bannerImg={bannerImg4} />
              <CarouselItem bannerImg={bannerImg5} />
            </Carousel>
          </div>
        </div>
        
        <div
          className="collections-area  pt-50 pb-70 mb-80"
          style={{
            backgroundImage: `url(${midbg})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "repeat-x",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="collection-wrap-2">
              <div className="collection-active-2 ">
                <div className="row">
                  <div className="collection-product-2 col-md-4  mb-10 ">
                    <Link to="/collections/shop" state={{ id: 1 }}>
                      <img src={category1} alt="sweeet category first" />
                    </Link>
                    <div className="collection-content-2 text-center">
                      <h3>Winter Special</h3>
                    </div>
                  </div>
                  <div className="collection-product-2 col-md-4 mb-10">
                    <Link to="/collections/shop" state={{ id: 2 }}>
                      <img src={category2} alt="sweeet category second" />
                    </Link>
                    <div className="collection-content-2 text-center">
                      <h3>Mithai</h3>
                    </div>
                  </div>
                  <div className="collection-product-2 col-md-4 mb-10">
                    <Link to="/collections/shop" state={{ id: 3 }}>
                      <img src={category3} alt="sweeet category third" />
                    </Link>
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
