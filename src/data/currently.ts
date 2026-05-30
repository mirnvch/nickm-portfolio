import type { Locale } from '../i18n/utils';

// "Currently" — a short, living list of what I'm working on now.
// Edit these bullets directly; each string may contain inline HTML (e.g. <strong>).
export const currently: Record<Locale, string[]> = {
  en: [
    'Building a visual <strong>Coverage Atlas</strong> for the product I test — a live map of what’s covered, planned, blocked, and where the data drifts. <a href="#atlas">Demo below.</a>',
    'Working with <strong>Claude Code</strong> as my day-to-day architecture partner.',
    'Building a course on <strong>QA test architecture</strong> — how a Playwright suite grows from scattered tests into a layered, production-grade framework. In progress.',
    'Freelance web + QA — currently <strong>Casa Rica Estate</strong> (bilingual real-estate site, SEO automation).',
  ],
  ru: [
    'Строю визуальный <strong>Coverage Atlas</strong> для продукта, который тестирую, — живую карту того, что покрыто, запланировано, заблокировано и где расходятся данные. <a href="#atlas">Демо ниже.</a>',
    'Работаю с <strong>Claude Code</strong> как с повседневным партнёром по архитектуре.',
    'Готовлю курс по <strong>архитектуре QA-тестов</strong> — как набор тестов на Playwright вырастает из разрозненных проверок в слоистый, продакшн-готовый фреймворк. В процессе.',
    'Фриланс веб + QA — сейчас <strong>Casa Rica Estate</strong> (двуязычный сайт недвижимости, SEO-автоматизация).',
  ],
};
