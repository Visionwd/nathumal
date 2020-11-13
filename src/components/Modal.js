import React from 'react'

function Modal() {
    return (
       
<div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog">
    <div className="modal-dialog" role="document">
        <div className="modal-content">
            <div className="modal-header">
                <button type="button" className="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">x</span></button>
            </div>
            <div className="modal-body">
                <div className="row">
                    <div className="col-md-5 col-sm-12 col-xs-12">
                        <div className="tab-content quickview-big-img">
                            <div id="pro-1" className="tab-pane fade show active">
                                <img src={ProductPreview} alt="" />
                            </div>
                            <div id="pro-2" className="tab-pane fade">
                                <img src={ProductPreview} alt="" />
                            </div>
                            <div id="pro-3" className="tab-pane fade">
                                <img src={ProductPreview} alt="" />
                            </div>
                            <div id="pro-4" className="tab-pane fade">
                                <img src={ProductPreview} alt="" />
                            </div>
                        </div>
                       
                        <div className="quickview-wrap mt-15">
                            <div className="quickview-slide-active owl-carousel nav nav-style-1" role="tablist">
                                <a className="active" data-toggle="tab" href="#pro-1"><img src={quickPreview} alt="" /></a>
                                <a data-toggle="tab" href="#pro-2"><img src={quickPreview} alt="" /></a>
                                <a data-toggle="tab" href="#pro-3"><img src={quickPreview} alt="" /></a>
                                <a data-toggle="tab" href="#pro-4"><img src={quickPreview} alt="" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-7 col-sm-12 col-xs-12">
                        <div className="product-details-content quickview-content">
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
                                <span>3 Reviews</span>
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
                                            <li className="white"></li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pro-details-size">
                                    <span>Size</span>
                                    <div className="pro-details-size-content">
                                        <ul>
                                            <li><a href="/">s</a></li>
                                            <li><a href="/">m</a></li>
                                            <li><a href="/">l</a></li>
                                            <li><a href="/">xl</a></li>
                                            <li><a href="/">xxl</a></li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-details-quality">
                                <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" value="2" />
                                </div>
                                <div className="pro-details-cart btn-hover">
                                    <a href="/">Add To Cart</a>
                                </div>
                                <div className="pro-details-wishlist">
                                    <a href="/"><i className="fa fa-heart-o"></i></a>
                                </div>
                                <div className="pro-details-compare">
                                    <a href="/"><i className="pe-7s-shuffle"></i></a>
                                </div>
                            </div>
                            <div className="pro-details-meta">
                                <span>Categories :</span>
                                <ul>
                                    <li><a href="/">Minimal,</a></li>
                                    <li><a href="/">Furniture,</a></li>
                                    <li><a href="/">Electronic</a></li>
                                </ul>
                            </div>
                            <div className="pro-details-meta">
                                <span>Tag :</span>
                                <ul>
                                    <li><a href="/">Fashion, </a></li>
                                    <li><a href="/">Furniture,</a></li>
                                    <li><a href="/">Electronic</a></li>
                                </ul>
                            </div>
                            <div className="pro-details-social">
                                <ul>
                                    <li><a href="/"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="/"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="/"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="/"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="/"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
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

export default Modal
