import React from "react";
import {motion} from "framer-motion";
import Image from "next/image";
import {Tooltip} from "@nextui-org/react";

export default function Skill({directionLeft, logo, name, proficiency, heightClass, widthClass, isOverlay = false}) {
    if (!isOverlay) {
        return (
            <div
                className="group relative flex cursor-pointer">
                <div style={{
                    display: "flex",
                    justifyContent: "center"
                }}>
                    <div style={{position: "relative"}}>
                        <Image
                            src={logo}
                            className={`${heightClass ? heightClass : "h-16"} ${widthClass ? widthClass : "w-16"} rounded-full border border-gray-500 object-cover md:w-28 md:h-28 xl:w-32 xl:h-32
                  filter group-hover:grayscale transition duration-300 ease-in-out`} alt={`logo for ${name}`}
                            width={512} height={512} style={{objectFit: "contain"}}
                        />
                    </div>

                </div>
            </div>
        )
    }
    return (
        <div
            className="group flex cursor-pointer">
            <div style={{
                display: "flex",
                justifyContent: "center"
            }}>
                <div>
                    <Image
                        src={logo} className={`${heightClass ? heightClass : "h-16"} ${widthClass ? widthClass : "w-16"} rounded-full border border-gray-500 object-cover md:w-28 md:h-28 xl:w-32 xl:h-32
                  filter group-hover:grayscale transition duration-300 ease-in-out`} alt={`logo for ${name}`}
                        width={512} height={512} style={{objectFit: "contain"}}
                    />
                </div>

            </div>

            <div className={`${heightClass ? heightClass : "h-16"} ${widthClass ? widthClass : "w-16"}absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out
            group-hover:bg-white xl:w-32 xl:h-32 md:w-28 md:h-28 rounded-full z-0`}>
                <div className="flex items-center justify-center h-full">
                    <p className="text-3xl text-black opacity-100 font-bold">{proficiency}%</p>
                </div>
            </div>
        </div>

    );
}