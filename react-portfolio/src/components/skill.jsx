import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";

export default function Skill({directionLeft, logo, name, proficiency}) {
    return (
        <div
            className="group relative flex cursor-pointer">
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div style={{position: "relative"}}>
                    <Image
                        src={logo} className="rounded-full border border-gray-500
                        object-cover w-16 h-16 md:w-28 md:h-28 xl:w-32 xl:h-32
              filter group-hover:grayscale transition duration-300 ease-in-out" alt={`logo for ${name}`}
                        width={256} height={256} style={{objectFit: "contain"}}
                    />
                </div>

            </div>

            <div className="absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
            group-hover:bg-white h-16 w-16 xl:w-32 xl:h-32 md:w-28 md:h-28 rounded-full z-0">
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl text-black opacity-100 font-bold">{proficiency}%</p>
                </div>
            </div>
        </div>

    );
}