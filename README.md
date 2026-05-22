# Portfolio — Tomás Goicoechea

Portfolio personal full stack construido con Next.js 14, Tailwind CSS, Framer Motion y Lenis. Soporta modo claro/oscuro y bilingüe (ES/EN).

## Stack

- **Framework**: Next.js 14 (App Router)
- **Lenguaje**: TypeScript
- **Estilos**: Tailwind CSS con CSS variables para theming
- **Animaciones**: Framer Motion (reveal on scroll + stagger)
- **Smooth scroll**: Lenis
- **i18n**: next-intl (cookie-based, sin rutas /es y /en)
- **Theme**: next-themes
- **Iconos**: Tabler Icons

## Instalación

```bash
# 1. Instalar dependencias
npm install

# 2. Servidor de desarrollo
npm run dev
# → http://localhost:3000

# 3. Build de producción
npm run build
npm start
```

## Estructura

```
src/
├── app/
│   ├── layout.tsx          # Layout raíz + Providers
│   ├── page.tsx            # Página principal (composición de secciones)
│   └── globals.css         # Variables CSS, fuentes, utilidades de animación
├── components/
│   ├── Navbar.tsx          # Nav sticky con tracking de sección activa
│   ├── Hero.tsx            # Hero con typewriter + stickers animados
│   ├── Experience.tsx      # Timeline de experiencia laboral
│   ├── Education.tsx       # Timeline de educación + idiomas
│   ├── Stack.tsx           # Stack técnico (5 categorías incluyendo IA)
│   ├── Contact.tsx         # CTA + métodos de contacto + footer
│   ├── SectionHeader.tsx   # Header reutilizable por sección
│   ├── Reveal.tsx          # Wrappers de animación scroll (fade + stagger)
│   ├── SmoothScroll.tsx    # Provider de Lenis
│   ├── ThemeToggle.tsx     # Toggle sol/luna
│   ├── LocaleToggle.tsx    # Toggle ES/EN
│   └── Providers.tsx       # ThemeProvider + IntlProvider + SmoothScroll
├── i18n/
│   └── request.ts          # Config de next-intl (locale por cookie)
└── messages/
    ├── es.json             # Strings en español
    └── en.json             # Strings en inglés
```

## Personalización rápida

### Editar contenido
Todo el texto vive en `src/messages/es.json` y `src/messages/en.json`. Estructura idéntica entre los dos.

### Cambiar paleta de acento
El violeta `#534AB7` está en `tailwind.config.ts` (clave `accent`). Cambialo ahí y se propaga.

### Agregar/quitar tecnologías
- Stack: arrays `FRONTEND`, `BACKEND`, `DATA`, `DEVOPS`, `AI` al tope de `src/components/Stack.tsx`
- Experiencia: arrays `TECHS_WOOLKA`, `TECHS_CIRCO` al tope de `src/components/Experience.tsx`

### CV descargable
Poné el PDF en `public/cv-tomas-goicoechea.pdf`. El botón ya apunta a esa ruta.

## Animaciones — qué hace qué

- **Lenis** maneja el smooth scroll global. Easing `easeOutExpo` con duración 1.15s. Respeta `prefers-reduced-motion` vía el hook de Framer Motion.
- **Framer Motion** anima las entradas con `whileInView`. Componentes `<Reveal>` y `<StaggerContainer>` + `<StaggerItem>` en `Reveal.tsx`.
- **Easing curve**: `[0.16, 1, 0.3, 1]` (cubic-bezier easeOutExpo). Consistente en todo el sitio.
- **Stickers del hero**: entran con `[0.34, 1.56, 0.64, 1]` (un toque de bounce, sólo ahí).
- **Stagger**: `staggerChildren: 0.1` (100ms entre items) en listas.
- **Reveal threshold**: `margin: -80px` para disparar la animación un poco antes de que el elemento entre por completo en viewport.

## Notas

- El toggle de idioma se persiste en cookie `NEXT_LOCALE` (1 año) y refresca la página vía `router.refresh()`.
- El toggle de tema usa `next-themes` con `attribute="class"`. La transición suave se aplica temporalmente con la clase `theme-transition` para evitar layout shifts.
- El navbar trackea la sección activa con `IntersectionObserver` y se vuelve translúcido con `backdrop-blur` al hacer scroll.

## Despliegue

Recomendado: **Vercel** (zero-config para Next.js).

```bash
# Si tenés la CLI
vercel
```

O conectá el repo en vercel.com y listo.

---

© Tomás Goicoechea
