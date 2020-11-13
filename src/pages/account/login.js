import React from 'react'
import Layout from '../../components/Layout'
import {Form,Field,useFormik } from "formik"

function Login() {

    const formik = useFormik({
        initialValues: {
          username: '',
          password: '',
          email:""
        },
        onSubmit: values => {
          alert(JSON.stringify(values, null, 2));
          console.log(values);
        },
      });

    return (
        <Layout>

<div className="login-register-area pt-100 pb-100">
    <div className="container">
        <div className="row">
            <div className="col-lg-7 col-md-12 ml-auto mr-auto">
                <div className="login-register-wrapper">
                    <div className="login-register-tab-list nav">
                        <a className="active" data-toggle="tab" href="#lg1">
                            <h4> login </h4>
                        </a>
                        <a data-toggle="tab" href="#lg2">
                            <h4> register </h4>
                        </a>
                    </div>
                    <div className="tab-content">
                        <div id="lg1" className="tab-pane active">
                            <div className="login-form-container">
                                <div className="login-register-form">
                                    
                                    <form action="#" method="post" onSubmit={formik.handleSubmit}>
                                  
                                        <input  placeholder="Username"
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                         />
                                        <input type="password" 
                                         placeholder="Password"
                                         id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                          />
                                        <div className="button-box">
                                            <div className="login-toggle-btn">
                                                <input type="checkbox" />
                                                <label>Remember me</label>
                                                <a href="#">Forgot Password?</a>
                                            </div>
                                            <button type="submit"><span>Login</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                        <div id="lg2" className="tab-pane">
                            <div className="login-form-container">
                                <div className="login-register-form">
                                    <form action="#" method="post" onSubmit={formik.handleSubmit}>
                                    <input  placeholder="Username"
                                        id="username"
                                        name="username"
                                        type="text"
                                        onChange={formik.handleChange}
                                        value={formik.values.username}
                                         />
                                        <input type="password" 
                                         placeholder="Password"
                                         id="password"
                                        name="password"
                                        onChange={formik.handleChange}
                                        value={formik.values.password}
                                          />
                                        <input type="email" 
                                         placeholder="email"
                                         id="email"
                                        name="email"
                                        onChange={formik.handleChange}
                                        value={formik.values.email}
                                          />
                                        <div className="button-box">
                                            <button type="submit"><span>Register</span></button>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
        </Layout>
    )
}

export default Login
