import AboutCard from "../components/AboutCard";
import { aboutData } from "../data/about";
import { Code2, Brain, Target } from "lucide-react";

const About = () => {
  return (
    <section className="bg-slate-950 py-24 relative overflow-hidden">
      {/* Background Decorative Element */}
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-sky-500/5 rounded-full blur-[120px] -z-10" />

      <div className="max-w-6xl mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-12 flex items-center gap-4">
          About <span className="text-sky-400">Me</span>
          <div className="h-[1px] bg-slate-800 flex-grow hidden md:block"></div>
        </h2>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          
          {/* Left: Your Paragraphs */}
          <div className="lg:col-span-7 space-y-6">
            {aboutData.paragraphs.map((text, index) => (
              <p key={index} className="text-slate-300 text-lg leading-relaxed">
                {text}
              </p>
            ))}
          </div>

          {/* Right: Summary Cards */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <AboutCard 
              icon={Code2}
              title="Full-Stack Development"
              description="MERN stack expertise focusing on JWT authentication, RESTful APIs, and scalable CRUD operations."
            />
            <AboutCard 
              icon={Brain}
              title="Machine Learning"
              description="Foundation in ML pipelines and data preprocessing developed during internship at Edunet Foundation."
            />
            <AboutCard 
              icon={Target}
              title="Current Goal"
              description="Seeking Software Engineer or Full-Stack roles to contribute to impactful, collaborative products."
            />
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;