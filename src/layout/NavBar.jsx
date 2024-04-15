import React from 'react'
import Logo from'../assets/logo.png'
import Girl from '../assets/girl.png'
import '../style/navbar.css'
import { Link } from 'react-router-dom'

const NavBar = () => {
  return (
    <>
      <main className='nav-bar d-flex justify-content-between align-items-center'>
        <Link to='/'><img src={Logo} alt="Logo" className='logo'/></Link>
        <nav className=''>
          <ul className='list-unstyled fw-bold fs-6 d-flex gap-4 align-items-center'>
            <li>
              <Link to='/newtask' className='link'>New Task</Link>
            </li>
            <li>
              <Link to='/alltask' className='link'>All Task</Link>
            </li>
            <img src={Girl} alt="Profile" className='image-fluid girl'/>
          </ul>
        </nav>
      </main>
      <hr />
    </>
  )
}

export default NavBar