import React from 'react'
import { Link } from 'react-router-dom';


function NavItem(dest: string, name: string,) {
    return (
        <Link to={dest} className="navbar-item">{name}</Link>
    );
}


function Navbar() {
    return (
        <NavItem dest="/" name="Home" />
    )
}

export default Navbar;