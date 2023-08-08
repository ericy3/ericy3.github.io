import React from 'react'
import { Link } from 'react-router-dom';
import NameSection from './NameSection';


function NavItem({dest, name}: {dest: string; name: string}) {
    return (
        <div className="flex font-quicksand text-xl">
            <Link to={dest} className="navbar-item">{name}</Link>
        </div>
    );
}


function Navbar() {
    return (
        <div className='h-24 bg-slate-50 content-center'>
            <div>
                <NameSection />
            </div>
            <div className='flex flex-row place-content-end space-x-24 pr-24'>
                <NavItem dest="/" name="Home" />
                <NavItem dest="/photos" name="Photos" />
            </div>
        </div>
    )
}

export default Navbar;