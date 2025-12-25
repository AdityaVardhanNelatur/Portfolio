import ContactCard from "../components/ContactCard";
import { contactData } from "../data/contact";

const Contact = () => {
  return (
    <section className="bg-slate-950 py-32 relative overflow-hidden">
      
      {/* Background Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-sky-500/10 rounded-full blur-[120px] -z-10" />
      <div className="absolute -bottom-20 right-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[100px] -z-10" />

      <div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
        
        <div className="mb-16">
          <h2 className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight">
            Ready to <span className="text-sky-400 underline underline-offset-8 decoration-sky-500/30">Collaborate?</span>
          </h2>

          <p className="text-slate-400 max-w-2xl mx-auto text-lg leading-relaxed">
            Whether you have a question or just want to say hi, my inbox is always open. 
            I'm currently seeking <span className="text-white">Full-Stack</span> or <span className="text-white">Software Engineering</span> roles.
          </p>
        </div>

        <div className="flex justify-center items-center">
          <ContactCard
            name={contactData.name}
            phone={contactData.phone}
            email={contactData.email}
          />
        </div>

        {/* Footer Credit (Optional) */}
        <div className="mt-24 pt-8 border-t border-slate-900 text-slate-500 text-sm">
          <p>© {new Date().getFullYear()} {contactData.name}. Built with MERN Stack Expertise.</p>
        </div>

      </div>
    </section>
  );
};

export default Contact;