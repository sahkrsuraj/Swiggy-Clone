import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub,FaLinkedin } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { FiArrowLeft } from "react-icons/fi";
import AboutIntro from "./AboutIntro";
import Projects from "./Projects";
import { projectData } from "../utils/ProjectsData";

const About = ()=>{
  const[projectId, setProjectId] = useState(0);

  return(
    <div className="relative w-lvw h-lvh bg-[#343434] text-[#d1d1d1] font-[Montserrat]">
      <div className="relative w-[1280px] h-lvh bg-[#343434] mx-auto flex flex-col justify-between p-8 z-[1000]">
        <div className="h-[80px] flex items-center justify-between">
          <div className="flex items-center cursor-pointer">
            <Link to="/" className="flex gap-3 items-center cursor-pointer">
              <FiArrowLeft size={24}/>
              <p className="text-lg font-medium">Home</p>
            </Link>
          </div>
          <ul className="flex items-center justify-end gap-7">
            <li className="cursor-pointer hover:scale-125 transition-transform duration-300"><a href="https://github.com/ChelseaChanu"><FaGithub size={24}/></a></li>
            <li className="cursor-pointer hover:scale-125 transition-transform duration-300"><a href="https://www.linkedin.com/in/chelsea-wahengbam-1795041a6/"><FaLinkedin size={24}/></a></li>
            <li className="cursor-pointer hover:scale-125 transition-transform duration-300"><a href="mailto:chelseach1asnu@gmail.com"><SiGmail size={24}/></a></li>
          </ul>
        </div>
        <div className="w-[1130px] h-[500px] mx-auto overflow-x-hidden p-8 flex flex-col gap-7">
          <div className="w-10 h-10 bg-[#d1d1d1] relative left-4 cursor-pointer flex items-center justify-center rounded-full hover:scale-125 transition-transform duration-300" onClick={()=>setProjectId(0)}>
            <p className="text-3xl font-bold text-[#343434]">C</p>
          </div>
          <div className="flex gap-10 items-start justify-between">
            { projectId===0? <AboutIntro/>:
              <Projects 
                key={projectId}
                title={projectData.data[projectId-1].title}
                descrip={projectData.data[projectId-1].description}
                liveUrl={projectData.data[projectId-1].liveUrl}
                github={projectData.data[projectId-1].github}
              />
            }
            <div className="relative bg-[#343434]">
              <h2 className="font-light text-[30px] mb-8">Projects</h2>
              <div className="relative bg-[#343434] before:absolute  before:left-[-2px] before:top-[-2px] before:w-[90px] before:h-[90px] before:bg-gradient-to-b from-[#2ff0e3] to-[#096575] before:rounded-tl-lg">
                <ul className="relative z-10 bg-[#343434] rounded-tl-[7px] flex flex-col gap-3 px-8 pt-8">
                  {projectData.data.map((project)=>
                    <li key={project.id} className="cursor-pointer hover:scale-105 transition-transform duration-300 text-sm" onClick={()=>setProjectId(project.id)}>
                      <span className="border-b-[1px] border-[#2ff0e3] inline-block">{project.title}</span>
                    </li>
                  )}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About;