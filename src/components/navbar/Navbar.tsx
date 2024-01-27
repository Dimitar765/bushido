// import React from 'react'
import { useEffect } from 'react'
import './Navbar.css'
const Links = [
  { id: 1, name: 'Home', url: '/'},
  { id: 2, name: 'About', url: '/about' },
  { id: 3, name: 'Contact', url: '/contact' }
]

function Navbar() {
  useEffect(() => {}, [])
  return (
   <>
   <div className="container">
   <div className='navContainer'>
    <div className="logo">
      <img src="logo.png" alt="" />
    </div>
    <div className="linkContainer">
    {Links.map((link) => (
   <ul>
        <li key={link.id}><a href={link.url}>{link.name}</a></li>
        </ul>
    ))}
    </div>
    </div>
    </div>
    </>
    )
}

export default Navbar