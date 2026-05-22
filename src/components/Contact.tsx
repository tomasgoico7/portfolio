'use client';

import { useTranslations, useLocale } from 'next-intl';
import { Reveal, RevealSection, StaggerContainer, StaggerItem } from './Reveal';
import {
  IconMail,
  IconPhone,
  IconBrandLinkedin,
  IconBrandGithub,
  IconSend,
  IconArrowUpRight,
} from '@tabler/icons-react';

interface ContactMethod {
  icon: React.ReactNode;
  label: string;
  value: string;
  href: string;
  iconGradient: string;
  accentColor: string;
  hoverGlow: string;
}

export function Contact() {
  const t = useTranslations('contact');
  const locale = useLocale();

  const methods: ContactMethod[] = [
    {
      icon: <IconMail size={18} className="text-white" aria-hidden="true" />,
      label: t('labelEmail'),
      value: 'tomasgoico7@gmail.com',
      href: 'mailto:tomasgoico7@gmail.com',
      iconGradient: 'from-[#534AB7] to-[#8B7CF6]',
      accentColor: '#8B7CF6',
      hoverGlow: 'hover:shadow-[0_8px_32px_rgb(83,74,183,0.2)]',
    },
    {
      icon: <IconPhone size={18} className="text-white" aria-hidden="true" />,
      label: t('labelPhone'),
      value: '+54 11 3098 5383',
      href: 'tel:+541130985383',
      iconGradient: 'from-[#1D9E75] to-[#5DCAA5]',
      accentColor: '#5DCAA5',
      hoverGlow: 'hover:shadow-[0_8px_32px_rgb(29,158,117,0.2)]',
    },
    {
      icon: <IconBrandLinkedin size={18} className="text-white" aria-hidden="true" />,
      label: t('labelLinkedin'),
      value: 'in/tomas-goicoechea',
      href: 'https://www.linkedin.com/in/tomas-goicoechea-0a266a174/',
      iconGradient: 'from-[#0077B5] to-[#00A0DC]',
      accentColor: '#00A0DC',
      hoverGlow: 'hover:shadow-[0_8px_32px_rgb(0,160,220,0.2)]',
    },
    {
      icon: <IconBrandGithub size={18} className="text-white" aria-hidden="true" />,
      label: t('labelGithub'),
      value: 'github.com/tomasgoico7',
      href: 'https://github.com/tomasgoico7',
      iconGradient: 'from-[#333] to-[#666]',
      accentColor: '#999',
      hoverGlow: 'hover:shadow-[0_8px_32px_rgb(150,150,150,0.15)]',
    },
  ];

  return (
    <section id="contact" className="max-w-6xl mx-auto px-5 py-12">
      <RevealSection>
        <div className="bg-bg-primary rounded-2xl border border-border/60 p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" aria-hidden="true" />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full bg-accent/5 dark:bg-accent/8 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative">
            {/* Header */}
            <Reveal>
              <div className="flex items-start justify-between mb-8 gap-4">
                <div>
                  <div className="inline-flex items-center gap-2 font-mono text-[11px] text-accent font-semibold uppercase tracking-wider mb-3 bg-accent/8 dark:bg-accent/12 px-2.5 py-1 rounded-md border border-accent/20">
                    <span className="w-1.5 h-1.5 rounded-full bg-accent" />
                    {t('sectionLabel')}
                  </div>
                  <h2 className="text-[30px] sm:text-[36px] font-extrabold tracking-tight leading-[1.1]">
                    {t('title')}{' '}
                    <span className="text-fg-tertiary font-light">{t('titleAlt')}</span>
                  </h2>
                </div>
                <div className="font-mono text-[11px] text-fg-tertiary hidden sm:block shrink-0 mt-1 bg-bg-tertiary px-2 py-1 rounded border border-border/50">
                  {t('terminal')}
                </div>
              </div>
            </Reveal>

            {/* Big CTA */}
            <Reveal delay={0.1}>
              <div className="relative rounded-xl overflow-hidden mb-4">
                {/* Fondo */}
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C2870] via-[#534AB7] to-[#1D6B54]" aria-hidden="true" />
                <div className="absolute inset-0 bg-noise opacity-20" aria-hidden="true" />
                <div className="absolute -right-12 -top-12 w-56 h-56 rounded-full bg-white/10 blur-3xl" aria-hidden="true" />
                <div className="absolute -left-8 -bottom-8 w-44 h-44 rounded-full bg-[#1D9E75]/30 blur-3xl" aria-hidden="true" />

                {/* Borde animado top */}
                <div className="h-px animated-gradient w-full absolute top-0 left-0" aria-hidden="true" />

                <div className="relative p-7 sm:p-9 grid grid-cols-1 sm:grid-cols-[1fr_auto] gap-6 items-center">
                  <div>
                    <div className="font-mono text-[11px] text-white/50 mb-2">{t('availabilityComment')}</div>
                    <h3 className="text-[26px] sm:text-[32px] font-extrabold tracking-tight text-white mb-2 leading-[1.1]">
                      {t('ctaTitle')}
                    </h3>
                    <p className="text-[13px] text-white/65 max-w-md leading-[1.6]">{t('ctaText')}</p>
                  </div>
                  <a
                    href="mailto:tomasgoico7@gmail.com"
                    className="relative group bg-white text-[#534AB7] text-[13px] px-6 py-3 rounded-lg flex items-center gap-2.5 font-bold hover:bg-white/95 active:scale-[0.97] transition-all whitespace-nowrap shadow-[0_4px_20px_rgba(0,0,0,0.2)] overflow-hidden"
                  >
                    <span className="absolute inset-0 shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                    <IconSend size={15} aria-hidden="true" />
                    {t('ctaButton')}
                  </a>
                </div>
              </div>
            </Reveal>

            {/* Methods grid */}
            <StaggerContainer key={locale} className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {methods.map((method) => (
                <StaggerItem key={method.label}>
                  <a
                    href={method.href}
                    target={method.href.startsWith('http') ? '_blank' : undefined}
                    rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                    className={`bg-bg-tertiary/70 border border-border/60 rounded-xl p-4 sm:p-5 flex items-center gap-4 group card-lift ${method.hoverGlow} hover:border-border-strong transition-all`}
                  >
                    <div className={`w-11 h-11 rounded-xl bg-gradient-to-br ${method.iconGradient} flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      {method.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="text-[10px] text-fg-tertiary uppercase font-mono tracking-wider mb-0.5">
                        {method.label}
                      </div>
                      <div className="text-[13px] font-semibold truncate">{method.value}</div>
                    </div>
                    <IconArrowUpRight
                      size={17}
                      className="text-fg-tertiary group-hover:text-fg-primary group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all flex-shrink-0"
                      aria-hidden="true"
                    />
                  </a>
                </StaggerItem>
              ))}
            </StaggerContainer>

            {/* Footer */}
            <Reveal delay={0.2}>
              <div className="mt-8 pt-5 border-t border-border/40">
                <div className="section-glow-line mb-5" aria-hidden="true" />
                <div className="flex flex-col sm:flex-row justify-between items-center gap-3 font-mono text-[11px] text-fg-tertiary">
                  <span>© {new Date().getFullYear()} Tomás Goicoechea</span>
                  <span>{t('footerLocation')}</span>
                  <span className="flex items-center gap-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full rounded-full bg-success opacity-75 animate-ping" />
                      <span className="relative inline-flex h-2 w-2 rounded-full bg-success" />
                    </span>
                    v1.0.0
                  </span>
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}
