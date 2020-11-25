import React from 'react'
import Layout from '../../components/Layout'
import Bg from "../../img/contact/page-header.jpg"

function Contact() {
    return (
        <Layout>
             <div class="contact-area pt-10 pb-100">
            <div class="container-fluid">
                <div className="row" style={{backgroundImage:`url(${Bg})`,backgroundPosition:"center"}}>
                    <div className="col-12">
                        <div className="my-5 text-center pt-40 pb-40" >
                            <h2 className="text-white">Contact us</h2>
                        </div>
                    </div>
                </div>
            </div>
        <div class="container">
        <div class="custom-row-2">
            <div class="col-lg-4 col-md-5">
                <div class="contact-info-wrap">
                    <div class="single-contact-info">
                        <div class="contact-icon">
                            <i class="fa fa-phone"></i>
                        </div>
                        <div class="contact-info-dec">
                            <p>+91 7303100009</p>
                            <p>+91 8054949900</p>
                        </div>
                    </div>
                    <div class="single-contact-info">
                        <div class="contact-icon">
                            <i class="fa fa-globe"></i>
                        </div>
                        <div class="contact-info-dec">
                            <p><a href="#">contact@nathuandghudoo.com</a></p>
                           
                        </div>
                    </div>
                    <div class="single-contact-info">
                        <div class="contact-icon">
                            <i class="fa fa-map-marker"></i>
                        </div>
                        <div class="contact-info-dec">
                            <p>Main Road, Phase 2, Urban Estate,<br/> 
                            Dugri, Ludhiana, Punjab -141001</p>
                        </div>
                    </div>
                    {/* <div class="contact-social text-center">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#"><i class="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i class="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i class="fa fa-tumblr"></i></a></li>
                            <li><a href="#"><i class="fa fa-vimeo"></i></a></li>
                            <li><a href="#"><i class="fa fa-twitter"></i></a></li>
                        </ul>
                    </div> */}
                </div>
            </div>
            <div class="col-lg-8 col-md-7">
                <div class="contact-form">
                    <div class="contact-title mb-30">
                        <h2>Get In Touch</h2>
                    </div>
                    <form class="contact-form-style" id="contact-form" action="assets/php/mail.php" method="post">
                        <div class="row">
                            <div class="col-lg-6">
                                <input name="name" placeholder="Name*" type="text" />
                            </div>
                            <div class="col-lg-6">
                                <input name="email" placeholder="Email*" type="email" />
                            </div>
                            <div class="col-lg-12">
                                <input name="subject" placeholder="Subject*" type="text" />
                            </div>
                            <div class="col-lg-12">
                                <textarea name="message" placeholder="Your Massege*"></textarea>
                                <button class="submit" type="submit">SEND</button>
                            </div>
                        </div>
                    </form>
                    <p class="form-messege"></p>
                </div>
            </div>
        </div>
    
    </div>
</div>
    
        </Layout>
       )
}

export default Contact
