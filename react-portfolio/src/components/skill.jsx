import React from "react";
import Image from "next/image";

export default function Skill({directionLeft, logo, name, proficiency, heightClass, widthClass}) {
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
        </div>
        );
}