import Image from 'next/image';
import React from 'react'
interface Props {
    imageUrl:string;
    title:string;
    link:string;
}
const Banner:React.FC<Props> = ({imageUrl,title,link}) => {
  return (
    <div>
        <a title={title} href={link}>
            <picture>
                <Image className='rounded-md' alt={title} width={1924} height={134} src={imageUrl}/>
            </picture>
        </a>
    </div>
  )
}

export default Banner