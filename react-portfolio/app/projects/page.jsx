'use client';
import ProjectCard from "@/components/projectCard";
import Skills from "@/components/skills";


export default function ProjectsScroll() {
  const config = require('../../public/data.json');
  let key = 0;
  const keyS="Portfolio card "
  return (
          <>
          <main className='px-10'>
            <section>
              <div className="h-screen flex relative flex-col text-lft md:flex-row max-w-full
                  justify-evenly mx-auto items-center">
                <div className="text-center absolute top-1">
                  <h3 className="uppercase tracking-[10px] text-yellow-400 font-medium text-4xl xl:text-6xl">
                    Projects
                  </h3>
                </div>

                <div className="w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-gray-100 scrollbar-track-gray-900">
                  {config.projects.map(project => (
                          <ProjectCard key={keyS + key++} title={project.name} date={project.date} builtWith={project.builtWith.map(icon => icon)}
                            data={project.summaries}
                            avatar={project.images[Math.floor(Math.random()*project.images.length)]}
                            link={project.link}/>
                            ))}
                </div>
              </div>

            </section>

            <section className="h-screen">
              <div className="snap-start w-full snap-mandatory snap-y" id="skills">
                <Skills skills={config.skills} />
              </div>

            </section>
          </main>
          </>
          );
}
