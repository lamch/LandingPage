---
name: Deep Tech Narrative
colors:
  surface: '#051424'
  surface-dim: '#051424'
  surface-bright: '#2c3a4c'
  surface-container-lowest: '#010f1f'
  surface-container-low: '#0d1c2d'
  surface-container: '#122131'
  surface-container-high: '#1c2b3c'
  surface-container-highest: '#273647'
  on-surface: '#d4e4fa'
  on-surface-variant: '#c6c6cd'
  inverse-surface: '#d4e4fa'
  inverse-on-surface: '#233143'
  outline: '#909097'
  outline-variant: '#45464d'
  surface-tint: '#bec6e0'
  primary: '#bec6e0'
  on-primary: '#283044'
  primary-container: '#0f172a'
  on-primary-container: '#798098'
  inverse-primary: '#565e74'
  secondary: '#5de6ff'
  on-secondary: '#00363e'
  secondary-container: '#00cbe6'
  on-secondary-container: '#00515d'
  tertiary: '#ddb7ff'
  on-tertiary: '#490080'
  tertiary-container: '#270048'
  on-tertiary-container: '#a956f8'
  error: '#ffb4ab'
  on-error: '#690005'
  error-container: '#93000a'
  on-error-container: '#ffdad6'
  primary-fixed: '#dae2fd'
  primary-fixed-dim: '#bec6e0'
  on-primary-fixed: '#131b2e'
  on-primary-fixed-variant: '#3f465c'
  secondary-fixed: '#a2eeff'
  secondary-fixed-dim: '#2fd9f4'
  on-secondary-fixed: '#001f25'
  on-secondary-fixed-variant: '#004e5a'
  tertiary-fixed: '#f0dbff'
  tertiary-fixed-dim: '#ddb7ff'
  on-tertiary-fixed: '#2c0051'
  on-tertiary-fixed-variant: '#6900b3'
  background: '#051424'
  on-background: '#d4e4fa'
  surface-variant: '#273647'
typography:
  headline-xl:
    fontFamily: Plus Jakarta Sans
    fontSize: 64px
    fontWeight: '700'
    lineHeight: '1.1'
    letterSpacing: -0.02em
  headline-xl-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
    letterSpacing: -0.02em
  headline-lg:
    fontFamily: Plus Jakarta Sans
    fontSize: 40px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-lg-mobile:
    fontFamily: Plus Jakarta Sans
    fontSize: 32px
    fontWeight: '700'
    lineHeight: '1.2'
  headline-md:
    fontFamily: Plus Jakarta Sans
    fontSize: 24px
    fontWeight: '600'
    lineHeight: '1.3'
  body-lg:
    fontFamily: Inter
    fontSize: 18px
    fontWeight: '400'
    lineHeight: '1.6'
  body-md:
    fontFamily: Inter
    fontSize: 16px
    fontWeight: '400'
    lineHeight: '1.6'
  label-sm:
    fontFamily: Inter
    fontSize: 14px
    fontWeight: '600'
    lineHeight: '1.4'
    letterSpacing: 0.05em
rounded:
  sm: 0.25rem
  DEFAULT: 0.5rem
  md: 0.75rem
  lg: 1rem
  xl: 1.5rem
  full: 9999px
spacing:
  base: 8px
  container-max: 1280px
  gutter: 24px
  margin-mobile: 20px
  margin-desktop: 48px
---

## Brand & Style

This design system is engineered for a high-end software development agency, emphasizing precision, innovation, and technical superiority. The brand personality is authoritative yet forward-thinking, positioning the agency as a specialized partner for complex engineering and AI solutions.

The design style utilizes **Modern Corporate** infused with **Glassmorphism**. It relies on deep spatial depth, subtle translucency, and high-energy accents to represent the "digital fabric" of modern software. The emotional response should be one of absolute trust in technical competence, evoked through a polished, dark-themed environment that feels both premium and cutting-edge.

## Colors

The palette is anchored in a sophisticated Dark Mode. The primary base is a deep, architectural navy, providing a stable foundation for high-contrast accents.

- **Primary Base (#0F172A):** Used for backgrounds and large structural elements to create a focused, low-strain environment.
- **Electric Cyan (#22D3EE):** The "Logic" accent. Used for primary actions, success states, and indicating core software features.
- **Neon Violet (#A855F7):** The "Intelligence" accent. Reserved for AI-driven features, innovative highlights, and secondary call-to-actions.
- **Surface Tints:** Use semi-transparent overlays of the primary color to create glass effects.
- **Gradients:** Primary interactive elements should use a linear gradient from Electric Cyan to Neon Violet (45-degree angle).

## Typography

The typography strategy balances geometric strength with functional legibility. 

**Plus Jakarta Sans** is used for all headlines to provide a modern, high-tech character. Its open apertures and geometric construction feel optimistic and precise. For larger displays, tighter letter spacing is applied to maintain a cohesive visual block.

**Inter** is the workhorse for all body copy and UI labels. It provides exceptional readability at small sizes and maintains a neutral, professional tone that complements the expressive nature of the headlines.

## Layout & Spacing

The layout follows a **Fluid Grid** system based on an 8px base unit. 

- **Desktop:** 12-column grid with a maximum container width of 1280px. This ensures readability on ultra-wide monitors while keeping content centered and professional.
- **Tablet:** 8-column grid with reduced margins to maximize screen real estate.
- **Mobile:** 4-column grid with a simplified vertical stack.

Spacing between sections should be generous (80px - 120px) to reinforce the premium, high-end feel of the agency. Elements within cards and components should use strict 8px increments to maintain mathematical harmony.

## Elevation & Depth

This design system uses **Glassmorphism** to establish its hierarchy. Depth is not communicated through heavy shadows, but through light and transparency.

1.  **Background:** Solid #0F172A.
2.  **Surface (Cards/Modals):** Background blur (12px - 20px) with a semi-transparent fill (Primary Color at 40% opacity).
3.  **Borders:** Subtle 1px solid outlines using a "Inner Glow" logic—lighter on the top-left and darker on the bottom-right to simulate a light source.
4.  **Shadows:** When used, shadows are highly diffused (30px+ blur) and tinted with the primary navy color to avoid a "dirty" look on dark backgrounds.

## Shapes

The shape language is **Rounded**, reflecting a modern and accessible tech aesthetic. 

While the system avoids the "bubble" look of consumer apps, it uses 0.5rem (8px) as a standard radius for cards and buttons to soften the technical edge. Large containers and hero sections may use `rounded-xl` (1.5rem) to create a distinctive, framed appearance for high-impact content.

## Components

- **Buttons:** Primary buttons use a vibrant 45° gradient from Cyan to Violet. Text is white or high-contrast black depending on the local luminosity. Hover states should include a subtle outer glow (0px 0px 15px) in the accent color.
- **Cards:** Defined by the glassmorphism rules. They must include a 1px border at 10% white opacity. On hover, the border opacity should increase to 30%.
- **Chips/Badges:** Small, pill-shaped elements with a low-opacity Cyan or Violet background and high-saturation text. Used for "Tech Stack" tags or "AI-Powered" labels.
- **Input Fields:** Darker than the background with a 1px Cyan border appearing only on focus. Use Inter for input text to ensure clarity.
- **Lists:** Clean, borderless rows separated by subtle 1px lines (Primary Light 5% opacity). Icons should be monochromatic Cyan.
- **AI-Indicator:** A specialized component—a glowing, pulsing dot or a subtle violet blur behind a specific icon—to denote machine learning or automated features.