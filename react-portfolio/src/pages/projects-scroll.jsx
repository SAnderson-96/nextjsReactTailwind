import Navbar from "@/components/navbar";
import Head from "next/head";
import Image from "next/image";
import design from "../../public/design.png";
import Link from "next/link";
import styles from "../styles/projects.module.css";
import {CatchingPokemon} from "@mui/icons-material";
import ShieldIcon from '@mui/icons-material/Shield';
import {SiPokemon} from 'react-icons/si';
import {GiFarmTractor} from 'react-icons/gi';
import {AiOutlineTrophy} from 'react-icons/ai';
import ProjectCard from "@/components/projectCard";
import Skills from "@/components/skills";
import jsIcon from "../../public/js-logo.png";
import kotlinIcon from "../../public/kotlin.svg";
import githubIcon from "../../public/github.png";
import gitIcon from "../../public/git.png";
import typescriptIcon from "../../public/typescript.svg";
import cssIcon from "../../public/css.svg";
import csharpIcon from "../../public/csharp.svg";
import nodeJS from "../../public/nodeJs.png";
import androidStudioIcon from "../../public/androidStudio.png";
import javaIcon from "../../public/java.png";


export default function ProjectsScroll() {
  const config = require('../../public/data.json');
  let key = 0;
  const keyS="Portfolio card "
    return (
        <>
            <Head>
                <title>Samuel Anderson Portfolio</title>
                <meta name='description' content='Generated by create next app'/>
                <meta name='viewport' content='width=device-width, initial-scale=1'/>
                <link rel='icon' href='/favicon.ico'/>
            </Head>
            <main className='px-10'>
                <Navbar/>
                <section>
                  <div className="h-screen flex relative overflow-hidden flex-col text-lft md:flex-row max-w-full
                  justify-evenly mx-auto items-center">
                    <div className="text-center absolute top-8">
                      <h3 className="top-8 uppercase tracking-[10px] text-gray-500 font-medium text-2xl xl:text-6xl">
                        Projects
                      </h3>
                    </div>


                    <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory">
                      {config.projects.map(project => (
                        <ProjectCard key={keyS + key++} title={project.name} date={project.date} builtWith={project.builtWith.map(icon => icon)}
                        data={project.summaries}
                        avatar={project.images[Math.floor(Math.random()*project.images.length)]}/>
                      ))}
                    </div>
                  </div>

                </section>

              <section>
                <div className="snap-start w-full snap-mandatory snap-y" id="skills">
                  <Skills />
                </div>

              </section>
            </main>
        </>
);
}
