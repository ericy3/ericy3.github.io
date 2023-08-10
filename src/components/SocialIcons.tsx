import React from "react";
import { AiFillMail } from "react-icons/ai";
import { BiLogoLinkedin} from "react-icons/bi";
import { FaGithubAlt } from "react-icons/fa";
import { HiOutlineDocumentText } from "react-icons/hi";



const SocialIcons = () => {
    return (
        <div className="flex flex-row flex-wrap justify-end mt-4 mr-2">
            <a href={require("../assets/Eric_Yang_Resume.pdf")} className="mr-3 p-3 bg-slate-300 rounded-full hover: cursor-pointer hover:bg-amber-800">
                <HiOutlineDocumentText size={25}/>
            </a>
            <a href={"https://github.com/ericy3"} className="mr-3 p-3 bg-slate-300 rounded-full hover: cursor-pointer hover:bg-amber-600">
                <FaGithubAlt size={25}/>
            </a>
            <a href={"https://www.linkedin.com/in/ericy3/"} className="mr-3 p-3 bg-slate-300 rounded-full hover: cursor-pointer hover:bg-amber-200">
                <BiLogoLinkedin size={25} />
            </a>
            <a href={"https://www.linkedin.com/in/ericy3/"} className="p-3 bg-slate-300 rounded-full hover: cursor-pointer hover:bg-amber-400">
                <AiFillMail size={25} />
            </a>
        </div>
    )
}

export default SocialIcons