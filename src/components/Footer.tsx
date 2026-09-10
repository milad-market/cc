import { Language } from '../types';
import { APP_INFO } from '../data';
import { GraduationCap, Brain, ExternalLink, Globe } from 'lucide-react';

interface FooterProps {
  lang: Language;
}

export default function Footer({ lang }: FooterProps) {
  const isFa = lang === 'fa';

  return (
    <footer className="w-full bg-[#0b0d1a]/85 backdrop-blur-2xl relative z-10 shadow-[0_-1px_16px_rgba(0,0,0,0.5)] border-t border-[#3a4a46]/30">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8 py-8 flex flex-col md:flex-row items-center justify-between gap-6">
        
        {/* Left Status & Summary */}
        <div className="flex flex-col items-center md:items-start gap-1 text-center md:text-right">
          <div className="flex items-center gap-2">
            <span className="w-2.5 h-2.5 rounded-full bg-[#4edea3] animate-pulse shadow-[0_0_10px_rgba(78,222,163,0.8)]" />
            <span className="font-code text-xs text-[#26fedc] font-semibold">
              معدل ۲۰.۰۰ / ۲۰.۰۰ | GPA 4.0 (Rank 1)
            </span>
          </div>
          <p className="font-outfit text-xs text-[#b9cac4]">
            {isFa
              ? 'پژوهش‌های زیست‌محاسباتی و توسعه سیستم‌های هوش مصنوعی زیستی • میلاد صباغی'
              : 'Computational Bioscience & AI Systems Research • Milad Sabaghi'}
          </p>
        </div>

        {/* Center Badges */}
        <div className="flex items-center gap-2.5 flex-wrap justify-center">
          <div className="px-3 py-1 rounded-full bg-[#272937]/70 backdrop-blur-md flex items-center gap-1.5 border border-[#3a4a46]/40 text-xs font-code text-white">
            <GraduationCap className="w-3.5 h-3.5 text-[#4edea3]" />
            <span>Biology Olympiad Candidate</span>
          </div>
          <div className="px-3 py-1 rounded-full bg-[#272937]/70 backdrop-blur-md flex items-center gap-1.5 border border-[#9d4edd]/40 text-xs font-code text-white">
            <Brain className="w-3.5 h-3.5 text-[#00f5d4]" />
            <span>AI & Neural Biomodels</span>
          </div>
        </div>

        {/* Right Copyright & Live URL info */}
        <div className="flex flex-col items-center md:items-end gap-1">
          <div className="font-code text-xs text-[#b9cac4] text-center md:text-left dir-ltr">
            © 2025 Milad Sabaghi. All rights reserved.
          </div>
          <a
            href={APP_INFO.liveShareUrl}
            target="_blank"
            rel="noreferrer"
            className="font-code text-[11px] text-[#00f5d4] hover:text-[#26fedc] flex items-center gap-1 dir-ltr transition-colors"
          >
            <span>Live URL: {APP_INFO.liveShareUrl.replace('https://', '')}</span>
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

      </div>
    </footer>
  );
}
