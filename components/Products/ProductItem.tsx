import Image from 'next/image'
import React from 'react'

const ProductItem:React.FC = () => {
  return (
    <div  className='p-4  bg-white  rounded-md group hover:shadow-md transition-all'>
        <a href="#">
            <figure dir='rtl' className='flex flex-col  justify-between gap-4'>
                 <picture className='self-center '>
                    <Image className="group-hover:scale-110 transition-all" alt='' src={'/images/products/product1.jpg'} width={150} height={150}/>
                 </picture>
                 <figcaption>
                    <h2 className='text-slate-600 tracking-tight text-md'>شامپو بدن Relax بوتانیس ۴۰۰ میلی لیتری</h2>
                    <p className='text-sm text-slate-500 mt-2'>۱.۸ لیتر</p>
                 </figcaption>
                 <footer className='flex items-end gap-2 justify-between'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <label className='bg-red-500 font-bold text-white p-1 rounded-md'>%30</label>
                            <small className='text-xs line-through text-slate-600'>75000</small>
                        </div>
                        <div className='flex items-center gap-1 mt-2'>
                            <strong className='text-lg text-slate-800'>52500</strong>
                            <small className="text-slate-600">تومان</small>
                        </div>
                    </div>

                    <button className='btn btn-sm font-normal btn-primary btn-outline rounded-full'>افزودن به سبد</button>
                 </footer>
            </figure>
        </a>
    </div>
  )
}

export default ProductItem