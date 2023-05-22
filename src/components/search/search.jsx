import React from "react"
import "./search.css"
import { HiOutlineSearch } from 'react-icons/hi'
import Filter from "../filter/filter";

const Search = ({ setSearch, setCurrentPage }) => {

    return (
        <div className="search-bar">
            
            <form className="search">
                <input type="text" placeholder="Rick Sanchez" name="search" pattern=".*\S.*"
                    onChange={(e) => {
                        const timer = setTimeout(() => {
                            setCurrentPage(1)
                            setSearch(e.target.value)
                        }, 2000);
                        return () => clearTimeout(timer);
                    }} />
                <button className="search-btn" onClick={(e) => { e.preventDefault() }}>
                    <HiOutlineSearch size={25} />
                </button>
            </form>
            <Filter />
        </div>
    )
};

export default Search;
