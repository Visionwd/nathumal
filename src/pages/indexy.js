import React,{useState} from "react"
import { Link,graphql,useStaticQuery } from "gatsby";
import HeaderLinks from '../components/HeaderLinks'
import "../css/fonts.css"
import "../css/style.css"
import "../css/icons.min.css"

// import 'owl.carousel/dist/assets/owl.carousel.css';
// import 'owl.carousel/dist/assets/owl.theme.default.css';
 
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
import Header from "../components/Headery";
import Footer from "../components/Footer";
import Restapitest from "../components/Restapitest";

import CartContext from "../context/CartContext"
import store from "store"
import MyStore from "../components/Reusable/MyStore"

let arr;

if (store.get("persist")) {
     arr = store.get("persist")
} else {
     arr = []
}
// store.set("persist",[]);
export default function Home() {

    const data = useStaticQuery(graphql`
    query{
        allContentfulSweet{
          edges{
            node{
              name,
              price,
              productImage{
                file{
                  url
                }
              }
            }
          }
        }
      }
    `)

    const [products, setProducts] = useState(arr);
    const [total,setTotal] = useState(0)
    // if (store.get("persist")) {
    //     store.get("persist").map(product=>{
    //         setTotal(total+product.price)
    //      })  
    // }
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
        arr = arr.filter(data=> data.productName!==pro.productName)
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
                    <Product productName="Bengali Sweet" productImg={Product1} price={400} />
                    <Product productName="Gajar ka Halwa" productImg={Product2} price={300} />
                    <Product productName="cake" productImg={Product3} price={500} />
                    <Product productName="Gulab Jamun" productImg={Product4} price={200} />
                    <Product productName="Son Papdi" productImg={Product5} price={350} />
                    <Product productName="cake" productImg={Product3} price={500} />
                    <Product productName="Gulab Jamun" productImg={Product4} price={200} />
                    <Product productName="Son Papdi" productImg={Product5} price={350} />
                    <Product productName="Bengali Sweet" productImg={Product1} price={400} />
                    <Product productName={data.allContentfulSweet.edges[0].node.name} productImg={data.allContentfulSweet.edges[0].node.productImage.file.url} price={data.allContentfulSweet.edges[0].node.price} />
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
 
    </CartContext.Provider >
  
    )
}
