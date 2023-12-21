import React from 'react'
import "./style.css"

const ContentWrapper = ({children}) => {
  return (
    <div className="wrapper"> {children} </div>
  )
}

export default ContentWrapper