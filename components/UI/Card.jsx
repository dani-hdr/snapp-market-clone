import React from 'react'

const Card = ({children}) => {
  return (
    <div className='bg-white rounded shadow-sm border p-4'>{children}</div>
  )
}

export default Card