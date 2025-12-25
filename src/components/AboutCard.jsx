const AboutCard = ({ title, description, icon: Icon }) => {
  return (
    <div className="bg-slate-900/40 border border-slate-800 p-6 rounded-2xl hover:border-sky-500/50 transition-all duration-300 group">
      <div className="flex items-start gap-4">
        {/* Icon Container */}
        <div className="p-3 bg-slate-800 rounded-xl group-hover:bg-sky-500/10 group-hover:text-sky-400 text-slate-400 transition-all duration-300">
          <Icon size={24} />
        </div>
        
        <div>
          <h4 className="text-sky-400 font-bold mb-2 uppercase tracking-wider text-xs">
            {title}
          </h4>
          <p className="text-slate-300 text-sm leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutCard;