import React from "react";
import { ProjectItems } from "./ProjectItems";


type ProjectItemFormatType = {
    name: string,
    skills: string,
    photoName?: string,
    details: string,
}

const ProjectItemFormat = (props: ProjectItemFormatType) => {
    return (
        <div className="flex flex-col text-lg font-normal font-raleway bg-white mb-4 ml-2 mr-2 max-w-lg p-8 space-y-4 text-left h-56 max-h-56 min-h-full border-2 border-gray-500 border-solid">
           <h5 className="font-bold text-2xl underline underline-offset-4"> {props.name} </h5>
            <p> {props.details} </p>
            <p className="italic"> {props.skills} </p>
        </div>
    )

}

const ProjectItem = () => {
    return (
        <div className="md:flex-row md:flex-wrap md:items-center mt-10 p-4">
            <div className="flex flex-col md:grid md:grid-rows-2 md:grid-flow-col justify-center items-center">
                {ProjectItems.map((item) => {
                    return (
                        <div>
                            <ProjectItemFormat name={item.name} skills={item.skills} details={item.details} />
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

const Projects = () => {
    return (
        <div id="projects" className="scroll-mt-24 bg-lime-50 pt-12 font-bold text-4xl pt-8 pb-16 border-b-2 border-gray-600">
            <div className="font-raleway underline decoration-gray-600 decoration-4 decoration-solid underline-offset-8">
                Some of my projects!      
            </div>      
                <ProjectItem />
        </div>
    )
}

export default Projects;