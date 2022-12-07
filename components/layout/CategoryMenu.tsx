import React from "react";
import {useContext} from 'react'
import {MenuConext} from '../../context/MenuContext'
import {AiOutlineClose} from 'react-icons/ai'
const CategoryMenu = () => {

  const [showMenu,setShowMenu] = useContext(MenuConext)
  if(showMenu){
     document.body.style.overflow="hidden"
  }else {
     document.body.style.overflow="scroll"
  }
  return (
    <div className={`p-5 w-80 fixed top-0 bottom-0 right-0 transition-transform  ${showMenu ? ' ' : 'translate-x-96'}  bg-white z-10 `}>
      <div className=" flex justify-between top-5">
        <span className="font-bold tracking-tight text-lg">دسته بندی ها</span>
        <button onClick={()=> setShowMenu(false)}><AiOutlineClose/></button>
      </div>
     
        <ul className="flex flex-col gap-5 list-disc mt-10 mr-7 h-full overflow-y-scroll">
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
          <li className="group">
            <a href="" className="flex flex-col">
              <span className="text-primary text-sm font-bold">لبنیات</span>
              <span className="text-slate-400 group-hover:text-success">
                شیر ،پنیر،دوغ،کره،کشک
              </span>
            </a>
          </li>
        </ul>
      
    </div>
  );
};

export default CategoryMenu;
