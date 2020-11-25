import React, { Component } from 'react'
import ProductOfCollection from "../Reusable/ProductOfCollection"
import axios from "axios"
export class All extends Component {
    state={
        items:[],
    }

    componentDidMount(){
        axios.post("https://heydemo.ml/nathumalapi/appapi/items",
    JSON.stringify({
         "service_request": {
             "params": {
                "cat_id":this.props.catid?this.props.catid:"",
                "page":"1"
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
    console.log(res);
    this.setState({
        ...this.state,
        items:res.data.items
    })
 })
    }
   

    
    render() {
        return (
            <div className="row">
                {
                    this.state.items?this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{
                        return <ProductOfCollection id={item_id} AddTocart={this.props.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                    }):null
                }
            </div>
        )
    }
}

export default All
