import { notFound } from "next/navigation";
import Image from "next/image";
import projectData from "../../../../../public/projects.json";
import { CheckCircle } from "lucide-react";
import ProjectCarousel from "@/src/components/pages/Projects/ProjectCarousel";

export async function generateStaticParams() {
  const allProjects = [
    ...projectData.singleProjects,
  ];
  return allProjects.map((project) => ({ id: project.id }));
}

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;

  const allProjects = [
    ...projectData.singleProjects,
  ];
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#0f0f0f] text-white  p-6 sm:p-8 md:p-10 lg:p-12">
      <div className="relative  mx-auto w-full px-4 mb-10">
        <div className="mx-auto w-full h-[50vh] sm:h-[50vh] md:h-[25vh] lg:h-[25vh] xl:h-[70vh] rounded-xl overflow-hidden shadow-lg">
             <ProjectCarousel title={project?.title} />
        </div>
      </div>
      <h1 className="text-3xl font-extrabold text-center text-white mb-4 sm:text-4xl md:text-5xl">
        {project?.title}
      </h1>

      <div className="flex justify-center mt-6 ">
        <a
          href={project?.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 xl:text-xl"
        >
          Visit Live Site
        </a>
      </div>

      <p className="mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed">
        {project?.description}
      </p>

      {["technology", "coreFeatures", "challenges", "futurePlans"].map(
        (section, i) => (
          <div className="mt-8" key={i}>
            <p className="font-semibold text-center text-xl sm:text-2xl capitalize  mb-2">
              {section.replace(/([A-Z])/g, " $1")}
            </p>
            <hr className="mb-4 border-t-2 border-gray-700" />
            <ul className="list-none ml-6 text-lg grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-4 text-gray-400">
              {project[section]?.map((item, idx) => (
                <li key={idx} className="mb-2 flex items-center">
                  <CheckCircle className=" w-4 h-4 mr-3" /> {item}
                </li>
              ))}
            </ul>
          </div>
        )
      )}
    </div>
  );
};

export default ProjectDetailsPage;
