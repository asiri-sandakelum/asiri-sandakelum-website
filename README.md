npm install
npm run build
npm run startnpm install
npm run build
npm run start# Asiri Sandakelum — Engineering Portfolio

A premium, dark-themed engineering portfolio website built with **Next.js 14**, **Tailwind CSS**, and **Framer Motion**.

## ✦ Stack

- **Framework**: Next.js 14 (App Router)
- **Styling**: Tailwind CSS + custom CSS
- **Fonts**: Space Grotesk (display) · DM Sans (body) · JetBrains Mono (code/labels)
- **Animations**: CSS animations (no extra dependencies needed)
- **Icons**: Lucide React
- **Images**: Next.js Image (optimized)

---

## ✦ Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000)

### 3. Build for production

```bash
npm run build
npm start
```

---

## ✦ Project Structure

```
portfolio/
├── app/
│   ├── layout.tsx          # Root layout with fonts, navbar, footer
│   ├── globals.css         # Global styles, CSS variables
│   ├── page.tsx            # Home page
│   ├── projects/
│   │   ├── page.tsx        # Projects listing with filters
│   │   └── [slug]/
│   │       └── page.tsx    # Dynamic project detail pages
│   ├── research/
│   │   └── page.tsx        # Research & IEEE page
│   ├── resume/
│   │   └── page.tsx        # Resume page
│   └── contact/
│       └── page.tsx        # Contact form page
├── components/
│   ├── Navbar.tsx          # Sticky responsive navigation
│   └── Footer.tsx          # Footer
├── data/
│   └── projects.json       # All project data (edit here!)
└── public/
    └── projects/           # Add project images here
        └── [slug]/         # e.g. /public/projects/active-knee-exoskeleton/
```

---

## ✦ Customization Guide

### Adding / Editing Projects

Open `data/projects.json` and add or modify entries:

```json
{
  "slug": "my-new-project",
  "title": "My Project Title",
  "category": "Robotics",
  "tags": ["Tag1", "Tag2"],
  "status": "Ongoing",
  "date": "2025",
  "featured": false,
  "thumbnail": "/projects/my-new-project/thumbnail.jpg",
  "banner": "/projects/my-new-project/banner.jpg",
  "shortDesc": "Short description for cards.",
  "overview": "Full overview paragraph.",
  "problem": "Problem statement.",
  "objectives": ["Objective 1", "Objective 2"],
  "tools": ["SolidWorks", "MATLAB"],
  "highlights": ["Key result 1", "Key result 2"],
  "github": "https://github.com/yourusername/repo",
  "report": "https://link-to-report.pdf"
}
```

### Adding Project Images

1. Create folder: `public/projects/[slug]/`
2. Add images: `thumbnail.jpg`, `banner.jpg`, `render-1.jpg`, etc.
3. Update the `thumbnail` and `banner` fields in `projects.json` to use local paths:
   - `"thumbnail": "/projects/active-knee-exoskeleton/thumbnail.jpg"`

### Enabling CV Download

In `app/resume/page.tsx` and `app/contact/page.tsx`, update the CV download link:

```tsx
// Change:
<a href="#">

// To:
<a href="/asiri-sandakelum-cv.pdf" download>
```

Then place your CV PDF at `public/asiri-sandakelum-cv.pdf`.

### Setting Up Contact Form

The contact form is pre-built. To make it send emails, integrate one of:

- **EmailJS** (client-side, free tier): https://www.emailjs.com
- **Resend** (server action): https://resend.com
- **Formspree** (no-code): https://formspree.io

Example with Formspree — update the form `action` attribute.

---

## ✦ Color System

Edit `app/globals.css` CSS variables:

```css
:root {
  --bg: #080808;          /* Page background */
  --surface: #0f0f0f;     /* Cards */
  --card: #141414;        /* Elevated cards */
  --border: #1e1e1e;      /* Borders */
  --accent: #00e5ff;      /* Cyan accent (all highlights) */
  --text-primary: #f0f0f0;
  --text-secondary: #888888;
  --text-muted: #555555;
}
```

---

## ✦ Deployment

### Vercel (Recommended — Free)

```bash
npm install -g vercel
vercel
```

Or connect your GitHub repo at [vercel.com](https://vercel.com) for automatic deployments.

### Netlify

```bash
npm run build
# Upload the .next folder or connect repo
```

---

## ✦ SEO

- Metadata is set per-page in each `page.tsx` using Next.js `metadata` export
- Project detail pages generate dynamic metadata from `projects.json`
- Update `app/layout.tsx` metadata for global SEO settings

---

## ✦ Contact

**Asiri Sandakelum** · sadakelumasiri@gmail.com  
[LinkedIn](https://www.linkedin.com/in/asiri-sandakelum) · University of Moratuwa
