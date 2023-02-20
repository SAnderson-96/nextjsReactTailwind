'use client';
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import MoreProjectCard from "@/components/moreProjectCard";

export default function More() {
    const moreData = require('../../../public/more/more.json')
    return (
        <>
            <main className="text-3xl xl:text-6xl text-center font-code px-5">
                {`< More Projects />`}
                <section className="p-10">
                    <div className="min-w-screen text-center font-bold text-4xl xl:text-6xl">
                        <div className="container my-12 mx-auto px-4 md:px-12">
                            <div className="flex flex-wrap items-center justify-evenly -mx-1 lg:-mx-4">
                                {moreData.projects.map(project => (
                                        <MoreProjectCard key={project.id} name={project.name} date={project.date}
                                                         image={project.image} author={project.author}
                                                         credit={project.imageCredit}/>
                                    )
                                )}
                            </div>
                        </div>
                    </div>
                </section>
            </main>
        </>
    );
}