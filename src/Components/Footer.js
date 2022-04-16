import React from 'react'

export const Footer = () => {
  let footerStyle = {
    position : "relative",
    marginBottom : "0px",
  }
  return (
    <footer className='bg-dark text-light text-center' style={footerStyle}>
        <p className='py-3'>CopyRight &copy; TodoList.com</p>
    </footer>
  )
}
