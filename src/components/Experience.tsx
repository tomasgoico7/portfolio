'use client';

import { useTranslations } from 'next-intl';
import { SectionHeader } from './SectionHeader';
import { RevealSection, StaggerContainer, StaggerItem } from './Reveal';
import { TECHS } from '@/data/stack';
import type { TimelineEntryProps } from '@/types';

export function Experience() {
  const t = useTranslations('experience');
  const bulletsKoovra = t.raw('koovra.bullets') as string[];
  const bulletsCirco = t.raw('circo.bullets') as string[];

  return (
    <section id="experience" className="max-w-6xl mx-auto px-5 py-12">
      <RevealSection>
        <div className="bg-bg-primary rounded-2xl border border-border/60 p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" aria-hidden="true" />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-success/4 dark:bg-success/6 blur-3xl pointer-events-none" aria-hidden="true" />

          <div className="relative">
            <SectionHeader
              label={t('sectionLabel')}
              title={t('title')}
              titleAlt={t('titleAlt')}
              subtitle={t('subtitle')}
              terminal={t('terminal')}
            />

            <div className="relative pl-8 mt-2">
              <div
                className="absolute left-2.5 top-3 bottom-3 w-[2px] rounded-full"
                style={{ background: 'linear-gradient(to bottom, #1D9E75, #534AB7, #534AB7 60%, transparent)' }}
                aria-hidden="true"
              />

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <TimelineEntry
                    dotColor="#1D9E75"
                    dotGradient="from-[#1D9E75] to-[#5DCAA5]"
                    glowColor="rgb(29,158,117,0.15)"
                    borderColor="border-[#1D9E75]/20 dark:border-[#1D9E75]/25"
                    role={t('koovra.role')}
                    company={`@ ${t('koovra.company')}`}
                    period={t('koovra.period')}
                    isCurrent
                    currentLabel={t('current')}
                    bullets={bulletsKoovra}
                    techs={TECHS.koovra}
                    techColor="text-[#085041] dark:text-[#5DCAA5]"
                    techBg="bg-[#E1F5EE] dark:bg-[#0c2a23]"
                  />
                </StaggerItem>
                <StaggerItem>
                  <TimelineEntry
                    dotColor="#534AB7"
                    dotGradient="from-[#534AB7] to-[#8B7CF6]"
                    glowColor="rgb(83,74,183,0.12)"
                    borderColor="border-[#534AB7]/15 dark:border-[#534AB7]/20"
                    role={t('circo.role')}
                    company={`@ ${t('circo.company')}`}
                    period={t('circo.period')}
                    bullets={bulletsCirco}
                    techs={TECHS.circo}
                    techColor="text-[#3C3489] dark:text-[#AFA9EC]"
                    techBg="bg-[#EEEDFE] dark:bg-[#1f1b3f]"
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

function TimelineEntry({
  dotColor, dotGradient, glowColor, borderColor,
  role, company, period, bullets, techs,
  techColor, techBg, isCurrent, currentLabel,
}: TimelineEntryProps) {
  return (
    <div className="relative">
      <div
        className={`absolute -left-[30px] top-[18px] w-5 h-5 rounded-full bg-gradient-to-br ${dotGradient} shadow-[0_0_12px_var(--dot-glow)] flex items-center justify-center`}
        style={{ '--dot-glow': glowColor } as React.CSSProperties}
        aria-hidden="true"
      >
        <span className="w-2 h-2 rounded-full bg-white/90" />
      </div>

      <div className={`bg-bg-tertiary/60 border ${borderColor} rounded-xl p-5 sm:p-6 card-lift group`}>
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <div className="text-[17px] font-bold tracking-tight">{role}</div>
            <div className="text-[13px] font-semibold mt-0.5" style={{ color: dotColor }}>
              {company}
            </div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {isCurrent && currentLabel && (
              <span className="text-[10px] bg-[#EAF3DE] dark:bg-[#1a2a14] text-[#27500A] dark:text-[#97C459] px-2.5 py-1 rounded-full font-bold border border-[#97C459]/20">
                {currentLabel}
              </span>
            )}
            <span className="text-[11px] text-fg-tertiary font-mono bg-bg-primary/60 px-2.5 py-1 rounded-md border border-border/50">
              {period}
            </span>
          </div>
        </div>

        <ul className="mt-3 pl-4 text-[13px] text-fg-secondary leading-[1.75] list-disc marker:text-fg-tertiary space-y-0.5">
          {bullets.map((bullet, i) => (
            <li key={i}>{bullet}</li>
          ))}
        </ul>

        <div className="flex flex-wrap gap-1.5 mt-4">
          {techs.map((tech) => (
            <span
              key={tech}
              className={`text-[11px] ${techColor} ${techBg} px-2.5 py-0.5 rounded-md font-mono font-medium`}
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
