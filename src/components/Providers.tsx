'use client';

import { ThemeProvider } from 'next-themes';
import { NextIntlClientProvider, AbstractIntlMessages } from 'next-intl';
import { SmoothScroll } from './SmoothScroll';

export function Providers({
  children,
  locale,
  messages,
}: {
  children: React.ReactNode;
  locale: string;
  messages: AbstractIntlMessages;
}) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false} disableTransitionOnChange>
      <NextIntlClientProvider locale={locale} messages={messages}>
        <SmoothScroll>{children}</SmoothScroll>
      </NextIntlClientProvider>
    </ThemeProvider>
  );
}
