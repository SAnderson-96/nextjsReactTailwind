import React from 'react';
import Image from "next/image";
import { Tooltip } from '@nextui-org/react';
import jsImage from "../../public/js-logo.png";
import deved from "../../public/dev-ed-wave.png";

export default function ProjectCard({title, builtWith, data, date, avatar}){
  let key = 0;
  let techKey = 0;
  return(
          <article className="flex flex-col rounded-lg items-center space-y-7 flex-shrink-0
          w-[300px] md:w-[600px] xl:w-[800px] snap-center bg-[#292929] p-5 hover:opacity-100 opacity-40
          cursor-pointer transition-opacity duration-200 overflow-y-auto overflow-x-hidden no-scrollbar">
            <Image
              className="w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center"
              src={avatar} alt="avatar" width="256" height="256"
            />

            <div className="px-0 md:px-10">
              <h4 className="text-4xl font-light">{title}</h4>
              <p className="font-medium mt-1 text-lg">BUILT WITH</p>
              <div className="flex space-x-2 my-2">
                {builtWith.map(technology=>(
                        <Tooltip content={technology.name} key={`Technology${techKey++}`}>
                          <Image key={key++} src={technology.path} width="64" height="64" className="h-10 w-10 rounded-4" alt=""/>
                        </Tooltip>

                        ))}
              </div>
              <p className="uppercase py-5 text-gray-300">{date}</p>
              <div className="overfow-y-auto no-scrollbar">
                <ul className="list-disc space-y-4 ml-5 text-lg">
                  {data.map(summary =>(
                    <li className="text-2xl text-white" key={"liKey"+ key++}>{summary}</li>
                  ))}
                </ul>
              </div>

            </div>
          </article>

  );
}
