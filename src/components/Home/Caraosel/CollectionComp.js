import React from 'react'
import { Link } from "gatsby";

function CollectionComp(id,imgsrc,title) {
    return (
      <div className="collection-product-2 col-md-4  mb-10 ">
        <Link to="/collections/shop" state={{ id: id }}>
          <img src={imgsrc} alt="sweeet category first" />
        </Link>
        <div className="collection-content-2 text-center">
          <h3>{title}</h3>
        </div>
      </div>
    )
}

export default CollectionComp
