import React from 'react'

const Container = ({children}) => {
  return (
    <div className="container mx-auto px-4 md:px-16 lg:px-20 ">{children}</div>
  )
}

export default Container   