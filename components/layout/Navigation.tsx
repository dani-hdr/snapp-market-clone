import React, { useEffect } from 'react'
import {useContext} from 'react'
import {MenuConext} from '../../context/MenuContext'

const Navigation = () => {

 const [showMenu,setShowMenu] = useContext(MenuConext)
 useEffect(()=>{
  if(showMenu){
    document.body.style.overflow="hidden"
 }else {
    document.body.style.overflow="scroll"
 }
 },[showMenu])

  return (
    <div className='fixed md:hidden px-12 py-8  w-full bottom-0 z-20 bg-white border-t'>
        <div className="flex justify-between text-slate-600 text-sm font-bold">
            <div><a href='#' className='hover:text-primary'>خانه</a></div>
            <div><button onClick={()=> setShowMenu(!showMenu)} className='hover:text-primary'>دسته بندی</button></div>
            <div><button className='hover:text-primary'>سبد خرید</button></div>
        </div>
    </div>
  )
}

export default Navigation          