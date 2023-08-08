import React from 'react';


const Introduction = () => {
    return (
        <div className="flex flex-row font-mono text-2xl self-end w-11/12">
            <div className="">
                I am a junior studying <a className="text-blue-800"> CS @ UC Berkeley. </a>
                I'm interested in software development, systems programming, and machine learning. 
                This is my work in progress website that I'm using as a portfolio but also 
                eventually as a place to share my photos and thoughts on the media I consume.
            </div>
        </div>
    )
}
const About = () => {
    return (
        <div className="flex flex-row font-quicksand text-lg self-center">
            <div className="w-1/6" />
            <div className="flex flex-col w-1/3 inline-block mt-20 text-right mr-12">
                <div className="text-7xl mb-5">
                    hey, i'm <a className="text-green-800">eric yang.</a>  
                </div>
                <Introduction/>
            </div>
            <div className="w-1/3 ml-14 place-self-center">
                <img id="portrait" className="w-3/4 rounded-full border-2 border-green-700" alt="portrait" src="../pictures/square_portrait.jpg" />
            </div>
            <div className="w-1/6"/>
        </div>
    )
}

// document.getElementById('portrait').ondragstart = function() { return false; };

export default About;

