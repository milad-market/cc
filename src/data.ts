import { Project, Milestone, Domain } from './types';

export const APP_INFO = {
  nameFa: 'میلاد صباغی',
  nameEn: 'Milad Sabaghi',
  roleFa: 'دانش‌آموز پایه نهم • استعداد برتر تجربی و هوش مصنوعی',
  roleEn: 'Grade 9 Scholar • Bio & AI Pioneer',
  birthFa: '۵ شهریور ۱۳۹۱ (۱۴ سال)',
  birthEn: 'August 26, 2012 (14 Years)',
  locationFa: 'سلطان‌آباد (Soltanabad)',
  locationEn: 'Soltanabad, Iran',
  gpa: '۲۰.۰۰',
  gpaEn: '20.00 / 20.00 (GPA 4.0)',
  email: 'miladsabbaghi4@gmail.com',
  liveDevUrl: 'https://ais-dev-44lmxppccordrchix5etda-827071852341.us-east1.run.app',
  liveShareUrl: 'https://ais-pre-44lmxppccordrchix5etda-827071852341.us-east1.run.app',
};

export const PROJECTS: Project[] = [
  {
    id: 'deep-bio-gen',
    code: 'PRJ-01',
    badge: 'پیش‌بینی ژنومیک',
    badgeEn: 'GENOMIC PREDICTOR',
    title: 'سامانه پیش‌بینی بیان ژن با مدل‌های یادگیری عمیق',
    titleEn: 'Gene Expression Predictor via Deep Neural Models',
    subtitle: 'DeepBioGen Neural Engine',
    description:
      'تحلیل توالی‌های پروموتر و داده‌های بیوانفورماتیکی با شبکه‌های عصبی عمیق جهت تخمین نرخ بیان ژن و شناسایی جهش‌های تاثیرگذار بر ساختار پروتئین.',
    descriptionEn:
      'Analysis of promoter sequences and bioinformatics data using deep neural networks to estimate expression rates and detect mutations.',
    tags: ['Deep Learning', 'PyTorch', 'DNA Sequences', 'Bioinformatics'],
    metric: 'دقت پردازش: ۹۴.۲٪',
    metricEn: 'Accuracy: 94.2%',
    demoType: 'dna-predict',
  },
  {
    id: 'cyto-sim',
    code: 'PRJ-02',
    badge: 'شبیه‌ساز بیومولکولی',
    badgeEn: '3D BIOMOLECULAR SIM',
    title: 'شبیه‌ساز سلولی ۳بعدی بیومولکولی',
    titleEn: '3D Biomolecular & Cellular Simulation Engine',
    subtitle: 'CytoSim 3D Engine',
    description:
      'محیط تعاملی سه‌بعدی برای شبیه‌سازی انتشار مواد در سیتوپلاسم، دینامیک غشای سلولی، ریبوزوم‌ها و برهم‌کنش‌های پروتئینی تحت شرایط بیوشیمیایی مختلف.',
    descriptionEn:
      'Interactive 3D environment simulating cytoplasmic diffusion, cell membrane dynamics, ribosomes, and protein interactions.',
    tags: ['Three.js', 'WebGL', 'Cell Dynamics', 'Biochemistry'],
    metric: 'رندر تعاملی ۶۰ فریم',
    metricEn: 'Realtime 60 FPS',
    demoType: 'cell-sim',
  },
  {
    id: 'bio-mentor',
    code: 'PRJ-03',
    badge: 'دستیار المپیاد',
    badgeEn: 'OLYMPIAD COPILOT',
    title: 'ابزار هوشمند پردازش و آنالیز کتب زیست‌شناسی و المپیاد',
    titleEn: 'AI Tutor & Campbell Biology Olympiad Analyzer',
    subtitle: 'BioMentor AI Tutor',
    description:
      'سامانه پردازش زبان طبیعی مبتنی بر RAG برای استخراج مفاهیم کلیدی کتب مرجع بیولوژی کمپبل، حل تست‌های المپیاد زیست‌شناسی و تحلیل فرضیات آزمون.',
    descriptionEn:
      'RAG-based AI model extracting key concepts from Campbell Biology, solving Olympiad genetics queries and generating targeted mocks.',
    tags: ['LLM & RAG', 'Vector DB', 'Campbell Biology', 'Genetics Solver'],
    metric: 'بانک داده المپیاد کشوری',
    metricEn: 'National Olympiad Corpus',
    demoType: 'ai-tutor',
  },
];

export const DOMAINS: Domain[] = [
  {
    id: 'domain-bio',
    domainNumber: 'DOMAIN: 01',
    badge: 'علوم زیستی و ژنتیک',
    badgeEn: 'LIFE SCIENCES & GENETICS',
    title: 'علوم تجربی، ژنتیک و شبیه‌سازی زیستی',
    titleEn: 'Experimental Sciences, Genetics & Bio-Simulation',
    description:
      'پژوهش نظری و حل مسائل المپیادی پیرامون ساختار DNA، تنظیم بیان ژن، بیولوژی سلولی و مکانیزم‌های فیزیولوژی انسان. اشتیاق بالا به کشف اسرار مولکولی و آزمایشگاهی با دیدگاه مهندسی زیستی.',
    descriptionEn:
      'Theoretical research and Olympiad problem-solving on DNA structures, gene regulation, cellular biology, and physiological mechanics.',
    tags: ['ژنتیک مولکولی', 'فیزیولوژی سلولی', 'شیمی آزمایشگاهی', 'حل مسئله المپیاد'],
    visualType: 'dna-microscopy',
  },
  {
    id: 'domain-ai',
    domainNumber: 'DOMAIN: 02',
    badge: 'رایانش عصبی و هوش مصنوعی',
    badgeEn: 'NEURAL COMPUTING & AI',
    title: 'هوش مصنوعی و نوآوری داده‌محور',
    titleEn: 'Artificial Intelligence & Data-Driven Innovation',
    description:
      'مطالعه سیستم‌های شبکه عصبی، الگوریتم‌های پردازش داده و بینایی ماشین جهت اعمال بر تصاویر پزشکی، مدل‌سازی بیومارکرها و پردازش داده‌های توالی‌سنجی زیستی.',
    descriptionEn:
      'Study of neural networks, data algorithms, and computer vision applied to biomedical imagery, biomarkers, and biological sequence data.',
    tags: ['شبکه‌های عصبی', 'الگوریتم‌های محاسباتی', 'تحلیل داده زیستی', 'مدل‌های زبان بزرگ'],
    visualType: 'neural-network',
  },
];

export const MILESTONES: Milestone[] = [
  {
    year: '۵ شهریور ۱۳۹۱ • سلطان‌آباد',
    tag: 'نقطه آغاز',
    tagEn: 'Genesis',
    title: 'تولد و شکل‌گیری اشتیاق اولیه به علوم طبیعی',
    titleEn: 'Birth & Spark of Curiosity in Natural Sciences',
    description:
      'آغاز علاقه عمیق به مشاهده شگفتی‌های زیستی و پدیده‌های علمی، همراه با تلاش مستمر خانوادگی در فراهم‌سازی زمینه شکوفایی علمی در منطقه سلطان‌آباد.',
    descriptionEn:
      'Inception of deep passion for biological marvels, supported by family dedication to nurture scientific excellence in Soltanabad.',
  },
  {
    year: '۱۴۰۳ - ۱۴۰۴ • مقطع متوسطه اول',
    tag: 'دستاورد درخشان جاری',
    tagEn: 'Current Academic Pinnacle',
    title: 'ثبت معدل کامل ۲۰.۰۰ و نخبگی در پایه نهم',
    titleEn: 'Perfect 20.00 GPA & Grade 9 Top Honors',
    description:
      'کسب رتبه نخست مدرسه و منطقه تحصیلی، هدایت سمینارهای دانش‌آموزی درباره ساختار سلول و آغاز مطالعات خودآموز در زمینه کدنویسی هوش مصنوعی و مدل‌های زبان.',
    descriptionEn:
      'Secured rank 1 with an unblemished 20.00 GPA across all subjects, organizing student biology seminars and initiating AI/ML research.',
  },
  {
    year: '۱۴۰۴ به بعد • چشم‌انداز آینده',
    tag: 'چشم‌انداز و هدف‌گذاری',
    tagEn: 'Future Horizon',
    title: 'ورود به مقطع دوم تجربی، المپیاد زیست‌شناسی و مهندسی پزشکی بیومحور',
    titleEn: 'Experimental Science Track, Olympiad & Biomedical Engineering',
    description:
      'برنامه‌ریزی دقیق برای شرکت در المپیاد کشوری زیست‌شناسی، تحصیل در رشته‌های برتر علوم پزشکی و هدایت آزمایشگاه‌های تلفیقی بیوانفورماتیک در معتبرترین مراکز دانشگاهی.',
    descriptionEn:
      'Rigorous preparation for the National Biology Olympiad, aspiring to study elite medicine/bioengineering and lead computational biology laboratories.',
  },
];
