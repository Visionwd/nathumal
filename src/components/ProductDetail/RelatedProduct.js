import React from 'react'

import Product1 from "../../../img/product/prod1.jpg"
import Product2 from "../../../img/product/prod2.jpg"
import Product3 from "../../../img/product/prod3.jpg"
import Product4 from "../../../img/product/prod4.jpg"
import Product5 from "../../../img/product/prod5.jpg"


function RelatedProduct() {
    return (
        <div className="related-product-area pb-95">
        <div className="container">
            <div className="section-title text-center mb-50">
                <h2>Related products</h2>
            </div>
            <div className="related-product-active owl-carousel">
                <div className="product-wrap">
                    <div className="product-img">
                        <a href="#">
                        <Product id={1} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                            {/* <img className="default-img" src={Product1} alt="" />
                            <img className="hover-img" src={Product1} alt="" /> */}
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
    
    )
}

export default RelatedProduct
