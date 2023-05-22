import React from 'react';
import Skill from "@/components/skill";
import {Tooltip} from "@nextui-org/react";

export default function Skills({skills, widthClass, heightClass}) {
    let key = 0;
    const keyString = "Skill"
    return (
        <div
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 top-10
           justify-center xl:space-y-0 mx-auto items-center snap-top rounded-3xl min-h-screen inline-block
            dark:bg-none">
            <h3 className="absolute top-12 tracking-[20px] text-yellow-400 text-4xl xl:text-6xl font-bold">Skills</h3>
            <h3 className="absolute top-28 tracking-[3px] text-yellow-600 text-lg lg:text-2xl xl:text-4xl invisible lg:visible">Hover
                over a skill for
                current
                proficiency</h3>

            <div className="absolute grid grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-5 top-44">
                {skills.map(skill => (
                    <Tooltip key={keyString + key++} content={`${skill.name} - ${skill.proficiency}%`}>
                        <Skill directionLeft={Math.random() < 0.5}
                               logo={skill.image}
                               name={skill.name}
                               proficiency={skill.proficiency}
                               widthClass={widthClass}
                               heightClass={heightClass}
                        />
                    </Tooltip>
                ))}
            </div>
        </div>
    );
}