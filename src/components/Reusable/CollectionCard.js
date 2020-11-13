import { Link } from 'gatsby'
import React from 'react'

function CollectionCard({type}) {
    return (

<div class="card my-4" >
  <div class="card-body">
    <h5 class="card-title">{type}</h5>
    <h6 class="card-subtitle mb-2 text-muted">festival sweets</h6>
    <p class="card-text"></p>
    <Link to="/collections/mithai" class="card-link btn btn-warning">View Products</Link>
  </div>
</div>
    )
}

export default CollectionCard
