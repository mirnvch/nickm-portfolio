import type { Locale } from '../i18n/utils';

export type StuffIcon = 'grid' | 'list' | 'house';

export interface StuffItem {
  title: string;
  desc: string;
  badgeLabel: string;
  tone: 'live' | 'prototype' | 'paused' | 'shipped';
  href: string;       // internal path, external URL, or '' for a non-clickable card
  external?: boolean; // true → open in a new tab
  icon: StuffIcon;
}

// Curated "Stuff I've Made" showcase (mirrors the Browser Claude mockup).
export const stuff: Record<Locale, StuffItem[]> = {
  en: [
    {
      title: 'Coverage Atlas',
      desc: "A live map of what's tested, planned, blocked, and drifting. Built with Claude Code.",
      badgeLabel: 'Prototype',
      tone: 'prototype',
      href: '/atlas/',
      icon: 'grid',
    },
    {
      title: 'QA Architecture Course',
      desc: 'How a Playwright suite grows from scattered tests into a layered, production-grade framework.',
      badgeLabel: 'Prototype',
      tone: 'prototype',
      href: '',
      icon: 'list',
    },
    {
      title: 'bogach.by',
      desc: 'A four-language guesthouse site built end-to-end with Claude Code.',
      badgeLabel: 'Live',
      tone: 'live',
      href: 'https://bogach.by',
      external: true,
      icon: 'house',
    },
  ],
  ru: [
    {
      title: 'Coverage Atlas',
      desc: 'Живая карта того, что протестировано, запланировано, заблокировано и расходится. Собрано с Claude Code.',
      badgeLabel: 'Прототип',
      tone: 'prototype',
      href: '/ru/atlas/',
      icon: 'grid',
    },
    {
      title: 'Курс по архитектуре QA',
      desc: 'Как набор тестов на Playwright вырастает из разрозненных проверок в слоистый, продакшн-готовый фреймворк.',
      badgeLabel: 'Прототип',
      tone: 'prototype',
      href: '',
      icon: 'list',
    },
    {
      title: 'bogach.by',
      desc: 'Сайт усадьбы на четырёх языках, собранный от и до с Claude Code.',
      badgeLabel: 'Live',
      tone: 'live',
      href: 'https://bogach.by',
      external: true,
      icon: 'house',
    },
  ],
};
