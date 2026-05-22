import type { Metadata } from 'next';
import './globals.css';
import { getLocale, getMessages } from 'next-intl/server';
import { Providers } from '@/components/Providers';

export const metadata: Metadata = {
  title: 'Tomás Goicoechea — Software Engineer',
  description:
    'Ingeniero en Informática con 5 años de experiencia construyendo software full stack para productos y equipos de ingeniería.',
  metadataBase: new URL('https://tomasgoicoechea.dev'),
  openGraph: {
    title: 'Tomás Goicoechea — Software Engineer',
    description: 'Ingeniero en Informática orientado a producto, arquitectura y desarrollo full stack.',
    type: 'website',
    locale: 'es_AR',
  },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const locale = await getLocale();
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body>
        <Providers locale={locale} messages={messages}>
          {children}
        </Providers>
      </body>
    </html>
  );
}
