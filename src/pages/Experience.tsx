import React, { useState } from "react";
import { ExperienceItems } from "./ExperienceItems";
import { AiOutlineCaretDown } from "react-icons/ai";



const Education = () => {
    return (
        <div className="flex flex-row justify-between font-raleway mt-10 pb-14 lg:mr-24">
            <div className="mx-auto">
                <div className="my-4 text-2xl font-bold p-2 rounded-3xl border-2 border-black">
                    Education
                </div>
                <AiOutlineCaretDown size={30} className="mx-auto my-6"/>
                <div className="flex flex-col text-center bg-yellow-100 p-10  max-w-lg rounded-3xl border-2 border-black">
                <ExperienceRow 
                    name="University of California, Berkeley" 
                    date="August 2021 - May 2025" 
                    role="Bachelor's of Arts in Computer Science"/>
                    <div className="underline decoration-double"> Coursework </div>
                    <li>Structure and Interpretation of Computer Programs </li>
                    <li>Designing Information Systems I + II </li>
                    <li>Data Structures </li> 
                    <li> Foundations of Data Science </li>
                    <li> Multivariable Calculus </li> 
                    <li>Discrete Mathematics and Probability Theory </li> 
                    <li> Machine Structures </li>
                    <li> Principles and Techniques of Data Science </li> 
                    <li> Linux System Administration </li> 
                    <li> Economic Demography </li> 
                </div>
            </div>      
        </div>
    );
}

const JobExperience = () => {
    const [currentJob, setCurrentJob] = useState(0);


    return (
        <div className="flex flex-col lg:flex-row font-raleway mt-10 pb-14 lg:ml-24">
            <div className="mx-auto">
                <div className="my-4 text-2xl font-bold place-self-center p-2 rounded-3xl border-2 border-black">
                    Experience
                </div>
                <div className="flex flex-row justify-evenly mb-4 p-1"> 
                {ExperienceItems.map((item, index) => (              
                    <div
                        className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg ${index === currentJob ? 'bg-gray-200' : ''}`}
                        onClick={() => setCurrentJob(index)}
                        key={index}
                        >
                        {item.company}
                        </div>                
                ))}
                </div>
                <div className="flex flex-col text-center bg-lime-100 p-10  max-w-lg rounded-3xl border-2 border-black">
                    <JobContent job={ExperienceItems[currentJob]} />
                </div>
                <button />
            </div>      
        </div>
    );
}


const ExperienceRow = ({name, date, role}: {name: string, date: string, role: string}) => {
    return (
        <div>
            <img src={require("../assets/Berkeley_Logo.png")} className="h-28 rounded-full mx-auto mb-5" alt="Berkeley Logo"/>
            <div className="text-xl font-bold "> {name} </div>
            <div className="text-l font-semibold mt-2"> {role} </div>
            <div className="text-m font-medium mt-2 "> {date} </div>        
        </div>
    )
}

type ExperienceItemProps = {
    company: string,
    role: string,
    date: string,
    detail: string[],
} 

const JobContent = ({job}: {job: ExperienceItemProps}) => {
    return (
        <div>
            <ExperienceRow name={job.company} date={job.date} role={job.role} />
            <div>
                {
                    job.detail.map((detail) => {
                        return (
                            <li> {detail} </li>
                        );
                    })
                }
            </div>
        </div>
    );
}




const Experience = () => {
    return (
        <div className="flex flex-col lg:flex-row justify-center w-screen mx-auto bg-orange-50">
            <Education />
            <JobExperience />
        </div>

    )
}

export default Experience;