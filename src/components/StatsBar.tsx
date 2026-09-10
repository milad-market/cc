import { Language } from '../types';
import { APP_INFO } from '../data';
import { Award, GraduationCap, Fingerprint, Brain, Sparkles, TrendingUp } from 'lucide-react';

interface StatsBarProps {
  lang: Language;
}

export default function StatsBar({ lang }: StatsBarProps) {
  const isFa = lang === 'fa';

  return (
    <section id="achievements-bar" className="py-12 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          
          {/* Stat Card 1: GPA 20.00 */}
          <div className="group relative rounded-2xl p-4 bg-[#191b28]/75 backdrop-blur-2xl shadow-[0_16px_36px_-8px_rgba(0,0,0,0.6)] hover:bg-[#272937]/70 transition-all duration-300 border border-[#00f5d4]/25">
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] pointer-events-none" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-code text-[11px] text-[#6ffbbe] tracking-wider font-semibold">
                ACADEMIC EXCELLENCE
              </span>
              <div className="w-8 h-8 rounded-full bg-[#00a572]/30 flex items-center justify-center text-[#4edea3] shadow-[0_0_14px_rgba(78,222,163,0.3)]">
                <Award className="w-4 h-4" />
              </div>
            </div>
            <div className="font-code text-3xl font-bold text-[#26fedc] drop-shadow-[0_0_16px_rgba(0,245,212,0.4)]">
              ۲۰.۰۰ <span className="text-sm font-normal text-[#b9cac4]">/ ۲۰.۰۰</span>
            </div>
            <p className="font-outfit text-xs text-[#b9cac4] mt-1.5 leading-relaxed">
              {isFa ? 'معدل کل نهایی • رتبه اول پایه نهم تحصیلی' : 'Cumulative Final GPA • Rank 1 in Grade 9'}
            </p>
            <div className="mt-3 pt-2 flex items-center gap-1.5 border-t border-[#3a4a46]/30">
              <span className="font-code text-[11px] text-[#4edea3] font-semibold">
                GPA 4.0 (PERFECT SCORE)
              </span>
            </div>
          </div>

          {/* Stat Card 2: Grade 9 */}
          <div className="group relative rounded-2xl p-4 bg-[#191b28]/75 backdrop-blur-2xl shadow-[0_16px_36px_-8px_rgba(0,0,0,0.6)] hover:bg-[#272937]/70 transition-all duration-300 border border-[#3a4a46]/40">
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] pointer-events-none" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-code text-[11px] text-[#79d1ff] tracking-wider font-semibold">
                CURRENT STAGE
              </span>
              <div className="w-8 h-8 rounded-full bg-[#272937] flex items-center justify-center text-[#00f5d4] shadow-[0_0_14px_rgba(0,245,212,0.2)]">
                <GraduationCap className="w-4 h-4" />
              </div>
            </div>
            <div className="font-space text-2xl font-bold text-white">
              {isFa ? 'پایه نهم' : 'Grade 9'}
            </div>
            <p className="font-outfit text-xs text-[#b9cac4] mt-1.5 leading-relaxed">
              {isFa ? 'در آستانه انتخاب رشته علوم تجربی و آزمایشگاهی' : 'Preparing for Experimental Sciences Track'}
            </p>
            <div className="mt-3 pt-2 flex items-center gap-1.5 border-t border-[#3a4a46]/30">
              <span className="font-code text-[11px] text-[#00f5d4]">
                Grade 9 • Experimental Sciences
              </span>
            </div>
          </div>

          {/* Stat Card 3: Age & Birthdate */}
          <div className="group relative rounded-2xl p-4 bg-[#191b28]/75 backdrop-blur-2xl shadow-[0_16px_36px_-8px_rgba(0,0,0,0.6)] hover:bg-[#272937]/70 transition-all duration-300 border border-[#3a4a46]/40">
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] pointer-events-none" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-code text-[11px] text-[#b9cac4] tracking-wider font-semibold">
                BIODATA
              </span>
              <div className="w-8 h-8 rounded-full bg-[#272937] flex items-center justify-center text-[#4edea3] shadow-[0_0_14px_rgba(78,222,163,0.2)]">
                <Fingerprint className="w-4 h-4" />
              </div>
            </div>
            <div className="font-space text-2xl font-bold text-white">
              {isFa ? '۱۴ سال ' : '14 Years '}<span className="text-xs font-normal text-[#b9cac4]">(۱۳۹۱)</span>
            </div>
            <p className="font-outfit text-xs text-[#b9cac4] mt-1.5 leading-relaxed">
              {isFa ? 'متولد ۵ شهریور ۱۳۹۱ • ساکن سلطان‌آباد' : 'Born Aug 26, 2012 • Soltanabad, Iran'}
            </p>
            <div className="mt-3 pt-2 flex items-center gap-1.5 border-t border-[#3a4a46]/30">
              <span className="font-code text-[11px] text-[#b9cac4]">
                Born Aug 26, 2012
              </span>
            </div>
          </div>

          {/* Stat Card 4: Scientific Fusion Core */}
          <div className="group relative rounded-2xl p-4 bg-[#191b28]/75 backdrop-blur-2xl shadow-[0_16px_36px_-8px_rgba(0,0,0,0.6)] hover:bg-[#272937]/70 transition-all duration-300 border border-[#9d4edd]/30">
            <div className="absolute inset-0 rounded-2xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15)] pointer-events-none" />
            <div className="flex items-center justify-between mb-2">
              <span className="font-code text-[11px] text-[#c77dff] tracking-wider font-semibold">
                CORE FOCUS
              </span>
              <div className="w-8 h-8 rounded-full bg-[#9d4edd]/20 flex items-center justify-center text-[#c77dff] shadow-[0_0_14px_rgba(157,78,221,0.3)]">
                <Brain className="w-4 h-4" />
              </div>
            </div>
            <div className="font-space text-xl font-bold text-[#6ffbbe]">
              بیوتکنولوژی & AI
            </div>
            <p className="font-outfit text-xs text-[#b9cac4] mt-1.5 leading-relaxed">
              {isFa ? 'تلفیق ژنتیک مدرن و هوش محاسباتی' : 'Genomics, Molecular Biology & AI'}
            </p>
            <div className="mt-3 pt-2 flex items-center gap-1.5 border-t border-[#3a4a46]/30">
              <span className="font-code text-[11px] text-[#d7fff3]">
                Bio-AI Synthesis Pioneer
              </span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
