# Redesign Core Technologies Section

## Context

I have a portfolio built with React + Next.js + CSS.

The current "Core Technologies" section contains four cards:

* Backend
* Database
* DevOps
* Frontend

Currently, every card shows all technologies immediately.

I want to redesign this section completely to create a more modern, premium, and interactive experience.

---

# New Design Requirements

## Initial State (Collapsed)

When the page loads:

* All categories should appear in a compact state.
* Only show:

  * Category icon
  * Category name
  * Number of technologies

Example:

```text
┌───────────────────┐
│ ⚙ Backend         │
│ 5 Technologies    │
└───────────────────┘
```

```text
┌───────────────────┐
│ 🗄 Database        │
│ 4 Technologies    │
└───────────────────┘
```

---

## Expanded State

When the user hovers a category:

* The card expands smoothly.
* Technologies become visible.
* Each technology should display:

  * Icon
  * Name

Example:

```text
┌──────────────────────────┐
│ ⚙ Backend                │
│                          │
│ 🐹 Go                    │
│ ⬢ NestJS                 │
│ 🟢 Node.js               │
│ ☕ Spring Boot           │
│ 🐍 Django / Flask       │
└──────────────────────────┘
```

---

# Open / Close Behavior

Only ONE category can remain open at a time.

Expected behavior:

Hover Backend

→ Backend opens.

Hover Database

→ Backend closes.
→ Database opens.

Hover DevOps

→ Database closes.
→ DevOps opens.

---

# Persistence

Once a card is opened:

* It should remain open.
* It should NOT instantly close when the cursor leaves.

A card should only close when:

* Another card is opened.

This creates a more premium and stable interaction.

---

# Animation Requirements

The opening animation should be inspired by iOS UI interactions.

Visual references:

* Apple Wallet cards
* Apple Settings transitions
* Apple Music expandable sections
* iOS Control Center

Animation characteristics:

* Smooth
* Elegant
* Responsive
* Premium feeling

Use a combination of:

* max-height
* opacity
* scale
* transform

Suggested transition:

```css
transition:
  max-height 0.45s cubic-bezier(0.22, 1, 0.36, 1),
  transform 0.45s cubic-bezier(0.22, 1, 0.36, 1),
  opacity 0.35s ease;
```

Expanded card should:

```css
transform: scale(1.02);
box-shadow: 0 20px 60px rgba(0, 0, 0, 0.25);
```

Collapsed card should:

```css
transform: scale(1);
```

---

# Technology Icons

Use React Icons.

Install:

```bash
npm install react-icons
```

Example imports:

```tsx
import {
  SiGo,
  SiNestjs,
  SiPostgresql,
  SiPrisma,
  SiMongodb,
  SiRedis,
  SiDocker,
  SiReact,
  SiTypescript,
  SiSpringboot,
  SiDjango,
  SiFlask,
  SiLinux,
  SiGit,
} from "react-icons/si";
```

Each technology should display:

```text
🐹 Go
⬢ NestJS
🐳 Docker
⚛ React
🗄 PostgreSQL
```

---

# Layout

## Desktop

Use a 2x2 grid.

```text
┌────────────┐ ┌────────────┐
│ Backend    │ │ Database   │
└────────────┘ └────────────┘

┌────────────┐ ┌────────────┐
│ DevOps     │ │ Frontend   │
└────────────┘ └────────────┘
```

---

## Mobile

Cards should stack vertically.

```text
┌────────────┐
│ Backend    │
└────────────┘

┌────────────┐
│ Database   │
└────────────┘
```

---

# Visual Style

Replace the current large colored cards with compact premium panels.

The collapsed state should have a height around:

```css
height: 80px;
```

The expanded state should grow to approximately:

```css
height: 260px;
```

Use subtle glassmorphism-inspired styling:

```css
background: rgba(255,255,255,0.04);
backdrop-filter: blur(10px);
border: 1px solid rgba(255,255,255,0.08);
```

Keep category colors:

* Backend → Blue
* Database → Green
* DevOps → Orange
* Frontend → Purple

But use them only as accent colors, not as full backgrounds.

---

# Final Goal

Create a section that feels:

* Modern
* Interactive
* Premium
* Similar to Apple's design language
* Smooth and polished
* Appropriate for a professional software engineer portfolio

Focus heavily on UX, animations, responsiveness, and visual hierarchy.
