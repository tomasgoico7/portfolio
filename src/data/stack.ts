import {
  IconBrowser,
  IconServer,
  IconDatabase,
  IconCloud,
  IconRoute,
  IconLayersIntersect,
  IconChartBar,
} from '@tabler/icons-react';
import type { StackCardConfig, ImpactCardConfig } from '@/types';

export const STACK_ITEMS = {
  frontend: ['Angular', 'React', 'Next.js', 'TypeScript', 'Tailwind', 'Bootstrap', 'CSS'],
  backend: ['.NET Core', 'Node.js', 'Spring Boot', 'Python', 'Java'],
  data: ['SQL Server', 'MongoDB'],
  devops: ['Docker', 'Azure', 'AWS', 'Git / GitHub'],
  ai: ['OpenAI API', 'Anthropic Claude', 'LangChain', 'RAG', 'Prompt engineering', 'GitHub Copilot', 'Cursor', 'Vector DBs'],
};

export const STACK_CONFIGS: StackCardConfig[] = [
  {
    icon: IconBrowser,
    items: STACK_ITEMS.frontend,
    bg: 'bg-[#EEEDFE] dark:bg-[#1f1b3f]',
    border: 'border-[#534AB7]/20 dark:border-[#534AB7]/25',
    iconGradient: 'from-[#534AB7] to-[#8B7CF6]',
    pillBg: 'bg-white dark:bg-[#0e0e10]',
    pillText: 'text-[#3C3489] dark:text-[#AFA9EC]',
    pillBorder: 'border-[#534AB7]/15 dark:border-[#534AB7]/20',
    labelColor: 'text-[#3C3489] dark:text-[#AFA9EC]',
    glow: 'hover:shadow-[0_8px_32px_rgb(83,74,183,0.15)]',
    translationKey: 'frontend',
  },
  {
    icon: IconServer,
    items: STACK_ITEMS.backend,
    bg: 'bg-[#E1F5EE] dark:bg-[#0c2a23]',
    border: 'border-[#1D9E75]/20 dark:border-[#1D9E75]/25',
    iconGradient: 'from-[#1D9E75] to-[#5DCAA5]',
    pillBg: 'bg-white dark:bg-[#0e0e10]',
    pillText: 'text-[#085041] dark:text-[#5DCAA5]',
    pillBorder: 'border-[#1D9E75]/15 dark:border-[#1D9E75]/20',
    labelColor: 'text-[#085041] dark:text-[#5DCAA5]',
    glow: 'hover:shadow-[0_8px_32px_rgb(29,158,117,0.15)]',
    translationKey: 'backend',
  },
  {
    icon: IconDatabase,
    items: STACK_ITEMS.data,
    bg: 'bg-[#FAEEDA] dark:bg-[#2a1f0a]',
    border: 'border-[#FAC775]/20 dark:border-[#FAC775]/25',
    iconGradient: 'from-[#F59E0B] to-[#FAC775]',
    pillBg: 'bg-white dark:bg-[#0e0e10]',
    pillText: 'text-[#633806] dark:text-[#FAC775]',
    pillBorder: 'border-[#FAC775]/15 dark:border-[#FAC775]/20',
    labelColor: 'text-[#633806] dark:text-[#FAC775]',
    glow: 'hover:shadow-[0_8px_32px_rgb(250,199,117,0.15)]',
    translationKey: 'databases',
  },
  {
    icon: IconCloud,
    items: STACK_ITEMS.devops,
    bg: 'bg-[#FAECE7] dark:bg-[#2a160e]',
    border: 'border-[#F0997B]/20 dark:border-[#F0997B]/25',
    iconGradient: 'from-[#712B13] to-[#F0997B]',
    pillBg: 'bg-white dark:bg-[#0e0e10]',
    pillText: 'text-[#712B13] dark:text-[#F0997B]',
    pillBorder: 'border-[#F0997B]/15 dark:border-[#F0997B]/20',
    labelColor: 'text-[#712B13] dark:text-[#F0997B]',
    glow: 'hover:shadow-[0_8px_32px_rgb(240,153,123,0.15)]',
    translationKey: 'devops',
  },
];

export const IMPACT_CONFIGS: ImpactCardConfig[] = [
  {
    Icon: IconRoute,
    bg: 'bg-[#EEEDFE] dark:bg-[#1f1b3f]',
    border: 'border-[#534AB7]/20 dark:border-[#534AB7]/30',
    iconBg: 'bg-gradient-to-br from-[#534AB7] to-[#8B7CF6]',
    glow: 'hover:shadow-[0_8px_32px_rgb(83,74,183,0.18)] dark:hover:shadow-[0_8px_32px_rgb(83,74,183,0.3)]',
  },
  {
    Icon: IconLayersIntersect,
    bg: 'bg-[#E1F5EE] dark:bg-[#0c2a23]',
    border: 'border-[#1D9E75]/20 dark:border-[#1D9E75]/30',
    iconBg: 'bg-gradient-to-br from-[#1D9E75] to-[#5DCAA5]',
    glow: 'hover:shadow-[0_8px_32px_rgb(29,158,117,0.18)] dark:hover:shadow-[0_8px_32px_rgb(29,158,117,0.3)]',
  },
  {
    Icon: IconChartBar,
    bg: 'bg-[#FAEEDA] dark:bg-[#2a1f0a]',
    border: 'border-[#FAC775]/20 dark:border-[#FAC775]/30',
    iconBg: 'bg-gradient-to-br from-[#F59E0B] to-[#FAC775]',
    glow: 'hover:shadow-[0_8px_32px_rgb(250,199,117,0.18)] dark:hover:shadow-[0_8px_32px_rgb(250,199,117,0.3)]',
  },
];

export const TECHS = {
  koovra: ['.NET Core', 'AngularJS', 'SQL Server', 'Python'],
  circo: ['Angular', 'React', '.NET', 'Java', 'Python'],
};
