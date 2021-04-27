import React from 'react';
import './navigation.css';
 
import {NavLink} from 'react-router-dom';

const Link = {
    width: "100px",
    padding: "6px 12px",
    margin: "0 9px 9px",
    background: "green",
    textDecoration: "none",
    color: "white",
}

const Navbar = () => {
    return (
        <div className="Navbar">
        <NavLink to="/home" exact style={Link} activeStyle={{background: "Black"}}>Home</NavLink>
        <NavLink to="/about" exact style={Link} activeStyle={{background: "Black"}}>About</NavLink>

<NavLink to="/contact" exact style={Link} activeStyle={{background: "Black"}}>Contact</NavLink>
          
        </div>
    )
}

export default Navbar;