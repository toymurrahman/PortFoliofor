import Projects from "@/src/components/pages/Projects/Projects";
import projectData from "../../../../public/projects.json";

export const metadata = {
  title: "Projects | Toymur Rahman",
};

const ProjectsPage = () => {
  return (
    <Projects
      singleProjects={projectData.singleProjects}
    />
  );
};

export default ProjectsPage;
