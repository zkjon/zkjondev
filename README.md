# 🚀 Jon Imanol Ruiz Hermoso - Portfolio

[![TypeScript](https://img.shields.io/badge/TypeScript-5.9.2-blue)](https://www.typescriptlang.org/)
[![Next.js](https://img.shields.io/badge/Next.js-15.5.0-black)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-19.1.1-blue)](https://reactjs.org/)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-4.1.12-38bdf8)](https://tailwindcss.com/)
[![GSAP](https://img.shields.io/badge/GSAP-3.13.0-green)](https://gsap.com/)

Portfolio profesional desarrollado con las últimas tecnologías web, presentando mis habilidades como desarrollador full-stack con animaciones avanzadas y soporte multiidioma.

## ✨ Características Principales

- **🌍 Multiidioma**: Soporte completo para español e inglés con detección automática
- **🎨 Animaciones GSAP**: Transiciones fluidas y efectos visuales profesionales
- **📱 Diseño Responsive**: Optimizado para todos los dispositivos y tamaños de pantalla
- **⚡ Next.js 15**: Última versión con App Router y Turbopack para máximo rendimiento
- **🎯 SEO Optimizado**: Meta tags dinámicos y estructura semántica perfecta
- **🔧 TypeScript**: Código type-safe y mantenible
- **🎪 Iconos de Marca**: Integración con simple-icons para branding auténtico

## 🛠️ Stack Tecnológico

### Frontend
- **Next.js 15.5.0** - Framework React con SSR/SSG
- **React 19.1.1** - Biblioteca de interfaces de usuario
- **TypeScript 5.9.2** - Superset tipado de JavaScript
- **Tailwind CSS v4.1.12** - Framework de CSS utility-first

### Animaciones & UX
- **GSAP 3.13.0** - Animaciones de alto rendimiento
- **ScrollTrigger** - Animaciones basadas en scroll
- **Framer Motion** - Transiciones y gestos

### Iconografía
- **simple-icons 15.11.0** - Iconos SVG de marcas
- **React Icons** - Biblioteca de iconos React
- **Lucide React** - Iconos modernos y elegantes

### Herramientas de Desarrollo
- **Bun** - Runtime y gestor de paquetes ultra-rápido
- **ESLint** - Linter para código consistente
- **PostCSS** - Procesador de CSS

## 🚀 Inicio Rápido

```bash
# Clonar el repositorio
git clone https://github.com/zkjon/zkjondev.git
cd zkjondev

# Instalar dependencias
bun install

# Ejecutar en modo desarrollo
bun dev

# Abrir en el navegador
# http://localhost:3000
```

## 📁 Estructura del Proyecto

```
zkjondev/
├── app/
│   ├── [locale]/
│   │   ├── layout.tsx          # Layout principal con metadata
│   │   └── page.tsx            # Página de inicio
│   └── globals.css             # Estilos globales
├── components/
│   ├── Header.tsx              # Hero section con animaciones
│   ├── TechSlider.tsx          # Slider de tecnologías
│   ├── Projects.tsx            # Showcase de proyectos
│   ├── TechIcon.tsx            # Componente de iconos
│   └── LanguageSelector.tsx    # Selector de idioma
├── lib/
│   └── getDictionary.ts        # Sistema de traducciones
├── middleware.ts               # Routing multiidioma
└── tailwind.config.ts          # Configuración de Tailwind
```

## 🌐 Funcionalidades

### Navegación Multiidioma
- Detección automática del idioma del navegador
- URLs limpias: `/es/` y `/en/`
- Metadata dinámica por idioma
- Selector de idioma interactivo

### Animaciones Avanzadas
- **GSAP Timeline**: Animaciones secuenciales en el hero
- **ScrollTrigger**: Efectos activados por scroll
- **Slider Infinito**: Tecnologías en movimiento continuo
- **Hover Effects**: Interacciones micro-animadas

### Componentes Destacados
- **Header**: Presentación personal con enlaces sociales
- **TechSlider**: Showcase animado de tecnologías
- **Projects**: Portfolio de proyectos con animaciones
- **LanguageSelector**: Cambio fluido entre idiomas

## 🎨 Paleta de Colores

```css
/* Tema Principal */
--background: #0a0a0a;
--foreground: #ffffff;
--primary: #3b82f6;
--accent: #10b981;

/* Gradientes */
background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
```

## 📱 Responsive Design

- **Mobile First**: Diseño optimizado para móviles
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Touch Friendly**: Elementos táctiles de tamaño adecuado
- **Performance**: Optimizado para conexiones lentas

## 🚀 Scripts Disponibles

```bash
# Desarrollo
bun dev              # Servidor de desarrollo
bun build            # Build de producción
bun start            # Servidor de producción
bun lint             # Linting del código

# Análisis
bun analyze          # Análisis del bundle
```

## 📄 Licencia

**All Rights Reserved** - Este código es propiedad exclusiva de Jon Imanol Ruiz Hermoso. 
Consulta el archivo [LICENSE](./LICENSE) para más detalles sobre los términos de uso.

## 📧 Contacto

- **Email**: [fovusyts@gmail.com](mailto:fovusyts@gmail.com)
- **GitHub**: [@zkjon](https://github.com/zkjon)
- **LinkedIn**: [zkjon](https://www.linkedin.com/in/zkjon/)
- **Twitter**: [@zkjondev](https://x.com/zkjondev)

---

<p align="center">
  <strong>Hecho con ❤️ por Jon Imanol Ruiz Hermoso</strong><br>
  <em>Desarrollador Full-Stack especializado en Astro & Next.js</em>
</p>
