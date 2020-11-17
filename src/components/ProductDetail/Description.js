import React from 'react'

function Description() {
    return (
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

    )
}

export default Description
