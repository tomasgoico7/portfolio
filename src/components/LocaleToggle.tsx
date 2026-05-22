'use client';

import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useTransition } from 'react';

export function LocaleToggle() {
  const locale = useLocale();
  const router = useRouter();
  const [, startTransition] = useTransition();

  const setLocale = (next: 'es' | 'en') => {
    if (next === locale) return;
    document.cookie = `NEXT_LOCALE=${next}; path=/; max-age=31536000; SameSite=Lax`;
    startTransition(() => router.refresh());
  };

  return (
    <div className="flex items-center gap-1.5 text-[11px]">
      <button
        onClick={() => setLocale('es')}
        className={`font-mono px-1.5 py-0.5 rounded transition-colors ${
          locale === 'es'
            ? 'text-fg-primary font-medium'
            : 'text-fg-tertiary hover:text-fg-secondary'
        }`}
      >
        ES
      </button>
      <span className="text-fg-tertiary">/</span>
      <button
        onClick={() => setLocale('en')}
        className={`font-mono px-1.5 py-0.5 rounded transition-colors ${
          locale === 'en'
            ? 'text-fg-primary font-medium'
            : 'text-fg-tertiary hover:text-fg-secondary'
        }`}
      >
        EN
      </button>
    </div>
  );
}
