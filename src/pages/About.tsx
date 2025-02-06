import React from 'react';
import SocialIcons from '../components/SocialIcons';
import { AiOutlineArrowDown } from 'react-icons/ai';
import portrait from '../assets/square_portrait.jpg';
import Typewriter from 'typewriter-effect';




const Descriptors = () => {
    return (
        <div>
            {/* <div className="md:hidden flex flex-col justify-end mr-2 font-mono text-2xl self-end">
            <a className=""> Student </a>
            <a className="text-green-800"> Software Engineer </a>
            <a className=""> Photographer </a>
            </div> */}
            <div className="hidden md:block flex flex-row justify-end mr-2 font-mono text-2xl self-end ">
                <Typewriter
                    options={{
                        strings: ['Software Engineer', 'Student', 'Photographer'],
                        autoStart: true,
                        loop: true,
                        }}
                />
            </div>
        </div>
    )
}


const Introduction = () => {
    return (
        <div className="flex flex-col font-mono text-lg lg:text-2xl self-center items-center w-6/12 mt-16">
            <div className="font-quicksand font-bold text-3xl w-64 lg:text-4xl mb-8 p-4 border-double border-8 border-green-800">
                About Me
            </div>
            <div className="">
                I'm currently a senior studying CS @ UC Berkeley.
                In my free time, you'll find me coding up fun random widgets, taking photos, skateboarding around, or trying out the newest indie games.
            </div>
            <div>
                I'd love to connect! Feel free to reach out to me at ey3(at)berkeley.edu.
            </div>
        </div>
    )
}



const About = () => {
    return (
        // possible gradient: bg-gradient-to-r from-orange-50 to-orange-100

        <div id="about" className="flex flex-col justify-center pb-8 pt-16 lg:pt-52 bg-orange-100 border-b border-zinc-400">
            <div className="flex flex-col-reverse md:flex-row font-quicksand text-lg self-center">
                <div className="w-1/6" />
                <div className="flex flex-col content-center self-center lg:self-auto w-1/3 inline-block mt-16 text-center lg:text-right mr-2">
                    <div className="text-4xl  lg:text-6xl mb-5">
                        hey, i'm <a className="text-green-800">eric yang.</a>  
                    </div>
                    <Descriptors />
                    <SocialIcons />
                </div>
                <div className="flex self-center w-7/12 md:w-1/3 md:ml-28 ">
                    <img id="portrait" className="self-center md:w-3/4 rounded-full border-2 border-green-700" alt="portrait" src={portrait} />
                </div>
                <div className="w-1/6"/>
            </div>
            <Introduction />
            <div className="flex place-content-center pt-14 animate-bounce">
                <AiOutlineArrowDown size={60} />
            </div>
        </div>
    )
}

// document.getElementById('portrait').ondragstart = function() { return false; };

export default About;

