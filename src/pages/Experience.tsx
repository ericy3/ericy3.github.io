import React, { useState } from "react";
import { ExperienceItems } from "./ExperienceItems";
import { AiOutlineCaretDown } from "react-icons/ai";
import Sysdig from '../assets/Sysdig_Logo.webp';
import Codify from '../assets/Codify_Logo.png';
import BerkeleyLegends from '../assets/Berkeley_Legends_Logo.png';
import Berkeley_Logo from '../assets/Berkeley_Logo.png';



type StringToPictureType = {
    [key: string]: string,
}

const StringToPicture:StringToPictureType = {
    "Sysdig": Sysdig,
    "Codify": Codify,
    "BerkeleyLegends": BerkeleyLegends,
}



// const Education = () => {
//     return (
//         <div className="flex flex-row justify-between font-raleway mt-10 pb-14 xl:mr-24">
//             <div className="mx-auto">
//                 <div className="my-4 text-2xl font-bold p-2 rounded-3xl border-2 border-black">
//                     Education
//                 </div>
//                 <AiOutlineCaretDown size={30} className="mx-auto my-6"/>
//                 <div className="flex flex-col text-center bg-yellow-100 p-10  max-w-lg rounded-3xl border-2 border-black">
//                 <ExperienceRow 
//                     name="University of California, Berkeley" 
//                     date="August 2021 - May 2025" 
//                     role="Bachelor's of Arts in Computer Science"
//                     photoName={Berkeley_Logo}/>  
//                     <div className="underline decoration-double"> Coursework </div>
//                     <li> Designing Information Systems </li>
//                     <li> Data Structures </li> 
//                     <li> Foundations of Data Science </li>
//                     <li> Multivariable Calculus </li> 
//                     <li> Discrete Mathematics and Probability Theory </li> 
//                     <li> Machine Structures </li>
//                     <li> Principles and Techniques of Data Science </li> 
//                     <li> Linux System Administration </li> 
//                     <li> Internet Architecture </li> 
//                     <li> Database Systems </li>
//                 </div>
//             </div>      
//         </div>
//     );
// }

const JobExperience = () => {
    const [currentJob, setCurrentJob] = useState(0);


    return (
        <div className="flex flex-col font-raleway mt-10 pb-14 xl:ml-24">
            <div className="mx-auto">
                <div>
                    <div className="flex flex-row justify-evenly mb-4 p-1"> 
                    {ExperienceItems.map((item, index) => (              
                        <div
                            className={`hover:bg-gray-200 p-2 cursor-pointer rounded-lg ${index === currentJob ? 'bg-gray-200 border-2 border-gray-500 border-solid' : ''}`}
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
        </div>
    );
}


const ExperienceRow = ({name, date, role, photoName}: {name: string, date: string, role: string, photoName: string}) => {
    return (
        <div>
            <img src={photoName} className="h-28 rounded-full mx-auto mb-5 bg-white border-2 p-2 border-gray-500 border-solid" alt={photoName}/>
            <div className="text-2xl font-extrabold"> {name} </div>
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
    photoName: string,
} 

const JobContent = ({job}: {job: ExperienceItemProps}) => {
    return (
        <div>
            <ExperienceRow name={job.company} date={job.date} role={job.role} photoName={StringToPicture[job.photoName]}/>
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
        <div id="experience" className="scroll-mt-24 flex flex-col xl:flex-row justify-center w-screen mx-auto bg-orange-50 border-b border-zinc-400">
                <div className="my-4 text-2xl font-bold place-self-center p-2 rounded-3xl border-2 border-black">
                    Experience
                </div>
            <JobExperience />
        </div>
    )
}

export default Experience;