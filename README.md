# AJ Manganyi — Portfolio Website

A professional, dark-themed portfolio website for **AJ Manganyi**, Creative Developer & Designer based in South Africa. Built with vanilla HTML, CSS, and JavaScript — zero frameworks, fully static, and ready to host on **GitHub Pages**.

---

## 🌐 Live Site

> **https://respectaj.github.io/Portfolio/**

---

## 📁 Folder Structure

```
Portfolio/
│
├── index.html                  # Main single-page site (Home, About, Services, Portfolio, Freelance, Contact)
│
├── pages/
│   ├── about.html              # Dedicated About Me page
│   └── portfolio.html          # Full portfolio / all projects page
│
├── css/
│   └── style.css               # All styles — variables, layout, components, responsive
│
├── js/
│   └── main.js                 # All JS — nav, animations, forms, chat widget, preview modal
│
├── assets/
│   ├── images/                 # Replace placeholder images with real photos here
│   │   └── (place your images here)
│   └── AJ_Manganyi_CV.pdf      # Your downloadable CV/resume
│
├── .gitignore                  # Ignores OS files, editor configs
├── README.md                   # This file
└── CHANGELOG.md                # Version history
```

---

## 🚀 Features

| Feature | Details |
|---|---|
| **Responsive Design** | Mobile-first, tested across all screen sizes |
| **Dark Luxury Theme** | Gold accents, Playfair Display + DM Sans typography |
| **Portfolio Filter** | Filter projects by category (Web, Design, Branding, E-Commerce) |
| **Contact Form** | EmailJS integration → sends to ajaymanganyi@gmail.com |
| **Freelance Section** | Dedicated CTA with enquiry modal |
| **Chat Widget** | Collects name/email/phone → sends email lead |
| **WhatsApp Button** | Opens WhatsApp Web on desktop, WhatsApp app on mobile |
| **Screen Size Previewer** | Footer toggle: Desktop / Laptop / Tablet / Mobile preview |
| **Scroll Animations** | Fade-up reveals on scroll using IntersectionObserver |
| **Skill Bar Animations** | Animated bars that trigger on scroll |
| **Typing Effect** | Animated hero typewriter |
| **Toast Notifications** | Success/error toasts for form submissions |

---

## ⚙️ Setup & Configuration

### 1. Clone the repository
```bash
git clone https://github.com/respectaj/Portfolio.git
cd Portfolio
```

### 2. Configure your details in `js/main.js`

Open `js/main.js` and update the `CONFIG` object at the top:

```js
const CONFIG = {
  email: 'ajaymanganyi@gmail.com',       // ✅ Already set
  whatsappNumber: '27821234567',          // ⚠️  Replace with your real WhatsApp number (country code, no +)
  name: 'AJ Manganyi',                   // ✅ Already set
  emailjsServiceId: 'service_xxxx',      // ⚠️  From EmailJS dashboard
  emailjsTemplateId: 'template_xxxx',    // ⚠️  From EmailJS dashboard
  emailjsPublicKey: 'xxxxxxxxxxxx',      // ⚠️  From EmailJS dashboard
};
```

### 3. Set up EmailJS (Free)

1. Go to **[emailjs.com](https://www.emailjs.com/)** and create a free account
2. Add an **Email Service** (Gmail recommended) → copy `Service ID`
3. Create an **Email Template** with these variables:
   - `{{from_name}}` — sender name
   - `{{from_email}}` — sender email
   - `{{subject}}` — subject
   - `{{message}}` — message body
4. Copy your `Template ID` and `Public Key`
5. Paste all three values into `js/main.js` CONFIG

> **Without EmailJS configured**, forms will fall back to `mailto:` links which open the user's email client.

### 4. Replace Placeholder Images

All images currently use Unsplash placeholder URLs. Replace them with your real photos:

- **Hero portrait** → `index.html` (search `hero-image-wrap`)
- **About photo** → `index.html` (search `about-img-wrap`)
- **Portfolio screenshots** → `index.html` portfolio grid items
- **Chat widget avatar** → `index.html` (search `chat-avatar`)
- Place your image files in `assets/images/` and update `src` attributes

### 5. Add Your CV

Place your CV PDF at: `assets/AJ_Manganyi_CV.pdf`

---

## 🌍 Deploying to GitHub Pages

1. Push to the `main` branch of your repository
2. Go to **Settings → Pages**
3. Set **Source** to `Deploy from a branch` → `main` → `/ (root)`
4. Your site will be live at `https://YOUR_USERNAME.github.io/REPO_NAME/`

---

## 📋 Version Control Guide

### Branching Strategy

```
main          → Production (live site)
develop       → Active development
feature/*     → New features (e.g. feature/dark-mode)
fix/*         → Bug fixes (e.g. fix/mobile-nav)
```

### Commit Message Convention

Follow **Conventional Commits**:

```
feat: add WhatsApp float button
fix: correct mobile nav z-index
style: update footer layout spacing
content: replace placeholder portfolio images
docs: update README setup instructions
chore: add .gitignore
```

### Example Workflow

```bash
# Start a new feature
git checkout -b feature/blog-section

# Work, then commit
git add .
git commit -m "feat: add blog section with card grid"

# Merge to develop, then main when ready
git checkout main
git merge feature/blog-section
git push origin main
```

---

## 📦 Dependencies

| Dependency | Version | CDN |
|---|---|---|
| Font Awesome | 6.5.0 | cdnjs.cloudflare.com |
| Google Fonts | Playfair Display, DM Sans, DM Mono | fonts.googleapis.com |
| EmailJS | 4.x | jsdelivr.net |

No npm packages required. No build step needed.

---

## 📱 Browser Support

| Browser | Support |
|---|---|
| Chrome 90+ | ✅ Full |
| Firefox 88+ | ✅ Full |
| Safari 14+ | ✅ Full |
| Edge 90+ | ✅ Full |
| IE 11 | ❌ Not supported |

---

## 📞 Contact

**AJ Manganyi**
- 📧 ajaymanganyi@gmail.com
- 🌐 https://respectaj.github.io/Portfolio/
- 💼 Available for freelance projects

---

## 📄 License

This project is the personal portfolio of AJ Manganyi. All design, code, and content are copyright © 2025 AJ Manganyi. Not licensed for redistribution.

---

*Built with ❤️ in South Africa*
