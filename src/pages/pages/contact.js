import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Banner from '../../components/Reusable/Banner'
import Bg from "../../img/contact/page-header.jpg"

function Contact() {

    const [formdata, setformdata] = useState({
        name:"",
        email:"",
        phone:"",
        subject:"",
        message:""
    })

    const handleFormChange=(e)=>{
        setformdata({
            ...formdata,
            [e.target.name]:e.target.value
        })
    }
    const handleFormSubmit =()=>{
        console.log(formdata);
    }
    return (
        <Layout>
             <div className="contact-area pt-10 pb-100">
            <Banner title={"Contact Us"}/>
        <div className="container">
        <div className="custom-row-2">
            <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                    <div className="single-contact-info">
                        <div className="contact-icon">
                            <i className="fa fa-phone"></i>
                        </div>
                        <div className="contact-info-dec">
                            <p style={{lineHeight:"22px"}}>+91 7303100009 <br/>
                          +91 8054949900</p>
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="contact-icon">
                            <i className="fa fa-globe"></i>
                        </div>
                        <div className="contact-info-dec">
                            <p style={{lineHeight:"22px"}}><a href="#">contact@nathuandghudoo.com</a></p>
                           
                        </div>
                    </div>
                    <div className="single-contact-info">
                        <div className="contact-icon">
                            <i className="fa fa-map-marker"></i>
                        </div>
                        <div className="contact-info-dec">
                            <p style={{lineHeight:"22px"}}>Main Road, Phase 2,Urban Estate,
                            Dugri, Ludhiana, Punjab -141001</p>
                        </div>
                    </div>

                    {/* <div className="contact-social text-center">
                        <h3>Follow Us</h3>
                        <ul>
                            <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                            <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                            <li><a href="#"><i className="fa fa-tumblr"></i></a></li>
                            <li><a href="#"><i className="fa fa-vimeo"></i></a></li>
                            <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                        </ul>
                    </div> */}

                </div>
            </div>

            <div className="col-lg-8 col-md-7">
                <div className="contact-form">
                    <div className="contact-title mb-30">
                        <h2>Get In Touch</h2>
                    </div>
                    <form className="contact-form-style" id="contact-form" onSubmit={handleFormSubmit}>
                        <div className="row">
                            <div className="col-lg-4" style={{width:"100%"}}>
                                <input 
                                onChange={handleFormChange}
                                value={formdata.name}
                                name="name" placeholder="Name*" type="text" />
                            </div>
                            <div className="col-lg-4" style={{width:"100%"}}>
                                <input 
                                onChange={handleFormChange}
                                value={formdata.email}
                                name="email" placeholder="Email*" type="email" />
                            </div>
                            <div className="col-lg-4" style={{width:"100%"}}>
                                <input 
                                onChange={handleFormChange}
                                value={formdata.phone}
                                name="phone" placeholder="phone*" type="text" />
                            </div>
                           
                            <div className="col-lg-12">
                                <textarea 
                                onChange={handleFormChange}
                                value={formdata.message}
                                name="message" placeholder="Your Massege*" rows="3"></textarea>
                                <button  className="submit" type="submit">SEND</button>
                            </div>
                        </div>
                    </form>
                    <p className="form-messege"></p>
                </div>
            </div>
        </div>
    
    </div>
</div>
    
        </Layout>
       )
}

export default Contact
