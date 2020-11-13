import React, { Component } from 'react'
import { Link,graphql,useStaticQuery } from "gatsby";
import HeaderLinks from '../components/HeaderLinks'
import axios from "axios"
import "../css/fonts.css"
import "../css/style.css"
import "../css/icons.min.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader

import MyCarousel from "../components/Carousel"

import Product1 from "../img/product/prod1.jpg"
import Product2 from "../img/product/prod2.jpg"
import Product3 from "../img/product/prod3.jpg"
import Product4 from "../img/product/prod4.jpg"
import Product5 from "../img/product/prod5.jpg"

import ProductPreview from "../img/product/quickview-l1.jpg"
import quickPreview from "../img/product/quickview-s1.jpg"
import Product from "../components/Reusable/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restapitest from "../components/Restapitest";


import store from "store"

let currentCartItems = [];
let total = 0;
if (store.get("persist")) {
    currentCartItems=store.get("persist")
    store.get("persist").map(item=>total+=item.saleprice)
}else{
    currentCartItems = [];
    total=0;
}

export class Home extends Component {

    state={
        items:[],
        addToCartItems:currentCartItems,
        totalState:total
    }

    componentDidMount(){
        
    axios.post("https://heydemo.ml/nathumalapi/appapi/items",
    JSON.stringify({
         "service_request": {
             "params": {
                "cat_id":""
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

    AddTocart = (item)=>{
        // let currentData = store.get("persist");
        console.log("item to cart",item);
        let currentData = store.get("persist");
        console.log("currently addtoCart state",currentData);
        currentData.push(item)
        console.log("currently item pushed to current data ",currentData);
        // let sum = 0 ;
        // currentData.map(item=>sum+=item.saleprice)
        this.setState({
            ...this.setState,
            addToCartItems:currentData,
            totalState:this.state.totalState+item.saleprice
        })
        store.set("persist",currentData)
        console.log("store after adding item  => ",store.get("persist"));
       
       }


   



    render() {
        return (
            <div>
            <HeaderLinks  /> 
            <Restapitest />
           <Header className={"transparent-bar"} navColor={"text-white"} />
      <MyCarousel />
   
   <div className="welcome-area pb-90">
       <div className="container">
           <div className="welcome-content text-center">
               <h5>Who Are We</h5>
               <h1>Welcome To Nathu Mal & Ghudoo Mal</h1>
               <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure </p>
           </div>
       </div>
   </div>
   
   
   <div className="product-area pb-60 hm9-section-padding">
       <div className="container-fluid">
           <div className="product-tab-list nav pb-55 text-center">
               <a  className="active" href="#product-1" data-toggle="tab" ><h4>Mithai </h4> </a>
               <a href="#product-2" data-toggle="tab"><h4>Savouries </h4></a>
           </div>
           <div className="tab-content jump">
               <div className="tab-pane active" id="product-1">
                   <div className="custom-row-4">

                   {
                        this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{
                            return <Product id={item_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                        })
                    }
                       {/* <Product productName="Bengali Sweet" productImg={Product1} price={400} />
                       <Product productName="Gajar ka Halwa" productImg={Product2} price={300} />
                       <Product productName="cake" productImg={Product3} price={500} />
                       <Product productName="Gulab Jamun" productImg={Product4} price={200} />
                       <Product productName="Son Papdi" productImg={Product5} price={350} />
                       <Product productName="cake" productImg={Product3} price={500} />
                       <Product productName="Gulab Jamun" productImg={Product4} price={200} />
                       <Product productName="Son Papdi" productImg={Product5} price={350} />
                       <Product productName="Bengali Sweet" productImg={Product1} price={400} />
                       <Product productName={data.allContentfulSweet.edges[0].node.name} productImg={data.allContentfulSweet.edges[0].node.productImage.file.url} price={data.allContentfulSweet.edges[0].node.price} /> */}
                   </div>
               </div>
   
               <div className="tab-pane" id="product-2">
                   <div className="custom-row-4">
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                       <Product productName="Savouries" productImg={Product5} price={350} />
                     </div>
               </div>
              
           </div>
       </div>
   </div>
   
       <Footer />
       </div>
    
        )
    }
}

export default Home
