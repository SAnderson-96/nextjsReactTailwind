import { BsFillMoonStarsFill } from "react-icons/bs";
import Projects from "@/pages/projects";
import { useRouter } from 'next/router';
import ActiveLink from "./activeLink";

export default function Navbar(){


    return(<nav className="py-10 mb-12 flex justify-between">
    <h1 className=" text-xl font-code">ANDRSN //Dev</h1>
    <ul className="flex items-center">
      <li>
        <BsFillMoonStarsFill className="cursor-pointer text-2xl" />
      </li>
      <li>
        <a
          className=" bg-gradient-to-r from-cyan-500 to-red-400 px-4 py-2 border-none rounded-md ml-4"
          href="#"
        >
          Resume
        </a>
      </li>
      <li>
        <a className="bg-gradient-to-r from-red-400 to-cyan-500 border-none px-4 py-2 rounded-md ml-4"
          href="#">
        Projects
        </a>
      </li>
    </ul>
  </nav>);
}
