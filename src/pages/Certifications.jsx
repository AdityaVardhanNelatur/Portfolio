import CertificationCard from "../components/CertificationCard";
import { certificationsData } from "../data/certifications";
import { Medal } from "lucide-react";

const Certifications = () => {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      
      {/* Background Decorative Mesh */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[300px] bg-sky-500/[0.02] rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center justify-center w-12 h-12 bg-sky-500/10 rounded-full text-sky-400 mb-4 shadow-[0_0_20px_rgba(14,165,233,0.2)]">
            <Medal size={28} />
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white">
            Licenses & <span className="text-sky-400">Certifications</span>
          </h2>
          <div className="mt-4 h-1 w-24 bg-gradient-to-r from-transparent via-sky-500 to-transparent rounded-full" />
        </div>

        {/* Certifications Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certificationsData.map((cert, index) => (
            <CertificationCard
              key={index}
              {...cert}
            />
          ))}
        </div>

      </div>
    </section>
  );
};

export default Certifications;