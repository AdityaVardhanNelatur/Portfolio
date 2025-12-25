import ProjectCard from "../components/ProjectCard";
import { projectsData } from "../data/projects";

const Projects = () => {
  return (
    <section className="bg-slate-950 py-24 relative">
      {/* Background Accent */}
      <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-sky-500/20 to-transparent" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Featured <span className="text-sky-400">Projects</span>
          </h2>
          <p className="text-slate-400 max-w-xl">
            A selection of my recent work in full-stack development and machine learning.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projectsData.map((project) => (
            <ProjectCard
              key={project.title}
              {...project}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;