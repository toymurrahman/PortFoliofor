import { notFound } from "next/navigation";
import Image from "next/image";
import projectData from "../../../../../public/projects.json";
import { CheckCircle } from "lucide-react";

export async function generateStaticParams() {
  const allProjects = [
    ...projectData.teamProjects,
    ...projectData.singleProjects,
  ];
  return allProjects.map((project) => ({ id: project.id }));
}

const ProjectDetailsPage = async ({ params }) => {
  const { id } = await params;

  const allProjects = [
    ...projectData.teamProjects,
    ...projectData.singleProjects,
  ];
  const project = allProjects.find((p) => p.id === id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-[#0f0f0f] text-white p-6 sm:p-8 md:p-10 lg:p-12">
      <h1 className="text-3xl font-extrabold text-center text-white mb-4 sm:text-4xl md:text-5xl">
        {project?.title}
      </h1>

      <div className="flex justify-center mt-4">
        <a
          href={project?.live}
          target="_blank"
          rel="noopener noreferrer"
          className="text-blue-400 hover:text-blue-600 text-lg sm:text-xl md:text-2xl"
        >
          Visit Live Site
        </a>
      </div>

      <div className="relative mt-8 w-full mx-auto">
        <Image
          src={project?.image}
          alt={project?.title}
          width={1200}
          height={800}
          className="rounded-xl shadow-lg object-cover w-full h-[60vh] sm:h-[50vh] md:h-[55vh] lg:h-[60vh] transition-all duration-500 ease-in-out hover:scale-105"
          priority
        />
      </div>

      <p className="mt-8 text-lg sm:text-xl md:text-2xl leading-relaxed">{project?.description}</p>

      {["technology", "coreFeatures", "challenges", "futurePlans"].map((section, i) => (
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
      ))}
    </div>
  );
};

export default ProjectDetailsPage;
