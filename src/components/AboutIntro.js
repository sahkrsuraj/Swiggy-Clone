import React from "react";
import { useTypewriter, Cursor } from "react-simple-typewriter";

const AboutIntro = ()=>{
  const [text] = useTypewriter({
    words: ["Welcome!", "Ideas into Reality","Intuitive Solutions"],
    loop: true,
  });

  return(
    <div className="w-[680px] flex flex-col gap-5 px-4">
      <h1 className="text-[4.3rem] font-light">
        <span>{text}</span> 
        <Cursor/>
      </h1>
      <div className="flex gap-5 items-center">
        <div className="h-44 w-2 bg-gradient-to-b from-[#2ff0e3] to-[#096575]"></div>
        <div className="flex flex-col gap-3">
          <p>I'm Chelsea Wahengbam, a <b>passionate software developer</b> with a knack for transforming innovative ideas into real-world applications. My journey in tech is driven by a quest to create seamless, intuitive digital experiences.</p>
          <p>Whether it's engineering <b>robust solutions</b> or developing <b>scalable systems</b> for complex projects, I strive to make technology more accessible and engaging for everyone.</p>
        </div>
      </div>
    </div>
  )
}

export default AboutIntro;