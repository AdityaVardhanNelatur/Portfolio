import { Briefcase, Calendar } from "lucide-react";

const ExperienceCard = ({ role, organization, duration, highlights, isLast }) => {
  return (
    <div className="relative flex gap-6 md:gap-10">
      {/* Timeline Line and Icon */}
      <div className="flex flex-col items-center">
        <div className="z-10 p-2 bg-slate-900 border border-slate-700 rounded-full text-sky-400 group-hover:border-sky-400 transition-colors">
          <Briefcase size={20} />
        </div>
        {!isLast && <div className="w-px h-full bg-slate-800 my-2"></div>}
      </div>

      {/* Experience Content */}
      <div className="pb-12 flex-grow">
        <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/30 transition-all duration-300">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-2 mb-4">
            <div>
              <h3 className="text-xl font-bold text-white tracking-tight">
                {role}
              </h3>
              <p className="text-sky-400 font-medium">
                {organization}
              </p>
            </div>
            
            <div className="flex items-center gap-2 text-slate-500 text-sm bg-slate-950/50 px-3 py-1 rounded-full border border-slate-800">
              <Calendar size={14} />
              {duration}
            </div>
          </div>

          <ul className="space-y-3">
            {highlights.map((point, i) => (
              <li key={i} className="flex items-start gap-3 text-slate-300 text-[0.95rem] leading-relaxed">
                <span className="mt-2 h-1.5 w-1.5 rounded-full bg-sky-500 shrink-0" />
                {point}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;