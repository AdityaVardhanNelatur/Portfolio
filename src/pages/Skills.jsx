import SkillCard from "../components/SkillCard";
import { skillsData } from "../data/skills";
import { 
  Code2, 
  Server, 
  Database, 
  Terminal, 
  Layers, 
  Cpu 
} from "lucide-react";

const Skills = () => {
  // Map your category names to Lucide icons
  const iconMap = {
    "Frontend": Code2,
    "Backend": Server,
    "Database": Database,
    "DevOps": Terminal,
    "Tools": Layers,
    "Machine Learning": Cpu,
    // Add more mappings based on your actual data/skills.js categories
  };

  return (
    <section className="bg-slate-950 py-24 relative">
      <div className="max-w-6xl mx-auto px-6">

        {/* Section Title with Decorative Line */}
        <div className="flex items-center gap-4 mb-12">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          My <span className="text-sky-400">Skills</span>
        </h2>    
          <div className="h-[1px] bg-slate-800 w-full" />
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillsData.map((skill) => (
            <SkillCard
              key={skill.category}
              category={skill.category}
              items={skill.items}
              // Pass the mapped icon, or a default fallback
              icon={iconMap[skill.category] || Code2}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;