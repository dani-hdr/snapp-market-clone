import Image from 'next/image';
import React from 'react'

const Banner = ({imageUrl,title,link}) => {
  return (
    <div className='hidden md:block'>
        <a title={title} href={link}>
            <picture>
                <Image className='rounded-md' alt={title} width={1924} height={134} src={imageUrl}/>
            </picture>
        </a>
    </div>
  )
}

export default Banner