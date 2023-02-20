import React from 'react';
import {motion} from "framer-motion";
import Skill from "@/components/skill";

export default function Skills({skills, widthClass, heightClass, isOverlay=false}) {
    let key = 0;
    const keyString = "Skill"
    return (
        <div
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
          min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-top">
            <h3 className="absolute top-24 tracking-[20px] text-yellow-400 text-4xl xl:text-6xl">Skills</h3>
            <h3 className="absolute top-44 tracking-[3px] text-yellow-600 text-lg xl:text-4xl">Hover over a skill for
                current
                proficiency</h3>

            <div className="absolute grid grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-5 top-64">
                {skills.map(skill => (
                    <Skill directionLeft={Math.random() < 0.5}
                           key={keyString + key++}
                           logo={skill.image}
                           name={skill.name}
                           proficiency={skill.proficiency}
                           widthClass={widthClass}
                           heightClass={heightClass}
                        isOverlay={isOverlay}
                    />
                ))}
            </div>
        </div>
    );
}