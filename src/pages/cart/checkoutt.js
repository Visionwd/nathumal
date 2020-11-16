import React from 'react'
import Layout from '../../components/Layout'
import {  } from "formik";

function Checkout() {





    return (
<Layout>
<div className="checkout-area pt-95 pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-7">
                <div className="billing-info-wrap">
                    <h3>Billing Details</h3>
                    <div className="row">
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>First Name</label>
                                <input type="text" id="firstName" name="firstName" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Last Name</label>
                                <input type="text" id="secondName" name="secondName"  />
                            </div>
                        </div>
                       
                       
                        <div className="col-lg-12">
                            <div className="billing-info mb-20">
                                <label>Street Address</label>
                                <input className="billing-address" placeholder="House number and street name" type="text" id="addressLine1" name="addressLine1"  />
                                <input placeholder="Apartment, suite, unit etc." type="text"  id="addressLine2" name="addressLine2"  />
                            </div>
                        </div>
                        <div className="col-lg-12">
                            <div className="billing-info mb-20">
                                <label>Town / City</label>
                                <input type="text" id="city" name="city"  />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>State / County</label>
                                <input type="text" id="state" name="state"  />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Postcode / ZIP</label>
                                <input type="text" id="postcode" name="postcode" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Phone</label>
                                <input type="text" id="phone" name="phone" />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>Email Address</label>
                                <input type="text" id="email" name="email"  />
                            </div>
                        </div>
                        <div className="col-lg-6 col-md-6">
                            <div className="billing-info mb-20">
                                <label>country</label>
                                <input class="form-control" type="text" placeholder="India" readonly disabled />
                            </div>
                        </div>
                    </div>
                    {/* <div className="col-lg-12">
                            <div className="billing-select mb-20">
                                <label>Country</label>
                                <input class="form-control" type="text" placeholder="Readonly input here..." readonly />
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
                    <div className="checkout-account-toggle open-toggle2 mb-30">
                        <button className="btn-hover checkout-btn" type="submit">Make Payment</button>
                    </div>
                    <div className="additional-info-wrap">
                        <h4>Additional information</h4>
                        <div className="additional-info">
                            <label>Order notes</label>
                            <textarea placeholder="Notes about your order, e.g. special notes for delivery. " name="message"></textarea>
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
                                    <li><span className="order-middle-left">Product Name  X  1</span> <span className="order-price">$329 </span></li>
                                    <li><span className="order-middle-left">Product Name  X  1</span> <span className="order-price">$329 </span></li>
                                </ul>
                            </div>
                            <div className="your-order-bottom">
                                <ul>
                                    <li className="your-order-shipping">Shipping</li>
                                    <li>Free shipping</li>
                                </ul>
                            </div>
                            <div className="your-order-total">
                                <ul>
                                    <li className="order-total">Total</li>
                                    <li>$329</li>
                                </ul>
                            </div>
                        </div>
                        <div className="payment-method">
                            <div className="payment-accordion element-mrg">
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
                            </div>
                        </div>
                    </div>
                    <div className="Place-order mt-25">
                        <a className="btn-hover" href="#">Place Order</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>

        </Layout>
    )
}

export default Checkout
