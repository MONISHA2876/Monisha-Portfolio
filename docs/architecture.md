# Architecture

## Overview

This portfolio is a single-page experience built with Next.js and focused on cinematic storytelling, polished motion, and simple content structure.

## Tech Stack

- Next.js 16
- React 19
- TypeScript
- Tailwind CSS v4
- Framer Motion
- GSAP
- Lenis
- Lucide React
- tech-stack-icons

## Folder Structure

```text
app/
├── globals.css
├── layout.tsx
├── page.tsx
component/
├── Divider.tsx
├── Header.tsx
├── Scrollstripereveal.tsx
├── ScalableWord.tsx
pages/
├── AboutSection.tsx
├── HeroSection.tsx
├── Skills.tsx
providers/
├── SmoothScroll.tsx
public/
└── resume/
```

## Page Composition

The home page is composed of:
- HeroSection
- Divider
- AboutSection
- Scrollstripereveal
- Skills

All of these are wrapped in the SmoothScroll provider for unified scrolling behavior.

## Content Model

- Content is currently defined directly in the page components.
- There is no dedicated CMS or content layer yet.
- Resume assets live under the public/resume folder.

## Deployment

The site is intended for deployment on Vercel with Next.js support.
For now, local development is driven by Next.js and static assets in the public folder.