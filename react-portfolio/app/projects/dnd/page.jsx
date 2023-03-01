import Image from "next/image";
import Link from "next/link";
import Technologies from "@/components/technologies";

export default function Dnd() {
    const data = require('../../../public/dnd/dnd.json');
    return (
        <>
            <main className="px-5">
                <section className="min-h-screen my-auto no-scrollbar">
                    <h1 className="text-center text-2xl my-5 xl:text-6xl">DND Character Creation Website</h1>
                    <div className="flex flex-wrap items-center justify-evenly">

                        {data.cards.map(card => (
                            <div className="bg-zinc-800 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:my-12
                        p-4 rounded-xl mx-5 my-6 relative group" key={card.cardId}>
                                <Image className="h-auto mx-auto rounded-xl" src={card.image}
                                       alt="" width={600}
                                       height={400}></Image>
                              <Link href={data.url} target="_blank">
                                <div className="text-md font-bold lg:text-3xl
                            bg-green-800 w-fit rounded-md p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    hover:cursor-pointer group-hover:opacity-100 opacity-25 hover:bg-green-600">
                                  {card.header}
                                </div>
                              </Link>
                                <div className="bg-zinc-700 xl:bg-blue-900 rounded-md lg:py-1 lg:px-2 lg:ml-5 absolute bottom-5 right-5 opacity-60 group-hover:opacity-100">
                                    <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md opacity-100">
                                        {card.body}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
              <section className="min-h-screen">
                <Technologies className="mx-auto" technologies={data.technologies}/>
              </section>
            </main>
        </>
    );
}
