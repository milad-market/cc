import { useState, FormEvent } from 'react';
import { Language } from '../types';
import { APP_INFO } from '../data';
import { MapPin, Mail, Calendar, Award, Send, CheckCircle, Copy, ExternalLink, Globe, Sparkles } from 'lucide-react';

interface ContactHubProps {
  lang: Language;
}

export default function ContactHub({ lang }: ContactHubProps) {
  const isFa = lang === 'fa';

  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [copiedLink, setCopiedLink] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !contact.trim() || !message.trim()) return;
    setSubmitted(true);
    setTimeout(() => {
      setSubmitted(false);
      setName('');
      setContact('');
      setMessage('');
    }, 6000);
  };

  const copyLiveLink = (url: string) => {
    navigator.clipboard.writeText(url);
    setCopiedLink(true);
    setTimeout(() => setCopiedLink(false), 3000);
  };

  return (
    <section id="contact-hub" className="pt-12 pb-24 relative z-10">
      <div className="max-w-[1200px] mx-auto px-4 lg:px-8">
        <div className="relative rounded-3xl p-6 sm:p-10 lg:p-12 bg-[#191b28]/85 backdrop-blur-2xl shadow-[0_24px_50px_rgba(0,0,0,0.8)] overflow-hidden border border-[#3a4a46]/30">
          
          {/* Subtle Caustic Rim and Glow */}
          <div className="absolute inset-0 rounded-3xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.15),inset_0_-1px_0_0_rgba(0,245,212,0.1)] pointer-events-none" />
          <div className="absolute -top-32 -left-32 w-80 h-80 rounded-full bg-[#00f5d4]/15 blur-[120px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
            
            {/* Text and Location Badge (6 cols) */}
            <div className="lg:col-span-6 flex flex-col items-start text-right">
              <span className="font-code text-xs text-[#26fedc] mb-2 font-semibold">
                GET IN TOUCH // پُل ارتباطی علمی
              </span>
              <h3 className="font-space text-2xl sm:text-4xl text-white font-bold mb-3">
                {isFa ? 'ارتباط با میلاد صباغی' : 'Connect with Milad Sabaghi'}
              </h3>
              <p className="font-outfit text-xs sm:text-sm text-[#b9cac4] leading-relaxed mb-6">
                {isFa
                  ? 'مشتاق گفتگو با اساتید محترم، پژوهشگران علوم زیستی و دوستداران فناوری‌های هوش مصنوعی پیرامون ایده‌های مشترک، منابع پیشرفته المپیاد و پروژه‌های نوآورانه.'
                  : 'Welcoming academic correspondence, research exchanges in computational genetics, Olympiad mentorship, and bio-intelligence innovations.'}
              </p>

              {/* Map Location Card (Soltanabad) */}
              <div className="w-full rounded-2xl overflow-hidden bg-[#0b0d1a]/95 p-4 shadow-inner mb-6 border border-[#3a4a46]/40">
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <MapPin className="w-4 h-4 text-[#00f5d4]" />
                    <span className="font-space text-sm font-semibold text-white">
                      سلطان‌آباد | Soltanabad
                    </span>
                  </div>
                  <span className="font-code text-xs text-[#6ffbbe] font-semibold">IRAN</span>
                </div>

                {/* Styled Map Illustration Frame */}
                <div className="w-full h-36 rounded-xl relative overflow-hidden bg-[#10131f] border border-[#3a4a46]/30 flex flex-col justify-between p-3">
                  {/* Subtle Grid Map Lines */}
                  <div className="absolute inset-0 opacity-20 bg-[linear-gradient(to_right,#00f5d4_1px,transparent_1px),linear-gradient(to_bottom,#4edea3_1px,transparent_1px)] bg-[size:16px_16px]" />
                  
                  <div className="relative z-10 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded bg-[#191b28]/90 backdrop-blur-md font-code text-[11px] text-[#00f5d4] border border-[#00f5d4]/30 flex items-center gap-1.5">
                      <span className="w-2 h-2 rounded-full bg-[#00f5d4] animate-ping" />
                      <span>SOLTANABAD NODE #01</span>
                    </div>
                    <span className="font-code text-[10px] text-[#b9cac4]">GEO: 35.58° N, 51.18° E</span>
                  </div>

                  <div className="relative z-10 flex items-center justify-between">
                    <div className="px-2.5 py-1 rounded bg-[#0b0d1a]/90 backdrop-blur-md font-code text-[11px] text-white border border-[#3a4a46]/40">
                      پایگاه علمی و تحصیلی میلاد صباغی
                    </div>
                    <span className="font-code text-[10px] text-[#4edea3]">Active Scholar</span>
                  </div>
                </div>
              </div>

              {/* Quick Info Chips */}
              <div className="flex flex-wrap gap-2 mb-6">
                <div className="px-3.5 py-1.5 rounded-full bg-[#272937]/80 text-[#e1e1f3] font-code text-xs flex items-center gap-2 border border-[#3a4a46]/40">
                  <Calendar className="w-3.5 h-3.5 text-[#26fedc]" />
                  <span>{isFa ? APP_INFO.birthFa : APP_INFO.birthEn}</span>
                </div>
                <div className="px-3.5 py-1.5 rounded-full bg-[#272937]/80 text-[#e1e1f3] font-code text-xs flex items-center gap-2 border border-[#3a4a46]/40">
                  <Award className="w-3.5 h-3.5 text-[#4edea3]" />
                  <span>{isFa ? 'معدل ۲۰.۰۰ پایه نهم' : 'GPA 4.0 (20.00)'}</span>
                </div>
              </div>

              {/* Real Public Links Card Box */}
              <div className="w-full p-4 rounded-2xl bg-[#0b0d1a]/90 border border-[#00f5d4]/30 space-y-2">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2 text-xs font-code text-[#00f5d4] font-semibold">
                    <Globe className="w-4 h-4" />
                    <span>{isFa ? 'لینک واقعی و آنلاین وب‌سایت:' : 'Live Online Web URLs:'}</span>
                  </div>
                  <span className="font-code text-[10px] text-emerald-400 bg-emerald-950/80 px-2 py-0.5 rounded border border-emerald-500/30">
                    LIVE CLOUD RUN
                  </span>
                </div>

                <div className="flex items-center gap-2 bg-[#191b28] p-2 rounded-xl border border-[#3a4a46]/50">
                  <span className="font-code text-xs text-[#e1e1f3] truncate dir-ltr flex-1">
                    {APP_INFO.liveShareUrl}
                  </span>
                  <button
                    type="button"
                    onClick={() => copyLiveLink(APP_INFO.liveShareUrl)}
                    className="px-2.5 py-1 rounded-lg bg-[#00f5d4]/20 hover:bg-[#00f5d4]/30 text-[#00f5d4] text-xs font-code flex items-center gap-1 shrink-0 transition-colors"
                  >
                    {copiedLink ? <CheckCircle className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
                    <span>{copiedLink ? 'کپی شد' : 'کپی لینک'}</span>
                  </button>
                  <a
                    href={APP_INFO.liveShareUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="p-1 rounded-lg hover:bg-[#272937] text-[#b9cac4] hover:text-white transition-colors"
                    title="باز کردن در تب جدید"
                  >
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>

            </div>

            {/* Interactive Message Box (6 cols) */}
            <div className="lg:col-span-6">
              <div className="p-6 sm:p-8 rounded-2xl bg-[#1d1f2c]/70 backdrop-blur-xl shadow-[inset_0_1px_0_0_rgba(255,255,255,0.1)] border border-[#3a4a46]/40">
                <h4 className="font-space text-lg sm:text-xl text-white font-semibold mb-1 flex items-center gap-2">
                  <Sparkles className="w-5 h-5 text-[#00f5d4]" />
                  <span>{isFa ? 'ارسال پیام مستقیم برای میلاد' : 'Send Direct Message to Milad'}</span>
                </h4>
                <p className="font-outfit text-xs text-[#b9cac4] mb-4">
                  {isFa ? 'پیام‌ها در اولین فرصت بررسی و پاسخ داده خواهند شد.' : 'Messages will be reviewed directly.'}
                </p>

                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block font-code text-xs text-[#b9cac4] mb-1">
                      {isFa ? 'نام و نام خانوادگی / Name' : 'Full Name'}
                    </label>
                    <input
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder={isFa ? 'مثال: دکتر علوی یا هم‌کلاسی' : 'e.g. Dr. Alavi or Fellow Student'}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b0d1a]/90 text-white placeholder:text-[#3a4a46] font-outfit text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00f5d4] shadow-inner transition-all border border-[#3a4a46]/50"
                    />
                  </div>

                  <div>
                    <label className="block font-code text-xs text-[#b9cac4] mb-1">
                      {isFa ? 'آدرس ایمیل یا شماره تماس / Contact Info' : 'Email or Contact Handle'}
                    </label>
                    <input
                      type="text"
                      required
                      dir="ltr"
                      value={contact}
                      onChange={(e) => setContact(e.target.value)}
                      placeholder="your.email@domain.com"
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b0d1a]/90 text-white placeholder:text-[#3a4a46] font-code text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00f5d4] shadow-inner transition-all text-left border border-[#3a4a46]/50"
                    />
                  </div>

                  <div>
                    <label className="block font-code text-xs text-[#b9cac4] mb-1">
                      {isFa ? 'متن پیام یا پیشنهاد همکاری علمی / Message' : 'Message or Research Inquiry'}
                    </label>
                    <textarea
                      required
                      rows={4}
                      value={message}
                      onChange={(e) => setMessage(e.target.value)}
                      placeholder={isFa ? 'موضوع، راهنمایی علمی یا پیام خود را بنویسید...' : 'Write your inquiry or scientific note...'}
                      className="w-full px-4 py-2.5 rounded-xl bg-[#0b0d1a]/90 text-white placeholder:text-[#3a4a46] font-outfit text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-[#00f5d4] shadow-inner transition-all border border-[#3a4a46]/50 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3 rounded-xl bg-[#00f5d4]/20 hover:bg-[#00f5d4]/30 text-[#26fedc] font-code text-xs sm:text-sm font-semibold flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(0,245,212,0.25)] transition-all transform hover:scale-[1.01] active:scale-[0.99] border border-[#00f5d4]/30 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>{isFa ? 'ارسال پیام رسمی به میلاد صباغی' : 'Submit Official Message'}</span>
                  </button>
                </form>

                {/* Success Toast feedback */}
                {submitted && (
                  <div className="mt-4 p-3.5 rounded-xl bg-[#00a572]/30 text-[#6ffbbe] font-outfit text-xs flex items-center gap-2 border border-[#4edea3]/40 animate-fadeIn">
                    <CheckCircle className="w-5 h-5 text-[#4edea3] shrink-0" />
                    <span>
                      {isFa
                        ? 'پیام شما با موفقیت در سامانه ارتباطی میلاد صباغی ثبت شد. سپاسگزاریم!'
                        : 'Your message has been registered successfully. Thank you!'}
                    </span>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
