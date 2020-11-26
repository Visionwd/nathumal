import React from 'react'
import Layout from "../../components/Layout"
import Banner from "../../components/Reusable/Banner"
function DeliveryPolicy() {
    return (
        <Layout>
            <Banner title={"Delivery policy"} />
            <div className="container">
                <div className="row">
                    <div className="col-md-12 " >
                    <div class="PageContent">
                        <p className="">We attempt delivery of the items at the address entered by the customer. In the event of execution 
                            failure of such delivery, the customer shall continue to be charged for the order and no redelivery or 
                            refund will be possible. We prepare fresh products, sent out for delivery, upon the receipt of an order
                             however, we do not take the responsibility of delivery which is being done by third party courier service.
                        </p>
                        
                    </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}

export default DeliveryPolicy
