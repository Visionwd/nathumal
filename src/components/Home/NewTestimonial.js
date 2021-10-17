import React, { Component } from 'react'
import axios from "axios"
import { Carousel } from 'react-responsive-carousel';
import TestimonialBg from "../../img/bg/bg-4.jpg"
import leftLaef from "../../img/bg/sep-leaf-left.png"
import rightLaef from "../../img/bg/sep-leaf-right.png"

import TestiBg from "../../img/testimonial/testibg.jpg"

export class NewTestimonial extends Component {

    state={
        data:[]
    }

    componentDidMount(){
             
    axios.post("https://www.pixelshakers.com/nathumalapi/appapi/testimonials",
    JSON.stringify({
         "service_request": {
             "params": {
             },
             "request_info": {
                 "source_type": "android"
             }
         },
         "version": "1.0"
     }),{
 headers: {
     'Content-Type': 'application/json'
   }
})
.then(res=>{
  
    console.log("testimonial data=>",res);
    this.setState({
        ...this.state,
      data:res.data.testimonials
    })
})



    }
    render() {
        return (
          <section
            style={{
              backgroundColor: "#EAD19B",
              backgroundImage: `url(${TestiBg})`,
            }}
            className="section-full   bg-cover"
          >
            <div className="testimonial-area  pt-100 pb-95 ml-70 mr-70">
              <div className="container">
                <div className="row">
                  <div className="col-lg-10 ml-auto mr-auto">
                    <div className="center wt-small-separator-outer ">
                      <div className="wt-small-separator">
                        {/* <div className="sep-leaf-left"><img src={leftLaef} alt="" /></div> */}
                        <div>Our Happy Customers</div>

                        {/* <div className="sep-leaf-right"><img src={rightLaef} alt="" /></div> */}
                      </div>
                      <h2 data-title="Clients">Testimonials</h2>
                    </div>

                    <div className="testimonial-active owl-carousel nav-style-1 nav-testi-style">
                      <Carousel
                        autoPlay
                        infiniteLoop
                        swipeable
                        emulateTouch
                        showStatus={false}
                        showIndicators={false}
                        showArrows={false}
                      >
                        {this.state.data.length ? (
                          this.state.data.map(
                            ({
                              test_id,
                              customer_name,
                              customer_designation,
                              testimonial,
                            }) => {
                              return (
                                <div className="single-testimonial text-center">
                                  <p style={{ whiteSpace: "pre-line" }}>
                                    {testimonial}
                                  </p>
                                  <div className="client-info">
                                    <h5>{customer_name}</h5>
                                    <span>
                                      {customer_designation
                                        ? customer_designation
                                        : ""}
                                    </span>
                                  </div>
                                </div>
                              )
                            }
                          )
                        ) : (
                          <div className="single-testimonial text-center">
                            <p>my testimonial</p>
                            <div className="client-info">
                              <h5>Grace Alvarado</h5>
                              <span>Customer</span>
                            </div>
                          </div>
                        )}
                      </Carousel>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
        )
    }
}

export default NewTestimonial
