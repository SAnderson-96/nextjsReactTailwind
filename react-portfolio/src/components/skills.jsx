import React from 'react';
import Image from "next/image";
import jsImage from "../../public/js-logo.png";
import deved from "../../public/dev-ed-wave.png";
import {motion} from "framer-motion";
import Skill from "@/components/skill";

export default function Skills({}){
  return(
          <motion.div
            initial={{opacity:0}}
            whileInView={{opacity:1}}
            transition={{duration:1.5}}
            className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10
          min-h-screen justify-center xl:space-y-0 mx-auto items-center snap-top">
            <h3 className="absolute top-24 tracking-[20px] text-gray-500 text-2xl">Skills</h3>

            <h3 className="absolute top-36 tracking-[3px] text-gray-500 text-sm">Hover over a skill for current proficiency</h3>

            <div className="absolute grid grid-cols-3 md:grid-cols-4 xl:grid-cols-4 gap-5">
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
              <Skill/>
            </div>
          </motion.div
>
  );
}