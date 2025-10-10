# Conrad Fulbrook Portfolio - Design System

## Design Philosophy

**Aesthetic**: Swiss Modernism meets 1960s-80s warm minimalism
**Inspiration**: Josef Müller-Brockmann, Massimo Vignelli, Wim Crouwel, Dieter Rams, Paul Rand
**Tone**: Confident, laconic, soulful, understated — "spiritually pure and sincere but not heart-on-sleeve"
**Voice**: Editorial narrator presenting the work, not the creator

## Color Palette

- **Background**: `#d3ccc9` - Warm beige (main canvas, evokes quality paper stock)
- **Surface**: `#e8e3e0` - Lighter variant for subtle elevation
- **Surface Dark**: `#c4bdb9` - Darker variant for hero section
- **Text Dark**: `#1a1a1a` - Rich near-black for primary text
- **Gray**: `#5a5a5a` - Warm mid-gray for secondary text
- **Gray Light**: `#8a8a8a` - Lighter gray for tertiary content
- **Gray Dark**: `#3a3a3a` - Darker gray for emphasis
- **Border**: `#b8b0ad` - Subtle borders that complement the beige

## Typography

### Typeface: Neue Haas Grotesk Pro
**Display** (headlines) and **Text** (body) variants

### Scale & Rhythm

**H1 (Name/Major headlines)**
- Font: Neue Haas Grotesk Display Light (300)
- Size: 4rem (mobile) → 5.5rem (tablet) → 7rem (desktop)
- Line-height: 1.1
- Letter-spacing: -0.02em → -0.03em (tighter as it scales)

**H2 (Section headers)**
- Font: Neue Haas Grotesk Display Regular (400)
- Size: 2.5rem → 3.5rem
- Line-height: 1.2
- Letter-spacing: -0.015em → -0.02em

**H3 (Project titles)**
- Font: Neue Haas Grotesk Display Medium (500)
- Size: 1.75rem → 2.25rem (2.25rem = 36px)
- Line-height: 1.3
- Letter-spacing: -0.01em → -0.015em

**Body Text**
- Font: Neue Haas Grotesk Text Regular (400)
- Size: 1.125rem (18px)
- Line-height: 1.7
- Letter-spacing: 0.005em
- Margin-bottom: 1.5rem

**Secondary Text (descriptions, summaries)**
- Font: Neue Haas Grotesk Text Regular (400)
- Size: 1.0625rem (17px)
- Line-height: 1.75
- Letter-spacing: 0.01em

**UI Elements (tags, badges, buttons)**
- Font: Neue Haas Grotesk Text Medium (500)
- Size: 0.8125rem - 0.875rem (13-14px)
- Letter-spacing: 0.05em - 0.1em (generous tracking)
- Uppercase for actions (VIEW CASE STUDY, RESUME, LINKEDIN)

**Role/Subtitle text**
- Font: Neue Haas Grotesk Display/Text Light (300)
- Letter-spacing: 0.05em (generous, elegant)

### Typographic Principles

1. **Negative tracking on large display type** - Creates visual tension
2. **Positive tracking on small UI type** - Improves legibility and elegance
3. **Tight leading on headlines** (1.1-1.3) - Creates impactful blocks
4. **Generous leading on body** (1.7-1.75) - Ensures comfortable reading
5. **Uppercase with generous tracking** for UI elements - Swiss precision

## Layout & Spacing

- **Max content width**: 6xl (1280px) for projects, 5xl (1024px) for hero
- **Vertical rhythm**: 24-unit base (space-y-24 between projects)
- **Component spacing**: 6-unit base (space-y-6 within project cards)
- **Hero padding**: py-32 (mobile) → py-40 (tablet+)
- **Section padding**: py-16

## Interactive Elements

### Links
- **Color**: text-dark → text-gray on hover
- **Underline**: border-b border-dark → border-gray on hover
- **Transition**: 300ms
- **Style**: Subtle, confident, no flashy effects

### Buttons/CTAs
- **Style**: Text links with underlines, not filled buttons
- **Uppercase**: For primary actions
- **Tracking**: 0.08em - 0.1em

### Tags
- **Style**: Border outline, not filled
- **Color**: text-gray border-gray
- **Padding**: px-3 py-1
- **Size**: 0.8125rem with 0.05em tracking

## Visual Elements

### Images
- **Treatment**: Full width, no cropping (h-auto)
- **Shape**: Squircles via JavaScript (superellipse, n=24, 1200x800 proportions)
- **Shadow**: drop-shadow(0 20px 30px rgb(0 0 0 / 0.25)) via filter on container
- **Spacing**: mb-8 below images

### Badges
- **Coming Soon**: Inline with title, gray border, uppercase, 0.08em tracking
- **Position**: Outside images, integrated with content

## Page Structure

### Homepage
- **No navigation bar** - Portfolio link only in header
- **Hero**: Centered, name + role + experience + resume link
- **Projects**: Single column, generous spacing (space-y-24)
- **Footer**: Horizontal layout, copyright left, links right

### Project Pages
- **Navigation**: Back/Previous/Next, not "Portfolio"
- **Content**: Apply same typography system
- **Consistency**: Maintain warm beige background throughout

## Tone of Voice

### Do
- Be laconic and succinct
- Let the work speak for itself
- Use understated confidence
- Write like an editorial narrator
- Keep it "cool" - Miles Davis, not marketing speak

### Don't
- Use marketing hyperbole ("Let's work together!", "I'd love to hear...")
- Over-explain or be verbose
- Use emojis or casual language
- Compete with the work visually
- Be "heart on sleeve"

## Technical Notes

- Squircles implemented via JavaScript superellipse formula
- Font files: Neue Haas Grotesk Pro (Display + Text)
- Drop shadows via CSS filter (works with masks)
- All tracking/spacing in ems for scalability
- Responsive breakpoints: 768px (md), 1280px (xl)

---

**Last updated**: October 2025
**Status**: Stable, ready to apply system-wide

