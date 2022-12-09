import React from 'react'
import {BiSearch} from 'react-icons/bi'
const SearchInput:React.FC = () => {
  return (
   
    <div className='flex items-center text-slate-600 text-sm bg-white py-2 px-4 rounded-full w-full md:w-5/12'>
        <BiSearch className="  ml-2" size={20}/>
        <input  className='w-full   outline-none placeholder-slate-600' placeholder="جستوجوی برند یا محصول" type="text"/>
    </div>
  )
}

export default SearchInput