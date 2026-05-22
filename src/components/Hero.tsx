'use client';

import { useTranslations, useLocale } from 'next-intl';
import { motion } from 'framer-motion';
import {
  IconDownload,
  IconMessageCircle,
  IconTargetArrow,
} from '@tabler/icons-react';

export function Hero() {
  const t = useTranslations('hero');
  const locale = useLocale();

  const fadeUp = {
    hidden: { opacity: 0, y: 32 },
    visible: (i: number = 0) => ({
      opacity: 1,
      y: 0,
      transition: { delay: 0.1 + i * 0.09, duration: 0.8, ease: [0.16, 1, 0.3, 1] as [number, number, number, number] },
    }),
  };

  return (
    <section id="home" className="max-w-6xl mx-auto px-5 pt-8 pb-12">
      <div className="relative rounded-2xl overflow-hidden border border-border/60 bg-bg-primary">

        {/* ── Fondo dramático ── */}
        <div className="absolute inset-0 hero-glow pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-grid opacity-30 pointer-events-none" aria-hidden="true" />
        <div className="absolute inset-0 bg-noise pointer-events-none" aria-hidden="true" />

        {/* ── Orbs flotantes ── */}
        <div
          className="orb absolute -top-32 -left-20 w-[420px] h-[420px] bg-[#534AB7] opacity-[0.06] dark:opacity-[0.12]"
          style={{ animationDelay: '0s' }}
          aria-hidden="true"
        />
        <div
          className="orb absolute -bottom-20 right-10 w-[300px] h-[300px] bg-[#1D9E75] opacity-[0.07] dark:opacity-[0.1]"
          style={{ animationDelay: '3s' }}
          aria-hidden="true"
        />
        <div
          className="orb absolute top-1/2 right-1/3 w-[200px] h-[200px] bg-[#ED93B1] opacity-[0.05] dark:opacity-[0.08]"
          style={{ animationDelay: '5s' }}
          aria-hidden="true"
        />

        <div className="relative px-7 pt-12 pb-10 sm:px-12 sm:pt-14 sm:pb-12">
          <div className="relative grid grid-cols-1 md:grid-cols-[1fr_260px] gap-10 items-center">

            {/* ── COLUMNA IZQUIERDA ── */}
            <div>
              {/* Kicker mono */}
              <motion.div
                initial="hidden" animate="visible" custom={1} variants={fadeUp}
                className="font-mono text-[13px] text-accent/70 mb-3 flex items-center gap-2"
              >
                <span className="inline-block w-8 h-px bg-accent/40" />
                {t('constStart')}
              </motion.div>

              {/* ── NOMBRE GIGANTE ── */}
              <motion.h1
                initial="hidden" animate="visible" custom={2} variants={fadeUp}
                className="text-[52px] sm:text-[68px] lg:text-[76px] leading-[0.95] font-extrabold tracking-tight mb-3"
              >
                <span className="block text-fg-primary">Tomás</span>
                <span className="block gradient-text">Goicoechea</span>
              </motion.h1>

              {/* Role typewriter */}
              <motion.div
                initial="hidden" animate="visible" custom={3} variants={fadeUp}
                className="flex items-baseline gap-2 mt-3 mb-5 font-mono text-[14px]"
              >
                <span className="text-fg-tertiary">{t('role')}</span>
                <span className="text-accent font-medium">&ldquo;{t('roleValue')}&rdquo;</span>
                <span className="caret" aria-hidden="true" />
              </motion.div>

              {/* Descripción */}
              <motion.p
                initial="hidden" animate="visible" custom={4} variants={fadeUp}
                className="text-[15px] text-fg-secondary mb-5 max-w-xl leading-relaxed"
              >
                {t('intro')}
                <br />
                {t('introLine2')}
              </motion.p>

              {/* Closing mono */}
              <motion.div
                initial="hidden" animate="visible" custom={5} variants={fadeUp}
                className="font-mono text-[13px] text-accent/70 mb-7 flex items-center gap-2"
              >
                <span className="inline-block w-8 h-px bg-accent/40" />
                {t('constEnd')}
              </motion.div>

              {/* CTAs */}
              <motion.div
                initial="hidden" animate="visible" custom={6} variants={fadeUp}
                className="flex flex-wrap gap-3"
              >
                <a
                  href="#impact"
                  className="relative group bg-accent text-white px-5 py-3 rounded-lg text-[13px] font-semibold flex items-center gap-2 hover:bg-accent/90 active:scale-[0.97] transition-all glow-accent-sm overflow-hidden"
                >
                  <span className="absolute inset-0 shine opacity-0 group-hover:opacity-100 transition-opacity duration-500" aria-hidden="true" />
                  <IconTargetArrow size={15} aria-hidden="true" />
                  {t('ctaPrimary')}
                </a>
                <a
                  href={`/Tomas_Goicoechea_CV_${locale.toUpperCase()}.pdf`}
                  download
                  className="bg-transparent text-fg-primary border border-border-strong px-5 py-3 rounded-lg text-[13px] font-medium flex items-center gap-2 hover:bg-bg-tertiary hover:border-accent/40 active:scale-[0.97] transition-all"
                >
                  <IconDownload size={15} aria-hidden="true" />
                  {t('ctaCv')}
                </a>
                <a
                  href="#contact"
                  className="bg-transparent text-fg-primary border border-border-strong px-5 py-3 rounded-lg text-[13px] font-medium flex items-center gap-2 hover:bg-bg-tertiary hover:border-accent/40 active:scale-[0.97] transition-all"
                >
                  <IconMessageCircle size={15} aria-hidden="true" />
                  {t('ctaCoffee')}
                </a>
              </motion.div>
            </div>

            {/* ── COLUMNA DERECHA — Cards flotantes ── */}
            <div className="relative h-[300px] hidden md:block">

              {/* Card terminal */}
              <motion.div
                initial="hidden" animate="visible" custom={7} variants={fadeUp}
                className="absolute right-0 top-0 w-[240px] rounded-xl overflow-hidden shadow-[0_24px_64px_rgb(0,0,0,0.18)] dark:shadow-[0_24px_64px_rgb(0,0,0,0.4)]"
                style={{ willChange: 'transform' }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                {/* Header barra de terminal */}
                <div className="bg-[#1a1a2e] px-3 py-2 flex items-center gap-1.5">
                  <span className="w-2.5 h-2.5 rounded-full bg-[#ED93B1]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#FAC775]" />
                  <span className="w-2.5 h-2.5 rounded-full bg-[#97C459]" />
                  <span className="ml-auto font-mono text-[10px] text-white/30">profile.ts</span>
                </div>
                {/* Cuerpo */}
                <div className="bg-[#0f0f1a] p-4 font-mono text-[11px] leading-[1.9]">
                  <div className="text-[#534AB7]">{'const'} <span className="text-[#8B7CF6]">engineer</span> <span className="text-white/40">= {'{'}</span></div>
                  <div className="pl-4">
                    <TerminalLine key_="stack" value='"full-stack"' color="text-[#97C459]" />
                    <TerminalLine key_="focus" value='"product"' color="text-[#FAC775]" />
                    <TerminalLine key_="ai" value="true" color="text-[#ED93B1]" />
                    <TerminalLine key_="years" value="5" color="text-[#5DCAA5]" />
                  </div>
                  <div className="text-white/40">{'}'}</div>
                  <div className="mt-2 flex items-center gap-1.5 text-[#97C459]">
                    <span className="opacity-60">▶</span>
                    <span className="opacity-80">ready</span>
                    <span className="inline-block w-1.5 h-3.5 bg-[#534AB7] animate-pulse ml-0.5" />
                  </div>
                </div>
              </motion.div>

              {/* Card pipeline */}
              <motion.div
                initial="hidden" animate="visible" custom={8} variants={fadeUp}
                className="absolute bottom-0 left-0 w-[196px] rounded-xl overflow-hidden shadow-[0_16px_48px_rgb(83,74,183,0.25)] dark:shadow-[0_16px_48px_rgb(83,74,183,0.4)]"
                style={{ willChange: 'transform' }}
                whileHover={{ y: -5, transition: { duration: 0.3 } }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#2C2870] via-[#534AB7] to-[#1D6B54]" />
                <div className="absolute inset-0 bg-noise opacity-20" />
                <div className="h-px animated-gradient w-full absolute top-0 left-0" />
                <div className="relative p-4">
                  <div className="font-mono text-[9px] text-white/40 uppercase tracking-wider mb-3">skill.profile</div>
                  <div className="space-y-2.5">
                    <SkillBar label="Frontend" pct={90} color="from-[#534AB7] to-[#8B7CF6]" />
                    <SkillBar label="Backend" pct={85} color="from-[#1D9E75] to-[#5DCAA5]" />
                    <SkillBar label="AI / LLMs" pct={75} color="from-[#ED93B1] to-[#FAC775]" />
                    <SkillBar label="DevOps" pct={65} color="from-[#F59E0B] to-[#FAC775]" />
                  </div>
                </div>
              </motion.div>

            </div>
          </div>

          {/* ── STATS ── */}
          <motion.div
            initial="hidden" animate="visible" custom={8} variants={fadeUp}
            className="relative mt-10 pt-6 border-t border-border/50"
          >
            <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-px w-48 h-px bg-gradient-to-r from-transparent via-accent/50 to-transparent" aria-hidden="true" />
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
              <Stat value="5+" label={t('statYears')} color="accent" />
              <Stat value="360°" label={t('statScope')} color="accent" />
              <Stat value="2" label={t('statLanguages')} color="success" />
              <Stat value="12+" label={t('statTech')} color="pink" />
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

function TerminalLine({ key_, value, color }: { key_: string; value: string; color: string }) {
  return (
    <div>
      <span className="text-white/35">{key_}</span>
      <span className="text-white/35">: </span>
      <span className={color}>{value}</span>
      <span className="text-white/25">,</span>
    </div>
  );
}

function SkillBar({ label, pct, color }: { label: string; pct: number; color: string }) {
  return (
    <div>
      <div className="flex justify-between items-center mb-1">
        <span className="font-mono text-[9px] text-white/50">{label}</span>
        <span className="font-mono text-[9px] text-white/30">{pct}%</span>
      </div>
      <div className="h-1 rounded-full bg-white/10 overflow-hidden">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${color}`}
          style={{ width: `${pct}%` }}
        />
      </div>
    </div>
  );
}

function Stat({ value, label, color }: { value: string; label: string; color: 'accent' | 'success' | 'pink' }) {
  const gradient =
    color === 'accent'
      ? 'from-[#534AB7] to-[#8B7CF6]'
      : color === 'success'
      ? 'from-[#1D9E75] to-[#5DCAA5]'
      : 'from-[#ED93B1] to-[#FAC775]';

  return (
    <div className="group">
      <div className={`stat-number bg-gradient-to-r ${gradient} bg-clip-text text-transparent`}>{value}</div>
      <div className="text-[11px] text-fg-tertiary uppercase tracking-wider mt-1 font-mono">{label}</div>
    </div>
  );
}
