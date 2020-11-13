// import React,{useState} from 'react'
// import store from "store"
// let arr ;
// if (store.get("persist")) {
//     arr = store.get("persist")
// } else {
//     arr = []
// }


// function MyStore() {
//     const [products, setProducts] = useState(arr);
//     const data="prince"

//     return (
//         <div>
            
//         </div>
//     )
// }

// const addProduct =(product)=>{
  
//     console.log(" added Product:=>",product);
//         setProducts([...products,product])
//         arr.push(product)
//         console.log("pushed arr",arr);
//         // currentData = store.get("persist")
//         // currentData.push(product)
//         store.set("persist",arr)
//         console.log(store.get("persist"));
// }

// const removeItem = (pro) => {
     
//     console.log("Product:=>",pro);
//     arr = arr.filter(data=> data.productName!==pro.productName)
//     console.log("filtered arr:=>",arr);
//     setProducts(arr)
//     store.set("persist",arr)
//     console.log("data logged=>",store.get("persist"));
// }

// export {MyStore,addProduct, removeItem}
