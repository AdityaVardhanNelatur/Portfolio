import EducationCard from "../components/EducationCard";
import { educationData } from "../data/education";

const Education = () => {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">

      {/* Background Decorative Blur */}
      <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-sky-500/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6">

        {/* Section Title */}
        <div className="flex items-center gap-6 mb-16">
          <h2 className="text-3xl md:text-5xl font-bold text-white whitespace-nowrap">
            Education <span className="text-sky-400">Background</span>
          </h2>
          <div className="h-px bg-slate-800 w-full hidden sm:block"></div>
        </div>

        {/* Education List */}
        <div className="flex flex-col gap-8">
          {educationData.map((edu, index) => (
            <EducationCard
              key={index}
              index={index}     // ✅ numbering
              {...edu}          // ✅ PASS ALL DATA
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Education;
