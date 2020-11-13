import React,{useState} from 'react'
import HeaderLinks from './HeaderLinks'
import "../css/fonts.css"
import "../css/style.css"
import "../css/icons.min.css"

import Footer from './Footer'
import Header from './Headery'

import CartContext from "../context/CartContext"
import store from "store"
let arr;

if (store.get("persist")) {
    arr = store.get("persist")
} else {
    arr = []
}
function Layout(props) {

    const [products, setProducts] = useState(arr);
    const [total,setTotal] = useState(0)
    const setCart = ({product}) =>{
        console.log(" added Product:=>",product);
        setProducts([...products,product])
        arr.push(product)
        console.log("pushed arr",arr);
        // currentData = store.get("persist")
        // currentData.push(product)
        store.set("persist",arr)
        console.log(store.get("persist"));
        store.get("persist").map(product=>{
            setTotal(total+product.price)
         })
    }

    const removeItem = ({pro}) => {
        console.log("Product:=>",pro);
        arr = arr.filter(data=> data.productName !== pro.productName)
        console.log("filtered arr:=>",arr);
        setProducts(arr)
        store.set("persist",arr)
        console.log("data logged=>",store.get("persist"));
        store.get("persist").map(product=>{
            setTotal(total+product.price)
         })
    }

   
    return (
        <CartContext.Provider value={{
            total,
        setCart,
        removeItem,
        products
        }}>
           <HeaderLinks /> 
           <Header />
           {props.children}
           <Footer />
        </CartContext.Provider >
    )
}

export default Layout
