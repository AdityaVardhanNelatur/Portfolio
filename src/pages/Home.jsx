const Home = () => {
  return (
    <section className="min-h-[85vh] flex items-center bg-slate-950">
      <div className="max-w-5xl mx-auto px-6">
        <h1 className="text-4xl md:text-5xl font-bold text-slate-100 mb-4">
          Hi, I'm{" "}
          <span className="text-sky-400">Aditya Vardhan Nelatur</span>
        </h1>

        <h2 className="text-xl md:text-2xl text-slate-400 mb-6">
          Full-Stack Developer (MERN) | DSA | REST APIs & JWT | ALML Intern
        </h2>

        <p className="text-slate-300 max-w-2xl leading-relaxed mb-8">
          Computer Science undergraduate passionate about building secure,
          scalable web applications and real-world products using modern
          full-stack technologies.
        </p>

        <div className="flex flex-wrap gap-4">
          <a
            href="/projects"
            className="px-6 py-3 rounded-lg bg-sky-400 text-slate-900 font-semibold hover:bg-sky-300 transition"
          >
            View Projects
          </a>

          <a
            href="/resume.pdf"
            download
            className="px-6 py-3 rounded-lg border border-sky-400 text-sky-400 font-semibold hover:bg-sky-400 hover:text-slate-900 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default Home;
