'use client';
import ProjectCard from "@/components/projectCard";
import Skills from "@/components/skills";


export default function ProjectsScroll() {
  const config = require('../../public/data.json');
  let key = 0;
  const keyS="Portfolio card "
  return (
          <>
          <main className='px-5'>
            <section>
              <div className="h-screen flex flex-col text-lft max-w-full
                  justify-evenly mx-auto items-center">
                <div className="text-center">
                  <h3 className="uppercase font-bold tracking-[10px] text-yellow-400 font-medium text-4xl xl:text-6xl">
                    Projects
                  </h3>
                </div>

                <div className="w-full flex space-x-5 overflow-x-scroll pt-5 snap-x snap-mandatory
                scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-900 xl:h-[750px]">
                  {config.projects.map(project => (
                          <ProjectCard key={keyS + key++} title={project.name} date={project.date} builtWith={project.builtWith.map(icon => icon)}
                            data={project.summaries}
                            avatar={project.images[Math.floor(Math.random()*project.images.length)]}
                            link={project.link}/>
                            ))}
                </div>
              </div>

            </section>

            <section className="min-h-screen mb-12">
              <div className="snap-start w-full snap-mandatory snap-y" id="skills">
                <Skills skills={config.skills}
                  heightClass="h-24 xl:h-48"
                  widthClass="w-24 xl:w-48"
                />
              </div>

            </section>
          </main>
          </>
          );
}
