import { Phone, Mail, User, Send, ArrowRight } from "lucide-react";

const ContactCard = ({ name, phone, email }) => {
  return (
    <div className="group relative p-[1px] rounded-3xl overflow-hidden bg-gradient-to-br from-slate-800 via-slate-800 to-sky-500/20 hover:to-sky-500/50 transition-all duration-500">
      <div className="bg-slate-900/90 backdrop-blur-xl rounded-[23px] p-8 md:p-10 flex flex-col gap-8">
        
        {/* Name Header */}
        <div className="flex items-center gap-5 border-b border-slate-800 pb-6">
          <div className="w-12 h-12 rounded-2xl bg-sky-500/10 flex items-center justify-center text-sky-400">
            <User size={24} />
          </div>
          <div className="text-left">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.2em] mb-1">Available for work</p>
            <h3 className="text-xl font-bold text-white">{name}</h3>
          </div>
        </div>

        <div className="space-y-4">
          {/* Phone Link */}
          <a
            href={`tel:${phone}`}
            className="flex items-center justify-between group/link p-4 rounded-2xl bg-slate-800/50 hover:bg-sky-500/10 border border-transparent hover:border-sky-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <Phone className="text-sky-400 group-hover/link:scale-110 transition-transform" size={20} />
              <span className="text-slate-300 group-hover/link:text-white transition-colors">{phone}</span>
            </div>
            <ArrowRight size={16} className="text-slate-600 group-hover/link:translate-x-1 transition-all" />
          </a>

          {/* Email Link */}
          <a
            href={`mailto:${email}`}
            className="flex items-center justify-between group/link p-4 rounded-2xl bg-slate-800/50 hover:bg-sky-500/10 border border-transparent hover:border-sky-500/20 transition-all duration-300"
          >
            <div className="flex items-center gap-4">
              <Mail className="text-sky-400 group-hover/link:scale-110 transition-transform" size={20} />
              <span className="text-slate-300 group-hover/link:text-white transition-colors">{email}</span>
            </div>
            <ArrowRight size={16} className="text-slate-600 group-hover/link:translate-x-1 transition-all" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;