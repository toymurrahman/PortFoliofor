import Projects from "@/src/components/pages/Projects/Projects";
import projectData from "../../../../public/projects.json";

export const metadata = {
  title: "Projects | Jannatul Ferdous",
};

const ProjectsPage = () => {
  return (
    <Projects
      teamProjects={projectData.teamProjects}
      singleProjects={projectData.singleProjects}
    />
  );
};

export default ProjectsPage;
