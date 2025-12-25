import { Award, Calendar, ExternalLink } from "lucide-react";

const CertificationCard = ({ title, issuer, year, description, link }) => {
  return (
    <div className="group relative bg-slate-900/40 backdrop-blur-md border border-slate-800 rounded-2xl p-6 transition-all duration-500 hover:-translate-y-2 hover:bg-slate-900/60 hover:border-sky-500/50 hover:shadow-[0_20px_40px_-15px_rgba(14,165,233,0.15)]">
      
      {/* Decorative Glow Corner */}
      <div className="absolute top-0 right-0 w-16 h-16 bg-sky-500/5 rounded-tr-2xl group-hover:bg-sky-500/10 transition-colors" />

      <div className="flex items-start justify-between gap-4 mb-4">
        {/* Award Icon with Ring */}
        <div className="p-3 bg-slate-800/80 rounded-xl text-sky-400 border border-slate-700 group-hover:border-sky-400/50 transition-all">
          <Award size={24} />
        </div>
        
        {/* Year Badge */}
        <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-slate-500 bg-slate-950/50 px-3 py-1 rounded-full border border-slate-800">
          <Calendar size={12} className="text-sky-500" />
          {year}
        </div>
      </div>

      <div>
        <h3 className="text-lg font-bold text-white mb-1 group-hover:text-sky-300 transition-colors">
          {title}
        </h3>
        <p className="text-sky-500/90 font-semibold text-sm mb-3">
          {issuer}
        </p>
        <p className="text-slate-400 text-sm leading-relaxed line-clamp-3 group-hover:line-clamp-none transition-all duration-300">
          {description}
        </p>
      </div>

      {/* Conditional Link (if you have credential links) */}
      {link && (
        <a 
          href={link} 
          target="_blank" 
          rel="noreferrer" 
          className="mt-4 flex items-center gap-2 text-xs font-bold text-sky-400 hover:text-sky-300 transition-colors"
        >
          View Credential <ExternalLink size={14} />
        </a>
      )}
    </div>
  );
};

export default CertificationCard;