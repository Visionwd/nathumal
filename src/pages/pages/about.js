import React from 'react'
import Layout from '../../components/Layout'

import Team1 from "../../img/team/team-1.jpg"
import Team2 from "../../img/team/team-2.jpg"
import Team3 from "../../img/team/team-3.jpg"
import Team4 from "../../img/team/team-4.jpg"

import banner1 from "../../img/banner/banner-1.jpg"
import banner2 from "../../img/banner/banner-2.jpg"
import banner3 from "../../img/banner/banner-3.jpg"

function About() {
    return (
       <Layout>


<div className="welcome-area pt-100 pb-95">
    <div className="container">
        <div className="welcome-content text-center">
            <h5>Who Are We</h5>
            <h1>Welcome To Nathu Mal & Ghudoo Mal Sweets</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure </p>
        </div>
    </div>
</div>

<div className="banner-area pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4">
                <div className="single-banner mb-30">
                    <a href="product-details.html"><img src={banner1} alt="banners" /></a>
                    <div className="banner-content">
                        <h3>Dry fruit sweets</h3>
                        <h4>Starting at <span>$99.00</span></h4>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="single-banner mb-30">
                    <a href="product-details.html"><img src={banner1} alt="banners" /></a>
                    <div className="banner-content">
                        <h3>Mithai</h3>
                        <h4>Starting at <span>$79.00</span></h4>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="single-banner mb-30">
                    <a href="product-details.html"><img src={banner1} alt="banners" /></a>
                    <div className="banner-content">
                        <h3>Savouries</h3>
                        <h4>Starting at <span>$79.00</span></h4>
                        <a href="#"><i className="fa fa-long-arrow-right"></i></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

<div className="about-mission-area pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-4 col-md-4">
                <div className="single-mission mb-30">
                    <h3>Our vission</h3>
                    <p>Nathu Mal & Ghudoo Mal Sweets provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="single-mission mb-30">
                    <h3>Our mission </h3>
                    <p>Nathu Mal & Ghudoo Mal Sweets provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                </div>
            </div>
            <div className="col-lg-4 col-md-4">
                <div className="single-mission mb-30">
                    <h3>Our goal</h3>
                    <p>Nathu Mal & Ghudoo Mal Sweets provide how all this mistaken idea of denounc pleasure and sing pain was born an will give you a ete account of the system, and expound the actual teangs the eat explorer of the truth.</p>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="funfact-area bg-gray-3 pt-100 pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-count text-center mb-30">
                    <div className="count-icon">
                        <i className="pe-7s-portfolio"></i>
                    </div>
                    <h2 className="count">360</h2>
                    <span>project done</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-count text-center mb-30">
                    <div className="count-icon">
                        <i className="pe-7s-cup"></i>
                    </div>
                    <h2 className="count">690</h2>
                    <span>cups of coffee</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-count text-center mb-30">
                    <div className="count-icon">
                        <i className="pe-7s-light"></i>
                    </div>
                    <h2 className="count">420</h2>
                    <span>branding</span>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="single-count text-center mb-30 mrgn-none">
                    <div className="count-icon">
                        <i className="pe-7s-smile"></i>
                    </div>
                    <h2 className="count">100</h2>
                    <span>happy clients</span>
                </div>
            </div>
        </div>
    </div>
</div>
<div className="team-area pt-95 pb-70">
    <div className="container">
        <div className="section-title-2 text-center mb-60">
            <h2>Team Members</h2>
            <p>Lorem ipsum dolor sit amet conse ctetu.</p>
        </div>
        <div className="row">
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-wrapper mb-30">
                    <div className="team-img">
                        <a href="/">
                            <img src={Team1} alt="" />
                        </a>
                        <div className="team-action">
                            <a className="facebook" href="/">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="twitter" title="Wishlist" href="/">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="instagram" href="/">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="team-content text-center">
                        <h4>Mr.Mike Banding</h4>
                        <span>Manager </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-wrapper mb-30">
                    <div className="team-img">
                        <a href="/">
                            <img src={Team2} alt="" />
                        </a>
                        <div className="team-action">
                            <a className="facebook" href="/">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="twitter" title="Wishlist" href="/">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="instagram" href="/">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="team-content text-center">
                        <h4>Mr.Peter Pan</h4>
                        <span>Developer </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-wrapper mb-30">
                    <div className="team-img">
                        <a href="/">
                            <img src={Team3} alt="" />
                        </a>
                        <div className="team-action">
                            <a className="facebook" href="/">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="twitter" title="Wishlist" href="/">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="instagram" href="/">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="team-content text-center">
                        <h4>Ms.Sophia</h4>
                        <span>Designer </span>
                    </div>
                </div>
            </div>
            <div className="col-lg-3 col-md-6 col-sm-6">
                <div className="team-wrapper mb-30">
                    <div className="team-img">
                        <a href="/">
                            <img src={Team4} alt="" />
                        </a>
                        <div className="team-action">
                            <a className="facebook" href="/">
                                <i className="fa fa-facebook"></i>
                            </a>
                            <a className="twitter" title="Wishlist" href="/">
                                <i className="fa fa-twitter"></i>
                            </a>
                            <a className="instagram" href="/">
                                <i className="fa fa-instagram"></i>
                            </a>
                        </div>
                    </div>
                    <div className="team-content text-center">
                        <h4>Mr.John Lee</h4>
                        <span>Chairmen </span>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
       </Layout>
    )
}

export default About
