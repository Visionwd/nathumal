import { Link,navigate } from 'gatsby'
import React,{useContext} from 'react'
import CartContext from '../../context/CartContext'
import store from "store";
function Product({img,price,name,saleprice,AddTocart,id,quantity}) {
  
    
    // let arr = []
    // const {setCart,removeItem} =  useContext(CartContext)
    // // sessionStorage.setItem("hello",20)
    // // localStorage.setItem("users",23)
    // const handleCart = () => {
    //     setCart({product:{productName,price}})
    // }

   const  handleClick = () =>{
       store.set("product",{id,img,price,name,saleprice})
    navigate("/collections/products/productdetail")
   }
    
    return (
        <div className="custom2-col-5">
        <div className="product-wrap-2 pro-glaucous-color mb-35 scroll-zoom">
            <div className="product-img">

                <a onClick={handleClick}>
                    <img className="default-img" src={img} alt="img" />
                    <img className="hover-img" src={img} alt="img" />
                </a>
                {/* <span className="glaucous">-10%</span> */}
                
                <div className="product-action-2">
                    <a title="Add To Cart" onClick={()=>AddTocart({id,img,name,saleprice})}><i className="fa fa-shopping-cart"></i></a>
                    {/* <a title="Quick View" href="/" data-toggle="modal" data-target="#exampleModal"><i className="fa fa-eye"></i></a>
                    <a title="Compare" href="/"><i className="fa fa-retweet"></i></a> */}
                </div>
            </div>
            <div className="product-content-2">
                <div className="title-price-wrap-2">
                    <h3>
                        <a href="product-details.html">{name}</a>
                      
                    </h3>
                    <div className="price-2">
                        <span>₹{saleprice}</span>
                        {/* <span className="old">₹{price}</span> */}
                    </div>
                    <div>
                    <button  className="btn  " onClick={()=>AddTocart({id,img,name,saleprice})}> <i className="fa fa-shopping-cart"></i></button>
                    </div>
                </div>
               
                <div className="pro-wishlist-2">
                    <a title="Wishlist" href="/"><i className="fa fa-heart-o"></i></a>
                </div>
            </div>
        </div>
    </div>
    
    )
}

export default Product
