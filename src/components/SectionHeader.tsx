'use client';

import { Reveal } from './Reveal';

interface SectionHeaderProps {
  label: string;
  title: string;
  titleAlt: string;
  subtitle: string;
  terminal: string;
}

export function SectionHeader({ label, title, titleAlt, subtitle, terminal }: SectionHeaderProps) {
  return (
    <>
      <Reveal>
        <div className="flex items-start justify-between mb-2 gap-4">
          <div>
            <div className="inline-flex items-center gap-2 font-mono text-[11px] text-accent font-semibold uppercase tracking-wider mb-3 bg-accent/8 dark:bg-accent/12 px-2.5 py-1 rounded-md border border-accent/20">
              <span className="w-1.5 h-1.5 rounded-full bg-accent inline-block" />
              {label}
            </div>
            <h2 className="text-[30px] sm:text-[36px] font-extrabold tracking-tight leading-[1.1]">
              {title}{' '}
              <span className="text-fg-tertiary font-light">{titleAlt}</span>
            </h2>
          </div>
          <div className="font-mono text-[11px] text-fg-tertiary hidden sm:block shrink-0 mt-1 bg-bg-tertiary px-2 py-1 rounded border border-border/50">
            {terminal}
          </div>
        </div>
      </Reveal>
      <Reveal delay={0.05}>
        <p className="text-[14px] text-fg-secondary mb-7 leading-relaxed max-w-2xl">{subtitle}</p>
      </Reveal>
    </>
  );
}
