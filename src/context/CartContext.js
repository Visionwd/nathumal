import React, { createContext } from 'react';
import store from "store" 

const CartContext = createContext({
  setCart:({product})=>{

  },
  removeItem:({pro})=>{
  //  if(store.get("persist")){
  //   let currentData = store.get("persist");
  //   console.log(currentData);
  //   // currentData = currentData.filter(product => product != deleteProduct);
  //   store.set("persist", store.get("persist").filter(product => product.productName!=pro.productName))
  //  }
  },
  products:store.get("persist")?store.get("persist"):[],
  total:0
});

export default CartContext;