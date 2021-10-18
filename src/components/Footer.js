import React from 'react'
import logo from "../img/logo/logo.png"
import paymentlogo from "../img/payments.png"
import { Link } from "gatsby";
import footerBg from "../img/bg/footer_bg_02.jpg"
import FooterSocialIcon from './Reusable/FooterSocialIcon';
function Footer() {
    return (
      <div>
        <footer
          className="footer-area bg-gray pt-100 pb-40"
          style={{
            backgroundImage: `url(${footerBg})`,
            backgroundPosition: "center bottom",
            backgroundRepeat: "repeat-x",
            backgroundSize: "cover",
          }}
        >
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <div className="footer-widget mb-30 ml-30">
                  <div className="footer-title">
                    <strong>
                      <h2>USEFUL LINKS</h2>
                    </strong>
                  </div>
                  <div className="row">
                    <div className="col-md-6">
                      <div className="footer-list">
                        <ul>
                          <li>
                            <Link to="/pages/about">About us</Link>
                          </li>
                          <li>
                            <Link to="/collections/shop">Order Online</Link>
                          </li>
                          <li>
                            <Link to="/pages/contact">Contact</Link>
                          </li>
                          <li>
                            <Link to="/pages/contact">Bulk Orders</Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="footer-list">
                        <ul>
                          <li>
                            <Link to="/pages/delivery-policy">
                              Delivery Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/pages/return-policy">
                              Return and Refund Policy
                            </Link>
                          </li>
                          <li>
                            <Link to="/pages/privacy-policy">
                              Privacy Policy
                            </Link>
                          </li>
                        </ul>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-30 ml-30">
                    <img
                        alt="logo"
                        src={paymentlogo}
                        style={{ width: "400px" }}
                        className="logoimg "
                    />
                </div>
              </div>

              {/* <div className="col-lg-2 col-md-6 col-sm-6">
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
            </div> */}

              <div className="col-lg-6 col-md-6 col-sm-12 ">
                <div className="footer-widget mb-30 ml-70">
                  <div className="footer-title">
                    <strong>
                      <h2>CONTACT US</h2>
                    </strong>
                  </div>
                  <p>
                    Main Road, Phase 2, Urban Estate, Dugri,
                    <br /> Ludhiana, Punjab -141001
                  </p>
                  <p>Mobile: +91 7303100009 , 8054949900</p>
                  <p>Email: consumerservices@nathuandghudoo.com</p>
                  <p>
                    <FooterSocialIcon
                      link="https://www.facebook.com/nmgmludhiana/"
                      icon="fab fa-facebook"
                    />
                    <FooterSocialIcon
                      link="https://www.instagram.com/nathumalandghudoomal/"
                      icon="fab fa-instagram"
                    />
                    <FooterSocialIcon
                      link="https://twitter.com/Nathughudooldh?s=08"
                      icon="fab fa-twitter"
                    />
                    <FooterSocialIcon
                      link="https://youtube.com/user/abz2coolster"
                      icon="fab fa-youtube"
                    />
                  </p>
                  {/* <div className="subscribe-style">
                        <p>Get E-mail updates about our latest shop and special offers.</p>
                        <div id="mc_embed_signup" className="subscribe-form">
                            <form id="mc-embedded-subscribe-form" className="validate" noValidate="" target="_blank" name="mc-embedded-subscribe-form" method="post" action="">
                                <div id="mc_embed_signup_scroll" className="mc-form">
                                    <input className="email" type="email" required="" placeholder="Enter your email here.." name="EMAIL"  />
                                    <div className="mc-news" aria-hidden="true">
                                        <input type="text"  tabIndex="-1" name="b_" />
                                    </div>
                                    <div className="clear">
                                        <input id="mc-embedded-subscribe" className="button" type="submit" name="subscribe"/>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div> */}
                </div>
              </div>
            </div>

            <div className="row">
              <div className="col-lg-12 col-md-12 col-sm-12">
                <div className="copyright ">
                  <div className="footer-logo text-center">
                    <a href="/" className=" ">
                      <img
                        alt="logo"
                        src={logo}
                        style={{ width: "150px" }}
                        className="logoimg "
                      />
                    </a>
                  </div>
                  <p className="text-center">
                    © Copyright 2021 Nathu Mal & Ghudoo Mal. All Rights Reserved. Made with ❤️ by <Link to="https://digimap.in/">Digimap Technologies</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    )
}

export default Footer
