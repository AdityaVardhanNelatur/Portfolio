import { Github, ExternalLink, Folder } from "lucide-react";

const ProjectCard = ({ title, description, technologies, github, demo }) => {
  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-8 hover:border-sky-500/50 transition-all duration-500 flex flex-col h-full">
      
      {/* Top Row: Folder Icon & Links */}
      <div className="flex justify-between items-center mb-6">
        <div className="text-sky-400">
          <Folder size={32} strokeWidth={1.5} />
        </div>
        <div className="flex gap-4 text-slate-400">
          {github && (
            <a href={github} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
              <Github size={22} />
            </a>
          )}
          {demo && (
            <a href={demo} target="_blank" rel="noreferrer" className="hover:text-sky-400 transition-colors">
              <ExternalLink size={22} />
            </a>
          )}
        </div>
      </div>

      {/* Content */}
      <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-sky-400 transition-colors">
        {title}
      </h3>

      <ul className="space-y-3 text-slate-400 mb-6 flex-grow">
        {description.map((point, index) => (
          <li key={index} className="flex items-start gap-2 text-sm leading-relaxed">
            <span className="text-sky-500 mt-1.5 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
            {point}
          </li>
        ))}
      </ul>

      {/* Tech Stack */}
      <div className="flex flex-wrap gap-2 mt-auto pt-4 border-t border-slate-800/50">
        {technologies.map((tech) => (
          <span
            key={tech}
            className="text-[10px] uppercase tracking-wider font-bold bg-slate-800/50 text-sky-300 border border-slate-700 px-2 py-1 rounded"
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default ProjectCard;