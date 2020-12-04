import React from 'react'
import Layout from '../../components/Layout'
import Banner from "../../components/Reusable/Banner"
import founderImg from "../../img/about/lala-ghudoo-mal-1.jpg"
import SweetImg from "../../img/about/sweet.jpg"


function About() {
    return (
       <Layout>
           <Banner title={"About Us"} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 " >
                    <div class="PageContent ">
                        <p className="" >Handcrafted with organic ingredients with the extracts of natural flavours, we at
                         Nathu Mal & Ghudoo Mal are passionate about Indian traditions and the authentic centuries old 
                         art of Indian mithai. We are the fourth generation, known for winter delicacies carried by a 
                         legacy of more than 100 years old business with a new vision and creativity, keeping the century old 
                         handcrafted technique, passion and love alive.
                        </p>

                        <div className="row  mt-70">
                            <div className="col-md-7">
                                <p>
                                    Whether it is a small knit affair or a big winter celebration,
                                    the box of Nathu Mal & Ghudoo Mal is always a welcomed treat.
                                </p>
                                <p>
                                    We pride ourselves on our commitment and enthusiasm for curating mithai boxes that are made from
                                    biodegradable material and are completely recyclable. Our mithai comes in various packages ranging 
                                    from a platter to an exclusive box customized to suit your style and theme.
                                </p>
                            </div>
                            <div className="col-md-5">
                                <img src={SweetImg} alt="founder" style={{width:"100%"}}/>
                            </div>
                        </div>
                        
                        
                        <div className="row mt-70">
                            <div className="col-md-5">
                                <img src={founderImg} alt="founder" style={{width:"100%"}}/>
                            </div>
                            <div className="col-md-7">
                                <h3>Founder</h3>
                                <p>
                                    Our founder Sh. Lala Ghudoo Mal whose legacy we are carrying on our shoulders to bestow the 
                                    best Reodi, Gachak, Bhugga and Sweets in town with rich and local ingredients. His son Sh. Lala Sudershan Aggarwal 
                                    had a stunning vision to take the brand to new heights and give it a global reach.
                                </p>
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
