import React, { Component } from 'react'
import store from "store"
import axios from "axios"
import { navigate } from "gatsby";
import Layout from "../../components/Layout"
import logo from "../../img/logo/logo.png"
import Banner from "../../components/Reusable/Banner"
import razorpayImg from "../../img/razorpay/razorpay.png"

function loadScript(src) {
	return new Promise((resolve) => {
		const script = document.createElement('script')
		script.src = src
		script.onload = () => {
			resolve(true)
		}
		script.onerror = () => {
			resolve(false)
		}
		document.body.appendChild(script)
	})
}

export class CartCheckout extends Component {
  state = {
    shippingCharge: 0,
    totalWeight:0,
    shipping: 0,
    packaging: 50,
    items: [],
    subtotal: 0,
    total: 0,
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    city: "",
    address: "",
    postal_code: "",
    state: "",
    stateslist: [],
    country: "India",
    isLudhiana: true,
  }

  componentDidMount() {
    let currentTotal = 0

    if (store.get("persist")) {
      store.get("persist").map(item => {
        currentTotal +=
          Number(item.saleprice) * item.quantity * Number(item.quantno)
      })
    }
    this.setState({
      ...this.state,
      items: store.get("persist"),
      subtotal: currentTotal,
    })
    this.getStates()
  }

  handleChange = e => {
    this.setState({
      ...this.state,
      [e.target.id]: e.target.value,
    })
  }

  handleState = e => {
    let myshipping = this.state.stateslist.filter(
      state => state.name === e.target.value
    )

    let currentShipping = Number(myshipping[0].shipping_charges)
    let totalweight = 0;
    this.setState({
      ...this.state,
      state: myshipping.name,
      shippingCharge: Number(myshipping[0].shipping_charges),
      packaging: Number(myshipping[0].shipping_charges),
    })
    
    this.state.items.map(
      item =>
        {
          // currentShipping +=Math.ceil(Number(item.quantity * Number(item.quantno))) * Number(myshipping[0].shipping_charges)
          totalweight += Number(item.quantity * Number(item.quantno))
        }
    )
    console.log(
      "Charges=>",
      myshipping[0].shipping_charges,
      currentShipping,
      this.state.subtotal
    )
     
    currentShipping +=
      Math.ceil(totalweight) * Number(myshipping[0].shipping_charges)
    let currentTotal = Number(this.state.subtotal) + currentShipping

    this.setState({
      ...this.state,
      state: e.target.value,
      shipping: currentShipping,
      total: Number(currentTotal),
    })
  }


  handleLudhiana =(e)=>{
      console.log("radio=>",e.target.value);
if (e.target.value=="inside") {
    this.setState({
      ...this.state,
      isLudhiana: true,
      shipping: 50,
      state: "",
      total: Number(this.state.subtotal)+50,
    })
} if (e.target.value == "outside") {
  this.setState({
    ...this.state,
    isLudhiana: false,
    state: "",
    shipping: 0,
    total: Number(this.state.subtotal),
  })
}

    

// if (e.target.value=="inside") {
//     this.setState({
//         ...this.state,
//         shipping:50
//     })
// }
  }



  ////////////////////////////////////////////////////
  getStates = () => {
    axios
      .post(
        "https://pixelshakers.com/nathumalapi/appapi/get_states",
        JSON.stringify({
          service_request: {
            params: {
              country_id: "101",
            },
            request_info: {
              source_type: "android",
            },
          },
          version: "1.0",
        }),
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => {
        console.log(res)
        this.setState({
          ...this.state,
          stateslist: res.data.states,
        })
      })
  }

  ///////////////////////////////////////////////////////////////////////////////////
  displayRazorpay = async (id, serverid) => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js")

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?")
      return
    }

    // const data = await fetch('http://localhost:1337/razorpay', { method: 'POST' }).then((t) =>
    //     t.json()
    // )
    // console.log(data)

    const options = {
      key: "rzp_live_g24tkxIzwDaRTi",
      currency: "INR",
      amount: String(Number(this.state.subtotal) * 100),
      order_id: id,
      name: `Order #${serverid}`,
      description: "Pay Online",
      image: logo,
      handler: function (response) {
        axios
          .post(
            "https://www.pixelshakers.com/nathumalapi/appapi/update_order",
            {
              service_request: {
                params: {
                  payment_id: `${response.razorpay_payment_id}`,
                  order_id: `${response.razorpay_order_id}`,
                  payment_signature: `${response.razorpay_signature}`,
                },
                request_info: {
                  source_type: "android",
                },
              },
              version: "1.0",
            },
            {
              headers: {
                "Content-Type": "application/json",
              },
            }
          )
          .then(res => {
            navigate("/success/thanks", {
              state: {
                data: res.data,
              },
            })
            store.set("persist", [])
            // alert(response.razorpay_payment_id)
            // alert(response.razorpay_order_id)
            // alert(response.razorpay_signature)
          })
      },
      prefill: {
        name: this.state.firstname,
        email: this.state.email,
        phone_number: this.state.phone,
      },
    }

    const paymentObject = new window.Razorpay(options)
    paymentObject.on("payment.failed", function (response) {
      navigate("/success/Retry", {
        state: {
          data: res.data,
        },
      })
      // alert(response.error.code);
      // alert(response.error.description);
      // alert(response.error.source);
      // alert(response.error.step);
      // alert(response.error.reason);
      // alert(response.error.metadata.order_id);
      // alert(response.error.metadata.payment_id);
    })
    paymentObject.open()
  }

  //////////////////////////////////////////
  handleSubmit = e => {
    e.preventDefault()

    this.state.items && this.state.items.length > 0 && this.state.items.map(item=>{
      item.itemTotal = (item.quantno * item.quantity) * Number(item.saleprice)
    })
    console.log("submitted state data=> ", this.state)
    axios
      .post(
        "https://www.pixelshakers.com/nathumalapi/appapi/add_order",
        {
          service_request: {
            params: this.state,
            request_info: {
              source_type: "android",
            },
          },
          version: "1.0",
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      )
      .then(res => {
        console.log("success: ", res)
        //////////////////////////////////////////////////////
        this.displayRazorpay(res.data.payorderid, res.data.orderid)
        /////////////////////////////////////////////////////

        store.set("order", [res.data])
        // navigate("/success/thanks",{
        //     state:{
        //         data:res.data
        //     }
        // })
      })
      .catch(err => {
        console.log(err)
      })
  }


  render() {
    return (
      <Layout>
        <Banner title={"Checkout"} />

        <div className="checkout-area pt-95 pb-100">
          <form onSubmit={this.handleSubmit} autoComplete="new-password">
            <div className="container">
              <div className="row">
                <div className="col-lg-7">
                  <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>First Name</label>
                          <input
                            autoComplete="off"
                            onChange={this.handleChange}
                            required
                            value={this.state.firstname}
                            type="text"
                            id="firstname"
                            name="firstname"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Last Name</label>
                          <input
                            onChange={this.handleChange}
                            required
                            value={this.state.lastname}
                            type="text"
                            id="lastname"
                            name="lastname"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Phone</label>
                          <input
                            onChange={this.handleChange}
                            required
                            value={this.state.phone}
                            type="number"
                            id="phone"
                            name="phone"
                          />
                        </div>
                      </div>
                      <div className="col-lg-6 col-md-6">
                        <div className="billing-info mb-20">
                          <label>Email Address</label>
                          <input
                            onChange={this.handleChange}
                            required
                            value={this.state.email}
                            type="email"
                            id="email"
                            name="email"
                          />
                        </div>
                      </div>
                      <div className="col-lg-12">
                        <div className="billing-info mb-20">
                          <label>Street Address</label>
                          <input
                            onChange={this.handleChange}
                            required
                            value={this.state.address}
                            className="billing-address"
                            placeholder="House number and street name"
                            type="text"
                            id="address"
                            name="address"
                          />
                          {/* <input onChange={this.handleChange} required value={this.state.} placeholder="Apartment, suite, unit etc." type="text"  id="addressLine2" name="addressLine2"  /> */}
                        </div>
                      </div>

                      {/* //////////////////////////////////  in Ludhiana or not ///////////////////////////////////// */}
                      <div className="col-12 d-none">
                        <div className="billing-info mb-20">
                          <h5 className="mb-3">Delivery Location</h5>

                          <div className="row">
                            <div className="col-6">
                              <div
                                className="form-check mr-5"
                                onChange={this.handleLudhiana}
                                style={{ display: "inline" }}
                              >
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  value={"inside"}
                                  name="gender"
                                  id="inludhiana"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="inludhiana"
                                >
                                  Within Ludhiana
                                </label>
                              </div>
                            </div>
                            <div className="col-6">
                              <div
                                className="form-check"
                                onChange={this.handleLudhiana}
                                style={{ display: "inline" }}
                              >
                                <input
                                  class="form-check-input"
                                  type="radio"
                                  value={"outside"}
                                  name="gender"
                                  id="outludhiana"
                                />
                                <label
                                  className="form-check-label"
                                  htmlFor="outludhiana"
                                >
                                  Outside Ludhiana
                                </label>
                                {/* <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="ludhiana"
                                id="inludhiana"
                                value={true}
                              />
                              <label
                                className="form-check-label"
                                htmlFor="inludhiana"
                              >
                                Within Ludhiana
                              </label>
                            </div>

                            <div className="form-check">
                              <input
                                className="form-check-input"
                                type="radio"
                                name="ludhiana"
                                id="outside"
                                value={false}
                                checked
                              />
                              <label
                                className="form-check-label"
                                htmlFor="outside"
                              >
                                Outside Ludhiana
                              </label>
                            </div>
                           */}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      {/* ////////////////////////////////////////////////////////////////////////////////////////////// */}

                      <div
                        className="col-12"
                        // style={{
                        //   display: this.state.isLudhiana ? "none" : "block",
                        // }}
                       
                      >
                        <div className="row">
                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                              <label>Country</label>
                              <input
                                onChange={this.handleChange}
                                value={this.state.country}
                                className="form-control"
                                type="text"
                                placeholder="India"
                                readOnly
                                disabled
                                // required={this.state.isLudhiana ? true : false}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="form-group">
                              <label htmlFor="states">State</label>
                              <select
                                className="form-control"
                                name="state"
                                id="state"
                                onChange={this.handleState}
                                value={this.state.state}
                                // required={this.state.isLudhiana ? true : false}
                              >
                                <option value="">select state</option>
                                {this.state.stateslist.length
                                  ? this.state.stateslist.map(state => {
                                      return (
                                        <option
                                          value={state.name}
                                          key={state.id}
                                        >
                                          {state.name}
                                        </option>
                                      )
                                    })
                                  : null}
                              </select>
                            </div>
                            {/* <div className="billing-info mb-20">
                                <label>State / County</label>
                                <input onChange={this.handleChange} required value={this.state.} type="text" id="state" name="state"  />
                            </div> */}
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                              <label>Town / City</label>
                              <input
                                onChange={this.handleChange}
                                value={this.state.city}
                                type="text"
                                id="city"
                                name="city"
                                // required={this.state.isLudhiana ? true : false}
                              />
                            </div>
                          </div>

                          <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                              <label>Postcode / ZIP</label>
                              <input
                                onChange={this.handleChange}
                                value={this.state.postal_code}
                                type="number"
                                id="postal_code"
                                name="postal_code"
                                // required={this.state.isLudhiana ? true : false}
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* <div className="col-lg-12">
                            <div className="billing-select mb-20">
                                <label>Country</label>
                                <input className="form-control" type="text" placeholder="Readonly input here..." readonly />
                                <select>
                                    <option>Select a country</option>
                                    <option>India</option>
                                    <option>USA</option>

                                    <option>UK</option>
                                    <option>Germany</option>
                                    <option>Canada</option>
                                    <option>Austrailia</option>
                                </select>
                            </div>
                    </div> */}
                    {/* <div className="checkout-account-toggle open-toggle2 mb-30">
                        <button className="btn-hover checkout-btn" type="submit">Make Payment</button>
                    </div> */}
                    <div className="additional-info-wrap">
                      <h4>Additional information</h4>
                      <div className="additional-info">
                        <label>Order notes</label>
                        <textarea
                          placeholder="Notes about your order, e.g. special notes for delivery. "
                          name="message"
                        ></textarea>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-5">
                  <div className="your-order-area">
                    <h3>Your order</h3>
                    <div className="your-order-wrap gray-bg-4">
                      <div className="your-order-product-info">
                        <div className="your-order-top">
                          <ul>
                            <li>Product</li>
                            <li>Total</li>
                          </ul>
                        </div>
                        <div className="your-order-middle">
                          <ul>
                            {this.state.items
                              ? this.state.items.map(item => {
                                  return (
                                    <li key={item.id}>
                                      <span className="order-middle-left">
                                        {item.quantno} x {item.quantity}kg x{" "}
                                        {item.name}
                                      </span>{" "}
                                      <span className="order-price">
                                        ₹
                                        {item.saleprice *
                                          item.quantity *
                                          Number(item.quantno)}{" "}
                                      </span>
                                    </li>
                                  )
                                })
                              : null}
                          </ul>
                        </div>


                        <div className="your-order-total">
                          <ul>
                            <li className="order-total">Total</li>
                            <li>₹{this.state.subtotal}</li>
                          </ul>
                        </div>

                        <div className="your-order-bottom">
                          <ul>
                            <li className="your-order-shippingCharge">
                              Shipping
                            </li>
                            {console.log(
                              "shipping charge and shipping:=>",
                              this.state.shippingCharge,
                              this.state.shipping
                            )}
                            {/* <li>testing:{this.state.shippingCharge?this.state.shippingCharge:null}</li> */}
                            <li>
                              ₹
                              {this.state.shipping ? this.state.shipping : null}
                            </li>
                          </ul>
                        </div>

                        <div className="your-order-total">
                          <ul>
                            <li
                              className="order-total"
                              style={{ color: "#1860AB" }}
                            >
                              Grand Total
                            </li>
                            <li className="order-total">
                              <span
                                className="text-right"
                                style={{ color: "#1860AB" }}
                              >
                                ₹{" "}
                                {this.state.total
                                  ? this.state.total
                                  : this.state.subtotal}
                              </span>
                            </li>
                          </ul>
                        </div>
                      </div>
                      <div className="payment-method">
                        <div className="radio">
                          <label>
                            <input
                              type="radio"
                              name="optradio"
                              defaultChecked
                            />
                            <img
                              src={razorpayImg}
                              className="ml-1"
                              style={{ width: "50%" }}
                            />
                          </label>
                        </div>
                        {/* <img src="https://razorpay.com/assets/razorpay-logo-white.png" alt="razorpay"/> */}

                        {/* <div className="payment-accordion element-mrg">
                                <div className="panel-group" id="accordion">
                                    <div className="panel payment-accordion">
                                        <div className="panel-heading" id="method-one">
                                            <h4 className="panel-title">
                                                <a data-toggle="collapse" data-parent="#accordion" href="#method1">
                                                    Direct bank transfer
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="method1" className="panel-collapse collapse show">
                                            <div className="panel-body">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel payment-accordion">
                                        <div className="panel-heading" id="method-two">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#method2">
                                                    Check payments
                                                </a>
                                            </h4>
                                        </div>
                                        <div id="method2" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="panel payment-accordion">
                                        <div className="panel-heading" id="method-three">
                                            <h4 className="panel-title">
                                                <a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#method3">
                                                    Cash on delivery
                                                </a>
                                            </h4>
                                        </div>

                                        <div id="method3" className="panel-collapse collapse">
                                            <div className="panel-body">
                                                <p>Please send a check to Store Name, Store Street, Store Town, Store State / County, Store Postcode.</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                      </div>
                    </div>
                    <div className="Place-order mt-25">
                      {console.log(
                        "btn status",
                        this.state.subtotal &&
                          this.state.total &&
                          this.state.items.length
                          ? false
                          : true
                      )}
                      <button className="btn-hover" type="submit">
                        Place Order
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </Layout>
    )
  }
}

export default CartCheckout
