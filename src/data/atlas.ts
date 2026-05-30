import type { Locale } from '../i18n/utils';

export interface AtlasState {
  color: string;   // swatch color (matches the demo legend)
  label: string;
  desc: string;
}

export interface AtlasContent {
  title: string;
  intro: string[];          // intro paragraphs
  howTitle: string;
  statesIntro: string;
  states: AtlasState[];
  heatmapTitle: string;
  heatmapBody: string;
  drawerTitle: string;
  drawerBody: string;
  note: string;
  openFull: string;
  // homepage teaser
  teaserKicker: string;
  teaserBody: string;
  teaserCta: string;
}

// Colors mirror the demo's legend (--full, --partly, --tests, --page, --blocked).
export const atlas: Record<Locale, AtlasContent> = {
  en: {
    title: 'Coverage Atlas',
    intro: [
      'Test coverage usually lives as a single number buried in a CI log — a percentage nobody on the team can act on. It tells you how much code ran, not whether the things that matter are actually tested, documented, or even built yet.',
      'A coverage atlas turns that number into a map. It shows, per domain, what’s fully covered, what’s partially covered, what has tests but no documentation, what exists as a page with no tests, and what isn’t modeled at all — plus where the data drifts between the test suite and the real product. Anyone on the team can read it in a glance.',
      'This is an approach I picked up and adapted, then rebuilt with Claude Code. Below is a fully fictional demo for a made-up product — click any heatmap cell to open the inspector drawer.',
    ],
    howTitle: 'How to read it',
    statesIntro: 'Each domain card and heatmap cell is colored by its coverage state:',
    states: [
      { color: '#2e7d4f', label: 'Fully documented', desc: 'rules are tested and documented' },
      { color: '#c08a1e', label: 'Partly documented', desc: 'some rules still need tests' },
      { color: '#2563c9', label: 'Tests exist', desc: 'written, but not yet documented' },
      { color: '#9a9a9a', label: 'Page exists', desc: 'UI is present, no automated tests' },
      { color: '#c0531e', label: 'Blocked / not modeled', desc: 'known, but nothing built — or tests are blocked' },
    ],
    heatmapTitle: 'The domain × tier heatmap',
    heatmapBody: 'The Coverage Radar crosses every product domain (Catalog, Cart, Orders…) with every test tier (unit, API, UI, E2E…). A green cell means test files exist for that pair, and the number is the file count. A red badge flags blocked tests. An empty cell isn’t a failure — it just means that pair isn’t modeled yet, which keeps the gaps honest and visible.',
    drawerTitle: 'Click to inspect',
    drawerBody: 'Click any heatmap cell and a drawer slides in with the evidence behind it — the specific test files, specs, and routes that back that domain-and-tier pair. That’s the point: every colored cell traces to something real, so the map can’t quietly lie.',
    note: 'This is a fully fictional demo — every count is hand-authored for illustration, and there’s no client data anywhere in it. In production, an atlas like this is generated at build time from the test manifest and route map, so it always reflects the real suite. The concept is an approach I picked up and adapted, then rebuilt with Claude Code.',
    openFull: 'Open the demo in its own tab ↗',
    teaserKicker: 'Coverage Atlas',
    teaserBody: 'A live map of what’s tested, planned, blocked, and drifting. Built with Claude Code.',
    teaserCta: 'Try the interactive demo →',
  },
  ru: {
    title: 'Coverage Atlas',
    intro: [
      'Покрытие тестами обычно живёт как одно число, погребённое в логах CI, — процент, с которым команда ничего не может сделать. Он говорит, сколько кода выполнилось, но не о том, протестировано ли, задокументировано и вообще построено ли то, что действительно важно.',
      'Coverage atlas превращает это число в карту. Он показывает по каждому домену, что покрыто полностью, что частично, где есть тесты, но нет документации, что существует как страница без тестов, а что не смоделировано вовсе — и где данные расходятся между набором тестов и реальным продуктом. Любой в команде читает это с одного взгляда.',
      'Этот подход я подсмотрел, адаптировал, а потом пересобрал с Claude Code. Ниже — полностью вымышленное демо для выдуманного продукта. Кликните на любую ячейку теплокарты, чтобы открыть панель с деталями.',
    ],
    howTitle: 'Как это читать',
    statesIntro: 'Каждая карточка домена и ячейка теплокарты окрашена по состоянию покрытия:',
    states: [
      { color: '#2e7d4f', label: 'Полностью задокументировано', desc: 'правила протестированы и описаны' },
      { color: '#c08a1e', label: 'Частично задокументировано', desc: 'части правил ещё нужны тесты' },
      { color: '#2563c9', label: 'Тесты есть', desc: 'написаны, но пока не задокументированы' },
      { color: '#9a9a9a', label: 'Страница есть', desc: 'UI присутствует, автотестов нет' },
      { color: '#c0531e', label: 'Заблокировано / не смоделировано', desc: 'известно, но ничего не построено — или тесты заблокированы' },
    ],
    heatmapTitle: 'Теплокарта домен × уровень',
    heatmapBody: 'Coverage Radar пересекает каждый домен продукта (Каталог, Корзина, Заказы…) с каждым уровнем тестов (unit, API, UI, E2E…). Зелёная ячейка означает, что для этой пары есть тест-файлы, а число — их количество. Красный бейдж отмечает заблокированные тесты. Пустая ячейка — не ошибка: просто эта пара ещё не смоделирована, и пробелы остаются честными и видимыми.',
    drawerTitle: 'Клик — и детали',
    drawerBody: 'Кликните на любую ячейку — и выезжает панель с доказательствами: конкретные тест-файлы, спеки и маршруты, которые стоят за этой парой «домен × уровень». В этом и смысл: каждая окрашенная ячейка ведёт к чему-то реальному, поэтому карта не может тихо врать.',
    note: 'Это полностью вымышленное демо — все числа написаны вручную для иллюстрации, и в нём нет никаких клиентских данных. В продакшене такой атлас генерируется на этапе сборки из манифеста тестов и карты маршрутов, поэтому всегда отражает реальный набор тестов. Сам подход я подсмотрел, адаптировал, а потом пересобрал с Claude Code.',
    openFull: 'Открыть демо в отдельной вкладке ↗',
    teaserKicker: 'Coverage Atlas',
    teaserBody: 'Живая карта того, что протестировано, запланировано, заблокировано и расходится. Собрано с Claude Code.',
    teaserCta: 'Открыть интерактивное демо →',
  },
};
