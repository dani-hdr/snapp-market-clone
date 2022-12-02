import React from 'react'

const Container:React.FC<any> = ({children}) => {
  return (
    <div className="container mx-auto px-4 lg:px-36 ">{children}</div>
  )
}

export default Container   