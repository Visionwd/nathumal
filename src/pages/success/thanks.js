
import React, { Component } from 'react'
import store from "store";
import Layout from "../../components/Layout"
import Banner from "../../components/Reusable/Banner"
import { navigate } from "gatsby";
class  Thanks extends Component {
    
    componentDidMount(){
        store.remove("persist")
    }


   render(){
    return (
        <Layout>
             <Banner  title={"Thanks"}/>
            <div>
                <h1 className="text-center display-4">Thank you for Shopping with us</h1>
                <h2 className="text-center ">your order id : {store.get("order")?store.get("order")[0].orderid:null}</h2>
            </div>
             {/* <a href="/"> <button className="btn btn-success">Back to Home</button> </a> */}
        </Layout>
     )
   }
}

export default Thanks
