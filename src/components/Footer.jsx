const Footer = () => {
  return (
    <footer className="bg-slate-950 border-t border-slate-800 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        
        {/* Copyright */}
        <p className="text-slate-400 text-sm">
          © 2025 Aditya Vardhan Nelatur. All rights reserved.
        </p>

        {/* Social Links */}
        <div className="flex gap-6 text-slate-300 font-medium">
          <a
            href="https://github.com/AdityaVardhanNelatur"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/aditya-vardhan-nelatur-217a04258/"
            target="_blank"
            rel="noreferrer"
            className="hover:text-sky-400 transition"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
