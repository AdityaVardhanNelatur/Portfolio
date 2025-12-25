const SkillCard = ({ category, items, icon: Icon }) => {
  return (
    <div className="group relative bg-slate-900/50 backdrop-blur-sm border border-slate-800 rounded-2xl p-8 hover:bg-slate-900 transition-all duration-300">
      
      {/* Decorative Glow Effect on Hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-sky-400/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      <div className="flex items-center gap-3 mb-6 relative z-10">
        {/* Icon with Sky Accent */}
        <div className="p-2 bg-slate-800 rounded-lg text-sky-400 group-hover:bg-sky-400/10 transition-colors">
          {Icon && <Icon size={22} />}
        </div>
        <h3 className="text-xl font-bold text-white">
          {category}
        </h3>
      </div>

      <div className="flex flex-wrap gap-2 relative z-10">
        {items.map((item) => (
          <span 
            key={item} 
            className="px-3 py-1 text-sm font-medium bg-slate-800/50 text-slate-300 rounded-lg border border-slate-700 group-hover:border-sky-400/50 group-hover:text-sky-300 transition-colors duration-300"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCard;