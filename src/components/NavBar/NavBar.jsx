import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
  let nav = props.user ?
    <div className="fullBar">
      <span className='NavBar-link'>Welcome, {props.user.name}</span>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/funkos" className='NavBar-link' >My FunkoPop Collection</Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to="/wishlist" className='NavBar-link' >WishList  </Link>&nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='' className='NavBar-link' onClick={props.handleLogout}>Logout</Link>
      
    </div>
    :
    <div>
      <Link to='/login' className='NavBar-link'>Login</Link>
      &nbsp;&nbsp;|&nbsp;&nbsp;
      <Link to='/signup' className='NavBar-link'>Sign up</Link>
    </div>;

  return (
    <div className='NavBar'>
      {nav}
    </div>
  );
};

export default NavBar;
