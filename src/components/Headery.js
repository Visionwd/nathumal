import React,{useContext,useState} from 'react'
import logo from "../img/logo/logo.png"
import cart1 from "../img/cart/cart-1.png";
import cart2 from "../img/cart/cart-2.png";
import { Link } from "gatsby";
import CartContext from '../context/CartContext';
import store from "store"
// import {total} from "../components/Reusable/MyStore"


function Header({className,navColor}) {

    const {items,products,removeItem} = useContext(CartContext)

    const [total,setTotal] = useState(0)
   
     

  const handleClick =(product)=>{
    removeItem({pro:product})
    setTotal(total-product.price)
  }


    return (
        <header className="header-area clearfix header-hm9 " className={className}>
        <div className="container">
            <div className="header-top-area">
                <div className="row">
                    <div className="col-lg-5 col-md-8 col-12">
                        <div className="main-menu">
                            <nav>
                                <ul>
                                    <li ><Link to="/" className={navColor}>Home</Link></li>
                                    <li><Link to="/collections/shop" className={navColor}> Shop </Link></li>
                                    <li><Link to="/pages/about" className={navColor}> About </Link></li>
                                    <li><Link to="/pages/contact" className={navColor}> Contact</Link></li>
                                </ul>
                            </nav>
                        </div>
                    </div>
                    <div className="col-lg-2 d-none d-lg-block">
                        <div className="logo-hm9 text-center">
                            <a href="index.html" >
                                <img alt="" src={logo} style={{width: "100%"}} />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-5 col-md-4 col-12">
                        <div className="header-right-wrap">
                            <div className="same-style header-search">
                                <a className="search-active" href="#" ><i className="pe-7s-search"></i></a>
                                <div className="search-content">
                                    <form action="#">
                                        <input type="text" placeholder="Search" />
                                        <button className="button-search" ><i className="pe-7s-search"></i></button>
                                    </form>
                                </div> 
                            </div>
                            <div className="same-style account-satting">
                                <a className="account-satting-active" href="/" ><i className="pe-7s-user-female"></i></a>
                                <div className="account-dropdown">
                                    <ul>
                                        <li><Link to="/account/login">Login/Register</Link></li>
                                        <li><Link to="/pages/wishlist">Wishlist  </Link></li>
                                        <li><Link to="/account/myaccount">my account</Link></li>
                                    </ul>
                                </div>
                            </div>
                            {/* <div className="same-style header-wishlist">
                                <a href="#" className={navColor}><i className="pe-7s-like"></i></a>
                            </div> */}
                            <div className="same-style cart-wrap">
                          
                                <button className="icon-cart" >
                                        <a href="#"> <i className="pe-7s-shopbag" ></i></a>
                                        <span className="count-style">{store.get("persist")?store.get("persist").length:0}</span>
                                </button>
                                <div className="shopping-cart-content">
                                    <ul>
                                        {/* 
                                        <li className="single-shopping-cart">
                                            <div className="shopping-cart-img">
                                                <a href="/"><img alt="banner2" src={cart2} /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="/">Ladoo </a></h4>
                                                <h6>Qty: 02</h6>
                                                <span>$260.00</span>
                                            </div>
                                            <div className="shopping-cart-delete">
                                                <a href="/"><i className="fa fa-times-circle"></i></a>
                                            </div>
                                        </li> */}
                                        {/* {
                                   store.get("persist")?store.get("persist").map((product,index)=>{
                                            
                                          return( <li className="single-shopping-cart" key={index}> 
                                           <div className="shopping-cart-img">
                                                <a href="/"><img alt="banner1" src={cart1} /></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="/">{product.productName} </a></h4>
                                                <h6>Qty: 01</h6>
                                                <span>{product.price}</span>
                                            </div>
                                            <div className="shopping-cart-delete">
                                                <a onClick={()=>handleClick(product)}><i className="fa fa-times-circle"></i></a>
                                            </div>
                                          </li>)
                                          }):
                                          <p>Add some product to cart</p>  
                                        } */}
                                    </ul>
                                    <div className="shopping-cart-total">
                                        <h4>Shipping : <span>200.00</span></h4>
                                        <h4>Total : <span className="shop-total">{
                                          total+200
                                        }</span></h4>
                                    </div>
                                    <div className="shopping-cart-btn btn-hover text-center">
                                        <Link className="default-btn" to="/cart/cartview" >view cart</Link>
                                        <Link className="default-btn" to="/cart/checkout" >checkout</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="header-bottom sticky-bar header-res-padding header-padding-2">
            <div className="container">
                <div className="row">
                    <div className="col-12 d-block d-lg-none">
                        <div className="logo">
                            <Link to="/">
                                <img alt="" src={logo} />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
    
    
    )
}

export default Header
