import React, { Component } from 'react'
import Layout from '../../../components/Layout'
import { navigate } from "gatsby";
import store from "store"

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import ProdetailLarge1 from "../../../img/product-details/b-large-1.jpg";
import ProdetailLarge2 from "../../../img/product-details/b-large-2.jpg";
import ProdetailLarge3 from "../../../img/product-details/b-large-3.jpg";


import ProdLarge1 from "../../../img/product-details/large-1.jpg";
import ProdLarge2 from "../../../img/product-details/large-2.jpg";
import ProdLarge3 from "../../../img/product-details/large-3.jpg";

import Prodsmall1 from "../../../img/product-details/small-1.jpg";
import Testimonial from "../../../img/testimonial/1.jpg";
import RelatedProduct from '../../../components/ProductDetail/RelatedProduct';

class Productdetail extends Component {
   
    state={
        item:[],
        msg:"Add To Cart",
        product:{
            id:0,
            img:"",
            price:0,
            saleprice:0,
            name:""

        }
    }
   
    componentDidMount(){
        if(store.get("product")){
            const {id,img,price,name,saleprice} = store.get("product")
            this.setState({
                ...this.state,
                product:{id,img,price,name,saleprice}
            })
        }else{
            navigate("/")
        }
        // console.log(store.get("product"));
        // this.setState({...store.get("product")})
        // if (!store.get("product")) {
        //     navigate("/")
        // }
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
        // this.setState({
        //     ...this.setState, 
        //     items:currentData
        // })
        store.set("persist",currentData)
        this.setState({
            items:currentData,
            msg:"Added to Cart"
        })
        console.log("store after adding item  => ",store.get("persist"));
       
       }

  
 render(){
     
    const {id,img,price,name,saleprice} = this.state.product
    //  const {id,img,price,name,saleprice} = store.get("product")?store.get("product"):{id:0,img:"",price:0,name:"",saleprice:0}
    //  console.log(store.get("product"));
    return (
        <Layout>
        <ToastContainer />
        <div className="shop-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details">
                            <div className="product-details-img">
                                <div className="tab-content jump"> 
                                    <div id="shop-details-1" className=" large-img-style mb-20">
                                        <img src={img} alt="" />
                                        
                                        {/* <span className="dec-price">-10%</span>
                                        <div className="img-popup-wrap">
                                            <a className="img-popup" href={ProdetailLarge1}><i className="pe-7s-expand1"></i></a>
                                        </div> */}
                                    </div>
                                    {/* <div id="shop-details-2" className="tab-pane active large-img-style">
                                        <img src={ProdLarge2} alt="" />
                                        <span className="dec-price">-10%</span>
                                        <div className="img-popup-wrap">
                                            <a className="img-popup" href={ProdetailLarge2}><i className="pe-7s-expand1"></i></a>
                                        </div>
                                    </div>
                                    <div id="shop-details-3" className="tab-pane large-img-style">
                                        <img src={ProdLarge3} alt="" />
                                        <span className="dec-price">-10%</span>
                                        <div className="img-popup-wrap">
                                            <a className="img-popup" href={ProdetailLarge3}><i className="pe-7s-expand1"></i></a>
                                        </div>
                                    </div> */}
                                </div>
                                <div className="shop-details-tab nav">
                                    {/* <a className="shop-details-overly" href="#shop-details-1" data-toggle="tab">
                                        <img src={img} alt="" />
                                    </a> */}
                                    {/* <a className="shop-details-overly active" href="#shop-details-2" data-toggle="tab">
                                        <img src={Prodsmall1} alt="" />
                                    </a>
                                    <a className="shop-details-overly" href="#shop-details-3" data-toggle="tab">
                                        <img src={Prodsmall1} alt="" />
                                    </a> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-content ml-70 ">
                            <h2>{name}</h2>
                            <div className="product-details-price">
                                <span>₹{saleprice} </span>
                                <span className="old">₹{price}</span>
                            </div>
                            {/* <div className="pro-details-rating-wrap">
                                <div className="pro-details-rating">
                                    <i className="fa fa-star-o yellow"></i>
                                    <i className="fa fa-star-o "></i>
                                    <i className="fa fa-star-o "></i>
                                    <i className="fa fa-star-o"></i>
                                    <i className="fa fa-star-o"></i>
                                </div>
                                <span><a href="#">3 Reviews</a></span>
                            </div> */}
                            <p>Lorem ipsum dolor sit amet, consectetur adipisic elit eiusm tempor incidid ut labore et dolore magna aliqua. Ut enim ad minim venialo quis nostrud exercitation ullamco</p>
                            <div className="pro-details-list">
                                <ul>
                                    <li>- 0.5 mm Dail</li>
                                    <li>- Inspired vector icons</li>
                                    <li>- Very modern style  </li>
                                </ul>
                            </div>
                            <div className="pro-details-size-color">
                                {/* <div className="pro-details-color-wrap">
                                    <span>Color</span>
                                    <div className="pro-details-color-content">
                                        <ul>
                                            <li className="blue"></li>
                                            <li className="maroon active"></li>
                                            <li className="gray"></li>
                                            <li className="green"></li>
                                            <li className="yellow"></li>
                                        </ul>
                                    </div>
                                </div> */}
                                <div className="pro-details-size">
                                    <span>Size</span>
                                    <div className="pro-details-size-content">
                                        <ul>
                                            <li><a href="#">Full</a></li>
                                            <li><a href="#">Half</a></li>

                                            {/* <li><a href="#">l</a></li>
                                            <li><a href="#">xl</a></li>
                                            <li><a href="#">xxl</a></li> */}
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            <div className="pro-details-quality">
                                {/* <div className="cart-plus-minus">
                                    <input className="cart-plus-minus-box" type="text" name="qtybutton" />
                                </div> */}
                                <div className="pro-details-cart btn-hover">
                                    <a onClick={()=>this.AddTocart({id,img,name,saleprice})}>{this.state.msg}</a>
                                </div>
                                {/* <div className="pro-details-wishlist">
                                    <a href="#"><i className="fa fa-heart-o"></i></a>
                                </div>
                                <div className="pro-details-compare">
                                    <a href="#"><i className="pe-7s-shuffle"></i></a>
                                </div> */}
                            </div>
                            {/* <div className="pro-details-meta">
                                <span>Categories :</span>
                                <ul>
                                    <li><a href="#">Minimal,</a></li>
                                    <li><a href="#">Furniture,</a></li>
                                    <li><a href="#">Fashion</a></li>
                                </ul>
                            </div>
                            <div className="pro-details-meta">
                                <span>Tag :</span>
                                <ul>
                                    <li><a href="#">Fashion, </a></li>
                                    <li><a href="#">Furniture,</a></li>
                                    <li><a href="#">Electronic</a></li>
                                </ul>
                            </div> */}
                            <div className="pro-details-social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        
        <RelatedProduct />
                </Layout>
            )
 }
}

export default Productdetail



