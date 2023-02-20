import Image from "next/image";

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
                        p-4 rounded-xl mx-5 my-6 relative" key={card.cardId}>
                                <Image className="h-auto mx-auto rounded-xl border border-red-500" src={card.image}
                                       alt="" width={600}
                                       height={400}></Image>
                                <div className="text-xl font-bold lg:text-3xl
                            bg-green-800 w-fit rounded-md p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2
                                    hover:cursor-pointer">
                                    {card.header}
                                </div>
                                <div className="bg-zinc-700 rounded-md py-1 px-2 ml-5 absolute bottom-5 right-5">
                                    <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                        {card.body}
                                    </div>
                                </div>
                            </div>
                        ))}

                    </div>
                </section>
            </main>
        </>
    );
}
