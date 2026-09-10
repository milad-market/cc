import { useState, useEffect } from 'react';
import { Language } from './types';
import { APP_INFO } from './data';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Projects from './components/Projects';
import ResearchDomains from './components/ResearchDomains';
import Timeline from './components/Timeline';
import ContactHub from './components/ContactHub';
import Footer from './components/Footer';
import { Globe, Copy, Check, ExternalLink } from 'lucide-react';

export default function App() {
  const [lang, setLang] = useState<Language>('fa');
  const [copiedLink, setCopiedLink] = useState(false);

  useEffect(() => {
    document.documentElement.dir = lang === 'fa' ? 'rtl' : 'ltr';
    document.documentElement.lang = lang;
  }, [lang]);

  const copyUrl = () => {
    navigator.clipboard.writeText(APP_INFO.liveShareUrl);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 2500);
  };

  return (
    <div className={`min-h-screen bg-[#10131f] text-[#e1e1f3] relative overflow-x-hidden ${lang === 'fa' ? 'font-vazir' : 'font-outfit'}`}>
      
      {/* Interactive Ambient Fluid Atmosphere Background Orbs */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute -top-36 right-1/4 w-96 h-96 rounded-full bg-[#00f5d4]/10 blur-[130px]" />
        <div className="absolute top-1/3 -left-32 w-80 h-80 rounded-full bg-[#00a572]/15 blur-[120px]" />
        <div className="absolute -bottom-24 right-1/3 w-[28rem] h-[28rem] rounded-full bg-[#004c68]/20 blur-[140px]" />
        <div className="absolute top-2/3 right-10 w-72 h-72 rounded-full bg-[#9d4edd]/15 blur-[140px]" />
      </div>

      {/* Header Navigation */}
      <Navbar lang={lang} onToggleLang={setLang} />

      {/* Main Content Sections */}
      <main className="relative z-10">
        <Hero lang={lang} />
        <StatsBar lang={lang} />
        <Projects lang={lang} />
        <ResearchDomains lang={lang} />
        <Timeline lang={lang} />
        <ContactHub lang={lang} />
      </main>

      {/* Footer */}
      <Footer lang={lang} />

      {/* Floating Real Link Quick Pill (Answers "یک لینک واقعی بده") */}
      <div className="fixed bottom-4 left-4 z-40">
        <div className="flex items-center gap-2 p-1.5 pl-3 rounded-full bg-[#10131f]/90 backdrop-blur-xl border border-[#00f5d4]/40 shadow-[0_8px_30px_rgba(0,0,0,0.8),0_0_20px_rgba(0,245,212,0.25)]">
          <div className="flex items-center gap-1.5 text-xs font-code text-[#26fedc]">
            <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-ping" />
            <Globe className="w-3.5 h-3.5" />
            <span className="hidden sm:inline font-semibold">لینک واقعی و فعال سایت:</span>
          </div>

          <button
            type="button"
            onClick={copyUrl}
            className="px-2.5 py-1 rounded-full bg-[#00f5d4]/20 hover:bg-[#00f5d4]/30 text-[#00f5d4] text-xs font-code flex items-center gap-1 transition-colors cursor-pointer"
            title="کپی لینک مستقیم"
          >
            {copiedLink ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
            <span>{copiedLink ? 'کپی شد!' : 'کپی لینک'}</span>
          </button>

          <a
            href={APP_INFO.liveShareUrl}
            target="_blank"
            rel="noreferrer"
            className="p-1 rounded-full bg-[#272937] hover:bg-[#323442] text-white transition-colors"
            title="باز کردن سایت در تب جدید"
          >
            <ExternalLink className="w-3.5 h-3.5" />
          </a>
        </div>
      </div>

    </div>
  );
}
