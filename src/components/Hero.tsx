import { Language } from '../types';
import { APP_INFO } from '../data';
import ThreeDnaScene from './ThreeDnaScene';
import { Award, BrainCircuit, Calendar, MapPin, CheckCircle2, ChevronDown, Sparkles } from 'lucide-react';

interface HeroProps {
  lang: Language;
}

export default function Hero({ lang }: HeroProps) {
  const isFa = lang === 'fa';

  return (
    <section id="home" className="pt-24 lg:pt-32 pb-16 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Text & Narrative (7 cols) */}
          <div className="lg:col-span-7 flex flex-col items-start text-right">
            
            {/* Top Pill Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#272937]/80 backdrop-blur-2xl shadow-[0_0_24px_rgba(0,245,212,0.18)] mb-5 border border-[#00f5d4]/25">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#00f5d4] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#26fedc]"></span>
              </span>
              <span className="font-code text-xs text-[#d7fff3] tracking-wide font-medium">
                {isFa ? APP_INFO.roleFa : APP_INFO.roleEn}
              </span>
              <span className="text-[#b9cac4]/40">|</span>
              <span className="font-code text-xs text-[#6ffbbe]">
                {isFa ? 'رتبه ۱ و معدل ۲۰' : 'GPA 4.0 / Rank 1'}
              </span>
            </div>

            {/* Headline with Bioluminescent Gradient */}
            <h1 className="font-space text-4xl sm:text-6xl font-extrabold text-[#e1e1f3] tracking-tight mb-3">
              <span className="bg-gradient-to-l from-[#d7fff3] via-[#00f5d4] via-[#a855f7] to-[#6ffbbe] bg-clip-text text-transparent drop-shadow-[0_0_35px_rgba(0,245,212,0.35)]">
                {isFa ? APP_INFO.nameFa : APP_INFO.nameEn}
              </span>
            </h1>

            {/* Monospaced Metadata String */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 font-code text-xs text-[#00f5d4]/90 mb-4 bg-[#191b28]/60 p-2 rounded-xl border border-[#3a4a46]/30">
              <div className="flex items-center gap-1.5">
                <Calendar className="w-3.5 h-3.5 text-[#4edea3]" />
                <span>{isFa ? APP_INFO.birthFa : APP_INFO.birthEn}</span>
              </div>
              <span className="text-[#b9cac4]/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5 text-[#26fedc]" />
                <span>{isFa ? APP_INFO.locationFa : APP_INFO.locationEn}</span>
              </div>
              <span className="text-[#b9cac4]/30 hidden sm:inline">•</span>
              <div className="flex items-center gap-1.5">
                <CheckCircle2 className="w-3.5 h-3.5 text-[#79d1ff]" />
                <span>{isFa ? 'پایه نهم دبیرستان' : 'Grade 9 Scholar'}</span>
              </div>
            </div>

            {/* Narrative description */}
            <p className="font-outfit text-base sm:text-lg text-[#b9cac4] leading-relaxed max-w-2xl mb-6">
              {isFa ? (
                <>
                  پژوهشگر جوان متمرکز بر فصل مشترک{' '}
                  <span className="text-white font-semibold">علوم تجربی و زیست‌شناسی سلولی</span> با سامانه‌های هوشمند
                  محاسباتی. دارنده کارنامه درخشان و{' '}
                  <span className="text-[#00f5d4] font-code bg-[#272937]/90 px-2 py-0.5 rounded border border-[#00f5d4]/30">
                    معدل ۲۰.۰۰ کامل
                  </span>
                  ، با چشم‌انداز ورود به رشته علوم تجربی، قبولی المپیاد زیست‌شناسی و ساخت مدل‌های عصبی شبیه‌ساز داده‌های
                  بیولوژیک.
                </>
              ) : (
                <>
                  Young computational biology scholar bridging{' '}
                  <span className="text-white font-semibold">Experimental Life Sciences</span> and intelligent
                  computational architectures. Holding an unblemished{' '}
                  <span className="text-[#00f5d4] font-code bg-[#272937]/90 px-2 py-0.5 rounded border border-[#00f5d4]/30">
                    Perfect 20.00 GPA
                  </span>
                  , gearing towards national biology olympiads and bio-neural predictive systems.
                </>
              )}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
              <a
                href="#achievements-bar"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#00f5d4]/15 hover:bg-[#00f5d4]/25 text-[#26fedc] font-code text-sm backdrop-blur-xl shadow-[0_0_24px_rgba(0,245,212,0.3)] transition-all transform hover:scale-[1.02] border border-[#00f5d4]/30 font-medium"
              >
                <Award className="w-4 h-4 text-[#00f5d4]" />
                <span>{isFa ? 'مشاهده کارنامه و افتخارات (معدل ۲۰)' : 'View Academic Honors (GPA 20)'}</span>
              </a>
              <a
                href="#projects-section"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#9d4edd]/20 hover:bg-[#9d4edd]/30 text-[#e0aaff] font-outfit text-sm backdrop-blur-xl transition-all shadow-[0_0_20px_rgba(157,78,221,0.25)] border border-[#9d4edd]/30"
              >
                <BrainCircuit className="w-4 h-4" />
                <span>{isFa ? 'پروژه‌های پژوهشی و هوش مصنوعی' : 'Bio-AI Research & Projects'}</span>
              </a>
            </div>

            {/* Micro Badge Status Indicator */}
            <div className="mt-6 flex items-center gap-2 px-4 py-2 rounded-xl bg-[#0b0d1a]/85 backdrop-blur-xl border border-[#3a4a46]/40">
              <span className="w-2 h-2 rounded-full bg-[#4edea3] shadow-[0_0_8px_rgba(78,222,163,0.9)] animate-pulse" />
              <span className="font-code text-xs text-[#b9cac4]">
                {isFa
                  ? 'وضعیت تحصیلی جاری: دانش‌آموز ممتاز • پایه نهم • آماده ورود به متوسطه دوم علوم تجربی'
                  : 'Current Status: Grade 9 Top Rank • Heading to Experimental Sciences Track'}
              </span>
            </div>
          </div>

          {/* 3D Three.js Interactive DNA Helix Showcase (5 cols) */}
          <div className="lg:col-span-5 flex justify-center">
            <div className="relative w-full max-w-md rounded-2xl bg-[#191b28]/80 backdrop-blur-2xl p-4 shadow-[0_24px_60px_-10px_rgba(0,0,0,0.85),0_0_35px_rgba(0,245,212,0.2),0_0_40px_rgba(157,78,221,0.15)] border border-[#00f5d4]/20">
              {/* Glass Rim Highlight */}
              <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.2),inset_0_-1px_0_0_rgba(0,245,212,0.15)] pointer-events-none" />

              {/* Card Header Tags */}
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ffb4ab]/80" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#9d4edd]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#00f5d4]/80" />
                  <span className="font-code text-[11px] text-[#b9cac4]/80 mr-2">MS-AI-BIO.SYS // THREE.JS 3D</span>
                </div>
                <span className="font-code text-[11px] text-[#6ffbbe] bg-[#00a572]/20 px-2 py-0.5 rounded-full border border-[#4edea3]/20 flex items-center gap-1">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#4edea3] animate-ping" />
                  INTERACTIVE 3D
                </span>
              </div>

              {/* 3D Real Three.js Canvas */}
              <ThreeDnaScene interactive={true} />

              {/* Card Bottom Specs */}
              <div className="mt-3 grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-xl bg-[#1d1f2c]/80 flex flex-col border border-[#3a4a46]/30">
                  <span className="font-code text-[10px] text-[#b9cac4]">
                    {isFa ? 'شاخه پژوهشی اصلی' : 'Primary Domain'}
                  </span>
                  <span className="font-outfit text-xs text-[#e1e1f3] font-semibold mt-0.5">
                    {isFa ? 'زیست‌شناسی محاسباتی' : 'Computational Biology'}
                  </span>
                </div>
                <div className="p-2.5 rounded-xl bg-[#1d1f2c]/80 flex flex-col border border-[#3a4a46]/30">
                  <span className="font-code text-[10px] text-[#b9cac4]">
                    {isFa ? 'الگوریتم‌های انتخابی' : 'Selected Algorithms'}
                  </span>
                  <span className="font-outfit text-xs text-[#26fedc] font-semibold mt-0.5">
                    {isFa ? 'مدل‌های عصبی و یادگیری' : 'Neural Models & Deep Learning'}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
