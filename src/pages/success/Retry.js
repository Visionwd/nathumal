
import React, { Component } from 'react'
import store from "store";
import Layout from "../../components/Layout"
import Banner from "../../components/Reusable/Banner"
import { Link, navigate } from "gatsby";

class  Retry extends Component {
    
    componentDidMount(){
        // store.remove("persist")
    }


   render(){
    return (


        <Layout>
             <Banner  title={"Sorry !"}/>
            <div className="my-5 py-5">
                <h1 className="text-center" style={{fontWeight:"500"}}>Couldn't process the payment.</h1>
                <h4 className="text-center my-4" style={{fontWeight:"400"}}>Please Try Again </h4>

                <div className="container my-5">
                <div className="row">
                            <div className="col-lg-12">
                                <div className="cart-shiping-update-wrapper mx-auto" style={{justifyContent:"center"}}>
                                    <div className="cart-clear">
                                        <Link to="/cart/checkout">Checkout</Link>
                                    </div>
                                    
                                    
                                    
                                </div>
                            </div>
                        </div>
                </div>
            </div>
             {/* <a href="/"> <button className="btn btn-success">Back to Home</button> </a> */}
        </Layout>
     )
   }
}

export default Retry
