import type { Locale } from '../i18n/utils';

export type SocialIcon = 'linkedin' | 'github' | 'telegram' | 'email';

export interface Social {
  icon: SocialIcon;
  href: string;
  label: Record<Locale, string>;
}

// Single source of truth for contact links — used in the "Say hi" section and the footer.
export const socials: Social[] = [
  {
    icon: 'linkedin',
    href: 'https://www.linkedin.com/in/mirnvch/',
    label: { en: 'LinkedIn', ru: 'LinkedIn' },
  },
  {
    icon: 'github',
    href: 'https://github.com/mirnvch',
    label: { en: 'GitHub', ru: 'GitHub' },
  },
  {
    icon: 'telegram',
    href: 'https://t.me/qa_mirnvch',
    label: { en: 'QA notes on Telegram', ru: 'QA-заметки в Telegram' },
  },
  {
    icon: 'email',
    href: 'mailto:mirnvch@gmail.com',
    label: { en: 'Email', ru: 'Почта' },
  },
];
