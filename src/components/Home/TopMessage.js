import React from 'react'
import {Link} from 'gatsby'

function TopMessage() {
    return (

        <div className="top-message">
            <p className="text-center"><Link to="/collections/shop" className="text-white">Now Delivering Pan-India ! <strong>SHOP NOW</strong></Link></p>
        </div>
    )
}

export default TopMessage
