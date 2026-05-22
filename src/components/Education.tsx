'use client';

import { useTranslations } from 'next-intl';
import { IconSchool, IconBook, IconLanguage } from '@tabler/icons-react';
import { SectionHeader } from './SectionHeader';
import { Reveal, RevealSection, StaggerContainer, StaggerItem } from './Reveal';
import type { EducationEntryProps } from '@/types';

const TAGS_UNI = ['Algoritmos', 'Arquitectura', 'Bases de datos', 'Ing. de software'];
const TAGS_HS = ['Programación', 'Redes', 'Hardware'];

export function Education() {
  const t = useTranslations('education');

  return (
    <section id="education" className="max-w-6xl mx-auto px-5 py-12">
      <RevealSection>
        <div className="bg-bg-primary rounded-2xl border border-border/60 p-7 sm:p-10 relative overflow-hidden">
          <div className="absolute inset-0 bg-noise pointer-events-none opacity-40" aria-hidden="true" />
          <div className="absolute top-0 right-0 w-64 h-64 rounded-full bg-[#FAC775]/4 dark:bg-[#FAC775]/6 blur-3xl pointer-events-none" aria-hidden="true" />

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
                style={{ background: 'linear-gradient(to bottom, #534AB7, #BA7517, #BA7517 60%, transparent)' }}
                aria-hidden="true"
              />

              <StaggerContainer className="space-y-6">
                <StaggerItem>
                  <EducationEntry
                    dotGradient="from-[#534AB7] to-[#8B7CF6]"
                    glowColor="rgb(83,74,183,0.15)"
                    borderColor="border-[#534AB7]/15 dark:border-[#534AB7]/20"
                    icon={<IconSchool size={14} className="text-white" aria-hidden="true" />}
                    degree={t('university.degree')}
                    institution={`@ ${t('university.institution')}`}
                    institutionColor="text-accent"
                    period={t('university.period')}
                    badge={t('graduated')}
                    badgeColors="bg-[#EEEDFE] dark:bg-[#1f1b3f] text-[#3C3489] dark:text-[#AFA9EC] border border-[#534AB7]/20"
                    description={t('university.description')}
                    tags={TAGS_UNI}
                    tagStyle="text-[#3C3489] dark:text-[#AFA9EC] bg-[#EEEDFE] dark:bg-[#1f1b3f] border-[#534AB7]/15"
                  />
                </StaggerItem>
                <StaggerItem>
                  <EducationEntry
                    dotGradient="from-[#F59E0B] to-[#FAC775]"
                    glowColor="rgb(250,199,117,0.15)"
                    borderColor="border-[#FAC775]/15 dark:border-[#FAC775]/20"
                    icon={<IconBook size={14} className="text-white" aria-hidden="true" />}
                    degree={t('highschool.degree')}
                    institution={`@ ${t('highschool.institution')}`}
                    institutionColor="text-[#BA7517] dark:text-[#FAC775]"
                    period={t('highschool.period')}
                    badge={t('graduated')}
                    badgeColors="bg-[#FAEEDA] dark:bg-[#2a1f0a] text-[#633806] dark:text-[#FAC775] border border-[#FAC775]/20"
                    description={t('highschool.description')}
                    tags={TAGS_HS}
                    tagStyle="text-[#633806] dark:text-[#FAC775] bg-[#FAEEDA] dark:bg-[#2a1f0a] border-[#FAC775]/15"
                  />
                </StaggerItem>
              </StaggerContainer>
            </div>

            <Reveal delay={0.15}>
              <div className="mt-8 pt-6 border-t border-border/40">
                <div className="section-glow-line mb-6" aria-hidden="true" />
                <div className="flex items-center gap-2.5 mb-4">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-accent to-[#8B7CF6] flex items-center justify-center shadow-md">
                    <IconLanguage size={16} className="text-white" aria-hidden="true" />
                  </div>
                  <span className="text-[15px] font-bold">{t('languagesTitle')}</span>
                  <span className="text-[11px] text-fg-tertiary font-mono bg-bg-tertiary px-2 py-0.5 rounded border border-border/50">
                    {t('languagesComment')}
                  </span>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <LanguageCard name={t('spanish')} level={t('spanishLevel')} bars={5} color="accent" />
                  <LanguageCard name={t('english')} level={t('englishLevel')} bars={4} color="success" />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </RevealSection>
    </section>
  );
}

function EducationEntry({
  dotGradient, glowColor, borderColor,
  icon, degree, institution,
  institutionColor = 'text-accent',
  period, description, tags, tagStyle,
  badge, badgeColors,
}: EducationEntryProps) {
  return (
    <div className="relative">
      <div
        className={`absolute -left-[30px] top-[18px] w-5 h-5 rounded-full bg-gradient-to-br ${dotGradient} flex items-center justify-center shadow-[0_0_12px_var(--dot-glow)]`}
        style={{ '--dot-glow': glowColor } as React.CSSProperties}
        aria-hidden="true"
      >
        {icon}
      </div>

      <div className={`bg-bg-tertiary/60 border ${borderColor} rounded-xl p-5 sm:p-6 card-lift transition-all duration-300`}>
        <div className="flex flex-wrap justify-between items-start gap-2 mb-3">
          <div>
            <div className="text-[17px] font-bold tracking-tight">{degree}</div>
            <div className={`text-[13px] font-semibold mt-0.5 ${institutionColor}`}>{institution}</div>
          </div>
          <div className="flex gap-2 items-center flex-wrap">
            {badge && (
              <span className={`text-[10px] ${badgeColors} px-2.5 py-1 rounded-full font-bold`}>{badge}</span>
            )}
            <span className="text-[11px] text-fg-tertiary font-mono bg-bg-primary/60 px-2.5 py-1 rounded-md border border-border/50">
              {period}
            </span>
          </div>
        </div>
        <p className="text-[13px] text-fg-secondary mt-2 leading-[1.7]">{description}</p>
        <div className="flex flex-wrap gap-1.5 mt-4">
          {tags.map((tag) => (
            <span
              key={tag}
              className={`text-[11px] ${tagStyle} border px-2.5 py-0.5 rounded-md font-mono`}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function LanguageCard({
  name, level, bars, color,
}: {
  name: string;
  level: string;
  bars: number;
  color: 'accent' | 'success';
}) {
  const gradient = color === 'accent'
    ? 'from-[#534AB7] to-[#8B7CF6]'
    : 'from-[#1D9E75] to-[#5DCAA5]';

  return (
    <div className="bg-bg-tertiary/70 border border-border/60 rounded-xl p-4 sm:p-5 card-lift hover:border-border-strong transition-all">
      <div className="flex justify-between items-baseline mb-3">
        <span className="text-[14px] font-bold">{name}</span>
        <span className={`text-[11px] font-semibold bg-gradient-to-r ${gradient} bg-clip-text text-transparent font-mono`}>
          {level}
        </span>
      </div>
      <div className="flex gap-1.5">
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className={`flex-1 h-2 rounded-full transition-all ${
              i <= bars ? `bg-gradient-to-r ${gradient} shadow-sm` : 'bg-border'
            }`}
          />
        ))}
      </div>
    </div>
  );
}
