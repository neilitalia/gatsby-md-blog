import React from 'react'
import { Link } from 'gatsby'

const NavBar: React.FC = () => {
  return (
    <div className="flex flex-row justify-between items-center w-full">
      <h3 className="p-4">blog.neilitalia.dev</h3>
      <div>
        <Link to="/" className="p-4">Blog</Link>
        <Link to="/about" className="p-4">About</Link>
        <a href="https://neilitalia.dev/#contact" className="p-4">Contact</a>
      </div>
    </div>
  )
}

export default NavBar
