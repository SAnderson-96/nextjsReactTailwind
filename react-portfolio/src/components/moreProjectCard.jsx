import Image from 'next/image';
import Link from "next/link";
import placeholder from "../../public/600x400.png";
//TODO: maybe add a hover that displays a small summary of the project
export default function MoreProjectCard({name, date}) {
    return (
        <div className="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 bg-cyan-800 mb-12 pt-1 opacity-90
        hover:opacity-100 ml-2 mr-2 rounded-xl">

            {/*<!-- Article -->*/}
            <article className="overflow-hidden rounded-lg shadow-lg">

                <a href="#">
                    <Image alt="Placeholder" className="block h-auto w-full"
                      src={placeholder} width="600" height="400"/>
                </a>

                <header className="flex items-center justify-between leading-tight p-2 md:p-4">
                    <h1 className="text-lg">
                        <a className="no-underline hover:underline" href="#">
                          {name}
                        </a>
                    </h1>
                    <p className="text-grey-darker text-sm">
                      {date}
                    </p>
                </header>

                <footer className="flex items-center justify-between leading-none p-2 md:p-4">
                    <a className="flex items-center no-underline hover:underline" href="#">
                        <Image alt="Placeholder" className="block rounded-full w-16 h-auto"
                          src={placeholder} width="600" height="400"/>
                        <p className="ml-2 text-sm">
                            Author Name
                        </p>
                    </a>
                    <a className="no-underline text-grey-darker hover:text-red-dark" href="#">
                        <span className="hidden">Like</span>
                        <i className="fa fa-heart"></i>
                    </a>
                </footer>

            </article>
            {/*<!-- END Article -->*/}

        </div>
    )
}