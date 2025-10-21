# Socials 4U - React Component Structure

## Overview
The Socials 4U homepage has been successfully converted from HTML to React components with a clean, modular structure.

## Component Hierarchy

```
App.jsx
└── HomePage.jsx
    ├── Navbar.jsx (from components/layout/)
    └── Hero.jsx (from components/sections/)
```

## Components

### 1. **HomePage** (`src/pages/HomePage.jsx`)
Main page component that assembles the homepage layout.
- Imports and renders Navbar and Hero components
- Serves as the container for the home page

### 2. **Navbar** (`src/components/layout/Navbar.jsx`)
Navigation bar component following the Navbar.md structure guidelines.
- Fixed positioning at top
- Scroll-aware with state management
- Mobile-responsive with toggle menu
- Clean, professional styling matching the Socials 4U brand
- Uses Lora font for logo, consistent typography

### 3. **Hero** (`src/components/sections/Hero.jsx`)
Hero section component based on hero-socials4u-colorful-2.html
- Full-width painterly background with Heading.webp
- Decorative color blocks (orange, yellow, green gradients)
- 3-column grid layout on desktop
- 6 service cards with hover animations
- Center-focused design with Callie Cox branding
- Gradient CTAs and shimmer effects
- Responsive for mobile devices

## Styling

### CSS Classes (in `src/index.css`)
All styles are prefixed with `socials4u-` to avoid conflicts:

**Hero Section:**
- `.socials4u-hero-section` - Main hero container with painterly background
- `.color-block` - Decorative gradient blocks
- `.service-card` - Individual service cards with shimmer animation
- `.image-container` - Center image with rainbow gradient border
- `.cta-button` - Orange gradient call-to-action buttons
- `.heading`, `.subheading`, `.body-text` - Typography classes

**Navbar:**
- `.socials4u-navbar` - Main navbar with glassmorphism effect
- `.socials4u-logo` - Brand logo styling
- `.socials4u-nav-link` - Navigation links with underline animation

## Color Palette
Based on the painterly Heading.webp background:
- **Orange**: #FF8C5A, #F4A89F
- **Yellow**: #F4D160, #E8A65D
- **Green**: #8BA897, #A4C3B2
- **Pink/Burgundy**: #CD6D5D, #A34347
- **Text**: #2C2820 (dark), #5C5347 (body)

## Key Features

1. **Painterly Background** - Reduced overlay opacity (68-65%) to show brush strokes
2. **Animated Shimmer** - Cards have animated top borders on hover
3. **Rainbow Image Border** - Multi-color gradient border on center image
4. **Gradient Buttons** - Orange to burgundy gradient CTAs
5. **Gradient Text** - Subheading uses gradient text effect
6. **Mobile Responsive** - Fully responsive grid layouts
7. **Scroll Animations** - Smooth hover states and transitions

## Development

### Running Locally
```bash
npm run dev
```
Server runs on http://localhost:5173

### Page Navigation
The app includes a development navigation toggle (bottom-right corner):
- **Home** - Shows the Socials 4U homepage
- **Variants** - Shows variant preview page

### File Structure
```
src/
├── App.jsx                      # Main app router
├── index.css                    # Global styles + Socials 4U styles
├── pages/
│   ├── HomePage.jsx            # Socials 4U homepage
│   └── VariantPreview.jsx      # Variants page
├── components/
│   ├── layout/
│   │   ├── Navbar.jsx          # Navigation component
│   │   └── Footer.jsx          # Footer component
│   └── sections/
│       └── Hero.jsx            # Hero section component
```

## Design Decisions

1. **Component Separation** - Each major section is its own component to keep code manageable and reusable
2. **CSS over Inline Styles** - All styles in index.css for better performance and maintainability
3. **Navbar Structure** - Follows Navbar.md guidelines for professional, accessible navigation
4. **Font Loading** - Lora serif font loaded via Google Fonts for headings and logos
5. **State Management** - Minimal useState for navbar scroll state and mobile menu toggle

## Next Steps

To extend this homepage:
1. Add more sections (Services, About, Contact, Footer)
2. Create additional variants for A/B testing
3. Add animations with Framer Motion or GSAP
4. Implement routing with React Router if needed
5. Add form handling for contact section
6. Integrate with CMS or API for dynamic content

## Notes

- Background image path: `/Inpso/Heading.webp` (public folder)
- All unsplash images use CDN with optimization parameters
- Navbar follows professional structure from Navbar.md
- Color blocks add depth without overwhelming content
- Service cards use CSS custom properties for color accents

