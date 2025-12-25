import { GraduationCap, Calendar, CheckCircle2 } from "lucide-react";

const EducationCard = ({
  level,
  specialization,
  institution,
  duration,
  highlights = [],
  index
}) => {
  return (
    <div className="relative flex gap-8 group">
      
      {/* Timeline */}
      <div className="flex flex-col items-center">
        <div className="relative z-10 flex items-center justify-center w-10 h-10 rounded-full bg-slate-900 border-2 border-slate-800 group-hover:border-sky-400 transition">
          <GraduationCap size={20} className="text-sky-400" />
        </div>
        <div className="w-0.5 h-full bg-gradient-to-b from-slate-800 to-transparent group-last:hidden" />
      </div>

      {/* Card */}
      <div className="pb-16 flex-grow">
        <div className="relative bg-slate-900/30 backdrop-blur-md border border-slate-800/50 p-6 rounded-3xl transition">
          
          {/* Index */}
          <span className="absolute -top-4 -right-2 text-6xl font-black text-white/[0.03]">
            0{index + 1}
          </span>

          <div className="flex flex-col sm:flex-row justify-between gap-3 mb-6">
            <div>
              <h3 className="text-xl font-bold text-white">
                {level}
              </h3>
              <p className="text-sky-400 font-semibold">
                {specialization}
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs font-bold text-slate-400 bg-slate-800/80 px-3 py-1.5 rounded-full">
              <Calendar size={14} />
              {duration}
            </div>
          </div>

          <p className="text-slate-300 font-medium mb-4">
            {institution}
          </p>

          <div className="space-y-3">
            {highlights.map((point, i) => (
              <div key={i} className="flex items-start gap-3 text-slate-400">
                <CheckCircle2 size={16} className="text-sky-500/60 mt-1 shrink-0" />
                <span className="text-sm leading-relaxed">{point}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default EducationCard;
