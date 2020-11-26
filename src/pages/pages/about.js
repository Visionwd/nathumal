import React from 'react'
import Layout from '../../components/Layout'
import Banner from "../../components/Reusable/Banner"
import founderImg from "../../img/about/lala-ghudoo-mal.jpg"
import founderImg2 from "../../img/about/lala-sudershan-aggarwal.jpg"


function About() {
    return (
       <Layout>
           <Banner title={"Nathu Mal & Ghudoo Mal"} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 " >
                    <div class="PageContent ">
                        <p className="">Handcrafted with organic ingredients with the extracts of natural flavours, we at
                         Nathu Mal & Ghudoo Mal are passionate about Indian traditions and the authentic centuries old 
                         art of Indian mithai. We are the fourth generation, known for winter delicacies carried by a 
                         legacy of more than 100 years old business with anew vision and creativity, keeping the century old 
                         handcrafted technique, passion and love alive.
                        </p>
                        <p>
                        Whether it is a small knit affair or a big winter celebration,
                         the box of Nathu Mal & Ghudoo Mal is always a welcomed treat.
                        </p>
                        <p>
                        We pride ourselves on our commitment and enthusiasm for curating mithai boxes that are made from
                         biodegradable material and are completely recyclable. Our mithai comes in various packages ranging 
                         from a platter to an exclusive box customized to suit your style and theme.
                        </p>
                        <p><strong>Founder</strong></p>
                        <img src={founderImg} alt="founder" style={{width:"20%"}}/>
                        <p>
                        Our founder Sh. Lala Ghudoo Mal whose legacy we are carrying on our shoulders to bestow the 
                        best Reodi, Gachak, Bhugga and Sweets in town with rich and local ingredients. His son Sh. Lala Sudershan Aggarwal 
                        had a stunning vision to take the brand to new heights and give it a global reach.
                        </p>
                    </div>
                    </div>
                </div>
            </div>

       </Layout>
    )
}

export default About
