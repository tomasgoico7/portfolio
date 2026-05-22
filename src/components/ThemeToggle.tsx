'use client';

import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { IconSun, IconMoon } from '@tabler/icons-react';

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  const handleToggle = () => {
    // Add smooth transition class temporarily
    document.documentElement.classList.add('theme-transition');
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
    window.setTimeout(() => {
      document.documentElement.classList.remove('theme-transition');
    }, 300);
  };

  if (!mounted) {
    return <div className="w-[58px] h-[22px]" />;
  }

  const isDark = resolvedTheme === 'dark';

  return (
    <button
      onClick={handleToggle}
      aria-label={isDark ? 'Activar modo claro' : 'Activar modo oscuro'}
      className="flex items-center gap-1.5 group"
    >
      <IconSun
        size={14}
        className={`transition-colors ${isDark ? 'text-fg-tertiary' : 'text-fg-primary'}`}
        aria-hidden="true"
      />
      <span className="relative w-[26px] h-[14px] bg-fg-primary rounded-full">
        <span
          className={`absolute top-[2px] w-[10px] h-[10px] bg-bg-primary rounded-full transition-all duration-300 ease-out ${
            isDark ? 'right-[2px]' : 'left-[2px]'
          }`}
        />
      </span>
      <IconMoon
        size={14}
        className={`transition-colors ${isDark ? 'text-fg-primary' : 'text-fg-tertiary'}`}
        aria-hidden="true"
      />
    </button>
  );
}
