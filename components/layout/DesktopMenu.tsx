import React from 'react'
import {useContext} from 'react'
import { MenuConext } from '../../context/MenuContext'
const DesktopMenu = () => {

    const [showMenu] = useContext(MenuConext)
  return (
    <div className={`${showMenu ? 'md:block' : 'hidden'} hidden    absolute bg-white p-10 z-10 top-14 left-0 right-0   shadow-md`}>
          <ul className="grid grid-cols-4 gap-5 list-disc ">
          <li className="group ">
            <a href="" className="flex flex-col">
              <span className="text-primary text-base font-bold">لبنیات</span>
              <span className="text-slate-400 text-sm mt-2 group-hover:text-success truncate">
                شیر ،پنیر،دوغ،کره،کشک 
              </span>
            </a>
          </li>
         
        </ul>
    </div>
  )
}

export default DesktopMenu