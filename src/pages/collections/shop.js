import React, { Component } from 'react'
import Layout from '../../components/Layout'
import axios from "axios"
import store from "store"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReactPaginate from 'react-paginate';
import ProductOfCollection from "../../components/Reusable/ProductOfCollection"

import Banner from "../../components/Reusable/Banner"

import Bhugga from '../../components/Shop/Bhugga';
import SearchItem from '../../components/Reusable/SearchItem';
let currentCartItems = [];
let total = 0;
if (store.get("persist")) {
    currentCartItems=store.get("persist")
    store.get("persist").map(item=>total+=item.saleprice)
}else{
    currentCartItems = [];
    total=0;
}

export class Shop extends Component {
   
    state={

        categories:[],
        items:[],
        totalitems:0,
        paginate:[],
        addToCartItems:currentCartItems,
        totalState:total,
        all:true,
        Gachak:false,
        Reodi:false,
        Bhugga:false,
        "Sukhi Bhaaji":false,
        Sweets:false,
        pageid:"1",
        catid:"",
        catids:[],
        filteritem:"",
        noitemMsg:"Loading..."

    }
   
    componentDidMount(){
       
        this.FetchCategories()
        if(this.props.location.state){
            this.handleLinking()
        }else{
            this.FetchData()
        }
        

    }
   
    handleLinking=()=>{
        if (this.props.location.state.id) {
            console.log("location props",this.props);
            if (this.props.location.state.id===1) {
                this.setState({
                    ...this.state,
                    Gachak:true,
                    Reodi:true,
                    Bhugga:true,
                    catids:["1","4","5"]
                })
                this.FetchData("1,4,5")
            }
            if (this.props.location.state.id===2) {
                this.FetchData("2")
                this.setState({
                    ...this.state,
                    Sweets:true,
                    catids:["2"]
                })
            }
            if (this.props.location.state.id===3) {
                this.FetchData("3")
                this.setState({
                    ...this.state,
                    "Sukhi Bhaaji":true,
                    catids:["3"]
                })
            }
        }else{
            this.FetchData()
        }
    }

    FetchData=(catid="",pageid="1",text="")=>{
        axios.post("https://heydemo.ml/nathumalapi/appapi/items",
        JSON.stringify({
             "service_request": {
                 "params": {
                    "cat_id":catid,
                    "page":pageid,
                    "s_text":text

                 },
                 "request_info": {
                     "source_type": "android"
                 }
             },
             "version": "1.0"
         }),{
     headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(res=>{
        console.log(res);
        this.setState({
            ...this.state,
            items:res.data.items,
            totalitems:res.data.total_count
        })
       
         
     })
    }

    FetchCategories=()=>{
        axios.post("https://www.heydemo.ml/nathumalapi/appapi/categories",
        JSON.stringify({
             "service_request": {
                 "params": {
                 },
                 "request_info": {
                     "source_type": "android"
                 }
             },
             "version": "1.0"
         }),{
     headers: {
         'Content-Type': 'application/json'
       }
    })
    .then(res=>{
        // console.log(res);
        this.setState({
            ...this.state,
            categories:res.data.categories
        })
    
    })
    }


    filterHandler = (event)=>{
        let checked = event.target.checked
        console.log(checked);
        console.log(event.target.name);
        const category = this.state.catids


       if(checked){
        category.push(event.target.name)
       }else{
           let index = category.indexOf(event.target.name)
           if(index>-1)
            { category.splice(category.indexOf(event.target.name),1)}
       }
       this.setState({
        ...this.state,
        all:false,
        [event.target.id]:event.target.checked,
        catids:category
    })

    // this.setState({
    //     ...this.state,
    //     catid:this.state.catids.join()
    // })
    
   console.log("category=>",category);
    this.FetchData(this.state.catids.length?category.join():"",this.state.pageid)
       
    }

   handlePagination = (e) =>{
    const selectedPage = e.selected;
    console.log("pageid=>",String(Number(selectedPage)));
    this.setState({
       ...this.state,
       pageid:String(selectedPage)
    })
    this.FetchData(this.state.catids.length?this.state.catids.join():"",String(Number(selectedPage)+1))
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
    this.setState({
        ...this.setState,
        addToCartItems:currentData,
        totalState:this.state.totalState+item.saleprice
    })
    store.set("persist",currentData )
    console.log("store after adding item  => ",store.get("persist"));
   }

//    handleSearchFilterChange=(e)=>{
//        this.setState({
//            ...this.state,
//            filteritem:e.target.value
//        })
//    }


   handleSearchFilter=(searchingdata)=>{
    //    e.preventDefault()
       console.log("searching data=>",searchingdata);
       this.FetchData(this.state.catids.length?this.state.catids.join():"",this.state.pageid,searchingdata)

          if(!this.state.items.length){
            this.setState({
                ...this.state,
                noitemMsg:"No items found"
            })
       }else{
        this.setState({
            ...this.state,
            noitemMsg:"Loading..."
        })
       }
   }
   
   

    render() {
        return (
            <Layout>
            <ToastContainer />
            <Banner title={"Shop"} />
            <div className="shop-area pt-95 pb-100">
                <div className="container">
                    <div className="row ">
                    <div className="col-lg-3">
                            <div className="sidebar-style mr-30">
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Search </h4>
                                    <SearchItem handleSearchFilter={this.handleSearchFilter}/>
                                    {/* <div className="pro-sidebar-search mb-50 mt-25">
                                        <form className="pro-sidebar-search-form" onSubmit={this.handleSearchFilter}>
                                            <input type="text" 
                                            placeholder="Search here..." 
                                            onChange={this.handleSearchFilterChange}
                                             />
                                            <button  disabled={this.state.filteritem?false:true}>
                                                <i className="pe-7s-search"></i>
                                            </button>
                                        </form>
                                    </div> */}
                                </div>
                                <div className="sidebar-widget">
                                    <h4 className="pro-sidebar-title">Categories </h4>
                                    <div className="sidebar-widget-list mt-30">
                                        <ul>

                                            {
                                                this.state.categories.map(category=>{
                                                    return(
                                                        <li key={category.cat_id}>
                                                            <div className="sidebar-widget-list-left ml-1">
                                                                 <input
                                                                 type="checkbox" 
                                                                 name={category.cat_id}
                                                                 id={category.category_title}
                                                                 onChange={this.filterHandler}
                                                                 checked={this.state[category.category_title]}
                                                                 />
                                                                 <label htmlFor={category.category_title} className="ml-4">{category.category_title}</label>
                                                                <span className="checkmark"></span>
                                                            </div>
                                                        </li>
                                                    )
                                                })
                                            }
                                            {
                                                console.log("catid",this.state.catid)
                                            }


                                            </ul>
                                    </div>
                                </div>

                                {/* <div className="sidebar-widget mt-45">
                                    <h4 className="pro-sidebar-title">Filter By Price </h4>
                                    <div className="price-filter mt-10">
                                        <div className="price-slider-amount">
                                            <input type="text" id="amount" name="price"  placeholder="Add Your Price" />
                                        </div>
                                        <div id="slider-range"></div>
                                    </div>
                                </div> */}


                             </div>
                        </div>
                    
                        <div className="col-lg-9">
                            {/* <div className="shop-top-bar">
                                <div className="select-shoing-wrap">
                                    <div className="shop-select">
                                        <select>
                                            <option value="">Sort by newness</option>
                                            <option value="">A to Z</option>
                                            <option value=""> Z to A</option>
                                            <option value="">In stock</option>
                                        </select>
                                    </div>
                                    <p>Showing 1–12 of 20 result</p>
                                </div>
                                <div className="shop-tab nav">
                                    <a className="active" href="#shop-1" data-toggle="tab">
                                        <i className="fa fa-table"></i>
                                    </a>
                                    <a href="#shop-2" data-toggle="tab">
                                        <i className="fa fa-list-ul"></i>
                                    </a>
                                </div>
                            </div> */}
                            

                            <div className="shop-bottom-area mt-35">
                                <div className="tab-content jump">
                                    <div id="shop-1" className="tab-pane active">

                                        <div className="row">
                                                {
                                                    this.state.items.length?this.state.items.map(({item_id,item_name,item_img,item_price,item_saleprice,cat_id,item_desc})=>{
                                                        return <ProductOfCollection id={item_id} description={item_desc} catid={cat_id} AddTocart={this.AddTocart} key={item_id} name={item_name} img={"https://www.heydemo.ml/nathumalapi/uploads/"+item_img} price={item_price} saleprice={item_saleprice} />
                                                    }):<div className="col-md-12"><h2 className="text-center">{this.state.noitemMsg}</h2></div>
                                                }
                                        </div>
                                       


                                        {/* {
                                            this.state.all||!(this.state.Bhugga||this.state.Reodi||this.state.Gachak||this.state["Sukhi Bhaaji"])?<AllItems  AddTocart={this.AddTocart} />:null
                                        }
                                        {
                                             this.state.Bhugga?<AllItems catid={"5"} AddTocart={this.AddTocart} />:null 
                                        }
                                        {
                                             this.state.Reodi?<AllItems catid={"1"} AddTocart={this.AddTocart} />:null 
                                        }
                                        {
                                             this.state.Gachak?<AllItems catid={"4"} AddTocart={this.AddTocart} />:null 
                                        }
                                        {
                                             this.state["Sukhi Bhaaji"]?<AllItems catid={"3"} AddTocart={this.AddTocart} />:null 
                                        }
                                        {
                                             this.state.Sweets?<AllItems catid={"2"} AddTocart={this.AddTocart} />:null 
                                        } */}
                                    </div>
                                   
                                </div> 
                                <div className="pro-pagination-style text-center mt-30">
                                    {/* <ul>
                                        <li><a className="prev" href="#"><i className="fa fa-angle-double-left"></i></a></li>
                                        {
                                            this.state.paginate.map(item=>{
                                                console.log(item);
                                                return item
                                            })
                                        }
                                        <li><a className="active" href="#">1</a></li>
                                        <li><a href="#">2</a></li>
                                        <li><a className="next" href="#"><i className="fa fa-angle-double-right"></i></a></li>
                                    </ul> */}


                                       {
                                           this.state.items.length?<ReactPaginate
                                           previousLabel={"<<"}
                                           nextLabel={">>"}
                                           breakLabel={"..."}
                                           breakClassName={"break-me"}
                                           pageCount={Math.ceil(this.state.totalitems/12)}
                                           marginPagesDisplayed={2}
                                           pageRangeDisplayed={5}
                                           onPageChange={this.handlePagination}
                                           containerClassName={""}
                                           subContainerClassName={"active"}
                                           activeClassName={"active"}/>:null
                                       } 
                                    
                                </div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
            
                   </Layout>
              
        )
    }
}

export default Shop
