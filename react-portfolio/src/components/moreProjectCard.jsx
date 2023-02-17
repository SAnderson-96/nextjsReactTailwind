import Image from 'next/image';
import Link from "next/link";
import placeholder from "../../public/600x400.png";
//TODO: maybe add a hover that displays a small summary of the project
export default function MoreProjectCard({name, date, image, author, credit}) {
    return (
        <div className="px-2 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3 bg-gray-700 mb-12 pt-1 opacity-90
        hover:opacity-100 ml-2 mr-2 rounded-xl lg:h-[350px] xl:h-[500px]">

            {/*<!-- Article -->*/}
            <article className="overflow-hidden rounded-lg">

                <a href="#">
                    <Image alt="Placeholder" className="block h-auto w-full xl:mt-3 mt-1 object-cover"
                      src={image} width="600" height="400"/>
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
                        <p className="ml-2 text-sm">
                            {author}
                        </p>
                    </a>
                </footer>
              <span className="text-[8px] leading-none hidden">{credit}</span>
            </article>
            {/*<!-- END Article -->*/}
        </div>
    )
}