import React from 'react'
import store from "store";
import { navigate } from "gatsby";
function ProductOfCollection({img,price,name,saleprice,AddTocart,id,style,catid}) {


    
   const  handleClick = () =>{
    store.set("product",{id,img,price,name,saleprice,catid})
 navigate("/collections/products/productdetail")
}
    return (
    <div className={style?style:"col-xl-4 col-md-4 col-lg-4 col-sm-6"}>
        <div className="product-wrap mb-25 scroll-zoom">
            <div className="product-img">
                <a onClick={handleClick}>
                    <img className="default-img" src={img} alt="" />
                    <img className="hover-img" src={img} alt="" />
                </a>
                {/* <span className="pink">-10%</span> */}
                <div className="product-action">
                    {/* <div className="pro-same-action pro-wishlist">
                        <a title="Wishlist" href="#"><i className="pe-7s-like"></i></a>
                    </div> */}
                    
                    <div className="pro-same-action pro-cart">
                        <a title="Add To Cart"  onClick={()=>AddTocart({id,img,name,saleprice})}><i className="pe-7s-cart"></i> Add to cart</a>
                    </div>
                    {/* <div className="pro-same-action pro-quickview">
                        <a title="Quick View" href="#" data-toggle="modal" data-target="#exampleModal"><i className="pe-7s-look"></i></a>
                    </div> */}
                </div>
            </div>
            <div className="product-content text-center">
                <h3>{name}</h3>
                {/* <div className="product-rating">
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o yellow"></i>
                    <i className="fa fa-star-o "></i>
                    <i className="fa fa-star-o"></i>
                    <i className="fa fa-star-o"></i>
                </div> */}
                <div className="product-price">
                    <span>₹{saleprice}</span>
                    <span className="old">{price}</span>
                </div>
            </div>
        </div>
    </div>
    )
}

export default ProductOfCollection
