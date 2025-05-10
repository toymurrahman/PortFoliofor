"use client";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import Link from "next/link";

const ProjectGroup = ({ title, projects }) => {
  return (
    <section className="mb-16">
      <h2 className="text-3xl font-bold mb-8 text-white text-center tracking-wide">
        {title}
      </h2>
      <ul className="grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, idx) => (
          <li
            key={idx}
            className="bg-[#1f1f1f] border border-gray-800 hover:border-gray-500 transition-all duration-300 rounded-2xl shadow-lg overflow-hidden flex flex-col hover:shadow-indigo-500/20"
          >
            <div className="relative p-3">
              <Image
                src={project?.image}
                alt={project?.title}
                height={300}
                width={500}
                className="w-full h-48 object-cover rounded-xl shadow-md"
                priority
              />
            </div>

            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-white text-xl font-semibold mb-2">
                {project?.title}
              </h3>
              <p className="text-sm text-gray-400 mb-3 leading-relaxed">
                 {project?.description?.split(' ').slice(0, 7).join(' ') + '...'}
              </p>
              <p className="text-sm text-gray-300 font-medium mb-4">
                <span className="text-white">Tech:</span>{" "}
                {project?.technology.join(", ")}
              </p>

              <div className="mt-auto">
                <Link href={`/projects/${project.id}`} className="block">
                  <Button className="w-full  text-white font-semibold py-2 rounded-lg transition duration-300 text-sm md:text-base">
                    See Details
                  </Button>
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

const Projects = ({ teamProjects, singleProjects }) => {
  return (
    <div className="px-4 sm:px-6 lg:px-12 py-8 bg-[#121212] min-h-screen">
      <ProjectGroup title="Team Projects" projects={teamProjects} />
      <ProjectGroup title="Single Projects" projects={singleProjects} />
    </div>
  );
};

export default Projects;
