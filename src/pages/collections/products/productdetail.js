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


import Prodsmall1 from "../../../img/product-details/small-1.jpg";
import Testimonial from "../../../img/testimonial/1.jpg";

import RelatedProduct from '../../../components/ProductDetail/RelatedProduct';
import SimpleReactLightbox,{ SRLWrapper } from "simple-react-lightbox";
import Banner from "../../../components/Reusable/Banner"

class Productdetail extends Component {
   
    state={
        item:[],
        msg:"Add To Cart",
        product:{
            id:0,
            img:"",
            price:0,
            saleprice:0,
            name:"",
            catid:0,
            description:""
        },
        newitemqnty:1,
        newitemsize:1
    }
   
    componentDidMount(){
        if(store.get("product")){
            const {id,img,price,name,saleprice,catid,description} = store.get("product")
            this.setState({
                ...this.state,
                product:{id,img,price,name,saleprice,catid,description}
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

    handleItemQuantity=(e)=>{
        this.setState({
            ...this.state,
            newitemqnty:Number(e.target.value)
        })
    }

    handleItemQuantityIncr=()=>{
        this.setState({
            ...this.state,
            newitemqnty:Number(this.state.newitemqnty)+1
        })
    }
    handleItemQuantityDecr=()=>{
        if(Number(this.state.newitemqnty) > 1){
            this.setState({
                ...this.state,
                newitemqnty:Number(this.state.newitemqnty)-1
            })
        }
    }

    handleItemSize=(e)=>{
        this.setState({
            ...this.state,
            newitemsize:e.target.value
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
            currentData.push({...item,quantity:this.state.newitemqnty*this.state.newitemsize})
          }else{
            currentData.map(cartitem => {
                if (cartitem.id===item.id) {
                    console.log("identical");
                    cartitem.quantity=cartitem.quantity+(this.state.newitemqnty*this.state.newitemsize)
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
            msg:"Add to Cart"
        })
        console.log("store after adding item  => ",store.get("persist"));
       
       }

  
 render(){
     
    const {id,img,price,name,saleprice,catid,description} = this.state.product

    //  const {id,img,price,name,saleprice} = store.get("product")?store.get("product"):{id:0,img:"",price:0,name:"",saleprice:0}
    //  console.log(store.get("product"));
    
    return (
        <Layout>
        <ToastContainer />
        <Banner title={name} />
        <div className="shop-area pt-100 pb-100">
            <div className="container">
                <div className="row">
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details">
                            <div className="product-details-img">
                                <div className="tab-content jump"> 

                                <SimpleReactLightbox>
                                    <SRLWrapper>
                                    <div id="shop-details-1" class="tab-pane large-img-style">
                                <img src={img} />
                                {/* <span class="dec-price">-10%</span> */}
                                <div class="img-popup-wrap">
                                    <a class="img-popup" href={img}><i class="pe-7s-expand1"></i></a>
                                </div>
                            </div>
                            <div id="shop-details-2" class="tab-pane active large-img-style">
                                <img src={img} alt="" />
                                {/* <span class="dec-price">-20%</span> */}
                                <div class="img-popup-wrap">
                                    <a class="img-popup" href={img}><i class="pe-7s-expand1"></i></a>
                                </div>
                            </div>
                            <div id="shop-details-3" class="tab-pane large-img-style">
                                <img src={img} alt="" />
                                {/* <span class="dec-price">-30%</span> */}
                                <div class="img-popup-wrap">
                                    <a class="img-popup" href={img}><i class="pe-7s-expand1"></i></a>
                                </div>
                            </div>

                                    </SRLWrapper>
                                </SimpleReactLightbox>
                           



                                </div>
                                {/* <div className="shop-details-tab nav">
                                    <a class="shop-details-overly" href="#shop-details-1" data-toggle="tab">
                                        <img src={img} alt="" />
                                    </a>
                                    <a class="shop-details-overly active" href="#shop-details-2" data-toggle="tab">
                                        <img src={img} alt="" />
                                    </a>
                                    <a class="shop-details-overly" href="#shop-details-3" data-toggle="tab">
                                        <img src={img} alt="" />
                                    </a>
                                   
                                </div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-6">
                        <div className="product-details-content ml-70 ">
                            <h2>{name}</h2>
                            <div className="product-details-price">
                                <span>₹{saleprice} </span>
                                {/* <span className="old">₹{price}</span> */}
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
                            <p>{description}</p>
                            <div className="pro-details-list">
                                {/* <ul>
                                    <li>- 0.5 mm Dail</li>
                                    <li>- Inspired vector icons</li>
                                    <li>- Very modern style  </li>
                                </ul> */}

                            </div>
                            <div className="pro-details-size-color">
                                <div className="pro-details-color-wrap">
                                    <span>Quantity</span>
                                    <div className="pro-details-color-content">
                                        {/* <ul>
                                            <li className="blue"></li>
                                            <li className="maroon active"></li>
                                            <li className="gray"></li>
                                            <li className="green"></li>
                                            <li className="yellow"></li>
                                        </ul> */}


                                        <div className="cart-plus-minus">
                                            <button onClick={this.handleItemQuantityDecr} className="btn mx-1"><i class="fas fa-minus-circle"></i></button>
                                            <input className="cart-plus-minus-box" type="number"
                                             name="qtybutton"
                                              value={this.state.newitemqnty}
                                              min={1}
                                              onChange={this.handleItemQuantity}
                                              style={{textAlign:"center",border:"1px solid #ced4da",height:"40px",width:"auto"}}

                                               />
                                            <button onClick={this.handleItemQuantityIncr} className="btn mx-1"><i class="fas fa-plus-circle"></i></button>
                                        </div>
                                    </div>
                                </div>
                                <div className="pro-details-size form-group">
                                    {/* <div class="form-group">
                                        
                                    </div>
                                 */}
                                    <span><label htmlFor="itemsize">Size</label></span>
                                    <div className="pro-details-size-content ">
                                        {/* <ul>
                                            <li><a href="#">Full</a></li>
                                            <li><a href="#">Half</a></li>
                                        </ul> */}
                                        
                                        <select class="form-control" id="itemsize" 
                                        value={this.state.newitemsize}
                                         onChange={this.handleItemSize}>
                                            <option value={1}>1 Kg</option>
                                            <option value={0.5}>1/2 Kg</option>
                                        </select>
                                       
                                    </div>
                                </div>
                            </div>
                            <div className="pro-details-quality">
                               
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
                            {/* <div className="pro-details-social">
                                <ul>
                                    <li><a href="#"><i className="fa fa-facebook"></i></a></li>
                                    <li><a href="#"><i className="fa fa-dribbble"></i></a></li>
                                    <li><a href="#"><i className="fa fa-pinterest-p"></i></a></li>
                                    <li><a href="#"><i className="fa fa-twitter"></i></a></li>
                                    <li><a href="#"><i className="fa fa-linkedin"></i></a></li>
                                </ul>
                            </div> */}
                        </div>
                    </div>
                </div>
            </div>
        </div>
        {
            console.log("=>",id,catid)
        }
        <RelatedProduct AddTocart={this.AddTocart} id={this.state.product.id} catid={this.state.product.catid} />
                </Layout>
            )
 }
}

export default Productdetail



