import { Language } from '../types';
import { MILESTONES } from '../data';
import { Compass, Sparkles } from 'lucide-react';

interface TimelineProps {
  lang: Language;
}

export default function Timeline({ lang }: TimelineProps) {
  const isFa = lang === 'fa';

  return (
    <section className="py-16 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#191b28] border border-[#3a4a46]/50 mb-2">
            <Compass className="w-3.5 h-3.5 text-[#6ffbbe]" />
            <span className="font-code text-xs text-[#6ffbbe]">
              04 // CHRONICLES & FUTURE HORIZON
            </span>
          </div>
          <h2 className="font-space text-2xl sm:text-4xl font-bold text-white mt-1">
            {isFa ? 'مسیر رشد؛ از سلطان‌آباد تا افق‌های پژوهش جهانی' : 'Chronicles & Milestones of Growth'}
          </h2>
          <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] mt-2">
            {isFa
              ? 'روایت گام‌به‌گام میلاد صباغی در تعمیق دانسته‌ها و طراحی آینده‌ای درخشان در پزشکی و هوش مصنوعی.'
              : 'Step-by-step milestones of Milad Sabaghi in mastering experimental science and computational intelligence.'}
          </p>
        </div>

        {/* Timeline Line */}
        <div className="relative border-r border-[#3a4a46]/50 mr-4 sm:mr-8 pr-6 sm:pr-10 space-y-8 max-w-3xl mx-auto">
          {MILESTONES.map((item, index) => {
            const colors = [
              { border: 'border-[#00f5d4]', dot: 'bg-[#26fedc]', glow: 'rgba(0,245,212,0.6)' },
              { border: 'border-[#4edea3]', dot: 'bg-[#6ffbbe]', glow: 'rgba(78,222,163,0.6)' },
              { border: 'border-[#afe1ff]', dot: 'bg-[#79d1ff]', glow: 'rgba(175,225,255,0.6)' },
            ];
            const activeColor = colors[index % colors.length];

            return (
              <div key={item.title} className="relative group">
                
                {/* Node Indicator */}
                <div
                  className={`absolute -right-[31px] sm:-right-[47px] top-2 w-6 h-6 rounded-full bg-[#272937] border-2 ${activeColor.border} flex items-center justify-center shadow-lg transition-transform group-hover:scale-110`}
                  style={{ boxShadow: `0 0 12px ${activeColor.glow}` }}
                >
                  <span className={`w-2 h-2 rounded-full ${activeColor.dot}`} />
                </div>

                {/* Card Container */}
                <div className="p-5 sm:p-6 rounded-2xl bg-[#191b28]/75 backdrop-blur-2xl shadow-lg transition-all hover:bg-[#272937]/70 border border-[#3a4a46]/30">
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="font-code text-xs text-[#00f5d4] font-semibold">
                      {item.year}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-[#272937] text-[#b9cac4] font-code text-[11px] border border-[#3a4a46]/50">
                      {isFa ? item.tag : item.tagEn}
                    </span>
                  </div>

                  <h4 className="font-space text-base sm:text-lg text-white font-bold mb-2">
                    {isFa ? item.title : item.titleEn}
                  </h4>

                  <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] leading-relaxed">
                    {isFa ? item.description : item.descriptionEn}
                  </p>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
