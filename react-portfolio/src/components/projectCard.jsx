import React from 'react';
import Image from "next/image";
import jsImage from "../../public/js-logo.png";
import deved from "../../public/dev-ed-wave.png";

export default function ProjectCard({title, builtWith, data, date}){
  let key = 0;
  return(
          <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
          w-[300px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40
          cursor-pointer transition-opacity duration-200 overflow-hidden">
            <Image
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              src={deved} alt="avatar"
            />

            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-light">{title}</h4>
              <p className="font-medium mt-1 text-lg">BUILT WITH</p>
              <div className="flex space-x-2 my-2">
                {builtWith.map(logo=>(
                        <Image key={key++} src={logo} width="64" height="64" className="h-10 w-10 rounded-4" alt=""/>
                        ))}
              </div>
              <p className="uppercase py-5 text-gray-300">{date}</p>
              <div className="h-3/6 overfow-scroll no-scrollbar">
                <ul className="list-disc space-y-4 ml-5 text-lg">
                  {data.map(summary =>(
                    <li>{summary}</li>
                  ))}
                </ul>
              </div>

            </div>
          </article>

  );
}
