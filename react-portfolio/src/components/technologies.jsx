'use client';
import React from 'react';
import Skill from "@/components/skill";
import {Tooltip} from '@nextui-org/react';

export default function Technologies({technologies}) {
    let key = 0;
    const keyString = "Skill"
    return (
        <div
            className="flex flex-col text-center md:text-left xl:px-10
          min-h-screen xl:space-y-0 mx-auto snap-top max-w-[1000px]">
            <h3 className="tracking-[10px] text-yellow-400 text-4xl xl:text-6xl my-5 text-center xl:my-24">
                Technologies Used
            </h3>

            <div className="grid grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-5 top-64 my-5 mx-auto">
                {technologies.map(tech => (
                    <Tooltip content={tech.name} key={keyString + key++}>
                        <Skill directionLeft={Math.random() < 0.5}
                               logo={tech.image}
                               name={tech.name}
                               heightClass="h-24 xl:h-48"
                               widthClass="w-24 xl:w-48"
                        />
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}