import type { Locale } from '../i18n/utils';

export interface Project {
  title: string;
  description: string;
  image: string;
  link: string;
  status: 'active' | 'prototype' | 'development';
  mode?: 'professional' | 'personal';
}

const projectsData: Record<Locale, Project[]> = {
  en: [
    {
      title: 'StemLab',
      description: 'Building an interactive STEM learning platform. Full-stack development, Rive animations, content system.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'prototype',
      mode: 'personal',
    },
    {
      title: 'DocConnect',
      description: 'Building a healthcare marketplace from scratch. Architecture, frontend, backend, payment integration.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
      mode: 'personal',
    },
    {
      title: 'Bake by Angie',
      description: 'Web development and QA for an online baking education platform. Testing, deployment, maintenance.',
      image: '/images/projects/bake-by-angie-logo.png',
      link: 'https://bakebyangie.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Casa Rica Estate',
      description: 'Web development and SEO automation for a real estate site. AI content generation, testing, analytics.',
      image: '/images/projects/casa-rica-logo.png',
      link: 'https://casaricaestate.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'QA Camp',
      description: 'QA lead and web development for a consulting firm. Test strategy, automation, team coordination.',
      image: '/images/projects/qacamp-logo.svg',
      link: 'https://qacamp.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Octoddler School',
      description: 'Website redesign and QA for a Montessori school. Frontend development, testing, accessibility.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
      mode: 'professional',
    },
  ],
  ru: [
    {
      title: 'StemLab',
      description: 'Строю интерактивную STEM-платформу. Фулстек-разработка, Rive-анимации, система контента.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'prototype',
      mode: 'personal',
    },
    {
      title: 'DocConnect',
      description: 'Строю медицинский маркетплейс с нуля. Архитектура, фронтенд, бэкенд, интеграция платежей.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
      mode: 'personal',
    },
    {
      title: 'Bake by Angie',
      description: 'Веб-разработка и QA для платформы обучения выпечке. Тестирование, деплой, поддержка.',
      image: '/images/projects/bake-by-angie-logo.png',
      link: 'https://bakebyangie.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Casa Rica Estate',
      description: 'Веб-разработка и SEO-автоматизация для сайта недвижимости. AI-контент, тестирование, аналитика.',
      image: '/images/projects/casa-rica-logo.png',
      link: 'https://casaricaestate.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'QA Camp',
      description: 'QA-лид и веб-разработка для консалтинговой компании. Стратегия тестирования, автоматизация, координация.',
      image: '/images/projects/qacamp-logo.svg',
      link: 'https://qacamp.com',
      status: 'active',
      mode: 'professional',
    },
    {
      title: 'Octoddler School',
      description: 'Редизайн сайта и QA для Монтессори-школы. Фронтенд-разработка, тестирование, доступность.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
      mode: 'professional',
    },
  ],
};

export function getProjects(lang: Locale): Project[] {
  return projectsData[lang];
}
