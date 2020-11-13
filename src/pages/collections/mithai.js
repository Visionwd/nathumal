import React,{useState,useEffect} from 'react'
import Layout from '../../components/Layout'
import axios from "axios"
import Product1 from "../../img/product/prod1.jpg"
import Product2 from "../../img/product/prod2.jpg"
import Product3 from "../../img/product/prod3.jpg"
import Product4 from "../../img/product/prod4.jpg"
import Product5 from "../../img/product/prod5.jpg"

import ProductOfCollection from "../../components/Reusable/ProductOfCollection"



function Mithai() {
    const [categories , setCategories] =  useState([])

    useEffect(() => {
       axios.post("https://www.heydemo.ml/nathumalapi/appapi/categories",
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
            // 'Content-Type': 'application/x-www-form-urlencoded',
          }
       })
       .then(res=>{
           console.log(res);
        //    setCategories(res.data.categories);
        //    return res.data.categories
       })
     

        // fetch("https://www.heydemo.ml/nathumalapi/appapi/categories",{
        //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
        //     mode: 'cors', // no-cors, *cors, same-origin
        //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
        //     credentials: 'same-origin', // include, *same-origin, omit
        //     headers: {
        //       'Content-Type': 'application/json'
        //       // 'Content-Type': 'application/x-www-form-urlencoded',
        //     },
        //     redirect: 'follow', // manual, *follow, error
        //     referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
        //     body: JSON.stringify({
        //         "service_request": {
        //             "params": {
        //             },
        //             "request_info": {
        //                 "source_type": "android"
        //             }
        //         },
        //         "version": "1.0"
        //     }) // body data type must match "Content-Type" header
        //   })
        //   .then(response=>{
        //     //   console.log(response.json());
        //       return response.json()
        //   })
        //   .then(jsondata=>{
        //       console.log(jsondata)
        //       setCategories(jsondata.categories)
        //       console.log(categories);
        //     })
    })

    return (
       <Layout>
<div className="shop-area pt-95 pb-100">
    <div className="container">
        <div className="row flex-row-reverse">
            <div className="col-lg-9">
                <div className="shop-top-bar">
                    <div className="select-shoing-wrap">
                        <div className="shop-select">
                            <select>
                                <option value="">Sort by newness</option>
                                <option value="">A to Z</option>
                                <option value=""> Z to A</option>
                                <option value="">In stock</option>
                            </select>
                        </div>
                        <p>Showing 1–12 of 20 result</p>
                    </div>
                    <div className="shop-tab nav">
                        <a className="active" href="#shop-1" data-toggle="tab">
                            <i className="fa fa-table"></i>
                        </a>
                        <a href="#shop-2" data-toggle="tab">
                            <i className="fa fa-list-ul"></i>
                        </a>
                    </div>
                </div>
                
                <div className="shop-bottom-area mt-35">
                    <div className="tab-content jump">
                        <div id="shop-1" className="tab-pane active">
                            <div className="row">
                                {/* <div className="col-xl-4 col-md-6 col-lg-6 col-sm-6">
                                    <div className="product-wrap mb-25 scroll-zoom">
                                        <div className="product-img">
                                            <a href="#">
                                                <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                            </a>
                                            <span className="pink">-10%</span>
                                            <div className="product-action">
                                                <div className="pro-same-action pro-wishlist">
                                                    <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                                                </div>
                                                <div className="pro-same-action pro-cart">
                                                    <a title="Add To Cart" href="#"><i className="pe-7s-cart"></i> Add to cart</a>
                                                </div>
                                                <div className="pro-same-action pro-quickview">
                                                    <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><i className="pe-7s-look"></i></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="product-content text-center">
                                            <h3><a href="product-details.html">T- Shirt And Jeans</a></h3>
                                            <div className="product-rating">
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o yellow"></i>
                                                <i className="fa fa-star-o"></i>
                                                <i className="fa fa-star-o"></i>
                                            </div>
                                            <div className="product-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 60.00</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                */}

                          
                                <ProductOfCollection img={Product1} price={330} />
                                <ProductOfCollection img={Product2} price={330} />
                                <ProductOfCollection img={Product3} price={330} />
                                <ProductOfCollection img={Product4} price={330} />
                                <ProductOfCollection img={Product5} price={330} />
                                <ProductOfCollection img={Product1} price={330} />
                                <ProductOfCollection img={Product2} price={330} />
                                <ProductOfCollection img={Product3} price={330} />
                                <ProductOfCollection img={Product4} price={330} />
                                <ProductOfCollection img={Product5} price={330} />

                                </div>
                        </div>
                        {/* <div id="shop-2" className="tab-pane">
                            <div className="shop-list-wrap mb-30">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                        <div className="product-wrap">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img className="default-img" src="assets/img/product/pro-1.jpg" alt="" />
                                                    <img className="hover-img" src="assets/img/product/pro-1-1.jpg" alt="" />
                                                </a>
                                                <span className="pink">-10%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                        <div className="shop-list-content">
                                            <h3><a href="#">Products Name Here</a></h3>
                                            <div className="product-list-price">
                                                <span>$ 60.00</span>
                                                <span className="old">$ 90.00</span>
                                            </div>
                                            <div className="rating-review">
                                                <div className="product-list-rating">
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <a href="#">3 Reviews</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consecteto adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua Ut enim ad minim </p>
                                            <div className="shop-list-btn btn-hover">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-list-wrap mb-30">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                        <div className="product-wrap">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img className="default-img" src="assets/img/product/pro-2.jpg" alt="" />
                                                    <img className="hover-img" src="assets/img/product/pro-2-1.jpg" alt="" />
                                                </a>
                                                <span className="purple">New</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                        <div className="shop-list-content">
                                            <h3><a href="#">Products Name Here</a></h3>
                                            <div className="product-list-price">
                                                <span>$ 60.00</span>
                                            </div>
                                            <div className="rating-review">
                                                <div className="product-list-rating">
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <a href="#">3 Reviews</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consecteto adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua Ut enim ad minim </p>
                                            <div className="shop-list-btn btn-hover">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-list-wrap mb-30">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                        <div className="product-wrap">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img className="default-img" src="assets/img/product/pro-3.jpg" alt="" />
                                                    <img className="hover-img" src="assets/img/product/pro-3-1.jpg" alt="" />
                                                </a>
                                                <span className="pink">-20%</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                        <div className="shop-list-content">
                                            <h3><a href="#">Products Name Here</a></h3>
                                            <div className="product-list-price">
                                                <span>$ 30.00</span>
                                                <span className="old">$ 50.00</span>
                                            </div>
                                            <div className="rating-review">
                                                <div className="product-list-rating">
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <a href="#">3 Reviews</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consecteto adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua Ut enim ad minim </p>
                                            <div className="shop-list-btn btn-hover">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="shop-list-wrap mb-30">
                                <div className="row">
                                    <div className="col-xl-4 col-lg-5 col-md-5 col-sm-6">
                                        <div className="product-wrap">
                                            <div className="product-img">
                                                <a href="#">
                                                    <img className="default-img" src="assets/img/product/pro-7.jpg" alt="" />
                                                    <img className="hover-img" src="assets/img/product/pro-4-1.jpg" alt="" />
                                                </a>
                                                <span className="purple">New</span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-xl-8 col-lg-7 col-md-7 col-sm-6">
                                        <div className="shop-list-content">
                                            <h3><a href="#">Products Name Here</a></h3>
                                            <div className="product-list-price">
                                                <span>$ 70.00</span>
                                            </div>
                                            <div className="rating-review">
                                                <div className="product-list-rating">
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o yellow"></i>
                                                    <i className="fa fa-star-o"></i>
                                                    <i className="fa fa-star-o"></i>
                                                </div>
                                                <a href="#">3 Reviews</a>
                                            </div>
                                            <p>Lorem ipsum dolor sit amet, consecteto adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua Ut enim ad minim </p>
                                            <div className="shop-list-btn btn-hover">
                                                <a href="#">ADD TO CART</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>*/}
                    </div> 
                    <div className="pro-pagination-style text-center mt-30">
                        <ul>
                            <li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                            <li><a className="active" href="#">1</a></li>
                            <li><a href="#">2</a></li>
                            <li><a className="next" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-3">
                <div className="sidebar-style mr-30">
                    <div className="sidebar-widget">
                        <h4 className="pro-sidebar-title">Search </h4>
                        <div className="pro-sidebar-search mb-50 mt-25">
                            <form className="pro-sidebar-search-form" action="#">
                                <input type="text" placeholder="Search here..." />
                                <button>
                                    <i className="pe-7s-search"></i>
                                </button>
                            </form>
                        </div>
                    </div>
                    <div className="sidebar-widget">
                        <h4 className="pro-sidebar-title">Refine By </h4>
                        <div className="sidebar-widget-list mt-30">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" /> <a href="#">On Sale <span>4</span> </a> 
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">New <span>4</span></a> 
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">In Stock <span>4</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mt-45">
                        <h4 className="pro-sidebar-title">Filter By Price </h4>
                        <div className="price-filter mt-10">
                            <div className="price-slider-amount">
                                <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                            </div>
                            <div id="slider-range"></div>
                        </div>
                    </div>
                    <div className="sidebar-widget mt-50">
                        <h4 className="pro-sidebar-title">Colour </h4>
                        <div className="sidebar-widget-list mt-20">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">Green <span>4</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">Cream <span>4</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">Blue <span>4</span> </a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">Black <span>4</span> </a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mt-40">
                        <h4 className="pro-sidebar-title">Size </h4>
                        <div className="sidebar-widget-list mt-20">
                            <ul>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">XL</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">L</a>
                                        <span className="checkmark"></span>
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">SM</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                                <li>
                                    <div className="sidebar-widget-list-left">
                                        <input type="checkbox" value="" /> <a href="#">XXL</a>
                                        <span className="checkmark"></span> 
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="sidebar-widget mt-50">
                        <h4 className="pro-sidebar-title">Tag </h4>
                        <div className="sidebar-widget-tag mt-25">
                            <ul>
                                <li><a href="#">Clothing</a></li>
                                <li><a href="#">Accessories</a></li>
                                <li><a href="#">For Men</a></li>
                                <li><a href="#">Women</a></li>
                                <li><a href="#">Fashion</a></li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

       </Layout>
    )
}

export default Mithai
