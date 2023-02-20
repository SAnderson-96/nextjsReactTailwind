'use client';
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";
import Technologies from "@/components/technologies";


export default function Ptd() {

  const data = require("../../../public/ptd/ptd.json");
  let featureKey = 0;
  return (
          <>
          <main className='px-5'>
            <section className='min-h-screen my-auto'>
              <div className="min-w-screen text-center font-bold text-4xl xl:text-6xl">
                <h1>{data.name}</h1>
                <div className="w-100 flex items-center content-center flex-col">
                  <Link href="https://jeffbrin.github.io/PokemonTowerDefensePlay" target="_blank" className="group">
                    <Image src={data.hero} alt={data.heroalt} height={850} width={850} className="m-auto left-0 right-0
                                hover:bg-red-400 hover:opacity-50 absolute
                                hover:rounded-lg"
                    />
                    <div className="invisible group-hover:visible text-6xl top-28 relative">Click to Play!</div>
                  </Link>
                </div>
              </div>
            </section>
            <section className="min-h-screen">
              <div className="flex flex-wrap items-center justify-evenly">

                {data.cards.map(card => (
                        <div className="bg-zinc-800 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:my-12
                        p-4 rounded-xl mx-5 my-6 relative group" key={card.cardId}>
                          <Image className="h-auto mx-auto rounded-xl" src={card.image}
                            alt="" width={600}
                            height={400}></Image>
                          <Link href={data.url} target="_blank">
                            <div className="text-xl font-bold lg:text-3xl
                            bg-green-800 w-fit rounded-md p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    hover:cursor-pointer">
                              {card.header}
                            </div>
                          </Link>
                          <div className="bg-zinc-700 xl:bg-blue-900 rounded-md py-1 px-2 ml-5 absolute bottom-5 right-5 opacity-80 group-hover:opacity-100">
                            <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md opacity-100">
                              {card.body}
                            </div>
                          </div>
                        </div>
                        ))}

              </div>
            </section>
            <section className="min-h-screen">
              <Technologies technologies={data.technologies}/>
            </section>
          </main>
          </>
          );
}
