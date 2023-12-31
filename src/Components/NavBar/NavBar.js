import React from 'react'
import {Link} from 'react-router-dom'
import './NavBar.css'
import SearchIcon from '../../search.svg'
function NavBar() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };
  return (
    <div className='navbar'>
      <Link to='/' onClick={scrollToTop}>
      <img className="logo"src="https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png" alt="Netflix Logo"/>
      </Link>
    
     <Link to='/search'  ><img className="search-image"src={SearchIcon}
           alt="search" 
           /></Link>
      <Link className='login-button'to ="/login">Sign in</Link>
       <Link to="/account"><img className="avatar"src="avatar.jpg" alt="Avatar" /></Link>
    </div>
  )
}

export default NavBar
