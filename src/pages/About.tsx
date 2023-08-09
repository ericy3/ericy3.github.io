import React from 'react';
import SocialIcons from '../components/SocialIcons';
import { AiOutlineArrowDown } from 'react-icons/ai';


const Descriptors = () => {
    return (
        <div>
            <div className="flex flex-row justify-end mr-2 font-mono text-2xl self-end">
                Software Engineer | Student | Photographer
            </div>
        </div>
    )
}


const Introduction = () => {
    return (
        <div className="flex flex-col font-mono text-2xl self-center w-6/12 mt-16">
            <div className="font-quicksand font-bold text-4xl mb-8">
                About Me
            </div>
            <div className="">
                I am a junior studying <a className="text-blue-800"> CS @ UC Berkeley. </a>
                I'm interested in software development, systems programming, and machine learning. 
                This is my work in progress website that I'm using as a portfolio but also 
                eventually as a place to share my photos and thoughts on the media I consume.
            </div>
        </div>
    )
}

const ProfilePic = (width: number) => {
    if (width < 640) {
        return null;
    }
    return <img id="portrait" className="w-3/4 rounded-full border-2 border-green-700" alt="portrait" src="../pictures/square_portrait.jpg" />;
}


const About = () => {
    return (
        <div className="flex flex-col justify-center pt-52 pb-8 bg-orange-100">
            <div className="flex flex-row font-quicksand text-lg self-center">
                <div className="w-1/6" />
                <div className="flex flex-col w-1/3 inline-block mt-16 text-right mr-2">
                    <div className="text-6xl mb-5">
                        hey, i'm <a className="text-green-800">eric yang.</a>  
                    </div>
                    <Descriptors />
                    <SocialIcons />
                </div>
                <div className="flex w-1/3 ml-28 justify-items-center">
                    <img id="portrait" className="w-3/4 rounded-full border-2 border-green-700" alt="portrait" src="../pictures/square_portrait.jpg" />
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

