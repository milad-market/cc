import { useState } from 'react';
import { Language } from '../types';
import { APP_INFO } from '../data';
import { Sparkles, Dna, Globe, ExternalLink, Check, Copy, Menu, X, Share2 } from 'lucide-react';

interface NavbarProps {
  lang: Language;
  onToggleLang: (lang: Language) => void;
}

export default function Navbar({ lang, onToggleLang }: NavbarProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [copied, setCopied] = useState(false);
  const [showLinkModal, setShowLinkModal] = useState(false);

  const isFa = lang === 'fa';

  const copyUrl = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopied(true);
    setTimeout(() => setCopied(false), 3000);
  };

  const navLinks = [
    { href: '#home', labelFa: 'معرفی | About', labelEn: 'About' },
    { href: '#achievements-bar', labelFa: 'افتخارات و معدل | Honors', labelEn: 'Honors & GPA' },
    { href: '#projects-section', labelFa: 'پروژه‌های هوش مصنوعی | Projects', labelEn: 'AI Projects' },
    { href: '#research-domains', labelFa: 'علوم تجربی و AI | Bio & AI', labelEn: 'Bio & AI' },
    { href: '#contact-hub', labelFa: 'تماس | Contact', labelEn: 'Contact' },
  ];

  return (
    <>
      <header className="fixed top-0 inset-x-0 z-50 bg-[#10131f]/85 backdrop-blur-2xl border-b border-[#3a4a46]/30 shadow-[0_12px_32px_rgba(0,0,0,0.5)] transition-all">
        <div className="h-20 max-w-[1200px] mx-auto px-4 lg:px-8 flex items-center justify-between gap-3">
          
          {/* Brand Logo & Name */}
          <a href="#home" className="flex items-center gap-3 shrink-0 group">
            <div className="h-10 w-10 rounded-xl bg-[#00f5d4]/10 border border-[#00f5d4]/30 flex items-center justify-center shrink-0 shadow-[0_0_16px_rgba(0,245,212,0.35)] group-hover:scale-105 transition-transform">
              <Dna className="w-5 h-5 text-[#00f5d4]" />
            </div>
            <div className="flex flex-col text-right">
              <span className="font-space font-bold text-lg tracking-tight text-[#e1e1f3] group-hover:text-[#00f5d4] transition-colors">
                {isFa ? APP_INFO.nameFa : APP_INFO.nameEn}
              </span>
              <span className="font-code text-[11px] text-[#b9cac4] tracking-wider">
                {isFa ? 'Milad Sabaghi · Bio & AI' : 'Grade 9 • Computational Bio & AI'}
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-1.5 px-2 py-1 rounded-full bg-[#191b28]/80 backdrop-blur-lg border border-[#3a4a46]/40">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="px-3 py-1.5 rounded-full font-outfit text-xs text-[#b9cac4] hover:bg-[#272937] hover:text-[#e1e1f3] transition-all hover:shadow-[0_0_12px_rgba(0,245,212,0.2)]"
              >
                {isFa ? link.labelFa : link.labelEn}
              </a>
            ))}
          </nav>

          {/* Action Hub (Live Link Pill + Language Switcher + CTA) */}
          <div className="flex items-center gap-2.5 shrink-0">
            {/* Live Web Link Button */}
            <button
              type="button"
              onClick={() => setShowLinkModal(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full font-code text-xs bg-[#00f5d4]/15 hover:bg-[#00f5d4]/25 text-[#26fedc] border border-[#00f5d4]/40 shadow-[0_0_16px_rgba(0,245,212,0.3)] transition-all cursor-pointer hover:scale-105"
              title="مشاهده و کپی لینک واقعی سایت"
            >
              <Globe className="w-3.5 h-3.5 text-[#00f5d4] animate-pulse" />
              <span className="font-medium">{isFa ? 'لینک واقعی سایت' : 'Live Real Link'}</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </button>

            {/* Bilingual Toggle (FA / EN) */}
            <div className="flex items-center p-0.5 rounded-full bg-[#191b28]/90 border border-[#3a4a46]/50">
              <button
                type="button"
                onClick={() => onToggleLang('fa')}
                className={`px-2.5 py-1 rounded-full font-code text-xs transition-all ${
                  isFa
                    ? 'bg-[#00f5d4] text-[#00382f] font-bold shadow-[0_0_12px_rgba(0,245,212,0.4)]'
                    : 'text-[#b9cac4] hover:text-[#e1e1f3]'
                }`}
              >
                FA
              </button>
              <button
                type="button"
                onClick={() => onToggleLang('en')}
                className={`px-2.5 py-1 rounded-full font-code text-xs transition-all ${
                  !isFa
                    ? 'bg-[#00f5d4] text-[#00382f] font-bold shadow-[0_0_12px_rgba(0,245,212,0.4)]'
                    : 'text-[#b9cac4] hover:text-[#e1e1f3]'
                }`}
              >
                EN
              </button>
            </div>

            {/* Scientific Collab CTA */}
            <a
              href="#contact-hub"
              className="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full font-code text-xs bg-[#00a572] text-[#e1e1f3] hover:bg-[#4edea3] hover:text-[#002113] transition-all shadow-[0_0_16px_rgba(0,165,114,0.4)] font-medium"
            >
              <Sparkles className="w-3.5 h-3.5" />
              <span>{isFa ? 'همکاری علمی' : 'Connect'}</span>
            </a>

            {/* Mobile Hamburger Button */}
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-xl bg-[#191b28] border border-[#3a4a46]/50 text-[#e1e1f3]"
              aria-label="Toggle Navigation"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#10131f]/95 border-b border-[#3a4a46]/50 px-4 py-4 backdrop-blur-2xl">
            <nav className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-lg font-outfit text-sm text-[#b9cac4] hover:bg-[#1d1f2c] hover:text-[#00f5d4] transition-colors"
                >
                  {isFa ? link.labelFa : link.labelEn}
                </a>
              ))}
              <div className="pt-2 border-t border-[#3a4a46]/30 flex flex-col gap-2">
                <button
                  type="button"
                  onClick={() => {
                    setShowLinkModal(true);
                    setMobileMenuOpen(false);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-2 rounded-lg bg-[#00f5d4]/15 text-[#26fedc] text-xs font-code border border-[#00f5d4]/30"
                >
                  <Globe className="w-4 h-4" />
                  <span>{isFa ? 'مشاهده لینک‌های واقعی و عمومی' : 'View Real Live URLs'}</span>
                </button>
              </div>
            </nav>
          </div>
        )}
      </header>

      {/* Real Live URL Modal */}
      {showLinkModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-fadeIn">
          <div className="relative w-full max-w-lg rounded-2xl bg-[#10131f] border border-[#00f5d4]/40 p-6 shadow-[0_24px_60px_rgba(0,0,0,0.9),0_0_40px_rgba(0,245,212,0.2)]">
            <button
              type="button"
              onClick={() => setShowLinkModal(false)}
              className="absolute top-4 left-4 p-1.5 rounded-full bg-[#1d1f2c] text-[#b9cac4] hover:text-white"
            >
              <X className="w-4 h-4" />
            </button>

            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-[#00f5d4]/20 flex items-center justify-center text-[#00f5d4]">
                <Globe className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-space font-bold text-lg text-white">
                  {isFa ? 'لینک واقعی وب‌سایت فعال شد' : 'Real Live App URLs'}
                </h3>
                <p className="text-xs text-[#b9cac4]">
                  {isFa ? 'این وب‌سایت مستقیماً روی سرورهای ابری Google Cloud اجرا شده است' : 'Deployed on live Google Cloud Run instances'}
                </p>
              </div>
            </div>

            {/* Development URL */}
            <div className="mb-4">
              <label className="block font-code text-xs text-[#00f5d4] mb-1">
                {isFa ? '۱. آدرس سرور توسعه و پیش‌نمایش زنده (Dev URL):' : '1. Development & Live Preview URL:'}
              </label>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0b0d1a] border border-[#3a4a46]">
                <input
                  readOnly
                  value={APP_INFO.liveDevUrl}
                  className="w-full bg-transparent text-xs font-code text-white outline-none"
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => copyUrl(APP_INFO.liveDevUrl)}
                  className="px-3 py-1 rounded-lg bg-[#00f5d4]/20 hover:bg-[#00f5d4]/30 text-[#00f5d4] text-xs font-code flex items-center gap-1 shrink-0"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'کپی شد' : 'کپی'}</span>
                </button>
              </div>
            </div>

            {/* Shared Public URL */}
            <div className="mb-6">
              <label className="block font-code text-xs text-[#4edea3] mb-1">
                {isFa ? '۲. آدرس اشتراک‌گذاری عمومی (Public Share URL):' : '2. Public Shareable URL:'}
              </label>
              <div className="flex items-center gap-2 p-2 rounded-xl bg-[#0b0d1a] border border-[#3a4a46]">
                <input
                  readOnly
                  value={APP_INFO.liveShareUrl}
                  className="w-full bg-transparent text-xs font-code text-white outline-none"
                  dir="ltr"
                />
                <button
                  type="button"
                  onClick={() => copyUrl(APP_INFO.liveShareUrl)}
                  className="px-3 py-1 rounded-lg bg-[#4edea3]/20 hover:bg-[#4edea3]/30 text-[#4edea3] text-xs font-code flex items-center gap-1 shrink-0"
                >
                  <Copy className="w-3.5 h-3.5" />
                  <span>کپی</span>
                </button>
              </div>
            </div>

            <div className="flex gap-2">
              <a
                href={APP_INFO.liveShareUrl}
                target="_blank"
                rel="noreferrer"
                className="flex-1 py-2.5 rounded-xl bg-[#00f5d4] text-[#00382f] font-bold text-center text-xs font-code flex items-center justify-center gap-1.5 shadow-[0_0_20px_rgba(0,245,212,0.4)]"
              >
                <span>{isFa ? 'باز کردن در تب جدید' : 'Open in New Tab'}</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <button
                type="button"
                onClick={() => setShowLinkModal(false)}
                className="px-4 py-2.5 rounded-xl bg-[#1d1f2c] text-white text-xs font-code"
              >
                {isFa ? 'بستن' : 'Close'}
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
