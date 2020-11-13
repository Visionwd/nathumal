import React from 'react'
import Layout from '../../../components/Layout'

import Product1 from "../../../img/product/prod1.jpg"
import Product2 from "../../../img/product/prod2.jpg"
import Product3 from "../../../img/product/prod3.jpg"
import Product4 from "../../../img/product/prod4.jpg"
import Product5 from "../../../img/product/prod5.jpg"

import ProdetailLarge1 from "../../../img/product-details/b-large-1.jpg";
import ProdetailLarge2 from "../../../img/product-details/b-large-2.jpg";
import ProdetailLarge3 from "../../../img/product-details/b-large-3.jpg";


import ProdLarge1 from "../../../img/product-details/large-1.jpg";
import ProdLarge2 from "../../../img/product-details/large-2.jpg";
import ProdLarge3 from "../../../img/product-details/large-3.jpg";


import Prodsmall1 from "../../../img/product-details/small-1.jpg";


import Testimonial from "../../../img/testimonial/1.jpg";

function Productdetail() {
    return (
        <Layout>

<div className="shop-area pt-100 pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-6 col-md-6">
                <div className="product-details">
                    <div className="product-details-img">
                        <div className="tab-content jump"> 
                            <div id="shop-details-1" className="tab-pane large-img-style">
                                <img src={ProdLarge1} alt="" />
                                <span className="dec-price">-10%</span>
                                <div className="img-popup-wrap">
                                    <a className="img-popup" href={ProdetailLarge1}><i className="pe-7s-expand1"></i></a>
                                </div>
                            </div>
                            <div id="shop-details-2" className="tab-pane active large-img-style">
                                <img src={ProdLarge2} alt="" />
                                <span className="dec-price">-10%</span>
                                <div className="img-popup-wrap">
                                    <a className="img-popup" href={ProdetailLarge2}><i className="pe-7s-expand1"></i></a>
                                </div>
                            </div>
                            <div id="shop-details-3" className="tab-pane large-img-style">
                                <img src={ProdLarge3} alt="" />
                                <span className="dec-price">-10%</span>
                                <div className="img-popup-wrap">
                                    <a className="img-popup" href={ProdetailLarge3}><i className="pe-7s-expand1"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="shop-details-tab nav">
                            <a className="shop-details-overly" href="#shop-details-1" data-toggle="tab">
                                <img src={Prodsmall1} alt="" />
                            </a>
                            <a className="shop-details-overly active" href="#shop-details-2" data-toggle="tab">
                                <img src={Prodsmall1} alt="" />
                            </a>
                            <a className="shop-details-overly" href="#shop-details-3" data-toggle="tab">
                                <img src={Prodsmall1} alt="" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            <div className="col-lg-6 col-md-6">
                <div className="product-details-content ml-70">
                    <h2>Products Name Here</h2>
                    <div className="product-details-price">
                        <span>$18.00 </span>
                        <span className="old">$20.00 </span>
                    </div>
                    <div className="pro-details-rating-wrap">
                        <div className="pro-details-rating">
                            <i className="fa fa-star-o yellow"></i>
                            <i className="fa fa-star-o yellow"></i>
                            <i className="fa fa-star-o yellow"></i>
                            <i className="fa fa-star-o"></i>
                            <i className="fa fa-star-o"></i>
                        </div>
                        <span><a href="#">3 Reviews</a></span>
                    </div>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                    <div className="pro-details-list">
                        <ul>
                            <li>- 0.5 mm Dail</li>
                            <li>- Inspired vector icons</li>
                            <li>- Very modern style  </li>
                        </ul>
                    </div>
                    <div className="pro-details-size-color">
                        <div className="pro-details-color-wrap">
                            <span>Color</span>
                            <div className="pro-details-color-content">
                                <ul>
                                    <li className="blue"></li>
                                    <li className="maroon active"></li>
                                    <li className="gray"></li>
                                    <li className="green"></li>
                                    <li className="yellow"></li>
                                </ul>
                            </div>
                        </div>
                        <div className="pro-details-size">
                            <span>Size</span>
                            <div className="pro-details-size-content">
                                <ul>
                                    <li><a href="#">s</a></li>
                                    <li><a href="#">m</a></li>
                                    <li><a href="#">l</a></li>
                                    <li><a href="#">xl</a></li>
                                    <li><a href="#">xxl</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="pro-details-quality">
                        <div className="cart-plus-minus">
                            <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                        </div>
                        <div className="pro-details-cart btn-hover">
                            <a href="#">Add To Cart</a>
                        </div>
                        <div className="pro-details-wishlist">
                            <a href="#"><i className="fa fa-heart-o"></i></a>
                        </div>
                        <div className="pro-details-compare">
                            <a href="#"><i className="pe-7s-shuffle"></i></a>
                        </div>
                    </div>
                    <div className="pro-details-meta">
                        <span>Categories :</span>
                        <ul>
                            <li><a href="#">Minimal,</a></li>
                            <li><a href="#">Furniture,</a></li>
                            <li><a href="#">Fashion</a></li>
                        </ul>
                    </div>
                    <div className="pro-details-meta">
                        <span>Tag :</span>
                        <ul>
                            <li><a href="#">Fashion, </a></li>
                            <li><a href="#">Furniture,</a></li>
                            <li><a href="#">Electronic</a></li>
                        </ul>
                    </div>
                    <div className="pro-details-social">
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                            <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="description-review-area pb-90">
    <div className="container">
        <div className="description-review-wrapper">
            <div className="description-review-topbar nav">
                <a data-toggle="tab" href="#des-details1">Additional information</a>
                <a className="active" data-toggle="tab" href="#des-details2">Description</a>
                <a data-toggle="tab" href="#des-details3">Reviews (2)</a>
            </div>
            <div className="tab-content description-review-bottom">
                <div id="des-details2" className="tab-pane active">
                    <div className="product-description-wrapper">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit, sed do eiusmod tempor incididunt</p>
                        <p>ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat. Duis aute irure dolor in reprehend in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt </p>
                    </div>
                </div>
                <div id="des-details1" className="tab-pane ">
                    <div className="product-anotherinfo-wrapper">
                        <ul>
                            <li><span>Weight</span> 400 g</li>
                            <li><span>Dimensions</span>10 x 10 x 15 cm </li>
                            <li><span>Materials</span> 60% cotton, 40% polyester</li>
                            <li><span>Other Info</span> American heirloom jean shorts pug seitan letterpress</li>
                        </ul>
                    </div>
                </div>
                <div id="des-details3" className="tab-pane">
                    <div className="row">
                        <div className="col-lg-7">
                            <div className="review-wrapper">
                                <div className="single-review">
                                    <div className="review-img">
                                        <img src={Testimonial} alt="" />
                                    </div>
                                    <div className="review-content">
                                        <div className="review-top-wrap">
                                            <div className="review-left">
                                                <div className="review-name">
                                                    <h4>White Lewis</h4>
                                                </div>
                                                <div className="review-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="review-left">
                                                <a href="#">Reply</a>
                                            </div>
                                        </div>
                                        <div className="review-bottom">
                                            <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Suspendisse viverra ed viverra. Mauris ullarper euismod vehicula. Phasellus quam nisi, congue id nulla.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="single-review child-review">
                                    <div className="review-img">
                                        <img src={Testimonial} alt="" />
                                    </div>
                                    <div className="review-content">
                                        <div className="review-top-wrap">
                                            <div className="review-left">
                                                <div className="review-name">
                                                    <h4>White Lewis</h4>
                                                </div>
                                                <div className="review-rating">
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                    <i className="fa fa-star"></i>
                                                </div>
                                            </div>
                                            <div className="review-left">
                                                <a href="#">Reply</a>
                                            </div>
                                        </div>
                                        <div className="review-bottom">
                                            <p>Vestibulum ante ipsum primis aucibus orci luctustrices posuere cubilia Curae Sus pen disse viverra ed viverra. Mauris ullarper euismod vehicula. </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-5">
                            <div className="ratting-form-wrapper pl-50">
                                <h3>Add a Review</h3>
                                <div className="ratting-form">
                                    <form action="#">
                                        <div className="star-box">
                                            <span>Your rating:</span>
                                            <div className="ratting-star">
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                                <i className="fa fa-star"></i>
                                            </div>
                                        </div>
                                        <div className="row">
                                            <div className="col-md-6">
                                                <div className="rating-form-style mb-10">
                                                    <input placeholder="Name" type="text" />
                                                </div>
                                            </div>
                                            <div className="col-md-6">
                                                <div className="rating-form-style mb-10">
                                                    <input placeholder="Email" type="email" />
                                                </div>
                                            </div>
                                            <div className="col-md-12">
                                                <div className="rating-form-style form-submit">
                                                    <textarea name="Your Review" placeholder="Message"></textarea>
                                                    <input type="submit" value="Submit" />
                                                </div>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="related-product-area pb-95">
    <div className="container">
        <div className="section-title text-center mb-50">
            <h2>Related products</h2>
        </div>
        <div className="related-product-active owl-carousel">
            <div className="product-wrap">
                <div className="product-img">
                    <a href="#">
                        <img className="default-img" src={Product1} alt="" />
                        <img className="hover-img" src={Product1} alt="" />
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
            <div className="product-wrap">
                <div className="product-img">
                    <a href="single-product.html">
                        <img className="default-img" src={Product1} alt="" />
                        <img className="hover-img" src={Product1} alt="" />
                    </a>
                    <span className="purple">New</span>
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
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product-img">
                    <a href="#">
                        <img className="default-img" src={Product3} alt="" />
                        <img className="hover-img" src={Product3} alt="" />
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
            <div className="product-wrap">
                <div className="product-img">
                    <a href="#">
                        <img className="default-img" src={Product4} alt="" />
                        <img className="hover-img" src={Product4} alt="" />
                    </a>
                    <span className="purple">New</span>
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
                    </div>
                </div>
            </div>
            <div className="product-wrap">
                <div className="product-img">
                    <a href="#">
                        <img className="default-img" src={Product5} alt="" />
                        <img className="hover-img" src={Product5} alt="" />
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
    </div>
</div>

        </Layout>
    )
}

export default Productdetail



