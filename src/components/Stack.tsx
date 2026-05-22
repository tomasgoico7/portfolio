'use client';

import { useTranslations } from 'next-intl';
import { IconSparkles } from '@tabler/icons-react';
import { SectionHeader } from './SectionHeader';
import { RevealSection, StaggerContainer, StaggerItem } from './Reveal';
import { STACK_CONFIGS, STACK_ITEMS } from '@/data/stack';
import type { StackCardProps } from '@/types';

export function Stack() {
  const t = useTranslations('stack');

  return (
    <section id="stack" className="max-w-6xl mx-auto px-5 py-12">
      <RevealSection>
        <div className="bg-bg-primary rounded-2xl border border-border/60 p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" aria-hidden="true" />
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-64 rounded-full bg-accent/4 dark:bg-accent/7 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative">
            <SectionHeader
              label={t('sectionLabel')}
              title={t('title')}
              titleAlt={t('titleAlt')}
              subtitle={t('subtitle')}
              terminal={t('terminal')}
            />

            <StaggerContainer>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                {STACK_CONFIGS.slice(0, 2).map((cfg) => {
                  const Icon = cfg.icon;
                  const { icon: _icon, translationKey: _key, ...rest } = cfg;
                  return (
                    <StaggerItem key={cfg.translationKey}>
                      <StackCard
                        icon={<Icon size={16} className="text-white" aria-hidden="true" />}
                        title={t(cfg.translationKey)}
                        items={cfg.items}
                        {...rest}
                      />
                    </StaggerItem>
                  );
                })}
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-3">
                {STACK_CONFIGS.slice(2, 4).map((cfg) => {
                  const Icon = cfg.icon;
                  const { icon: _icon, translationKey: _key, ...rest } = cfg;
                  return (
                    <StaggerItem key={cfg.translationKey}>
                      <StackCard
                        icon={<Icon size={16} className="text-white" aria-hidden="true" />}
                        title={t(cfg.translationKey)}
                        items={cfg.items}
                        {...rest}
                      />
                    </StaggerItem>
                  );
                })}
              </div>

              <StaggerItem>
                <div className="bg-[#FDEEF4] dark:bg-[#2a0f1a] border border-[#ED93B1]/20 dark:border-[#ED93B1]/25 rounded-xl p-4 sm:p-5 card-lift hover:shadow-[0_8px_32px_rgb(237,147,177,0.15)] transition-all duration-300">
                  <div className="flex items-center gap-2.5 mb-2">
                    <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-[#ED93B1] to-[#8B7CF6] flex items-center justify-center shadow-md">
                      <IconSparkles size={16} className="text-white" aria-hidden="true" />
                    </div>
                    <span className="text-[12px] font-bold text-[#8B2252] dark:text-[#ED93B1] uppercase tracking-wide">
                      {t('ai')}
                    </span>
                  </div>
                  <p className="text-[12px] text-[#8B2252]/60 dark:text-[#ED93B1]/50 mb-3 leading-[1.6]">
                    {t('aiDesc')}
                  </p>
                  <div className="flex flex-wrap gap-1.5">
                    {STACK_ITEMS.ai.map((item) => (
                      <span
                        key={item}
                        className="bg-white dark:bg-[#0e0e10] text-[#8B2252] dark:text-[#ED93B1] border border-[#ED93B1]/15 dark:border-[#ED93B1]/20 text-[11px] px-2 py-0.5 rounded-md font-mono"
                      >
                        {item}
                      </span>
                    ))}
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

function StackCard({
  icon, title, items,
  bg, border, iconGradient,
  pillBg, pillText, pillBorder,
  labelColor, glow,
}: StackCardProps) {
  return (
    <div className={`${bg} border ${border} rounded-xl p-4 sm:p-5 card-lift ${glow} transition-all duration-300`}>
      <div className="flex items-center gap-2.5 mb-3">
        <div className={`w-8 h-8 rounded-lg bg-gradient-to-br ${iconGradient} flex items-center justify-center shadow-md`}>
          {icon}
        </div>
        <span className={`text-[12px] font-bold ${labelColor} uppercase tracking-wide`}>{title}</span>
      </div>
      <div className="flex flex-wrap gap-1.5">
        {items.map((item) => (
          <span
            key={item}
            className={`${pillBg} ${pillText} border ${pillBorder} text-[11px] px-2 py-0.5 rounded-md font-mono`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
