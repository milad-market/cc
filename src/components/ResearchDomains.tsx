import { Language } from '../types';
import { DOMAINS } from '../data';
import { CheckCircle, ShieldCheck, Dna, Network, Sparkles } from 'lucide-react';

interface ResearchDomainsProps {
  lang: Language;
}

export default function ResearchDomains({ lang }: ResearchDomainsProps) {
  const isFa = lang === 'fa';

  return (
    <section id="research-domains" className="py-16 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-code text-xs text-[#00f5d4] tracking-wider font-semibold">
                03 // SCIENTIFIC DOMAINS
              </span>
              <div className="h-px w-12 bg-[#00f5d4]/40" />
            </div>
            <h2 className="font-space text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {isFa ? 'ستون‌های علمی و زمینه‌های مطالعاتی میلاد' : 'Scientific Domains & Study Pillars'}
            </h2>
          </div>
          <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] max-w-md mt-4 md:mt-0 leading-relaxed">
            {isFa
              ? 'تمرکز سیستماتیک بر یادگیری عمیق در علوم زیست‌شناسی، تحلیل داده‌های بیومدیکال و تسلط بر مبانی فناوری‌های نوظهور.'
              : 'Systematic pursuit of advanced genetics, molecular biochemistry, biomedical data analysis, and modern neural architectures.'}
          </p>
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
          
          {/* Pillar 1: Life Sciences & Genetics (7 cols) */}
          <div className="md:col-span-7 relative rounded-3xl p-6 sm:p-8 bg-[#191b28]/75 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden group border border-[#3a4a46]/30">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#00a572]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#00a572]/20 text-[#4edea3] font-code text-xs border border-[#4edea3]/20 font-medium">
                  {isFa ? DOMAINS[0].badge : DOMAINS[0].badgeEn}
                </span>
                <span className="font-code text-xs text-[#b9cac4]/70">DOMAIN: 01</span>
              </div>

              <h3 className="font-space text-xl sm:text-2xl text-white font-bold mb-3">
                {isFa ? DOMAINS[0].title : DOMAINS[0].titleEn}
              </h3>

              <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] leading-relaxed mb-6">
                {isFa ? DOMAINS[0].description : DOMAINS[0].descriptionEn}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {DOMAINS[0].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#272937] text-[#6ffbbe] font-code text-xs border border-[#3a4a46]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Miniature */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-[#0b0d1a]/90 flex items-center justify-center p-3 border border-[#3a4a46]/40 group-hover:border-[#00f5d4]/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#00f5d4]/10 via-transparent to-[#9d4edd]/10 opacity-70" />
              
              {/* Animated Geometric DNA Representation */}
              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#00f5d4]/20 border border-[#00f5d4]/40 flex items-center justify-center text-[#00f5d4] shadow-[0_0_16px_rgba(0,245,212,0.3)] animate-pulse">
                  <Dna className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-code text-xs text-[#26fedc] font-bold">DNA DOUBLE HELIX SEQUENCING</span>
                  <span className="font-code text-[10px] text-[#b9cac4]">Base Pairs: Adenine • Thymine • Guanine • Cytosine</span>
                </div>
              </div>

              <div className="absolute bottom-3 right-3 font-code text-[10px] text-[#26fedc] bg-[#272937]/90 px-3 py-1 rounded-full backdrop-blur-md border border-[#00f5d4]/20">
                DNA SEQUENCE ARCHIVE #9105
              </div>
            </div>
          </div>

          {/* Pillar 2: AI & Computing (5 cols) */}
          <div className="md:col-span-5 relative rounded-3xl p-6 sm:p-8 bg-[#191b28]/75 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex flex-col justify-between overflow-hidden group border border-[#3a4a46]/30">
            <div className="absolute bottom-0 left-0 w-64 h-64 bg-[#00f5d4]/10 rounded-full blur-[80px] pointer-events-none" />
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] pointer-events-none" />

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="px-3 py-1 rounded-full bg-[#00f5d4]/15 text-[#26fedc] font-code text-xs border border-[#00f5d4]/25 font-medium">
                  {isFa ? DOMAINS[1].badge : DOMAINS[1].badgeEn}
                </span>
                <span className="font-code text-xs text-[#b9cac4]/70">DOMAIN: 02</span>
              </div>

              <h3 className="font-space text-xl sm:text-2xl text-white font-bold mb-3">
                {isFa ? DOMAINS[1].title : DOMAINS[1].titleEn}
              </h3>

              <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] leading-relaxed mb-6">
                {isFa ? DOMAINS[1].description : DOMAINS[1].descriptionEn}
              </p>

              {/* Tags */}
              <div className="flex flex-wrap gap-2 mb-6">
                {DOMAINS[1].tags.map((tag) => (
                  <span
                    key={tag}
                    className="px-3 py-1 rounded-full bg-[#272937] text-[#00f5d4] font-code text-xs border border-[#3a4a46]/40"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Visual Miniature */}
            <div className="relative w-full h-44 rounded-2xl overflow-hidden bg-[#0b0d1a]/90 flex items-center justify-center p-3 border border-[#3a4a46]/40 group-hover:border-[#9d4edd]/40 transition-colors">
              <div className="absolute inset-0 bg-gradient-to-br from-[#9d4edd]/10 via-transparent to-[#00f5d4]/10 opacity-70" />

              <div className="flex items-center gap-3 relative z-10">
                <div className="w-10 h-10 rounded-xl bg-[#9d4edd]/20 border border-[#9d4edd]/40 flex items-center justify-center text-[#c77dff] shadow-[0_0_16px_rgba(157,78,221,0.3)] animate-pulse">
                  <Network className="w-6 h-6" />
                </div>
                <div className="flex flex-col text-right">
                  <span className="font-code text-xs text-[#e0aaff] font-bold">NEURAL GRAPH COMPUTATION</span>
                  <span className="font-code text-[10px] text-[#b9cac4]">Layers: Input (Dense) → LSTM / Transformer → Output</span>
                </div>
              </div>

              <div className="absolute bottom-3 left-3 font-code text-[10px] text-[#79d1ff] bg-[#272937]/90 px-3 py-1 rounded-full backdrop-blur-md border border-[#00f5d4]/20">
                NEURAL INFERENCE: 99.8%
              </div>
            </div>
          </div>

          {/* Pillar 3: Academic Mastery (Full Width 12 cols) */}
          <div className="md:col-span-12 relative rounded-3xl p-6 sm:p-8 bg-[#191b28]/75 backdrop-blur-2xl shadow-[0_20px_40px_rgba(0,0,0,0.7)] flex flex-col md:flex-row items-center justify-between gap-8 overflow-hidden border border-[#3a4a46]/30">
            <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] pointer-events-none" />

            <div className="md:w-7/12">
              <div className="flex items-center gap-2 mb-2">
                <span className="w-2.5 h-2.5 rounded-full bg-[#26fedc] animate-pulse" />
                <span className="font-code text-xs text-[#26fedc] font-semibold">
                  ACADEMIC MASTERY & DEDICATION
                </span>
              </div>
              <h3 className="font-space text-xl sm:text-2xl text-white font-bold mb-3">
                {isFa
                  ? 'کارنامه بدون نقص؛ پایه‌ریزی استوار برای المپیاد و کنکور تجربی'
                  : 'Flawless Academic Records; Solid Foundation for Olympiads'}
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] leading-relaxed mb-4">
                {isFa
                  ? 'کسب نمرات کامل ۲۰ در تمام دروس علوم تجربی، ریاضیات و ادبیات، میلاد را به یکی از شاخص‌ترین استعدادهای منطقه سلطان‌آباد تبدیل کرده است. هدف‌گذاری روشن وی قبولی با رتبه‌های برتر کشوری در المپیاد و رشته‌های پزشکی و مهندسی بیومدیکال است.'
                  : 'Achieving perfect 20.00 scores across experimental sciences, mathematics, and core curricula positions Milad as a premier young talent in Soltanabad, geared toward national Olympiad excellence and medical biotechnology.'}
              </p>
              <div className="flex items-center gap-2 text-[#6ffbbe] font-code text-xs font-semibold">
                <ShieldCheck className="w-4 h-4 text-[#4edea3]" />
                <span>{isFa ? 'تاییدیه نمرات ممتاز کلاسی و استانی (معدل ۲۰.۰۰)' : 'Verified Perfect 4.0 / 20.00 GPA Certificate'}</span>
              </div>
            </div>

            {/* Visual Infographic Progress Ring */}
            <div className="md:w-5/12 w-full flex items-center justify-center p-6 rounded-2xl bg-[#0b0d1a]/80 backdrop-blur-md border border-[#3a4a46]/40">
              <div className="flex items-center gap-6">
                
                {/* Radial Progress Ring */}
                <div className="relative w-28 h-28 shrink-0 flex items-center justify-center">
                  <svg className="w-full h-full transform -rotate-90" viewBox="0 0 36 36">
                    <path
                      className="text-[#323442]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="3.5"
                    />
                    <path
                      className="text-[#00f5d4] drop-shadow-[0_0_8px_rgba(0,245,212,0.8)]"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      fill="none"
                      stroke="currentColor"
                      strokeDasharray="100, 100"
                      strokeLinecap="round"
                      strokeWidth="3.5"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-center">
                    <span className="font-code text-xl font-bold text-[#26fedc]">100%</span>
                    <span className="font-code text-[10px] text-[#b9cac4]">
                      {isFa ? 'معدل کل' : 'Total GPA'}
                    </span>
                  </div>
                </div>

                {/* Checklist */}
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4edea3] shrink-0" />
                    <span className="font-outfit text-xs text-white">
                      {isFa ? 'رتبه اول پایه نهم متوسطه' : 'Rank 1 in Grade 9'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4edea3] shrink-0" />
                    <span className="font-outfit text-xs text-white">
                      {isFa ? 'معدل ۲۰.۰۰ کامل در تمام فصول' : '20.00 GPA Across All Semesters'}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-[#4edea3] shrink-0" />
                    <span className="font-outfit text-xs text-white">
                      {isFa ? 'پژوهشگر برتر دانش‌آموزی منطقه' : 'Premier Student Researcher'}
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}
