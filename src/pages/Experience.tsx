import React from "react";




const Education = () => {
    return (
        <div className="flex flex-row h-screen bg-orange-50 ">
            <div className="w-1/4" />
            <div className="flex flex-row justify-between p-12 font-raleway">
                <div className="text-xl font-bold">
                    University of California, Berkeley
                    <div className="text-l font-semibold">
                        Bachelor's of Arts - Computer Science
                    </div>
                </div>
                <div className="text-xl font-bold">
                    August 2021 - May 2025
                </div>
            </div>
            <div className="w-1/4" />
        </div>
    )
}


const Experience = () => {
    return (
        <div>
            <Education />
        </div>
    )
}

export default Experience;