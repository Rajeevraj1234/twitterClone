import React from 'react'
import { BsSearch } from "react-icons/bs";

const Search = () => {
  return (
    <div className='flex items-center bg-gray-200 p-3 rounded-3xl gap-2 select-none outline-none '>
        <BsSearch/>
        <input type="text" placeholder='Search' className='bg-gray-200 select-none outline-none ' />
    </div>
  )
}

export default Search