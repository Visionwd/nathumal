import React,{useState} from 'react'

function SearchItem({handleSearchFilter}) {

    const[searchable,setsearchable] = useState("")

    const handleSearchFilterChange =(e)=>{
        setsearchable(e.target.value)
    }

    const handleSubmit =(e)=>{
        e.preventDefault()
        handleSearchFilter(searchable)
    }
    return (
        
            <div className="pro-sidebar-search mb-50 mt-25">
                <form className="pro-sidebar-search-form" onSubmit={handleSubmit}>
                    <input type="text" 
                    placeholder="Search here..." 
                    onChange={handleSearchFilterChange}
                        />
                    <button disabled={searchable?false:true} type="submit">
                        <i className="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        
    )
}

export default SearchItem
