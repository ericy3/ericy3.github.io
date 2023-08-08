import React from 'react'
import { Link } from 'react-router-dom';


function NavItem({dest, name}: {dest: string; name: string}) {
    return (
        <div className="flex font-quicksand text-xl items-center">
            <Link to={dest} className="navbar-item">{name}</Link>
        </div>
    );
}

function NavLink({dest, name}: {dest: string; name: string}) {  
    return (
        <div className="flex font-quicksand text-xl">
            {/* <a  to={dest} className="navbar-item">{name}</a> */}
        </div>
    );
}

const HomeButton = () => {
    return (
        <div className='flex flex-col pl-12 text-center'>
            <NavItem dest="/" name="Eric Yang" />
        </div>
    );
}

const Navigation = () => {
    return (
        <div className='flex flex-row place-content-end space-x-24 pr-24'>
            <NavItem dest="/experience" name="Experience" />
            <NavItem dest="/projects" name="Projects" />
            <NavItem dest="/photos" name="Photos" />
        </div>
    );
}


function Navbar() {
    return (
        <>
        <div className='h-24 bg-slate-50 border-b border-zinc-400'>
            <HomeButton />
            <Navigation />
        </div>
        </>

    )
}

export default Navbar;