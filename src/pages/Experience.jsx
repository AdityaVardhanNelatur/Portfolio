import ExperienceCard from "../components/ExperienceCard";
import { experienceData } from "../data/experience";

const Experience = () => {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/4 left-0 w-72 h-72 bg-blue-600/10 rounded-full blur-[120px] -z-10" />

      <div className="max-w-4xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white mb-4">
            Work <span className="text-sky-400">History</span>
          </h2>
          <div className="h-1 w-20 bg-sky-500 rounded-full" />
        </div>

        {/* Timeline Container */}
        <div className="relative">
          {experienceData.map((exp, index) => (
            <ExperienceCard
              key={index}
              {...exp}
              isLast={index === experienceData.length - 1}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Experience;