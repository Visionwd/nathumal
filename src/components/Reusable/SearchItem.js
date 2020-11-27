import React,{useState} from 'react'

function SearchItem({handleSearchFilter}) {

    const[searchable,setsearchable] = useState("")

    const handleSearchFilterChange =(e)=>{
        setsearchable(e.target.value)
    }

    return (
        
            <div className="pro-sidebar-search mb-50 mt-25">
                <form className="pro-sidebar-search-form">
                    <input type="text" 
                    placeholder="Search here..." 
                    onChange={handleSearchFilterChange}
                        />
                    <button onClick={()=>handleSearchFilter(searchable)}  disabled={searchable.length?false:true}>
                        <i className="pe-7s-search"></i>
                    </button>
                </form>
            </div>
        
    )
}

export default SearchItem
