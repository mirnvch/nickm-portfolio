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
      description: 'Interactive STEM learning platform for Russian speakers. Brilliant.org-level interactivity with Rive animations.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'prototype',
    },
    {
      title: 'DocConnect',
      description: 'Healthcare SaaS marketplace connecting patients with doctors. Appointments, messaging, payments.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
    },
    {
      title: 'Bake by Angie',
      description: 'Online baking education platform with video courses, recipes, and dual payment system.',
      image: '/images/projects/bake-by-angie-logo.png',
      link: 'https://bakebyangie.com',
      status: 'active',
    },
    {
      title: 'Casa Rica Estate',
      description: 'Luxury real estate website for Costa Blanca with AI-powered SEO content generation.',
      image: '/images/projects/casa-rica-logo.png',
      link: 'https://casaricaestate.com',
      status: 'active',
    },
    {
      title: 'QA Camp',
      description: 'QA consulting firm website. 20+ experts, 70+ projects. Clients: iHerb, Fisker, SprintRay.',
      image: '/images/projects/qacamp-logo.svg',
      link: 'https://qacamp.com',
      status: 'active',
    },
    {
      title: 'Octoddler School',
      description: 'Montessori school website redesign for California locations (Irvine & Ladera Ranch).',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
    },
  ],
  ru: [
    {
      title: 'StemLab',
      description: 'Интерактивная STEM-платформа для русскоязычных. Интерактивность уровня Brilliant.org с Rive-анимациями.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'prototype',
    },
    {
      title: 'DocConnect',
      description: 'Медицинский SaaS-маркетплейс, соединяющий пациентов с врачами. Записи, сообщения, оплата.',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
    },
    {
      title: 'Bake by Angie',
      description: 'Онлайн-платформа обучения выпечке с видеокурсами, рецептами и двойной системой оплаты.',
      image: '/images/projects/bake-by-angie-logo.png',
      link: 'https://bakebyangie.com',
      status: 'active',
    },
    {
      title: 'Casa Rica Estate',
      description: 'Сайт элитной недвижимости для Коста-Бланки с AI-генерацией SEO-контента.',
      image: '/images/projects/casa-rica-logo.png',
      link: 'https://casaricaestate.com',
      status: 'active',
    },
    {
      title: 'QA Camp',
      description: 'Сайт QA-консалтинговой компании. 20+ экспертов, 70+ проектов. Клиенты: iHerb, Fisker, SprintRay.',
      image: '/images/projects/qacamp-logo.svg',
      link: 'https://qacamp.com',
      status: 'active',
    },
    {
      title: 'Octoddler School',
      description: 'Редизайн сайта Монтессори-школы для локаций в Калифорнии (Ирвайн и Ладера Ранч).',
      image: '/images/projects/placeholder.svg',
      link: '#',
      status: 'active',
    },
  ],
};

export function getProjects(lang: Locale): Project[] {
  return projectsData[lang];
}
