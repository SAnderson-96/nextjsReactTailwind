'use client';
import Link from "next/link";

export default function Navbar(){


    return(
            <nav className="mb-12 flex justify-between ml-8 mr-8 bg-black rounded-full p-5">
      <Link href="/"><h1 className=" text-xl font-code text-white">ANDRSN //Dev</h1></Link>
    <ul className="flex items-center">
      <li>
        <Link
          className="bg-red-500 px-4 py-2 border-none rounded-md ml-4 xl:px-8 xl:py-4 hover:bg-gradient-to-r hover:from-red-400 hover:to-cyan-500"
          href="/cv.pdf" target="_blank"
        >
          Resume
        </Link>
      </li>
      <li>
        <Link className="bg-cyan-500 border-none px-4 py-2 rounded-md ml-4 xl:px-8 xl:py-4 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-red-400 hover:scale-110"
          href="/projects">
        Projects
        </Link>
      </li>
    </ul>
  </nav>);
}
