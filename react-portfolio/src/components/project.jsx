import React from "react";
import dnd from "../../public/dnd/dndLaptop.png";
import Image from "next/image";

export default function Project({projectName, image}){
  return(
          <div className="min-h-screen relative flex flex-col text-left md:flex-row
          max-w-full justify-evenly mx-auto items-center z-0">
            <div className="w-3/6 absolute top-0 bg-[#EF5350]/40 left-0 h-[50px] xl:h-[200px] skew-y-12 hidden xl:block"/>
            <div className="w-3/6 absolute top-[15%] bg-[#EF5350]/40 left-0 h-[50px] xl:h-[200px] -skew-y-12 hidden xl:block"/>
            <h3 className="absolute top-0 xl:top-10 uppercase tracking-[10px] xl:tracking-[20px] text-gray-400
            text-lg xl:text-6xl font-bold font-code">{projectName}</h3>




            <div className="w-full absolute top-[30%] bg-[#139E8F]/50 left-0 h-[200px] xl:h-[500px] -skew-y-12"/>
            <div className="absolute top-[28%]">
              <Image className="h-auto" src={dnd} alt=""/>
            </div>
          </div>
  );
}