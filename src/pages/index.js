import React, { Component } from 'react'
import { Link,graphql,useStaticQuery } from "gatsby";
import HeaderLinks from '../components/HeaderLinks'
import axios from "axios"
import "../css/fonts.css"
import "../css/style.css"
import "bootstrap/dist/css/bootstrap.min.css"
import "../css/icons.min.css"

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import MyCarousel from "../components/Carousel"
import ProductPreview from "../img/product/quickview-l1.jpg"
import quickPreview from "../img/product/quickview-s1.jpg"
import Product from "../components/Reusable/Product";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Restapitest from "../components/Restapitest";
import Testimonial from "../components/Home/Testimonial"

import store from "store"
import Bhugga from '../components/Home/WinterSpecial/Bhugga';
import Gachak from '../components/Home/WinterSpecial/Gachak';
import Reodi from '../components/Home/WinterSpecial/Reodi';

import Sweets from '../components/Home/Sweets';
import Bhaji from '../components/Home/WeddingBhaji';
import NewTestimonial from '../components/Home/NewTestimonial';



let currentCartItems = [];
let total = 0;
let value = true
if (store.get("persist")) {
    currentCartItems=store.get("persist")
    store.get("persist").map(item=>total+=item.saleprice)
}else{
    currentCartItems = [];
    total=0;
}

export class Home extends Component {

    state={
        divPush:[],
        items:[],
        addToCartItems:currentCartItems,
        totalState:total,
        quantityState:true
    }

    componentDidMount(){
        
    axios.post("https://heydemo.ml/nathumalapi/appapi/items_homepage",
    JSON.stringify({
         "service_request": {
             "params": {
                "cat_id":"5",
               
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
    res.data.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{

        divPush.push(
            <Product id={item_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img}  price={item_price} saleprice={item_saleprice} />
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
        // let currentData = store.get("persist");
        toast.success(item.name+" added to the cart!",{
            autoClose:2000
        })
        console.log("item to cart",item);
        let currentData = store.get("persist")?store.get("persist"):[];
        console.log("currently addtoCart state",currentData);

       
       
        function containsObject(item, currentData) {
            var i;
            for (i = 0; i < currentData.length; i++) {
                if (currentData[i].id === item.id) {
                    return true;
                }
            }
        
            return false;
        }
       
          if (!containsObject(item,currentData)) {
            currentData.push({...item,quantity:1})
          }else{
            currentData.map(cartitem => {
                if (cartitem.id===item.id) {
                    console.log("identical");
                    cartitem.quantity=cartitem.quantity+1
                }
            })
          }
       
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


    //    handleClick=(id)=>{
    //     axios.post("https://heydemo.ml/nathumalapi/appapi/items",
    //     JSON.stringify({
    //          "service_request": {
    //              "params": {
    //                 "cat_id":String(id),
    //                 "page":"1"
    //              },
    //              "request_info": {
    //                  "source_type": "android"
    //              }
    //          },
    //          "version": "1.0"
    //      }),{
    //  headers: {
    //      'Content-Type': 'application/json'
    //    }
    // })
    // .then(res=>{
    //     console.log(res);
    //     let {divPush} = this.state
    //     res.data.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{
    
    //         divPush.push(
    //             <Product id={item_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img}  price={item_price} saleprice={item_saleprice} />
    //         )
    //         this.setState({
    //             ...this.state,
    //            divPush
    //         })
    //     })
    
    //     this.setState({
    //         ...this.state,
    //         items:res.data.items
    //     })
    //  })

    //    }


    render() {
        return (
            <div>
            <HeaderLinks  /> 
            <Restapitest />
           <Header className={"transparent-bar"} navColor={"text-white"} />
           <ToastContainer />

            <MyCarousel />
   
   <div className="welcome-area pb-40">
       <div className="container">
           <div className="welcome-content text-center">
               {/* <h5>Who Are We</h5> */}
               <h1>Winter Specialities</h1>
               {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure </p> */}
           </div>
       </div>
   </div>
   
   
   <div className="product-area pb-60 hm9-section-padding">
       <div className="container-fluid">
           <div className="product-tab-list nav pb-55 text-center">
               <a  className="active" href="#product-3" data-toggle="tab" ><h4>Reodi </h4> </a>
               <a 
               href="#product-2" 
               data-toggle="tab"><h4>Gachak </h4></a>
               <a
                href="#product-1"
                 data-toggle="tab"><h4 >Bhugga </h4></a>
           </div>
           <div className="tab-content jump">
               <div className="tab-pane " id="product-1">
                   <div className="custom-row-4">
 
                   {/* <Bhugga /> */}
                    
                    {
                        this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice,cat_id,item_desc})=>{
                            return <Product catid={cat_id} description={item_desc} id={item_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                        })
                    }
                   </div>
               </div>
   
               <div className="tab-pane" id="product-2">
                       <Gachak AddTocart={this.AddTocart} />
               </div>

               <div className="tab-pane active" id="product-3">
                  
                       <Reodi AddTocart={this.AddTocart}/>
                       
                   {/* {
                        this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{
                            return <Product id={item_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                        })
                    } */}
                    
               </div>
              
           </div>
       </div>
   </div>

   <div className="welcome-area pb-10">
       <div className="container">
           <div className="welcome-content text-center">
               <h1>Sweets</h1>
           </div>
       </div>
   </div>
   
   
   <div className="product-area pb-60 hm9-section-padding">
       <div className="container-fluid">
           <div className="tab-content jump">
               <div className="tab-pane active" id="product-1">
                  <Sweets AddTocart={this.AddTocart} />
               </div>
           </div>
       </div>
   </div>


   <div className="welcome-area pb-10">
       <div className="container">
           <div className="welcome-content text-center">
               {/* <h5>Who Are We</h5> */}
               <h1>Wedding Bhaji</h1>
               {/* <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do  tempor incididunt labor et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commo consequat irure </p> */}
           </div>
       </div>
   </div>
   
   
   <div className="product-area pb-60 hm9-section-padding">
       <div className="container-fluid">
           <div className="product-tab-list nav pb-55 text-center">

           <div className="tab-content jump">
               <div className="tab-pane active" id="product-1">
                  <Bhaji AddTocart={this.AddTocart} />
               </div>
           </div>
       </div>
   </div>
   </div>


{/* <Testimonial />
 */}
 <NewTestimonial />
{/* <OwlData /> */}
       <Footer />
       </div>
    
        )
    }
}

export default Home
