import { useState } from 'react';
import { Language, Project } from '../types';
import { PROJECTS } from '../data';
import { Dna, Box, BrainCircuit, ArrowLeft, ArrowRight, Play, Check, Sparkles, X, Activity } from 'lucide-react';

interface ProjectsProps {
  lang: Language;
}

export default function Projects({ lang }: ProjectsProps) {
  const isFa = lang === 'fa';
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  // Interactive Project Modal States
  const [dnaSeq, setDnaSeq] = useState('ATGCGATCGATCGATAGCTAGCTAGCTA');
  const [predictedScore, setPredictedScore] = useState<number | null>(null);
  const [simViscosity, setSimViscosity] = useState(1.2);
  const [selectedQuestion, setSelectedQuestion] = useState(0);

  const sampleQuestions = [
    {
      q: 'نقش آنزیم هلیکاز و توپوایزومراز در همانندسازی DNA چیست؟',
      a: 'آنزیم هلیکاز پیوندهای هیدروژنی بین دو رشته DNA را می‌شکند و دو رشته را از هم باز می‌کند (ایجاد دوراهی همانندسازی). توپوایزومراز (DNA ژیراز) پیچش‌های اضافی و سوپرکویل‌های حاصل از باز شدن رشته‌ها را جلوتر از دوراهی رفع کرده و از شکست ساختاری DNA جلوگیری می‌نماید.',
    },
    {
      q: 'چگونه تنظیم اپران لک (Lac Operon) در باکتری E. coli عمل می‌کند؟',
      a: 'اپران لک نمونه کلاسیک کنترل منفی و القایی بیان ژن است. در غیاب لاکتوز، پروتئین مهارکننده (Repressor) به اپراتور متصل شده و مانع رونویسی RNA پلی‌مراز می‌شود. با حضور آلو‌لاکتوز، مهارکننده غیرفعال شده و با مشارکت پروتئین CAP و cAMP رونویسی القا می‌گردد.',
    },
    {
      q: 'قانون تفکیک صفات مندل و رفتار کروموزوم‌ها در میوز I چه ارتباطی دارند؟',
      a: 'بر اساس قانون اول مندل (تفکیک آلل‌ها)، دو آلل یک صفت در زمان تشکیل گامت از هم جدا می‌شوند. اساس سلولی این پدیده، جدا شدن کروموزوم‌های همتا (همولوگ) در مرحله آنافاز میوز I است که هر کروموزوم به یکی از دو قطب سلول هدایت می‌شود.',
    },
  ];

  const runDnaPrediction = () => {
    // Simple mock heuristic calculation to display interactive result
    const gcMatches = dnaSeq.match(/[GCgc]/g) || [];
    const gcPercent = (gcMatches.length / Math.max(dnaSeq.length, 1)) * 100;
    const computedScore = Math.min(99.4, Math.max(62.0, 50 + gcPercent * 0.45 + (dnaSeq.length % 7) * 2));
    setPredictedScore(Number(computedScore.toFixed(1)));
  };

  const getProjectIcon = (id: string) => {
    switch (id) {
      case 'deep-bio-gen':
        return <Dna className="w-6 h-6 text-[#00f5d4]" />;
      case 'cyto-sim':
        return <Box className="w-6 h-6 text-[#c77dff]" />;
      case 'bio-mentor':
        return <BrainCircuit className="w-6 h-6 text-[#4edea3]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#00f5d4]" />;
    }
  };

  return (
    <section id="projects-section" className="py-16 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="font-code text-xs text-[#00f5d4] tracking-wider font-semibold">
                02 // RESEARCH & INNOVATION LAB
              </span>
              <div className="h-px w-16 bg-gradient-to-r from-[#00f5d4] to-[#9d4edd]" />
            </div>
            <h2 className="font-space text-2xl sm:text-4xl font-bold text-white tracking-tight">
              {isFa ? 'پروژه‌ها و پژوهش‌های علمی و هوش مصنوعی میلاد' : 'Featured Bio-AI Research & Projects'}
            </h2>
            <p className="font-code text-xs text-[#c77dff] mt-1">
              Featured Bio-AI Projects & Computational Systems
            </p>
          </div>
          <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] max-w-md mt-4 md:mt-0 leading-relaxed">
            {isFa
              ? 'پیاده‌سازی نمونه‌های اولیه شبیه‌سازی بیولوژی محاسباتی، پردازش داده‌های توالی DNA و ابزارهای یادگیری ژنتیک هوشمند.'
              : 'Interactive prototypes of computational biology simulations, promoter DNA sequencing, and neural genetic predictors.'}
          </p>
        </div>

        {/* 3-Column Glass Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {PROJECTS.map((project) => (
            <div
              key={project.id}
              className="group relative rounded-3xl p-6 bg-[#191b28]/80 backdrop-blur-2xl shadow-[0_20px_45px_rgba(0,0,0,0.7)] hover:shadow-[0_20px_50px_rgba(0,245,212,0.2)] transition-all duration-300 border border-[#00f5d4]/20 flex flex-col justify-between overflow-hidden"
            >
              {/* Background ambient blur */}
              <div className="absolute -top-12 -right-12 w-36 h-36 bg-[#00f5d4]/10 rounded-full blur-[50px] pointer-events-none" />
              <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.12)] pointer-events-none" />

              <div>
                {/* Header tags */}
                <div className="flex items-center justify-between mb-4">
                  <span className="px-2.5 py-1 rounded-full bg-[#00f5d4]/15 text-[#26fedc] font-code text-[11px] border border-[#00f5d4]/30 flex items-center gap-1.5 font-medium">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#00f5d4] animate-pulse" />
                    {isFa ? project.badge : project.badgeEn}
                  </span>
                  <span className="font-code text-xs text-[#b9cac4]/60">{project.code}</span>
                </div>

                {/* Icon */}
                <div className="w-12 h-12 rounded-2xl bg-[#272937]/80 flex items-center justify-center mb-4 shadow-[0_0_16px_rgba(0,245,212,0.2)] border border-white/10">
                  {getProjectIcon(project.id)}
                </div>

                {/* Title */}
                <h3 className="font-space text-lg font-bold text-white mb-1 group-hover:text-[#26fedc] transition-colors leading-snug">
                  {isFa ? project.title : project.titleEn}
                </h3>
                <span className="font-code text-xs text-[#6ffbbe] block mb-3 font-medium">
                  {project.subtitle}
                </span>

                {/* Description */}
                <p className="font-outfit text-xs text-[#b9cac4] leading-relaxed mb-4">
                  {isFa ? project.description : project.descriptionEn}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-6">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-2 py-0.5 rounded-md bg-[#272937] text-[#e1e1f3] font-code text-[10px] border border-[#3a4a46]/30"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Action Footer */}
              <div className="pt-4 border-t border-[#3a4a46]/40 flex items-center justify-between">
                <span className="font-code text-[11px] text-[#b9cac4]">
                  {isFa ? project.metric : project.metricEn}
                </span>
                <button
                  type="button"
                  onClick={() => setActiveProject(project)}
                  className="inline-flex items-center gap-1.5 text-[#26fedc] font-code text-xs font-semibold hover:text-white transition-colors cursor-pointer"
                >
                  <span>{isFa ? 'بررسی و اجرای زنده' : 'Run Interactive Demo'}</span>
                  {isFa ? <ArrowLeft className="w-3.5 h-3.5" /> : <ArrowRight className="w-3.5 h-3.5" />}
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Interactive Demo Modal */}
        {activeProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-lg animate-fadeIn">
            <div className="relative w-full max-w-2xl rounded-3xl bg-[#10131f] border border-[#00f5d4]/40 p-6 sm:p-8 shadow-[0_24px_70px_rgba(0,0,0,0.9),0_0_40px_rgba(0,245,212,0.2)] max-h-[90vh] overflow-y-auto">
              
              {/* Close Button */}
              <button
                type="button"
                onClick={() => setActiveProject(null)}
                className="absolute top-5 left-5 p-2 rounded-full bg-[#1d1f2c] text-[#b9cac4] hover:text-white border border-[#3a4a46]"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 rounded-2xl bg-[#00f5d4]/20 flex items-center justify-center text-[#00f5d4]">
                  {getProjectIcon(activeProject.id)}
                </div>
                <div>
                  <span className="font-code text-xs text-[#00f5d4]">{activeProject.code} // LIVE DEMO</span>
                  <h3 className="font-space font-bold text-xl text-white">
                    {isFa ? activeProject.title : activeProject.titleEn}
                  </h3>
                </div>
              </div>

              {/* Demo Content by Type */}
              {activeProject.demoType === 'dna-predict' && (
                <div className="space-y-4">
                  <p className="text-xs text-[#b9cac4]">
                    {isFa
                      ? 'یک توالی نوکلئوتیدی (A, T, C, G) دلخواه وارد کنید تا مدل هوش مصنوعی نرخ بیان ژن و پایداری پروموتر را محاسبه کند:'
                      : 'Enter a DNA nucleotide sequence (A, T, C, G) to simulate neural promoter expression scoring:'}
                  </p>
                  <div>
                    <label className="block text-xs font-code text-[#6ffbbe] mb-1">توالی DNA پروموتر:</label>
                    <input
                      type="text"
                      value={dnaSeq}
                      onChange={(e) => setDnaSeq(e.target.value.toUpperCase().replace(/[^ATCG]/g, ''))}
                      className="w-full px-3 py-2 rounded-xl bg-[#0b0d1a] border border-[#3a4a46] text-sm font-code text-[#00f5d4] outline-none"
                      placeholder="مثال: ATGCGATCGATC..."
                    />
                  </div>
                  <button
                    type="button"
                    onClick={runDnaPrediction}
                    className="w-full py-2.5 rounded-xl bg-[#00f5d4] text-[#00382f] font-code text-xs font-bold flex items-center justify-center gap-2 hover:bg-[#26fedc] transition-colors"
                  >
                    <Activity className="w-4 h-4" />
                    <span>تحلیل و استنتاج هوش مصنوعی (Inference)</span>
                  </button>

                  {predictedScore !== null && (
                    <div className="p-4 rounded-xl bg-[#191b28] border border-[#00f5d4]/30 space-y-2">
                      <div className="flex justify-between text-xs font-code">
                        <span className="text-[#b9cac4]">تخمین نرخ بیان ژن (Expression Score):</span>
                        <span className="text-[#00f5d4] font-bold">{predictedScore}%</span>
                      </div>
                      <div className="w-full h-2.5 rounded-full bg-[#0b0d1a] overflow-hidden">
                        <div
                          className="h-full bg-gradient-to-r from-[#00f5d4] to-[#9d4edd] transition-all duration-700"
                          style={{ width: `${predictedScore}%` }}
                        />
                      </div>
                      <p className="text-[11px] text-[#6ffbbe] font-code">
                        طول توالی: {dnaSeq.length} نوکلئوتید | درصد GC: {((dnaSeq.match(/[GC]/g)?.length || 0) / Math.max(dnaSeq.length, 1) * 100).toFixed(1)}%
                      </p>
                    </div>
                  )}
                </div>
              )}

              {activeProject.demoType === 'cell-sim' && (
                <div className="space-y-4">
                  <p className="text-xs text-[#b9cac4]">
                    تنظیم پارامترهای بیوفیزیکی سیتوپلاسم سلولی برای مشاهده شبیه‌سازی انتشار مولکولی:
                  </p>
                  <div>
                    <div className="flex justify-between text-xs font-code text-[#c77dff] mb-1">
                      <span>گرانروی سیتوپلاسم (Viscosity Index):</span>
                      <span>{simViscosity} cP</span>
                    </div>
                    <input
                      type="range"
                      min="0.5"
                      max="3.0"
                      step="0.1"
                      value={simViscosity}
                      onChange={(e) => setSimViscosity(parseFloat(e.target.value))}
                      className="w-full accent-[#9d4edd]"
                    />
                  </div>
                  <div className="p-4 rounded-xl bg-[#0b0d1a] border border-[#9d4edd]/30 text-center">
                    <div className="font-code text-xs text-[#b9cac4] mb-1">ضریب انتشار مولکولی (D):</div>
                    <div className="font-code text-2xl font-bold text-[#e0aaff]">
                      {(18.4 / simViscosity).toFixed(2)} µm²/s
                    </div>
                    <span className="text-[11px] text-[#c77dff]">
                      وضعیت سلول: شرایط فیزیولوژیک هموستاز پایدار (۳۷°C)
                    </span>
                  </div>
                </div>
              )}

              {activeProject.demoType === 'ai-tutor' && (
                <div className="space-y-4">
                  <p className="text-xs text-[#b9cac4]">
                    پرسش‌های نمونه المپیاد زیست‌شناسی را انتخاب کنید تا پاسخ تحلیلی دستیار هوشمند نمایش داده شود:
                  </p>
                  <div className="flex flex-col gap-2">
                    {sampleQuestions.map((item, idx) => (
                      <button
                        key={item.q}
                        type="button"
                        onClick={() => setSelectedQuestion(idx)}
                        className={`text-right p-2.5 rounded-xl text-xs font-outfit transition-all border ${
                          selectedQuestion === idx
                            ? 'bg-[#00a572]/20 border-[#4edea3] text-white'
                            : 'bg-[#191b28] border-[#3a4a46]/50 text-[#b9cac4] hover:text-white'
                        }`}
                      >
                        {item.q}
                      </button>
                    ))}
                  </div>

                  <div className="p-4 rounded-xl bg-[#191b28] border border-[#4edea3]/30 space-y-1.5">
                    <div className="flex items-center gap-1.5 text-xs font-code text-[#4edea3] font-bold">
                      <Sparkles className="w-3.5 h-3.5" />
                      <span>پاسخ تحلیلی بیومنور AI (بر اساس کتاب کمپبل):</span>
                    </div>
                    <p className="text-xs font-outfit text-[#e1e1f3] leading-relaxed">
                      {sampleQuestions[selectedQuestion].a}
                    </p>
                  </div>
                </div>
              )}

              <div className="mt-6 pt-4 border-t border-[#3a4a46]/40 flex justify-end">
                <button
                  type="button"
                  onClick={() => setActiveProject(null)}
                  className="px-5 py-2 rounded-xl bg-[#1d1f2c] hover:bg-[#272937] text-white text-xs font-code transition-colors"
                >
                  {isFa ? 'بستن پنجره' : 'Close'}
                </button>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
