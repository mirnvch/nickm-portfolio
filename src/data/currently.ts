import type { Locale } from '../i18n/utils';

// "Currently" — a short, living list of what I'm working on now.
// Edit these bullets directly; each string may contain inline HTML (e.g. <strong>).
export const currently: Record<Locale, string[]> = {
  en: [
    'Building a visual <strong>Coverage Atlas</strong> for the product I test — a live map of what’s covered, planned, blocked, and where the data drifts. <a href="/atlas/">See the live demo →</a>',
    'Working with <strong>Claude Code</strong> as my day-to-day architecture partner.',
    'Building a course on <strong>QA test architecture</strong> — how a Playwright suite grows from scattered tests into a layered, production-grade framework. In progress.',
    'Freelance web + QA — recently <strong>bogach.by</strong>, a four-language guesthouse site built end-to-end with Claude Code.',
  ],
  ru: [
    'Строю визуальный <strong>Coverage Atlas</strong> для продукта, который тестирую, — живую карту того, что покрыто, запланировано, заблокировано и где расходятся данные. <a href="/ru/atlas/">Смотреть демо →</a>',
    'Работаю с <strong>Claude Code</strong> как с повседневным партнёром по архитектуре.',
    'Готовлю курс по <strong>архитектуре QA-тестов</strong> — как набор тестов на Playwright вырастает из разрозненных проверок в слоистый, продакшн-готовый фреймворк. В процессе.',
    'Фриланс веб + QA — недавно <strong>bogach.by</strong>, сайт усадьбы на четырёх языках, собранный от и до с Claude Code.',
  ],
};
