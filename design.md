# Design & Branding Guidelines

This document outlines the visual language, design tokens, and UI patterns used in the portfolio project.

## 1. Core Identity
The design aesthetic is **futuristic, minimalist, and high-contrast**, focusing on "Digital Product" and "Visual Language". It leverages dark mode, heavy typography, and subtle motion to create a premium feel.

- **Theme**: Dark Mode (Default)
- **Vibe**: Tech-forward, Swiss Grid, Glassmorphism
- **Motion**: Smooth, slow transitions (500ms-700ms)

## 2. Typography
**Primary Font**: `Plus Jakarta Sans` (Google Fonts)

| Style | Classes | Usage |
| :--- | :--- | :--- |
| **Display Heading** | `text-7xl` to `text-[140px]`, `font-black`, `uppercase`, `tracking-tighter`, `leading-[0.85]` | Hero section, Section titles |
| **Section Label** | `text-[10px]`, `font-bold`, `uppercase`, `tracking-[0.3em]` | Small tags, Category labels |
| **Body Copy** | `text-xl`, `font-medium`, `leading-relaxed` | Descriptions, Bio |
| **Heading 2** | `text-4xl`, `font-extrabold`, `uppercase` | Card titles |

**Special Effects**:
- **Hollow Text**: `.text-outline` (Webkit text stroke with transparent fill)

## 3. Color Palette

### Primary Colors
- **Background**: `#050505` (Deep Black)
- **Surface**: `#111111` (Card Background)
- **Foreground**: `#FFFFFF` (White)

### Accent Colors
- **Primary Accent**: `#FF5C00` (Sunset Orange) - Used for buttons, active states, hovers.
- **Secondary**: `#00D1FF` (Cyan), `#C9FF4D` (Lime) - Used for project branding tags.

### Grayscale
- **Muted Text**: `text-neutral-400`, `text-neutral-500`
- **Borders**: `border-white/10`, `border-white/5`

### Glassmorphism
- **Class**: `.glass`
- **Properties**: `background: rgba(255, 255, 255, 0.03)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255, 255, 255, 0.05)`

## 4. UI Patterns & Components

### Layout & Spacing
- **Container**: `max-w-[1400px]`, `mx-auto`
- **Spacing**: Heavy usage of whitespace (`gap-8`, `gap-16`, `mb-24`).
- **Border Radius**:
    - Cards/Sections: `rounded-[3rem]` (Very round)
    - Buttons/Tags: `rounded-full`

### Interactive Elements
- **Buttons**: Rounded-full, high contrast (Black on White or White on Accent).
- **Cards**:
    - Default: Grayscale images, dark background.
    - Hover: `scale-105`, `grayscale-0` (Color reveal), border glow.
- **Navbar**: Floating "Glass Pill" sticky header with active state glow indicators.

### Animation Details
- **Marquee**: Infinite scrolling text in background (`opacity-[0.03]`).
- **Transitions**: `duration-500` and `duration-700` for smooth feel.
- **Hover Micro-interactions**: Arrow icons move (`translate-x-1`), glow effects.

## 5. Setup & Usage
- **Tailwind**: Loaded via CDN (Note: For production, consider moving to build-time Tailwind).
- **Icons**: `lucide-react` library.
- **Global CSS**: Defined in `index.html` (Variables, Scrollbar, Fonts).
