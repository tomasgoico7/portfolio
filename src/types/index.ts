import type React from 'react';

export interface StackCardConfig {
  icon: React.ElementType;
  items: string[];
  bg: string;
  border: string;
  iconGradient: string;
  pillBg: string;
  pillText: string;
  pillBorder: string;
  labelColor: string;
  glow: string;
  translationKey: string;
}

export interface ImpactCardConfig {
  Icon: React.ElementType;
  bg: string;
  border: string;
  iconBg: string;
  glow: string;
}

export interface ValueCardProps {
  icon: React.ReactNode;
  iconBg: string;
  title: string;
  text: string;
  bg: string;
  border: string;
  glow: string;
  index: number;
}

export interface StackCardProps {
  icon: React.ReactNode;
  title: string;
  items: string[];
  bg: string;
  border: string;
  iconGradient: string;
  pillBg: string;
  pillText: string;
  pillBorder: string;
  labelColor: string;
  glow: string;
}

export interface TimelineEntryProps {
  dotColor: string;
  dotGradient: string;
  glowColor: string;
  borderColor: string;
  role: string;
  company: string;
  period: string;
  bullets: string[];
  techs: string[];
  techColor: string;
  techBg: string;
  isCurrent?: boolean;
  currentLabel?: string;
}

export interface EducationEntryProps {
  dotGradient: string;
  glowColor: string;
  borderColor: string;
  icon: React.ReactNode;
  degree: string;
  institution: string;
  institutionColor?: string;
  period: string;
  description: string;
  tags: string[];
  tagStyle: string;
  badge?: string;
  badgeColors?: string;
}
