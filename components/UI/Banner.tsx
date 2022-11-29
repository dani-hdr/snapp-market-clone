import Image from 'next/image';
import React from 'react'
interface Props {
    imageUrl:string;
    title:string;
    link:string;
}
const Banner:React.FC<Props> = ({imageUrl,title,link}) => {
  return (
    <div className='py-7'>
        <a title={title} href={link}>
            <picture>
                <Image className='rounded-md' alt={title} width={2000} height={50} src={imageUrl}/>
            </picture>
        </a>
    </div>
  )
}

export default Banner