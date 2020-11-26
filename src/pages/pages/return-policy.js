import React from 'react'
import Layout from "../../components/Layout"
import Banner from "../../components/Reusable/Banner"
function ReturnPolicy() {
    return (
        <Layout>
            <Banner title={"Return/Refund Policy"} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 " >
                    <div class="PageContent ">
                        <p className="">If you feel that the taste and other attributes of the products are not as per your expectations, we request you to 
                            write to us at <a href="mailto:contact@nathuandghudoo.com">contact@nathuandghudoo.com </a>
                            This helps us in improving our quality to give you a better experience next time. However, we retains the right to accept 
                            or deny the complaint on the basis of what was promised on the website and general characteristics of the product delivered.
                        </p>
                        <p>
                             Refunds are not acceptable as items sold on our website are perishable products.
                        </p>
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default ReturnPolicy
