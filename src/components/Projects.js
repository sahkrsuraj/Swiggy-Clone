import React from "react";

const Projects = (props)=>{
  const{title,descrip,liveUrl,github} = props;

  return(
    <div className="w-[680px] flex flex-col gap-5 px-4">
      <h1 className="text-[30px] font-medium">{title}</h1>
      <div className="flex gap-5 items-center">
        <div className="h-44 w-2 bg-gradient-to-b from-[#2ff0e3] to-[#096575]"></div>
        <div className="flex flex-col gap-3">
          <p>{descrip}</p>
          <ul className="flex items-center gap-2">
            <li className="font-bold"><a href={liveUrl}><span className="border-b-[1px] border-[#2ff0e3] inline-block">View Site</span></a></li>
            <li className="font-bold"><a href={github}><span className="border-b-[1px] border-[#2ff0e3] inline-block">Github</span></a></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Projects;