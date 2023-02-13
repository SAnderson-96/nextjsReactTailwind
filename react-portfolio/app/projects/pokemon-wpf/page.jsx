import Image from "next/image";
import design from "../../../public/pokemon-wpf/pokemonStats.gif";
import pokemonWPF from "../../../public/pokemon-wpf/pokemonWPF.png";

export default function PokemonWpf() {
    return (
        <>
            <main className="px-10">

                <section className="min-h-screen my-auto">
                    <div className="text-center py-5">
                        <h1 className="text-red-500 text-3xl font-bold font-code">
                            Pokemon WPF Storage Application
                        </h1>
                        <Image src={pokemonWPF} className="rounded-md px-2 pt-5" alt=""/>
                    </div>
                    <div className="text-center">
                        <h2 className="text-2xl py-5 text-cyan-500 text-code">Built with C# and Visual Studio</h2>
                    </div>
                </section>

                <section>
                    <div className="text-center">
                        <div className="text-center shadow-xl shadow-teal-800 p-10 rounded-xl my-10">
                            <Image alt=""
                                   className="mx-auto"
                                   src={design}
                            />
                            <h3 className="text-lg font-medium pt-4">Why?</h3>
                            <p className="pt-4 pb-2">
                                Had to create and application of persistent storage of data and what better than
                                Pokemon?
                            </p>
                            <h4>Tools I Used:</h4>
                            <p className="text-gray-200 py-1">WPF</p>
                            <p className="text-gray-200 py-1">C#</p>
                            <p className="text-gray-200 py-1">.CSV files</p>
                            <p className="text-gray-200 py-1">XAML</p>
                            <p className="text-gray-200 py-1">.NET Framework</p>
                            <p className="text-gray-200 py-1">Object-Oriented Programing</p>
                        </div>
                    </div>
                </section>

            </main>
        </>
    );
}
