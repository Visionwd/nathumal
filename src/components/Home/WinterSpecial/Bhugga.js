import React, { Component } from 'react'

import axios from "axios"
import Product from "../../../components/Reusable/Product"

export class Bhugga extends Component {

    state={
        divPush:[],
        items:[],
    }

    componentDidMount(){
        
        axios.post("https://heydemo.ml/nathumalapi/appapi/items_homepage",
        JSON.stringify({
             "service_request": {
                 "params": {
                    "cat_id":"4",
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
        let {divPush} = this.state
        this.setState({
            ...this.state,
           divPush:[]
        })
        res.data.items.map(({item_id,item_name,item_img,item_price,item_saleprice,cat_id})=>{
    
            divPush.push(
                <Product id={item_id} catid={cat_id} AddTocart={this.props.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img}  price={item_price} saleprice={item_saleprice} />
            )
            this.setState({
                ...this.state,
               divPush
            })
        })
    
        this.setState({
            ...this.state,
            items:res.data.items
        })
     })
        }

        AddTocart = (item)=>{
            this.props.AddTocart(item)
        }
        
    render() {
        return (
            <div>

                {/* <OwlCarousel
    className="owl-theme"
    loop
    responsive={{
      0:{
          items:2,
          margin:10

      },
      1000:{
          items:5,
          margin:50
      }
  }}
  center={true}
> */}
         {
            this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{
                return  <Product id={item_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img}  price={item_price} saleprice={item_saleprice} />
            })
         }
        {/* </OwlCarousel> */}

            </div>
        )
    }
}

export default Bhugga
