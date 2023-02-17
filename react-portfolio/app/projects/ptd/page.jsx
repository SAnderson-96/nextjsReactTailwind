'use client';
import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import {motion} from "framer-motion";


export default function Ptd() {

  const data = require("../../../public/json/ptd.json");
  let featureKey = 0;
  return (
          <>
          <main className='px-10'>
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
            <section className="relative top-28">
              <motion.div className='min-h-screen my-auto snap text-center'>
                <ul className="list-none hover:list-disc">
                  {data.features.map(feature => (
                          <li className="mt-5 text-2xl" key={`Feature:${featureKey++}`}>{feature.name}</li>
                          ))}
                </ul>

              </motion.div>
            </section>
          </main>
          </>
          );
}
