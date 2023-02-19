import Image from "next/image";

export default function Dnd() {
    return (
        <>
            <main className="px-5">
                <section className="min-h-screen my-auto no-scrollbar">
                    <h1 className="text-center text-2xl my-5 xl:text-6xl">DND Character Creation Website</h1>
                    <div className="flex flex-wrap items-center justify-evenly">
                        <div className="bg-zinc-800 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:my-12
                        p-4 rounded-xl mx-5 my-6 relative">
                            <Image className="h-auto mx-auto rounded-xl" src="/600x400.png" alt="" width={600}
                                   height={400}></Image>
                            <div className="text-xl font-bold lg:text-3xl
                            bg-green-800 w-fit rounded-md p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Create Characters
                            </div>
                            <div className="bg-zinc-700 rounded-md py-1 absolute bottom-5 right-5">
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    lorem lorem lorem
                                </div>
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    That That That That That That
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-800 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:my-12
                        p-4 rounded-xl mx-5 my-6 relative">
                            <Image className="h-auto mx-auto rounded-xl" src="/600x400.png" alt="" width={600}
                                height={400}></Image>
                            <div className="text-xl font-bold lg:text-3xl
                            bg-green-800 w-fit rounded-md p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Track your Campaigns
                            </div>
                            <div className="bg-zinc-700 rounded-md py-1 absolute bottom-5 right-5">
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    lorem lorem lorem
                                </div>
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    That That That That That That
                                </div>
                            </div>
                        </div>

                        <div className="bg-zinc-800 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:my-12
                        p-4 rounded-xl mx-5 my-6 relative">
                            <Image className="h-auto mx-auto rounded-xl" src="/600x400.png" alt="" width={600}
                                   height={400}></Image>
                            <div className="text-xl font-bold lg:text-3xl
                            bg-green-800 w-fit rounded-md p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Homebrew Spells
                            </div>
                            <div className="bg-zinc-700 rounded-md py-1 absolute bottom-5 right-5">
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    lorem lorem lorem
                                </div>
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    That That That That That That
                                </div>
                            </div>
                        </div>


                        <div className="bg-zinc-800 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 lg:my-12
                        p-4 rounded-xl mx-5 my-6 relative">
                            <Image className="h-auto mx-auto rounded-xl" src="/600x400.png" alt="" width={600}
                                height={400}></Image>
                            <div className="text-xl font-bold lg:text-3xl
                            bg-green-800 w-fit rounded-md p-2 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                Character Sheet
                            </div>
                            <div className="bg-zinc-700 rounded-md py-1 absolute bottom-5 right-5">
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    lorem lorem lorem
                                </div>
                                <div className="text-lg mx-5 lg:text-xl mx-auto w-auto rounded-md">
                                    That That That That That That
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </main>
        </>
    );
}
