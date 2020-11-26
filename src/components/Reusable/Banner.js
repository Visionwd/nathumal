import React from 'react'
import Bg from "../../img/contact/page-header.jpg"
function Banner({title}) {
    return (
        <div>
            <div className="container-fluid">
                <div className="row" style={{backgroundImage:`url(${Bg})`,backgroundPosition:"center"}}>
                    <div className="col-12">
                        <div className="my-5 text-center pt-40 pb-40" >
                            <h2 className="text-white">{title}</h2>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner
