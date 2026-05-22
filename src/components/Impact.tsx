'use client';

import { useTranslations, useLocale } from 'next-intl';
import { IconTargetArrow } from '@tabler/icons-react';
import { SectionHeader } from './SectionHeader';
import { Reveal, RevealSection, StaggerContainer, StaggerItem } from './Reveal';
import { IMPACT_CONFIGS } from '@/data/stack';
import type { ValueCardProps } from '@/types';

export function Impact() {
  const t = useTranslations('impact');
  const locale = useLocale();
  const cards = t.raw('cards') as Array<{ title: string; text: string }>;

  return (
    <section id="impact" className="max-w-6xl mx-auto px-5 py-12">
      <RevealSection>
        <div className="bg-bg-primary rounded-2xl border border-border/60 p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-50" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-accent/5 dark:bg-accent/8 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative">
            <SectionHeader
              label={t('sectionLabel')}
              title={t('title')}
              titleAlt={t('titleAlt')}
              subtitle={t('subtitle')}
              terminal={t('terminal')}
            />

            <StaggerContainer key={locale} className="grid grid-cols-1 lg:grid-cols-[1fr_0.72fr] gap-4">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {cards.map((card, index) => {
                  const cfg = IMPACT_CONFIGS[index];
                  const Icon = cfg.Icon;
                  return (
                    <StaggerItem key={card.title}>
                      <ValueCard
                        icon={<Icon size={18} aria-hidden="true" />}
                        iconBg={cfg.iconBg}
                        title={card.title}
                        text={card.text}
                        bg={cfg.bg}
                        border={cfg.border}
                        glow={cfg.glow}
                        index={index + 1}
                      />
                    </StaggerItem>
                  );
                })}
              </div>

              <StaggerItem>
                <div className="h-full rounded-xl relative overflow-hidden card-lift hover:shadow-[0_12px_48px_rgb(83,74,183,0.35)] dark:hover:shadow-[0_12px_48px_rgb(83,74,183,0.5)] transition-all duration-300">
                  <div className="absolute inset-0 bg-gradient-to-br from-[#2C2870] via-[#534AB7] to-[#1D6B54]" aria-hidden="true" />
                  <div className="absolute inset-0 bg-noise opacity-30" aria-hidden="true" />
                  <div className="absolute -right-10 -top-10 w-40 h-40 rounded-full bg-white/10 blur-2xl" aria-hidden="true" />
                  <div className="absolute -left-5 -bottom-5 w-32 h-32 rounded-full bg-[#1D9E75]/30 blur-2xl" aria-hidden="true" />

                  <div className="relative p-6 sm:p-7 h-full flex flex-col justify-between">
                    <div>
                      <div className="inline-flex items-center gap-2 rounded-lg bg-white/10 px-3 py-1.5 text-[11px] uppercase text-white/80 font-mono mb-4 backdrop-blur-sm">
                        <IconTargetArrow size={13} aria-hidden="true" />
                        {t('proofKicker')}
                      </div>
                      <h3 className="text-[24px] sm:text-[28px] leading-[1.1] font-extrabold text-white mb-3 tracking-tight">
                        {t('proofTitle')}
                      </h3>
                      <p className="text-[13px] leading-[1.65] text-white/70">
                        {t('proofText')}
                      </p>
                    </div>

                    <Reveal delay={0.2}>
                      <div className="mt-6 grid grid-cols-3 gap-2 font-mono text-[10px] text-white/60">
                        <Signal label="product" />
                        <Signal label="code" />
                        <Signal label="ops" />
                      </div>
                    </Reveal>
                  </div>
                </div>
              </StaggerItem>
            </StaggerContainer>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

function ValueCard({ icon, iconBg, title, text, bg, border, glow, index }: ValueCardProps) {
  return (
    <div className={`h-full rounded-xl border ${border} ${bg} p-5 card-lift ${glow} transition-all duration-300 group`}>
      <div className="flex items-start justify-between mb-4">
        <div className={`w-10 h-10 rounded-lg flex items-center justify-center text-white shadow-lg ${iconBg}`}>
          {icon}
        </div>
        <span className="font-mono text-[11px] text-fg-tertiary/60 group-hover:text-fg-tertiary transition-colors">
          0{index}
        </span>
      </div>
      <h3 className="text-[15px] font-bold leading-snug tracking-tight mb-2">{title}</h3>
      <p className="text-[12.5px] text-fg-secondary leading-[1.65]">{text}</p>
    </div>
  );
}

function Signal({ label }: { label: string }) {
  return (
    <div className="rounded-lg border border-white/15 px-2.5 py-2 backdrop-blur-sm">
      <div className="mb-1.5 h-1 rounded-full bg-gradient-to-r from-[#1D9E75] to-[#5DCAA5]" />
      <span className="text-[10px]">{label}</span>
    </div>
  );
}
