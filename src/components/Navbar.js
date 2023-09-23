import React from 'react'
import {Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <ul className=' flex gap-8 p-4 justify-center bg-blue-400'>
        <Link to="/TheWorld">The World</Link>
        <Link to="/Message">Messages</Link>
        <Link to="/Profile">Profile</Link>
        <Link to="/Settings">Settings</Link>
      </ul>
    </div>
  )
}

export default Navbar