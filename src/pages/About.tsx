import React from 'react';




const Introduction = () => {
    return (
        <div className="font-mono text-xl">
            <div className="">
                I'm currently a Junior studying in Computer Science at UC Berkeley. 
                I am interested in software development, systems programming, and machine learning.
            </div>
        </div>
    )
}
const About = () => {
    return (
        <div className="flex flex-row text-right font-quicksand text-lg">
            <div className="flex flex-col w-2/3 inline-block mt-12">
                <div className="text-7xl  mb-5">
                    hey, i'm <a className="text-green-800">eric yang.</a>  
                </div>
                <Introduction/>
            </div>
            <div className="w-1/5 ml-12">
                <img className="w-3/4 rounded-full" alt="portrait" src="../pictures/square_portrait.jpg" />
            </div>
        </div>
    )
}

export default About;

