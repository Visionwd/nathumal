import React, { Component } from 'react'
import Layout from '../../components/Layout'
import axios from "axios"
import store from "store"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProductOfCollection from "../../components/Reusable/ProductOfCollection"

let currentCartItems = [];
let total = 0;
if (store.get("persist")) {
    currentCartItems=store.get("persist")
    store.get("persist").map(item=>total+=item.saleprice)
}else{
    currentCartItems = [];
    total=0;
}

export class Shop extends Component {
   
    state={
        categories:[],
        items:[],
        addToCartItems:currentCartItems,
        totalState:total
    }
   
    componentDidMount(){
        axios.post("https://www.heydemo.ml/nathumalapi/appapi/categories",
        JSON.stringify({
             "service_request": {
                 "params": {
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
            categories:res.data.categories
        })
    
    })


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
   
    filterHandler = (event)=>{
        let checked = event.target.checked
        console.log(checked);
        console.log(event.target.name);
        if(checked){
            console.log(this.state.items.filter(item=>item.item_id===String(event.target.name)));
           
        }
        
    }

   handleCategoryClick = (categoryid) =>{

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
    this.setState({
        ...this.setState,
        addToCartItems:currentData,
        totalState:this.state.totalState+item.saleprice
    })
    store.set("persist",currentData )
    console.log("store after adding item  => ",store.get("persist"));
   }

   
    render() {
        return (
            <Layout>
            <ToastContainer />
            <div className="shop-area pt-95 pb-100">
                {
                    console.log("categories=>",this.state.categories)
                }
                <div className="container">
                    <div className="row flex-row-reverse">
                        <div className="col-lg-9">
                            <div className="shop-top-bar">
                                <div className="select-shoing-wrap">
                                    <div className="shop-select">
                                        <select>
                                            <option value="">Sort by newness</option>
                                            <option value="">A to Z</option>
                                            <option value=""> Z to A</option>
                                            <option value="">In stock</option>
                                        </select>
                                    </div>
                                    {/* <p>Showing 1–12 of 20 result</p> */}
                                </div>
                                <div className="shop-tab nav">
                                    <a className="active" href="#shop-1" data-toggle="tab">
                                        <i className="fa fa-table"></i>
                                    </a>
                                    <a href="#shop-2" data-toggle="tab">
                                        <i className="fa fa-list-ul"></i>
                                    </a>
                                </div>
                            </div>
                            
                            <div className="shop-bottom-area mt-35">
                                <div className="tab-content jump">
                                    <div id="shop-1" className="tab-pane active">
                                        <div className="row">
                                                {
                                                    this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice})=>{
                                                        return <ProductOfCollection id={item_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                                                    })
                                                }
                                            </div>
                                    </div>
                                   
                                </div> 
                                <div className="pro-pagination-style text-center mt-30">
                                    <ul>
                                        <li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a className="next" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-3">
                            <div className="sidebar-style mr-30">
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Search </h4>
                                    <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="pro-sidebar-search-form" action="#">
                                            <input type="text" placeholder="Search here..." />
                                            <button>
                                                <i className="pe-7s-search"></i>
                                            </button>
                                        </form>
                                    </div>
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Refine By </h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>

                                            {
                                                this.state.categories.map(category=>{
                                                    return(
                                                        <li key={category.cat_id}>
                                                            <div className="sidebar-widget-list-left">
                                                                <input
                                                                 type="checkbox" 
                                                                 name={category.cat_id}
                                                                 onClick={this.filterHandler}
                                                                 /> <a href="#">{category.category_title} <span>4</span> </a> 
                                                                <span className="checkmark"></span>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                            </ul>
                                    </div>
                                </div>
                                <div className="sidebar-widget mt-45">
                                    <h4 className="pro-sidebar-title">Filter By Price </h4>
                                    <div className="price-filter mt-10">
                                        <div className="price-slider-amount">
                                            <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                        </div>
                                        <div id="slider-range"></div>
                                    </div>
                                </div>
                             </div>
                        </div>
                    </div>
                </div>
            </div>
            
                   </Layout>
              
        )
    }
}

export default Shop
