import React from 'react'
import Layout from "../components/Layout"
import CollectionCard from '../components/Reusable/CollectionCard'

function Collections() {
    return (
        <Layout>
                <div className="container">
                    <div className="row">
                        <div className="col-md-4">
                            <CollectionCard type="Sweet" />
                        </div>
                        <div className="col-md-4">
                            <CollectionCard type="Winter collection"/>
                        </div>
                        <div className="col-md-4">
                            <CollectionCard type="Dry fruit sweets" />
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-4">
                            <CollectionCard  type="Savories"/>
                        </div>
                    </div>
                </div>
        </Layout>
    )
}

export default Collections
