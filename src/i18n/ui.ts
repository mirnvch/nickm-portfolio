export const ui = {
  en: {
    // Navigation
    home: 'Home',
    blog: 'Blog',
    notes: 'Notes',
    backToHome: '← Home',
    backToBlog: '← Back to Blog',
    backToNotes: '← Back to Notes',
    viewAllPosts: 'View all posts →',
    viewAllNotes: 'View all notes →',

    // Mode toggle
    professional: 'Professional',
    personal: 'Personal',

    // Post meta
    minRead: 'min read',

    // Project statuses
    statusActive: 'Active',
    statusPrototype: 'Prototype',
    statusDevelopment: 'In Development',

    // Posts section
    postsTitle: 'Writing',
    notesPostsTitle: 'Notes',

    // Projects section
    projectsTitle: "Stuff I've Made",
    visitWebsite: 'Visit website →',
    techStack: 'Tech Stack',

    // About - Professional
    aboutProfessional: `
      <p>QA Engineer with 7+ years of experience in software testing and quality assurance.</p>
      <p>
        Working at <a class="illuminated-link font-medium text-foreground" href="https://qacamp.com">QACamp</a> with
        manual and automated testing (Selenium, Playwright, Cypress), API testing, and mobile apps.
        Passionate about <a class="illuminated-link font-medium text-foreground" href="#">AI-powered automation</a> and
        building tools that make work smarter.
      </p>
    `,

    // About - Personal
    aboutPersonal: `
      <p>Building things. Learning in public. Enjoying the remote life.</p>
      <p>QA by day, AI enthusiast always. Exploring how AI can transform the way we work and create.</p>
    `,

    // SEO
    siteTitle: 'Nick Miranovich',
    siteDescription: '7+ years in QA, passionate about AI-powered automation and building smarter workflows',
    blogTitle: 'Blog • Nick Miranovich',
    blogDescription: 'Thoughts on development, AI, automation, and life.',
    notesTitle: 'Notes • Nick Miranovich',
    notesDescription: 'Personal thoughts on remote life, learning, and daily tools.',

    // Config
    nameProfessional: 'Nick Miranovich',
    namePersonal: 'Nick',
    tagline: 'QA Engineer & AI Enthusiast',
  },
  ru: {
    // Navigation
    home: 'Главная',
    blog: 'Блог',
    notes: 'Заметки',
    backToHome: '← Главная',
    backToBlog: '← Назад к блогу',
    backToNotes: '← Назад к заметкам',
    viewAllPosts: 'Все записи →',
    viewAllNotes: 'Все заметки →',

    // Mode toggle
    professional: 'Рабочий',
    personal: 'Личный',

    // Post meta
    minRead: 'мин чтения',

    // Project statuses
    statusActive: 'Активен',
    statusPrototype: 'Прототип',
    statusDevelopment: 'В разработке',

    // Posts section
    postsTitle: 'Записи',
    notesPostsTitle: 'Заметки',

    // Projects section
    projectsTitle: 'Мои проекты',
    visitWebsite: 'Перейти на сайт →',
    techStack: 'Технологии',

    // About - Professional
    aboutProfessional: `
      <p>QA-инженер с опытом более 7 лет в тестировании и обеспечении качества ПО.</p>
      <p>
        Работаю в <a class="illuminated-link font-medium text-foreground" href="https://qacamp.com">QACamp</a> —
        ручное и автоматизированное тестирование (Selenium, Playwright, Cypress), API-тестирование и мобильные приложения.
        Увлекаюсь <a class="illuminated-link font-medium text-foreground" href="#">AI-автоматизацией</a> и
        создаю инструменты, которые делают работу умнее.
      </p>
    `,

    // About - Personal
    aboutPersonal: `
      <p>Строю. Учусь на виду. Наслаждаюсь удалённой жизнью.</p>
      <p>Днём — QA, всегда — AI-энтузиаст. Исследую, как ИИ может изменить то, как мы работаем и творим.</p>
    `,

    // SEO
    siteTitle: 'Ник Миранович',
    siteDescription: '7+ лет в QA, увлечён AI-автоматизацией и созданием умных рабочих процессов',
    blogTitle: 'Блог • Ник Миранович',
    blogDescription: 'Мысли о разработке, ИИ, автоматизации и жизни.',
    notesTitle: 'Заметки • Ник Миранович',
    notesDescription: 'Личные мысли об удалённой жизни, обучении и повседневных инструментах.',

    // Config
    nameProfessional: 'Ник Миранович',
    namePersonal: 'Ник',
    tagline: 'QA-инженер и AI-энтузиаст',
  },
} as const;

export type UIKey = keyof typeof ui.en;
