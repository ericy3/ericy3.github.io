import React, { useEffect, useState } from 'react'
import { NavHashLink } from 'react-router-hash-link';
import { Link } from 'react-router-dom';


function NavItem({name, home, dest}: {name: string, home?: boolean, dest?: string}) {
    if (!home) {
        return (
            <div className="font-quicksand text-xl font-semibold hover:text-gray-400">
                {/* <Link to={dest} className="navbar-item">{name}</Link> */}
                <div>{name}</div>
            </div>
        );
        } else if (dest != null) {
            <div className="font-quicksand text-xl font-semibold hover:text-gray-400">
                <Link to={dest} className="navbar-item">{name}</Link>
            </div>
        }
    return (
        <div className="font-quicksand text-xl font-extrabold hover:text-green-800">
            {/* <Link to={dest} className="navbar-item">{name}</Link> */}
            <div>{name}</div>
        </div>
    );
}

function ResumeLink({name}: {name: string}) {  
    return (
        <div className="font-quicksand text-xl font-semibold text-slate-500 hover:text-gray-300">
            <a href={require("../assets/Eric_Yang_Resume.pdf")} target="_blank" className="navbar-item" rel="noreferrer">Resume</a>
        </div>
    );
}

const HomeButton = () => {
    return (
        <div className='flex pl-10 text-center'>
            <NavHashLink smooth to="/#about">
                <NavItem home name="Eric Yang" />
            </NavHashLink>
        </div>
    );
}

const Navigation = () => {
    const [clicked, setClicked] = useState(false);
    const [isAtTop, setIsAtTop] = useState(window.scrollY === 0);



      const handleScroll = () => {
        const currentScrollPos = window.scrollY;
        setIsAtTop(currentScrollPos === 0)
      };

      useEffect(() => {
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, [isAtTop]);

      function handleNavClick(){
        if (clicked){
          setClicked(false);
        }
      }

    return (
        <div className='flex flex-row space-x-24 pr-24'>
            <NavHashLink smooth to="/#experience" onClick={handleNavClick}> 
                <NavItem name="Experience" />
            </NavHashLink>
            <NavHashLink smooth to="/#projects" onClick={handleNavClick}>
                <NavItem name="Projects" />
            </NavHashLink>
            <NavHashLink smooth to="/#contact" onClick={handleNavClick}>
                <NavItem name="Contact" />
            </NavHashLink>
            <ResumeLink name="Resume" />
            <NavHashLink smooth to="/#photos" onClick={handleNavClick}>
                <NavItem name="Photos" />
            </NavHashLink>
        </div>
    );
}


function Navbar() {
    return (
        <div className='hidden lg:block bg-slate-50 border-b border-zinc-400'>
            <div className='flex flex-row h-24 justify-between items-center '>
                <HomeButton />
                <Navigation />
            </div>
        </div>

    )
}

export default Navbar;