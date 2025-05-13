export const metadata = {
  title: "Skills | Toymur Rahman",
};
const SkillsPage = () => {
  const techStack = [
    "html",
    "css",
    "javascript",
    "react",
    "nextjs",
    "tailwind",
    "vite",
    "nodejs",
    "express",
    "mongodb",
    "firebase",
    "tanstack",
    "vscode",
    "vercel",
    "netlify",
    "figma",
    "bootstrap",
    "materialui",
    "github",
    "git",
    "postman",
  ];
  const softSkills = [
    "Teamwork",
    "Communication Skills",
    "Time Management",
    "Continuous Learning",
  ];

  return (
    <div className="text-white px-4 md:px-20 py-10 space-y-10">
      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Tech Stack</h2>
        <div className="flex flex-wrap justify-center gap-4">
          {techStack.map((tech, idx) => (
            <img
              key={idx}
              src={`https://skillicons.dev/icons?i=${tech}`}
              alt={tech}
              title={tech}
              className="h-10"
            />
          ))}
        </div>
      </section>

      <section>
        <h2 className="text-2xl font-semibold mb-6 text-center">Soft Skills</h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 text-center text-lg text-gray-300">
          {softSkills.map((skill, idx) => (
            <li key={idx} className="gradiants py-3 px-4 rounded-lg shadow-md">
              {skill}
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default SkillsPage;
