import { ui } from './ui';

export type Locale = 'en' | 'ru';

export const defaultLocale: Locale = 'en';
export const locales: Locale[] = ['en', 'ru'];

export function getLangFromUrl(url: URL): Locale {
  const [, lang] = url.pathname.split('/');
  if (lang === 'ru') return 'ru';
  return 'en';
}

export function useTranslations(lang: Locale) {
  return function t(key: keyof typeof ui.en): string {
    return ui[lang][key] ?? ui.en[key];
  };
}

export function getLocalePath(lang: Locale, path: string): string {
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  if (lang === 'en') return cleanPath;
  return `/ru${cleanPath}`;
}

export function getAlternatePath(currentPath: string): { en: string; ru: string } {
  const cleanPath = currentPath.replace(/^\/ru/, '') || '/';
  return {
    en: cleanPath,
    ru: `/ru${cleanPath}`,
  };
}

export function formatDate(date: Date, lang: Locale): string {
  const locale = lang === 'ru' ? 'ru-RU' : 'en-GB';
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  }).format(date);
}

export function formatDateLong(date: Date, lang: Locale): string {
  const locale = lang === 'ru' ? 'ru-RU' : 'en-GB';
  return new Intl.DateTimeFormat(locale, {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  }).format(date);
}
