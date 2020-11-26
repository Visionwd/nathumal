import React,{useContext,useState} from 'react'
import logo from "../img/logo/logo.png"
import cart1 from "../img/cart/cart-1.png";
import cart2 from "../img/cart/cart-2.png";
import { Link } from "gatsby";
import CartContext from '../context/CartContext';
import store from "store"
// import {total} from "../components/Reusable/MyStore"

let currentCartItems = [];
let xtotal = 0;
if (store.get("persist")) {
    currentCartItems=store.get("persist")
    store.get("persist").map(item=>xtotal+=(Number(item.saleprice)*item.quantity))
    console.log(xtotal);
}else{
    currentCartItems = [];
    xtotal=0;
}

function Header({className,navColor,total}) {
    console.log(total);

    const {products,removeItem} = useContext(CartContext)

    const [items,setItems] = useState(currentCartItems)
    const [totalState,setTotalState] = useState(xtotal)
    //  setTotalState(total);
    console.log("totalState",totalState);

  const handleDelete =(id)=>{
    currentCartItems=store.get("persist");
    console.log("id to delete",id);
    console.log("before filter",currentCartItems);
    currentCartItems= currentCartItems.filter(item=>item.id!==id)
    console.log("after filter",currentCartItems);
    setItems(items.filter(item=>item.id!==id))
    let mytotal = 0;
    currentCartItems.map(item=>mytotal+=(Number(item.saleprice)*item.quantity))
    console.log(mytotal);
    setTotalState(mytotal)
    store.set("persist",currentCartItems)
    console.log("after removing item",store.get("persist"));
  }


    return (
    
        
    <header className="header-area clearfix header-hm9 mb-5" className={className}>
        <div className="container-fluid">
            <div className="header-top-area">
                <div className="row">
                <div className="col-lg-5 d-lg-block">
                        <div className="logo-hm9 ">
                            <a href="/" >
                                <img alt="" src={logo} className="logoimg mt-2" />
                            </a>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-8 col-12">
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
                   
                   
                    <div className="col-lg-3 col-md-4 col-12">
                        <div className="header-right-wrap">
                            <div className="same-style header-search">
                                <a className="search-active" className={navColor} href="#" ><i className="pe-7s-search"></i></a>
                                <div className="search-content">
                                    <form action="#">
                                        <input type="text" placeholder="Search" />
                                        <button className="button-search" ><i className="pe-7s-search"></i></button>
                                    </form>
                                </div> 
                            </div>
                            {/* <div className="same-style account-satting">
                                <a className="account-satting-active" className={navColor} href="/" ><i className="pe-7s-user-female"></i></a>
                                <div className="account-dropdown">
                                    <ul>
                                        <li><Link to="/account/login">Login/Register</Link></li>
                                        <li><Link to="/pages/wishlist">Wishlist  </Link></li>
                                        <li><Link to="/account/myaccount">my account</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            {/* <div className="same-style header-wishlist">
                                <a href="#" className={navColor}><i className="pe-7s-like"></i></a>
                            </div> */}
                            <div className="same-style cart-wrap">
                          
                                <button className="icon-cart" >
                                        <a href="/cart/cartview" className="account-satting-active" className={navColor}> <i className="pe-7s-shopbag"></i></a>
                                        <span className="count-style">{store.get("persist")?store.get("persist").length:0}</span>
                                </button>
                                <div className="shopping-cart-content">
                                    <ul>
                                        
                                        {/* <li className="single-shopping-cart">
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
                                        
                                        {
                                   store.get("persist")?store.get("persist").map((product,index)=>{
                                            
                                          return( <li className="single-shopping-cart" key={product.id}> 
                                           <div className="shopping-cart-img">
                                                <a href="/"><img alt="banner1" src={product.img} style={{width:"82px",height:"82px"}}/></a>
                                            </div>
                                            <div className="shopping-cart-title">
                                                <h4><a href="/">{product.name} </a></h4>
                                                <h6>Qty:{product.quantity}</h6>
                                                <span>₹{product.saleprice}</span>
                                            </div>
                                            <div className="shopping-cart-delete">
                                                <a onClick={()=>handleDelete(product.id)}><i className="fa fa-times-circle"></i></a>
                                            </div>
                                          </li>)
                                          }):
                                          <p>Add some product to cart</p>  
                                        }
                                    </ul>
                                    {/* <div className="shopping-cart-total">
                                        <h4>Shipping : <span>200.00</span></h4>
                                        <h4>Total : <span className="shop-total">₹{
                                         totalState
                                        }</span></h4>
                                    </div> */}
                                    <div className="shopping-cart-btn btn-hover text-center">
                                        <a className="default-btn" href="/cart/cartview" >view cart</a>
                                        {/* <a className="default-btn" href="/cart/checkout" >checkout</a> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

       
    </header>
    


// <nav className="navbar navbar-expand-lg navbar-light bg-transparent "  >
//   <a className="navbar-brand" href="#"> <img alt="" src={logo} classNameName="logoimg mt-2" style={{width:"100px"}} /></a>
//   <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
//     <span className="navbar-toggler-icon"></span>
//   </button>

//   <div className="collapse navbar-collapse " id="navbarSupportedContent">
    
//     <ul className="navbar-nav mx-auto">
//       <li className="nav-item active">
//         <Link className="nav-link" to="/">Home <span className="sr-only">(current)</span></Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/collections/shop">Shop</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/pages/about">About</Link>
//       </li>
//       <li className="nav-item">
//         <Link className="nav-link" to="/pages/contact">Contact</Link>
//       </li>
//     </ul>

//     <ul className="navbar-nav ml-auto">
//       <li className="nav-item">
//         <a className="nav-link" href="/"><i className="pe-7s-search"></i></a>
//       </li>
//       <li className="nav-item">
//         <a className="nav-link" href="/cart/cartview"><i className="pe-7s-shopbag"></i></a>
//       </li>

//       {/* <li className="nav-item">
//         <a className="nav-link" href="#">Contact</a>
//       </li> */}
//     </ul>

    
//   </div>
// </nav>
    
    )
}

export default Header



    
    