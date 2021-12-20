import React,{useState} from 'react'
import Layout from '../../components/Layout'
import Banner from '../../components/Reusable/Banner2'
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
          <Banner title={"Contact Us"} />
          <div className="container">
            <div className="custom-row-2">
              <div className="col-lg-4 col-md-5">
                <div className="contact-info-wrap">
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-phone"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p style={{ lineHeight: "22px" }}>
                        <a href="tel:+91 7303100009">+91 7303100009</a> <br />
                        <a href="tel:+91 7303100009"> +91 8054949900</a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i class="fab fa-whatsapp"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p style={{ lineHeight: "22px" }}>
                        <a href="https://api.whatsapp.com/send?phone=+91 7303100009&amp;text=Hi">
                          +91 7303100009
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-globe"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p style={{ lineHeight: "22px" }}>
                        <a href="mailto:consumerservices@nathuandghudoo.com">
                          consumerservices@nathuandghudoo.com
                        </a>
                      </p>
                    </div>
                  </div>
                  <div className="single-contact-info">
                    <div className="contact-icon">
                      <i className="fa fa-map-marker"></i>
                    </div>
                    <div className="contact-info-dec">
                      <p style={{ lineHeight: "22px" }}>
                        Main Road, Phase 2,Urban Estate, Dugri, Ludhiana, Punjab
                        -141001
                      </p>
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
                  <form
                    className="contact-form-style"
                    id="contact-form"
                    onSubmit={handleFormSubmit}
                  >
                    <div className="row">
                      <div className="col-lg-4" style={{ width: "100%" }}>
                        <input
                          onChange={handleFormChange}
                          value={formdata.name}
                          name="name"
                          placeholder="Name*"
                          type="text"
                        />
                      </div>
                      <div className="col-lg-4" style={{ width: "100%" }}>
                        <input
                          onChange={handleFormChange}
                          value={formdata.email}
                          name="email"
                          placeholder="Email*"
                          type="email"
                        />
                      </div>
                      <div className="col-lg-4" style={{ width: "100%" }}>
                        <input
                          onChange={handleFormChange}
                          value={formdata.phone}
                          name="phone"
                          placeholder="phone*"
                          type="text"
                        />
                      </div>

                      <div className="col-lg-12">
                        <textarea
                          onChange={handleFormChange}
                          value={formdata.message}
                          name="message"
                          placeholder="Your Massege*"
                          rows="3"
                        ></textarea>
                        <button className="submit" type="submit">
                          SEND
                        </button>
                      </div>
                    </div>
                  </form>
                  <p className="form-messege"></p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div>
          <iframe
            title="nathumalghudoomal on google map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d27396.32464062653!2d75.82627154211114!3d30.871535172697914!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x391a8355bb241fb5%3A0x1c59ac01de2ede7b!2sNathu%20Mal%20%26%20Ghudoo%20Mal!5e0!3m2!1sen!2sin!4v1607065008797!5m2!1sen!2sin"
            width="100%"
            height="450"
            frameborder="0"
            allowfullscreen=""
            tabindex="0"
          ></iframe>
        </div>
      </Layout>
    )
}

export default Contact
