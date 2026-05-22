import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sans)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'monospace'],
        display: ['var(--font-display)', 'serif'],
      },
      colors: {
        bg: {
          primary: 'rgb(var(--bg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--bg-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--bg-tertiary) / <alpha-value>)',
        },
        fg: {
          primary: 'rgb(var(--fg-primary) / <alpha-value>)',
          secondary: 'rgb(var(--fg-secondary) / <alpha-value>)',
          tertiary: 'rgb(var(--fg-tertiary) / <alpha-value>)',
        },
        border: {
          DEFAULT: 'rgb(var(--border) / <alpha-value>)',
          strong: 'rgb(var(--border-strong) / <alpha-value>)',
        },
        accent: {
          DEFAULT: '#534AB7',
          dark: '#3C3489',
          light: '#EEEDFE',
          muted: '#8B7CF6',
        },
        success: {
          DEFAULT: '#1D9E75',
          light: '#5DCAA5',
          muted: '#0c2a23',
        },
        amber: {
          DEFAULT: '#FAC775',
          dark: '#633806',
          muted: '#F59E0B',
        },
        pink: {
          DEFAULT: '#ED93B1',
          dark: '#8B2252',
          muted: '#2a0f1a',
        },
        devops: {
          DEFAULT: '#F0997B',
          dark: '#712B13',
        },
      },
      backgroundImage: {
        'gradient-accent': 'linear-gradient(135deg, #534AB7 0%, #8B7CF6 40%, #ED93B1 75%, #FAC775 100%)',
        'gradient-success': 'linear-gradient(135deg, #1D9E75 0%, #5DCAA5 60%, #97C459 100%)',
      },
      keyframes: {
        'gradient-shift': {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' },
        },
      },
      animation: {
        'gradient-shift': 'gradient-shift 6s ease infinite',
        float: 'float 6s ease-in-out infinite',
      },
      boxShadow: {
        'glow-accent': '0 0 30px rgb(83 74 183 / 0.25), 0 0 60px rgb(83 74 183 / 0.1)',
        'glow-success': '0 0 24px rgb(29 158 117 / 0.25)',
        'glow-pink': '0 0 24px rgb(237 147 177 / 0.25)',
      },
    },
  },
  plugins: [],
};

export default config;
