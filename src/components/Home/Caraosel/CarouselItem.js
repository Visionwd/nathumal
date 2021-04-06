import React from 'react'
import { Link } from "gatsby";

function CarouselItem({bannerImg}) {
    return (
      <div
        className="slider-height-7 bg-glaucous d-flex align-items-center"
        style={{
          background: `url(${bannerImg})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="container">
          <div className="row align-items-center slider-h9-mrg">
            <div className="col-lg-12 col-md-12 col-12 col-sm-12 text-white">
              <div className="slider-content-7 slider-animated-1">
                <h3 className="animated">New Arrival</h3>
                <h1 className="animated">
                  Festival <br />
                  Sweets
                </h1>
                <div className="slider-btn-9 btn-hover">
                  <Link to="/collections/shop" className="animated">
                    SHOP NOW
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
}

export default CarouselItem
