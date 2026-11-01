/* Update this file to change portfolio text, project information and links. */
const EMAIL = 'abdulalialmarzooq7@gmail.com';
const DIRECTORY_URL = 'https://graduate-directory-2024.github.io/iau-graduate-studies-directory/';
const DICTIONARY = {
  en: {
    skip:'Skip to content', navHome:'Home', navProjects:'Projects', navExperience:'Experience', navSkills:'Skills', navCertifications:'Certifications', navContact:'Contact', browseLabel:'Browse sections', browsePlaceholder:'Choose a section...',
    heroEyebrow:'PERSONAL PORTFOLIO',hello:"Hi, I'm",heroRole:'Data Analytics · Business Intelligence · IT Support',
    heroDescription:'Computer Information Systems graduate with hands-on experience in technical support, operational reporting, and building practical digital solutions.',
    viewProjects:'View my projects',getInTouch:'Get in touch',location:'Saudi Arabia · Open to opportunities nationwide',
    atGlance:'AT A GLANCE',glanceEducationLabel:'EDUCATION',glanceEducation:'B.Sc. Computer Information Systems',glanceUniversity:'Imam Abdulrahman Bin Faisal University',
    glanceBackgroundLabel:'EXPERIENCE',glanceBackground:'IT Service Desk & Operational Reporting',glanceCompanies:'ADES · Teleperformance · IAU',glanceToolsLabel:'CORE TOOLS',
    projectKicker:'FEATURED WORK',projectHeading:'Selected projects',projectIntro:'Three practical projects spanning web development, business intelligence and Excel automation. Explore the approach and results behind each one.',
    otherWorkLabel:'ADDITIONAL EXPERIENCE',otherWorkText:'Workforce KPI reporting, operational data management, and service desk incident analysis using Excel and Power BI.',
    skillsKicker:'WHAT I WORK WITH',skillsHeading:'Technical skills',experienceKicker:'PROFESSIONAL BACKGROUND',experienceHeading:'Experience',
    certKicker:'CONTINUOUS LEARNING',certHeading:'Certifications & training',certIntro:'Credentials in IT, data and project management. Certificate images and verification links will be added once available.',
    contactKicker:'LET\'S CONNECT',contactHeading:'Interested in working together?',contactText:'Open to opportunities in data analytics, business intelligence, information systems, and IT support.',
    emailMe:'Email me',copyEmail:'Copy email address',copied:'Email copied',disclaimer:'Independent personal portfolio · University projects shown for professional reference',backTop:'Back to top ↑',
    projectLive:'Open live project ↗',projectRepo:'View code ↗',projectPrivate:'Original student-level data is not publicly shared',
    projectOneType:'WEB DEVELOPMENT · COOPERATIVE TRAINING',projectOneName:'Graduate Studies Staff Directory',
    projectOneDesc:'Designed and developed a searchable staff directory for the Deanship of Graduate Studies at IAU, with unit-based navigation, contact details, and QR-code access.',
    projectTwoType:'DATA ANALYTICS · COOPERATIVE TRAINING',projectTwoName:'Graduate Studies Analytics Dashboard',
    projectTwoDesc:'Developed an interactive Power BI report covering student statistics across colleges, programs, nationalities, gender and academic status, with detailed drillthrough pages.',
    projectYear:'PROJECT · 2024',projectDownload:'Download original Excel workbook ↓',projectDetails:'Read case study ↗',projectRestricted:'Original workbook is not published publicly',
    projectThreeType:'EXCEL AUTOMATION · TEACHING WORKLOAD',projectThreeName:'Faculty Teaching Hours Dashboard',
    projectThreeDesc:'Built a faculty teaching-load workbook using real course assignments, selectable full-hours or shared-section allocation, faculty summaries, and missing-schedule checks. A public project overview is available.',
    skillOne:'Data & reporting',skillOneDesc:'Power BI · DAX · Power Query · Microsoft Excel · SQL · Data visualization',
    skillTwo:'IT support',skillTwoDesc:'ITSM ticketing · Incident management · Troubleshooting · Windows · Microsoft 365',
    skillThree:'Web & digital tools',skillThreeDesc:'HTML · CSS · JavaScript · GitHub Pages · Document and information management'
  },
  ar: {
    skip:'تجاوز إلى المحتوى',navHome:'الرئيسية',navProjects:'المشاريع',navExperience:'الخبرات',navSkills:'المهارات',navCertifications:'الشهادات',navContact:'التواصل',browseLabel:'تصفح أقسام الموقع',browsePlaceholder:'اختر القسم...',
    heroEyebrow:'الملف الشخصي والمهني',hello:'مرحباً، أنا',heroRole:'تحليل البيانات · ذكاء الأعمال · دعم تقنية المعلومات',
    heroDescription:'خريج نظم المعلومات الحاسوبية، لدي خبرة عملية في الدعم الفني والتقارير التشغيلية وتطوير حلول رقمية تساعد على تنظيم المعلومات وتحليلها.',
    viewProjects:'استعرض المشاريع',getInTouch:'تواصل معي',location:'السعودية · متاح للفرص الوظيفية في مختلف المناطق',
    atGlance:'نبذة سريعة',glanceEducationLabel:'المؤهل العلمي',glanceEducation:'بكالوريوس نظم المعلومات الحاسوبية',glanceUniversity:'جامعة الإمام عبدالرحمن بن فيصل',
    glanceBackgroundLabel:'الخبرة العملية',glanceBackground:'مكتب خدمة تقنية المعلومات والتقارير التشغيلية',glanceCompanies:'ADES · Teleperformance · جامعة الإمام عبدالرحمن بن فيصل',glanceToolsLabel:'الأدوات الرئيسية',
    projectKicker:'أعمال مختارة',projectHeading:'مشاريعي',projectIntro:'ثلاثة مشاريع تطبيقية في تطوير الويب وذكاء الأعمال وأتمتة Excel، مع ملخص واضح لأهداف كل مشروع ونتائجه.',
    otherWorkLabel:'خبرات إضافية',otherWorkText:'تقارير مؤشرات القوى العاملة وإدارة البيانات التشغيلية وتحليل بلاغات الدعم الفني باستخدام Excel وPower BI.',
    skillsKicker:'المهارات والأدوات',skillsHeading:'المهارات التقنية',experienceKicker:'المسيرة المهنية',experienceHeading:'الخبرات العملية',
    certKicker:'التطوير المهني',certHeading:'الشهادات والدورات',certIntro:'شهادات في التقنية والبيانات وإدارة المشاريع، وستضاف صور الشهادات وروابط التحقق عند توفرها.',
    contactKicker:'تواصل معي',contactHeading:'هل لديك فرصة مناسبة؟',contactText:'أرحب بالتواصل بشأن فرص تحليل البيانات وذكاء الأعمال ونظم المعلومات والدعم الفني.',
    emailMe:'إرسال بريد إلكتروني',copyEmail:'نسخ البريد الإلكتروني',copied:'تم نسخ البريد',disclaimer:'موقع شخصي مستقل · عرض المشاريع الجامعية لأغراض مهنية',backTop:'العودة للأعلى ↑',
    projectLive:'فتح المشروع ↗',projectRepo:'عرض الكود ↗',projectPrivate:'بيانات الطلاب التفصيلية غير منشورة للعموم',
    projectOneType:'تطوير المواقع · التدريب التعاوني',projectOneName:'الدليل الإلكتروني لمنسوبي الدراسات العليا',
    projectOneDesc:'صممت وطورت دليلًا للبحث عن منسوبي عمادة الدراسات العليا بجامعة الإمام عبدالرحمن بن فيصل، يشمل الوحدات الإدارية وبيانات التواصل وإمكانية الوصول عبر QR.',
    projectTwoType:'تحليل البيانات · التدريب التعاوني',projectTwoName:'لوحة تحليل بيانات الدراسات العليا',
    projectTwoDesc:'أنشأت تقريرًا تفاعليًا في Power BI لتحليل إحصاءات الطلاب حسب الكليات والبرامج والجنسيات والجنس والوضع الأكاديمي، مع صفحات تفاصيل تفاعلية.',
    projectYear:'مشروع · 2024',projectDownload:'تحميل ملف Excel الأصلي ↓',projectDetails:'استعراض تفاصيل المشروع ↗',projectRestricted:'ملف Excel الأصلي غير منشور للعامة',
    projectThreeType:'أتمتة إكسل · العبء التدريسي',projectThreeName:'لوحة متابعة ساعات أعضاء هيئة التدريس',
    projectThreeDesc:'ملف Excel تفاعلي لحساب العبء التدريسي من التكليفات الفعلية، مع التبديل بين احتساب الساعات كاملة أو توزيعها على المدرسين، وملخصات تلقائية وفحص المواعيد الناقصة.',
    skillOne:'البيانات والتقارير',skillOneDesc:'Power BI · DAX · Power Query · Excel · SQL · عرض البيانات',
    skillTwo:'الدعم الفني',skillTwoDesc:'أنظمة ITSM · إدارة البلاغات · استكشاف الأعطال · Windows · Microsoft 365',
    skillThree:'تطوير الويب والأدوات',skillThreeDesc:'HTML · CSS · JavaScript · GitHub Pages · إدارة المعلومات والوثائق'
  }
};
const EXPERIENCE = [
 {en:{role:'Rig Administrator',company:'ADES',date:'Feb 2026 – Present',details:'Workforce records, operational reporting, coordination with HR and operations, and KPI monitoring.'},ar:{role:'مسؤول إدارة الحفارة',company:'ADES',date:'فبراير 2026 – حتى الآن',details:'إدارة سجلات القوى العاملة والتقارير التشغيلية والتنسيق مع الموارد البشرية والعمليات ومتابعة مؤشرات الأداء.'}},
 {en:{role:'Service Desk Analyst',company:'Teleperformance · Supporting Aramco Digital',date:'Dec 2025 – Feb 2026',details:'IT incident documentation and escalation, ITSM ticket handling, service monitoring, and reporting.'},ar:{role:'محلل مكتب خدمة تقنية المعلومات',company:'Teleperformance · دعم Aramco Digital',date:'ديسمبر 2025 – فبراير 2026',details:'تسجيل البلاغات الفنية وتصعيدها عبر ITSM ومراقبة الخدمات وإعداد التقارير.'}},
 {en:{role:'Cooperative Trainee — Graduate Studies',company:'Imam Abdulrahman Bin Faisal University',date:'Jun – Aug 2024',details:'Developed a searchable staff directory website and a graduate studies Power BI dashboard.'},ar:{role:'متدرب تعاوني — عمادة الدراسات العليا',company:'جامعة الإمام عبدالرحمن بن فيصل',date:'يونيو – أغسطس 2024',details:'تطوير موقع دليل الموظفين ولوحة تحليل بيانات الدراسات العليا باستخدام Power BI.'}},
 {en:{role:'Accounting & Financial Reporting',company:'Accounting role · Qatif',date:'Jun 2021 – Jun 2023',details:'Supported reconciliations, financial reporting, budgeting and VAT calculations.'},ar:{role:'المحاسبة والتقارير المالية',company:'عمل محاسبي · القطيف',date:'يونيو 2021 – يونيو 2023',details:'المساهمة في التسويات والتقارير المالية والميزانيات وحسابات ضريبة القيمة المضافة.'}}
];
const CERTIFICATES = [
 {issuer:'Google / Coursera',name:'Google IT Support',date:{en:'12 Apr 2026',ar:'12 أبريل 2026'},image:'assets/certificates/google-it-support.webp',pdf:'assets/certificates/google-it-support.pdf',verify:'https://coursera.org/verify/professional-cert/I3TY07S9J6HZ'},
 {issuer:'IBM SkillsBuild',name:'Data Fundamentals',date:{en:'19 Nov 2024',ar:'19 نوفمبر 2024'},image:'assets/certificates/ibm-data-fundamentals.webp',pdf:'assets/certificates/ibm-data-fundamentals.pdf',verify:'https://www.credly.com/go/tx56Z4hv',badge:'assets/certificates/ibm-data-fundamentals-badge.png'},
 {issuer:'IBM SkillsBuild',name:'Project Based Learning Programme in Data Analysis',date:{en:'19 Nov 2024',ar:'19 نوفمبر 2024'},image:'assets/certificates/ibm-data-analysis-project.webp',pdf:'assets/certificates/ibm-data-analysis-project.pdf'},
 {issuer:'IBM SkillsBuild',name:'Project Management Fundamentals',date:{en:'26 Nov 2024',ar:'26 نوفمبر 2024'},image:'assets/certificates/ibm-project-management.webp',pdf:'assets/certificates/ibm-project-management.pdf'}
];

// Landing page UI based on the supplied portfolio design reference.
Object.assign(DICTIONARY.en,{
 brandSubtitle:'IT & Data Professional',heroEyebrow:'WELCOME TO MY PORTFOLIO',heroRole:'IT & Data Professional',
 heroDescription:'An IT and Data professional with experience in IT support, systems, and data analysis, focusing on building practical solutions, automating processes, and turning data into meaningful insights.',
 viewProjects:'View Projects',getInTouch:'Contact Me',focusIT:'IT Support & Systems',focusData:'Data Analysis & Reporting',focusBI:'Business Intelligence (Power BI)',focusExcel:'Process Automation (Excel)',
 featuredHeading:'Featured Projects',projectCount:'03 selected projects',
 experienceHeading:'Professional Experience',skillsHeading:'Technical Skills',certHeading:'Certifications & Training',
 certIntro:'Credentials in IT, data, and project management.',contactHeading:"Let's work together",emailMe:'Email Me',copyEmail:'Copy Email',copied:'Email copied',
 projectDetails:'View Details',projectLive:'View Live',projectRepo:'View Code',contactText:'Open to opportunities in data analytics, business intelligence, information systems, and IT support.'
});
Object.assign(DICTIONARY.ar,{
 brandSubtitle:'مختص تقنية المعلومات والبيانات',heroEyebrow:'أهلًا بكم في معرض أعمالي',heroRole:'تقنية المعلومات وتحليل البيانات',
 heroDescription:'متخصص في تقنية المعلومات والبيانات، لدي خبرة في الدعم الفني والأنظمة وتحليل البيانات، وأهتم بتطوير الحلول العملية وأتمتة العمليات وتحويل البيانات إلى معلومات تساعد على اتخاذ القرار.',
 viewProjects:'استعرض المشاريع',getInTouch:'تواصل معي',focusIT:'الدعم الفني والأنظمة',focusData:'تحليل البيانات والتقارير',focusBI:'ذكاء الأعمال (Power BI)',focusExcel:'أتمتة العمليات (Excel)',
 featuredHeading:'المشاريع المميزة',projectCount:'3 مشاريع مختارة',experienceHeading:'الخبرات المهنية',skillsHeading:'المهارات التقنية',certHeading:'الشهادات والدورات',
 certIntro:'شهادات في تقنية المعلومات والبيانات وإدارة المشاريع.',contactHeading:'لنتواصل',emailMe:'راسلني',copyEmail:'نسخ البريد',copied:'تم النسخ',
 projectDetails:'عرض التفاصيل',projectLive:'فتح الموقع',projectRepo:'عرض الكود',contactText:'أرحب بالفرص في تحليل البيانات وذكاء الأعمال ونظم المعلومات والدعم الفني.'
});
Object.assign(DICTIONARY.en,{
 viewCertificate:'View Certificate',openPdf:'Open PDF',verifyCertificate:'Verify Credential',closePreview:'Close preview',
 certificateImage:'Preview certificate',certIntro:'Select a certificate to view it in full, open its original PDF, or verify it where available.'
});
Object.assign(DICTIONARY.ar,{
 viewCertificate:'عرض الشهادة',openPdf:'فتح PDF',verifyCertificate:'التحقق من الشهادة',closePreview:'إغلاق المعاينة',
 certificateImage:'معاينة الشهادة',certIntro:'اختر أي شهادة لعرضها بحجم كبير أو فتح ملف PDF الأصلي أو التحقق منها عند توفر رابط التحقق.'
});
const safe=v=>String(v??'').replace(/[&<>"']/g,ch=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[ch]));
let lang='en';
try{if(localStorage.getItem('portfolio-hr-lang')==='ar')lang='ar'}catch{}
const externalIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><path d="M14 4h6v6M10 14 20 4M20 13v6a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V5a1 1 0 0 1 1-1h6"/></svg>';
const caseIcon='<svg viewBox="0 0 24 24" aria-hidden="true"><rect x="5" y="3" width="14" height="18" rx="2"/><path d="M9 8h6M9 12h6M9 16h4"/></svg>';
function render(){
 const t=DICTIONARY[lang];document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';
 document.title=lang==='ar'?'عبدالعالي المرزوق | المعرض المهني':'Abdulali Almarzooq | IT & Data Professional';
 document.querySelectorAll('[data-i18n]').forEach(el=>{const v=t[el.dataset.i18n];if(v)el.textContent=v});
 document.querySelector('#langSwitch span').textContent=lang==='ar'?'English':'العربية';
 const closeCert=document.getElementById('closeCertPreview');if(closeCert)closeCert.setAttribute('aria-label',t.closePreview);
 const projects=[
  {image:'assets/staff-directory-preview.webp',name:t.projectOneName,description:t.projectOneDesc,tags:['HTML','CSS','JavaScript','GitHub Pages'],url:DIRECTORY_URL,repo:'https://github.com/graduate-directory-2024/iau-graduate-studies-directory',icon:'🌐',symbol:'web'},
  {image:'assets/powerbi-preview.webp',name:t.projectTwoName,description:t.projectTwoDesc,tags:['Power BI','Data Analysis','DAX','Reporting'],caseUrl:'case-study.html?project=powerbi',icon:'▥',symbol:'powerbi'},
  {image:'assets/faculty-hours-preview.webp',name:t.projectThreeName,description:t.projectThreeDesc,tags:['Microsoft Excel','Formulas','Data Validation','Reporting'],caseUrl:'case-study.html?project=faculty',icon:'X',symbol:'excel'}
 ];
 document.getElementById('projectGrid').innerHTML=projects.map(p=>{
  const dest=p.url||p.caseUrl,attr=p.url?' target="_blank" rel="noopener noreferrer"':'';
  const links=p.url?`<a class="project-button" href="${safe(p.url)}" target="_blank" rel="noopener noreferrer">${externalIcon}${safe(t.projectLive)}</a><a class="project-button secondary" href="${safe(p.repo)}" target="_blank" rel="noopener noreferrer">${caseIcon}${safe(t.projectRepo)}</a>`:`<a class="project-button" href="${safe(p.caseUrl)}">${caseIcon}${safe(t.projectDetails)}</a>`;
  return `<article class="project-card"><a class="project-image-link" href="${safe(dest)}"${attr} aria-label="${safe(p.name)}"><img src="${safe(p.image)}" alt="${safe(p.name)}" width="900" height="520" loading="lazy"></a><div class="project-content"><h3 class="project-title"><span class="project-symbol ${p.symbol}" aria-hidden="true">${p.icon}</span><span>${safe(p.name)}</span></h3><p class="project-description">${safe(p.description)}</p><div class="tags">${p.tags.map(tag=>`<span class="tag">${safe(tag)}</span>`).join('')}</div><div class="project-actions">${links}</div></div></article>`
 }).join('');
 const skills=[['skillOne','skillOneDesc'],['skillTwo','skillTwoDesc'],['skillThree','skillThreeDesc']];
 document.getElementById('skillsGrid').innerHTML=skills.map(([title,desc])=>`<article class="skill-card"><h3>${safe(t[title])}</h3><p>${safe(t[desc])}</p></article>`).join('');
 document.getElementById('experienceList').innerHTML=EXPERIENCE.map(x=>{const e=x[lang];return `<article class="experience-item"><span class="experience-date">${safe(e.date)}</span><h3>${safe(e.role)}</h3><div class="experience-company">${safe(e.company)}</div><p>${safe(e.details)}</p></article>`}).join('');
 document.getElementById('certGrid').innerHTML=CERTIFICATES.map((c,i)=>`<article class="cert-item">
   <button class="cert-image-button" type="button" data-certificate="${i}" aria-label="${safe(t.certificateImage)}: ${safe(c.name)}">
    <img src="${safe(c.image)}" alt="${safe(c.name)} — ${safe(c.issuer)}" loading="lazy" width="1000" height="710">
    <span class="cert-image-hint">${safe(t.viewCertificate)} ↗</span>
   </button>
   <div class="cert-content">
    <div class="cert-heading-row"><span class="cert-issuer">${safe(c.issuer)}</span>${c.badge?`<img class="cert-badge" src="${safe(c.badge)}" alt="IBM Data Fundamentals badge" loading="lazy" width="38" height="38">`:''}</div>
    <h3>${safe(c.name)}</h3><p class="cert-date">${safe(c.date[lang])}</p>
    <div class="cert-actions"><a class="cert-action primary" href="${safe(c.pdf)}" target="_blank" rel="noopener noreferrer">${safe(t.openPdf)}</a>${c.verify?`<a class="cert-action" href="${safe(c.verify)}" target="_blank" rel="noopener noreferrer">${safe(t.verifyCertificate)} ↗</a>`:''}</div>
   </div>
  </article>`).join('');
}
// Accessible full-size certificate preview. PDFs remain available as direct links.
const certDialog=document.getElementById('certPreviewDialog');
const certPreviewImage=document.getElementById('certPreviewImage');
const certPreviewTitle=document.getElementById('certPreviewTitle');
const certPreviewPdf=document.getElementById('certPreviewPdf');
document.getElementById('certGrid').addEventListener('click',event=>{
 const btn=event.target.closest('[data-certificate]');
 if(!btn)return;
 const cert=CERTIFICATES[Number(btn.dataset.certificate)];
 if(!cert)return;
 certPreviewImage.src=cert.image;
 certPreviewImage.alt=cert.name;
 certPreviewTitle.textContent=cert.name;
 certPreviewPdf.href=cert.pdf;
 certPreviewPdf.textContent=DICTIONARY[lang].openPdf+' ↗';
 if(typeof certDialog.showModal==='function')certDialog.showModal();
 else window.open(cert.pdf,'_blank','noopener,noreferrer');
});
document.getElementById('closeCertPreview').addEventListener('click',()=>certDialog.close());
certDialog.addEventListener('click',event=>{if(event.target===certDialog)certDialog.close()});

const langSwitch=document.getElementById('langSwitch');langSwitch.addEventListener('click',()=>{lang=lang==='en'?'ar':'en';try{localStorage.setItem('portfolio-hr-lang',lang)}catch{}render()});
const nav=document.getElementById('navLinks'),menuToggle=document.getElementById('menuToggle');
menuToggle.addEventListener('click',()=>{const open=nav.classList.toggle('open');menuToggle.setAttribute('aria-expanded',String(open));menuToggle.setAttribute('aria-label',open?'Close navigation':'Open navigation')});
nav.querySelectorAll('a').forEach(link=>link.addEventListener('click',()=>{nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false')}));
document.addEventListener('keydown',event=>{if(event.key==='Escape'&&nav.classList.contains('open')){nav.classList.remove('open');menuToggle.setAttribute('aria-expanded','false');menuToggle.focus()}});
const copyEmail=document.getElementById('copyEmail');copyEmail.addEventListener('click',async()=>{try{await navigator.clipboard.writeText(EMAIL);copyEmail.textContent=DICTIONARY[lang].copied;setTimeout(()=>copyEmail.textContent=DICTIONARY[lang].copyEmail,1800)}catch{location.href='mailto:'+EMAIL}});
if('IntersectionObserver' in window){const observer=new IntersectionObserver(entries=>{for(const entry of entries){if(!entry.isIntersecting)continue;nav.querySelectorAll('a').forEach(a=>a.classList.toggle('active',a.getAttribute('href')==='#'+entry.target.id))}},{rootMargin:'-18% 0px -62% 0px',threshold:0});for(const id of ['top','projects','experience','skills','certifications','contact']){const el=document.getElementById(id);if(el)observer.observe(el)}}
render();
