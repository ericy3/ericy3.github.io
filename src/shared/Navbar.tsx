import React from 'react'
import { Link } from 'react-router-dom';


function NavItem({dest, name, home}: {dest: string; name: string, home?: boolean}) {
    if (!home) {
        return (
            <div className="font-quicksand text-xl font-semibold hover:text-gray-400">
                <Link to={dest} className="navbar-item">{name}</Link>
            </div>
        );
        } 
    return (
        <div className="font-quicksand text-xl font-extrabold hover:text-green-800">
            <Link to={dest} className="navbar-item">{name}</Link>
        </div>
    );
}

function NavLink({dest, name}: {dest: string; name: string}) {  
    return (
        <div className="font-quicksand text-xl font-semibold hover:text-gray-400">
            <a href={dest} className="navbar-item">{name}</a>
        </div>
    );
}

const HomeButton = () => {
    return (
        <div className='flex pl-10 text-center'>
            <NavItem home dest="/" name="Eric Yang" />
        </div>
    );
}

const Navigation = () => {
    return (
        <div className='flex flex-row space-x-24 pr-20'>
            <NavItem dest="/experience" name="Experience" />
            <NavItem dest="/projects" name="Projects" />
            <NavLink dest="null" name="Resume" />
            <NavItem dest="/photos" name="Photos" />
        </div>
    );
}


function Navbar() {
    return (
        <div className='bg-slate-50 border-b border-zinc-400'>
            <div className='flex flex-row h-24 justify-between items-center '>
                <HomeButton />
                <Navigation />
            </div>
        </div>

    )
}

export default Navbar;