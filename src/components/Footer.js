import React from 'react'
import logo from "../img/logo/logo.png"
import { Link } from "gatsby";
function Footer() {
    return (
        <div>
            
<footer className="footer-area bg-gray pt-100 pb-70">
    <div className="container">
        <div className="row">
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="copyright mb-30">
                    <div className="footer-logo">
                        <a href="index.html">
                            <img alt="logo" src={logo} style={{width: "100%"}} />
                        </a>
                    </div>
                    <p>© 2019 <Link to="/">Nathu Mal & Ghudoo Mal</Link>.<br /> All Rights Reserved</p>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-widget mb-30 ml-30">
                    <div className="footer-title">
                        <h3>ABOUT US</h3>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><Link to="/pages/about">About us</Link></li>
                            <li><Link to="/pages/store">Store location</Link></li>
                            <li><Link to="/pages/contact">Contact</Link></li>
                            <li><Link to="/pages/ordertrack">Orders tracking</Link></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-4 col-sm-4">
                <div className="footer-widget mb-30 ml-50">
                    <div className="footer-title">
                        <h3>USEFUL LINKS</h3>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><a href="/">Returns</a></li>
                            <li><a href="/">Support Policy</a></li>
                            <li><a href="/">Size guide</a></li>
                            <li><a href="/">FAQs</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-2 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 ml-75">
                    <div className="footer-title">
                        <h3>FOLLOW US</h3>
                    </div>
                    <div className="footer-list">
                        <ul>
                            <li><a href="/">Facebook</a></li>
                            <li><a href="/">Twitter</a></li>
                            <li><a href="/">Instagram</a></li>
                            <li><a href="/">Youtube</a></li>
                        </ul>
                    </div>
                </div>
            </div>
            <div className="col-lg-4 col-md-6 col-sm-6">
                <div className="footer-widget mb-30 ml-70">
                    <div className="footer-title">
                        <h3>SUBSCRIBE</h3>
                    </div>
                    <div className="subscribe-style">
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <div id="mc_embed_signup" className="subscribe-form">
                            <form id="mc-embedded-subscribe-form" className="validate" noValidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="">
                                <div id="mc_embed_signup_scroll" className="mc-form">
                                    <input className="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL"  />
                                    <div className="mc-news" aria-hidden="true">
                                        <input type="text"  tabIndex="-1" name="b_6bbb9b6f5827bd842d9640c82_05d85f18ef" />
                                    </div>
                                    <div className="clear">
                                        <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</footer>



        </div>
    )
}

export default Footer
