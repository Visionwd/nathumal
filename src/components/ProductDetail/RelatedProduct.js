import React, { Component } from 'react'
import { Carousel } from 'react-responsive-carousel';
import axios from "axios"
import store from "store"
// import Product1 from "../../../img/product/prod1.jpg"
// import Product2 from "../../../img/product/prod2.jpg"
// import Product3 from "../../../img/product/prod3.jpg"
// import Product4 from "../../../img/product/prod4.jpg"
// import Product5 from "../../../img/product/prod5.jpg"

import category1 from "../../img/product/cat11.jpg"
import category2 from "../../img/product/cat22.jpg"
import category3 from "../../img/product/cat33.jpg"
import ProductOfCollection from '../Reusable/ProductOfCollection';


class RelatedProduct extends Component {
    state={
        items:[],
    }

    componentDidMount(){
        const {id,catid} = store.get("product")
        console.log("===>",id,catid)
        axios.post("https://www.heydemo.ml/nathumalapi/appapi/relateditems",
        JSON.stringify({
             "service_request": {
                 "params": {
                    "cat_id":catid?String(catid):"1",
                    "item_id" : id?String(id):"1"
                 },
                 "request_info": {
                     "source_type": "android"
                 }
             },
             "version": "1.0"
         }),{
     headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(res=>{
        this.setState({
            ...this.state,
            items:res.data.items
        })
     })
        }

    render(){
        return (

            <div className="related-product-area pb-95">
            <div className="container">
                <div className="section-title text-center mb-50">
                    <h2>Related products</h2>
                </div>

                <div className="tab-content jump">
                    <div id="shop-1" className="tab-pane active">

                        <div className="row">
                                {
                                    this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{
                                        return <ProductOfCollection style={"col-xl-3 col-md-3 col-lg-3 col-sm-3 col-6"}
                                        id={item_id} 
                                        AddTocart={this.props.AddTocart} 
                                        key={item_id} 
                                        name={item_name} 
                                        img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} 
                                        price={item_price} 
                                        saleprice={item_saleprice} 
                                        refresh="refresh"
                                        />
                                    })
                                }
                        </div>
                    </div>
                    </div>

            </div>
        </div>
        )
    }
}

export default RelatedProduct
