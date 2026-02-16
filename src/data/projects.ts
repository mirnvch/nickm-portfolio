import type { Locale } from '../i18n/utils';

export interface Project {
  title: string;
  slug: string;
  description: string;
  content: string;
  tech: string[];
  image: string;
  link: string;
  status: 'active' | 'prototype' | 'development';
  mode?: 'professional' | 'personal';
}

const projectsData: Record<Locale, Project[]> = {
  en: [
    {
      title: 'StemLab',
      slug: 'stemlab',
      description: 'Building an interactive STEM learning platform. Full-stack development, Rive animations, content system.',
      content: `
        <h2>About the Project</h2>
        <p>StemLab is an interactive STEM learning platform designed to make science and technology education engaging and accessible. The platform combines interactive lessons, animations, and a structured content system to deliver an immersive learning experience.</p>

        <h2>My Role</h2>
        <p>Full-stack development from concept to prototype. I'm responsible for the entire technical stack — from architecture and backend to frontend and animations.</p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Interactive lessons</strong> with Rive animations that respond to user actions</li>
          <li><strong>Content management system</strong> for creating and organizing STEM curriculum</li>
          <li><strong>Progress tracking</strong> to monitor learning outcomes</li>
          <li><strong>Responsive design</strong> optimized for tablets and desktops</li>
        </ul>

        <h2>Technical Highlights</h2>
        <p>The platform uses Rive for hardware-accelerated animations that run smoothly across devices. The content system is built to be flexible enough for different STEM disciplines while maintaining a consistent learning flow.</p>
      `,
      tech: ['React', 'TypeScript', 'Node.js', 'Rive', 'PostgreSQL', 'Tailwind CSS'],
      image: '/images/projects/placeholder.svg',
      link: '',
      status: 'prototype',
      mode: 'personal',
    },
    {
      title: 'DocConnect',
      slug: 'docconnect',
      description: 'Building a healthcare marketplace from scratch. Architecture, frontend, backend, payment integration.',
      content: `
        <h2>About the Project</h2>
        <p>DocConnect is a healthcare marketplace that connects patients with medical professionals. The platform handles everything from doctor discovery and appointment booking to secure payments and medical record management.</p>

        <h2>My Role</h2>
        <p>Building the entire platform from scratch — system architecture, frontend, backend, and third-party integrations. This is a solo full-stack project where I own every technical decision.</p>

        <h2>Key Features</h2>
        <ul>
          <li><strong>Doctor profiles</strong> with specializations, availability, and patient reviews</li>
          <li><strong>Appointment scheduling</strong> with real-time availability</li>
          <li><strong>Payment integration</strong> for secure online transactions</li>
          <li><strong>Patient dashboard</strong> for managing appointments and medical history</li>
        </ul>

        <h2>Technical Highlights</h2>
        <p>The architecture is designed for scalability with a clean separation of concerns. Payment processing is handled through Stripe with proper security measures. The scheduling system handles timezone differences and concurrent booking conflicts.</p>
      `,
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: '/images/projects/placeholder.svg',
      link: '',
      status: 'active',
      mode: 'personal',
    },
    {
      title: 'Bake by Angie',
      slug: 'bake-by-angie',
      description: 'Web development and QA for an online baking education platform. Testing, deployment, maintenance.',
      content: `
        <h2>About the Project</h2>
        <p>Bake by Angie is an online education platform for baking enthusiasts. The site offers courses, recipes, and a community for people who want to learn professional baking techniques from home.</p>

        <h2>My Role</h2>
        <p>Web development and quality assurance. I handle frontend development, testing strategy, deployment pipelines, and ongoing site maintenance.</p>

        <h2>Key Contributions</h2>
        <ul>
          <li><strong>Frontend development</strong> — building and maintaining the website UI</li>
          <li><strong>QA strategy</strong> — manual and automated testing across devices and browsers</li>
          <li><strong>Deployment</strong> — setting up CI/CD pipelines for reliable releases</li>
          <li><strong>Performance optimization</strong> — ensuring fast load times for media-heavy content</li>
        </ul>

        <h2>Technical Highlights</h2>
        <p>The platform serves rich media content (videos, high-res images) which required careful optimization. Implemented lazy loading, image compression pipelines, and CDN caching to keep the experience fast.</p>
      `,
      tech: ['WordPress', 'PHP', 'JavaScript', 'Playwright', 'CSS', 'SEO'],
      image: '/images/projects/bake-by-angie-logo.png',
      link: 'https://bakebyangie.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Casa Rica Estate',
      slug: 'casa-rica-estate',
      description: 'Web development and SEO automation for a real estate site. AI content generation, testing, analytics.',
      content: `
        <h2>About the Project</h2>
        <p>Casa Rica Estate is a real estate website focused on property listings in Costa Rica. The site combines property search functionality with SEO-optimized content to attract international buyers.</p>

        <h2>My Role</h2>
        <p>Web development and SEO automation. I build the site features, create automated content generation pipelines, and ensure the platform ranks well in search engines.</p>

        <h2>Key Contributions</h2>
        <ul>
          <li><strong>SEO automation</strong> — AI-powered content generation for property descriptions and area guides</li>
          <li><strong>Web development</strong> — building property listing pages and search functionality</li>
          <li><strong>Analytics setup</strong> — tracking user behavior and conversion funnels</li>
          <li><strong>Testing</strong> — cross-browser and mobile testing for the property search experience</li>
        </ul>

        <h2>Technical Highlights</h2>
        <p>Built automated SEO content pipelines using n8n and AI APIs. The system generates unique, localized property descriptions and area guides, significantly reducing manual content creation time while improving search rankings.</p>
      `,
      tech: ['WordPress', 'n8n', 'OpenAI API', 'Google Analytics', 'Playwright', 'SEO'],
      image: '/images/projects/casa-rica-logo.png',
      link: 'https://casaricaestate.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'QA Camp',
      slug: 'qacamp',
      description: 'QA lead and web development for a consulting firm. Test strategy, automation, team coordination.',
      content: `
        <h2>About the Project</h2>
        <p>QA Camp is a QA consulting company that provides testing services and training for software teams. The website serves as both a marketing platform and a resource hub for QA professionals.</p>

        <h2>My Role</h2>
        <p>QA lead and web developer. I manage testing strategy for client projects, coordinate the QA team, and maintain the company website.</p>

        <h2>Key Contributions</h2>
        <ul>
          <li><strong>QA leadership</strong> — defining test strategies and processes for client projects</li>
          <li><strong>Test automation</strong> — building and maintaining automated test suites</li>
          <li><strong>Web development</strong> — maintaining and improving the company website</li>
          <li><strong>Team coordination</strong> — mentoring junior QA engineers and reviewing their work</li>
        </ul>

        <h2>Technical Highlights</h2>
        <p>Established a comprehensive test automation framework using Playwright that reduced regression testing time by 70%. The framework includes visual regression testing, API testing, and cross-browser compatibility checks.</p>
      `,
      tech: ['Playwright', 'Selenium', 'Cypress', 'JavaScript', 'WordPress', 'Jira'],
      image: '/images/projects/qacamp-logo.svg',
      link: 'https://qacamp.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Octoddler School',
      slug: 'octoddler-school',
      description: 'Website redesign and QA for a Montessori school. Frontend development, testing, accessibility.',
      content: `
        <h2>About the Project</h2>
        <p>Octoddler School is a Montessori preschool that needed a modern, accessible website to attract parents and showcase their educational approach.</p>

        <h2>My Role</h2>
        <p>Website redesign and quality assurance. I rebuilt the frontend with a focus on accessibility and modern design, then ensured everything works flawlessly across devices.</p>

        <h2>Key Contributions</h2>
        <ul>
          <li><strong>Frontend redesign</strong> — modern, responsive layout with improved UX</li>
          <li><strong>Accessibility (a11y)</strong> — WCAG compliance for inclusive access</li>
          <li><strong>QA testing</strong> — cross-device and cross-browser testing</li>
          <li><strong>Performance</strong> — optimized images and assets for fast loading</li>
        </ul>

        <h2>Technical Highlights</h2>
        <p>Achieved WCAG 2.1 AA compliance, which is especially important for an educational institution. The redesign improved mobile usability scores and page load times significantly, leading to better engagement metrics.</p>
      `,
      tech: ['HTML', 'CSS', 'JavaScript', 'Accessibility', 'Playwright', 'Figma'],
      image: '/images/projects/placeholder.svg',
      link: '',
      status: 'active',
      mode: 'professional',
    },
  ],
  ru: [
    {
      title: 'StemLab',
      slug: 'stemlab',
      description: 'Строю интерактивную STEM-платформу. Фулстек-разработка, Rive-анимации, система контента.',
      content: `
        <h2>О проекте</h2>
        <p>StemLab — интерактивная платформа для изучения STEM-дисциплин, разработанная для того, чтобы сделать образование в сфере науки и технологий увлекательным и доступным. Платформа сочетает интерактивные уроки, анимации и структурированную систему контента.</p>

        <h2>Моя роль</h2>
        <p>Фулстек-разработка от концепции до прототипа. Отвечаю за весь технический стек — от архитектуры и бэкенда до фронтенда и анимаций.</p>

        <h2>Ключевые функции</h2>
        <ul>
          <li><strong>Интерактивные уроки</strong> с Rive-анимациями, реагирующими на действия пользователя</li>
          <li><strong>Система управления контентом</strong> для создания и организации учебных программ</li>
          <li><strong>Отслеживание прогресса</strong> для мониторинга результатов обучения</li>
          <li><strong>Адаптивный дизайн</strong> оптимизированный для планшетов и десктопов</li>
        </ul>

        <h2>Технические особенности</h2>
        <p>Платформа использует Rive для аппаратно-ускоренных анимаций, работающих плавно на всех устройствах. Система контента достаточно гибкая для разных STEM-дисциплин, при этом сохраняет единый учебный поток.</p>
      `,
      tech: ['React', 'TypeScript', 'Node.js', 'Rive', 'PostgreSQL', 'Tailwind CSS'],
      image: '/images/projects/placeholder.svg',
      link: '',
      status: 'prototype',
      mode: 'personal',
    },
    {
      title: 'DocConnect',
      slug: 'docconnect',
      description: 'Строю медицинский маркетплейс с нуля. Архитектура, фронтенд, бэкенд, интеграция платежей.',
      content: `
        <h2>О проекте</h2>
        <p>DocConnect — медицинский маркетплейс, который связывает пациентов с врачами. Платформа охватывает всё: от поиска врачей и записи на приём до безопасных платежей и управления медицинскими записями.</p>

        <h2>Моя роль</h2>
        <p>Строю всю платформу с нуля — системная архитектура, фронтенд, бэкенд и интеграции с третьими сторонами. Это сольный фулстек-проект, где каждое техническое решение за мной.</p>

        <h2>Ключевые функции</h2>
        <ul>
          <li><strong>Профили врачей</strong> со специализациями, расписанием и отзывами пациентов</li>
          <li><strong>Запись на приём</strong> с доступностью в реальном времени</li>
          <li><strong>Интеграция платежей</strong> для безопасных онлайн-транзакций</li>
          <li><strong>Личный кабинет пациента</strong> для управления записями и историей болезни</li>
        </ul>

        <h2>Технические особенности</h2>
        <p>Архитектура спроектирована для масштабируемости с чётким разделением ответственности. Обработка платежей через Stripe с надлежащими мерами безопасности. Система расписания учитывает разницу часовых поясов и конкурентные бронирования.</p>
      `,
      tech: ['Next.js', 'TypeScript', 'Node.js', 'PostgreSQL', 'Stripe', 'Tailwind CSS'],
      image: '/images/projects/placeholder.svg',
      link: '',
      status: 'active',
      mode: 'personal',
    },
    {
      title: 'Bake by Angie',
      slug: 'bake-by-angie',
      description: 'Веб-разработка и QA для платформы обучения выпечке. Тестирование, деплой, поддержка.',
      content: `
        <h2>О проекте</h2>
        <p>Bake by Angie — онлайн-платформа для обучения выпечке. Сайт предлагает курсы, рецепты и сообщество для тех, кто хочет освоить профессиональные техники выпечки из дома.</p>

        <h2>Моя роль</h2>
        <p>Веб-разработка и обеспечение качества. Отвечаю за фронтенд-разработку, стратегию тестирования, пайплайны деплоя и текущую поддержку сайта.</p>

        <h2>Ключевой вклад</h2>
        <ul>
          <li><strong>Фронтенд-разработка</strong> — создание и поддержка UI сайта</li>
          <li><strong>QA-стратегия</strong> — ручное и автоматизированное тестирование на разных устройствах и браузерах</li>
          <li><strong>Деплой</strong> — настройка CI/CD пайплайнов для надёжных релизов</li>
          <li><strong>Оптимизация производительности</strong> — быстрая загрузка для контента с обильным медиа</li>
        </ul>

        <h2>Технические особенности</h2>
        <p>Платформа отдаёт тяжёлый медиа-контент (видео, фото высокого разрешения), что потребовало тщательной оптимизации. Реализованы ленивая загрузка, пайплайны сжатия изображений и CDN-кэширование для поддержания скорости.</p>
      `,
      tech: ['WordPress', 'PHP', 'JavaScript', 'Playwright', 'CSS', 'SEO'],
      image: '/images/projects/bake-by-angie-logo.png',
      link: 'https://bakebyangie.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Casa Rica Estate',
      slug: 'casa-rica-estate',
      description: 'Веб-разработка и SEO-автоматизация для сайта недвижимости. AI-контент, тестирование, аналитика.',
      content: `
        <h2>О проекте</h2>
        <p>Casa Rica Estate — сайт недвижимости с фокусом на объекты в Коста-Рике. Сайт сочетает функционал поиска объектов с SEO-оптимизированным контентом для привлечения международных покупателей.</p>

        <h2>Моя роль</h2>
        <p>Веб-разработка и SEO-автоматизация. Строю функционал сайта, создаю автоматизированные пайплайны генерации контента и обеспечиваю высокие позиции в поисковых системах.</p>

        <h2>Ключевой вклад</h2>
        <ul>
          <li><strong>SEO-автоматизация</strong> — AI-генерация контента для описаний объектов и гидов по районам</li>
          <li><strong>Веб-разработка</strong> — страницы объектов и функционал поиска</li>
          <li><strong>Настройка аналитики</strong> — отслеживание поведения пользователей и воронок конверсии</li>
          <li><strong>Тестирование</strong> — кросс-браузерное и мобильное тестирование поиска объектов</li>
        </ul>

        <h2>Технические особенности</h2>
        <p>Построены автоматизированные SEO-пайплайны с использованием n8n и AI API. Система генерирует уникальные локализованные описания объектов и гиды по районам, значительно сокращая время ручного создания контента и улучшая позиции в поиске.</p>
      `,
      tech: ['WordPress', 'n8n', 'OpenAI API', 'Google Analytics', 'Playwright', 'SEO'],
      image: '/images/projects/casa-rica-logo.png',
      link: 'https://casaricaestate.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'QA Camp',
      slug: 'qacamp',
      description: 'QA-лид и веб-разработка для консалтинговой компании. Стратегия тестирования, автоматизация, координация.',
      content: `
        <h2>О проекте</h2>
        <p>QA Camp — QA-консалтинговая компания, которая предоставляет услуги тестирования и обучение для команд разработки. Сайт служит как маркетинговой платформой, так и ресурсным центром для QA-специалистов.</p>

        <h2>Моя роль</h2>
        <p>QA-лид и веб-разработчик. Управляю стратегией тестирования для клиентских проектов, координирую QA-команду и поддерживаю сайт компании.</p>

        <h2>Ключевой вклад</h2>
        <ul>
          <li><strong>QA-лидерство</strong> — определение стратегий и процессов тестирования для клиентских проектов</li>
          <li><strong>Автоматизация тестирования</strong> — создание и поддержка автоматизированных тестовых наборов</li>
          <li><strong>Веб-разработка</strong> — поддержка и улучшение сайта компании</li>
          <li><strong>Координация команды</strong> — менторство начинающих QA-инженеров и ревью их работы</li>
        </ul>

        <h2>Технические особенности</h2>
        <p>Создал комплексный фреймворк автоматизации тестирования на Playwright, который сократил время регрессионного тестирования на 70%. Фреймворк включает визуальное регрессионное тестирование, API-тестирование и проверку кросс-браузерной совместимости.</p>
      `,
      tech: ['Playwright', 'Selenium', 'Cypress', 'JavaScript', 'WordPress', 'Jira'],
      image: '/images/projects/qacamp-logo.svg',
      link: 'https://qacamp.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Octoddler School',
      slug: 'octoddler-school',
      description: 'Редизайн сайта и QA для Монтессори-школы. Фронтенд-разработка, тестирование, доступность.',
      content: `
        <h2>О проекте</h2>
        <p>Octoddler School — Монтессори-школа, которой нужен был современный, доступный сайт для привлечения родителей и демонстрации образовательного подхода.</p>

        <h2>Моя роль</h2>
        <p>Редизайн сайта и обеспечение качества. Перестроил фронтенд с фокусом на доступность и современный дизайн, затем убедился, что всё безупречно работает на разных устройствах.</p>

        <h2>Ключевой вклад</h2>
        <ul>
          <li><strong>Редизайн фронтенда</strong> — современный, адаптивный макет с улучшенным UX</li>
          <li><strong>Доступность (a11y)</strong> — соответствие WCAG для инклюзивного доступа</li>
          <li><strong>QA-тестирование</strong> — тестирование на разных устройствах и браузерах</li>
          <li><strong>Производительность</strong> — оптимизация изображений и ресурсов для быстрой загрузки</li>
        </ul>

        <h2>Технические особенности</h2>
        <p>Достигнуто соответствие WCAG 2.1 AA, что особенно важно для образовательного учреждения. Редизайн улучшил показатели мобильного удобства и время загрузки страниц, что привело к лучшим метрикам вовлечённости.</p>
      `,
      tech: ['HTML', 'CSS', 'JavaScript', 'Accessibility', 'Playwright', 'Figma'],
      image: '/images/projects/placeholder.svg',
      link: '',
      status: 'active',
      mode: 'professional',
    },
  ],
};

export function getProjects(lang: Locale): Project[] {
  return projectsData[lang];
}

export function getProjectSlugs(lang: Locale): string[] {
  return projectsData[lang].map((p) => p.slug);
}

export function getProject(lang: Locale, slug: string): Project | undefined {
  return projectsData[lang].find((p) => p.slug === slug);
}
