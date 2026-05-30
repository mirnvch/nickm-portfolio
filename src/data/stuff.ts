import type { Locale } from '../i18n/utils';

export type StuffIcon = 'grid' | 'list' | 'house' | 'check' | 'cake';

export interface StuffItem {
  title: string;
  desc: string;
  badgeLabel: string;
  tone: 'live' | 'demo' | 'inprogress' | 'prototype' | 'paused' | 'shipped';
  href: string;       // internal path, external URL, or '' for a non-clickable card
  external?: boolean; // true → open in a new tab
  icon: StuffIcon;
}

export interface StuffGroup {
  label: string;
  items: StuffItem[];
}

// "Stuff I've Made" — one block, grouped: tools first, then real projects.
export const stuff: Record<Locale, StuffGroup[]> = {
  en: [
    {
      label: 'Tools',
      items: [
        {
          title: 'Coverage Atlas',
          desc: "A live map of what's tested, planned, blocked, and drifting. Built with Claude Code.",
          badgeLabel: 'Demo',
          tone: 'demo',
          href: '/atlas/',
          icon: 'grid',
        },
        {
          title: 'QA Architecture Course',
          desc: 'How a Playwright suite grows from scattered tests into a layered, production-grade framework.',
          badgeLabel: 'In progress',
          tone: 'inprogress',
          href: '',
          icon: 'list',
        },
      ],
    },
    {
      label: 'Projects',
      items: [
        {
          title: 'bogach.by',
          desc: 'A four-language guesthouse site built end-to-end with Claude Code — image optimization and SEO across every locale.',
          badgeLabel: 'Live',
          tone: 'live',
          href: 'https://bogach.by',
          external: true,
          icon: 'house',
        },
        {
          title: 'QA Camp',
          desc: 'QA lead for a consulting firm — set the test strategy and built a Playwright framework (visual, API, cross-browser) the team runs daily.',
          badgeLabel: 'Live',
          tone: 'live',
          href: 'https://qacamp.com',
          external: true,
          icon: 'check',
        },
        {
          title: 'Bake by Angie',
          desc: 'Frontend + QA for a media-heavy baking school — built and tested the UI and rebuilt the media pipeline so it stays fast across devices.',
          badgeLabel: 'Live',
          tone: 'live',
          href: 'https://bakebyangie.com',
          external: true,
          icon: 'cake',
        },
      ],
    },
  ],
  ru: [
    {
      label: 'Инструменты',
      items: [
        {
          title: 'Coverage Atlas',
          desc: 'Живая карта того, что протестировано, запланировано, заблокировано и расходится. Собрано с Claude Code.',
          badgeLabel: 'Демо',
          tone: 'demo',
          href: '/ru/atlas/',
          icon: 'grid',
        },
        {
          title: 'Курс по архитектуре QA',
          desc: 'Как набор тестов на Playwright вырастает из разрозненных проверок в слоистый, продакшн-готовый фреймворк.',
          badgeLabel: 'В процессе',
          tone: 'inprogress',
          href: '',
          icon: 'list',
        },
      ],
    },
    {
      label: 'Проекты',
      items: [
        {
          title: 'bogach.by',
          desc: 'Сайт усадьбы на четырёх языках, собранный от и до с Claude Code — оптимизация изображений и SEO для каждой локали.',
          badgeLabel: 'Live',
          tone: 'live',
          href: 'https://bogach.by',
          external: true,
          icon: 'house',
        },
        {
          title: 'QA Camp',
          desc: 'QA-лид в консалтинговой компании — задал стратегию тестирования и построил фреймворк на Playwright (визуальные, API, кросс-браузер), которым команда пользуется каждый день.',
          badgeLabel: 'Live',
          tone: 'live',
          href: 'https://qacamp.com',
          external: true,
          icon: 'check',
        },
        {
          title: 'Bake by Angie',
          desc: 'Фронтенд + QA для сайта школы выпечки с обилием медиа — собрал и протестировал интерфейс и пересобрал медиа-пайплайн, чтобы сайт оставался быстрым на всех устройствах.',
          badgeLabel: 'Live',
          tone: 'live',
          href: 'https://bakebyangie.com',
          external: true,
          icon: 'cake',
        },
      ],
    },
  ],
};
