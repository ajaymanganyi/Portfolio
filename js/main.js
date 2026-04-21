/* ═══════════════════════════════════════════════════════════
   main.js — AJay Manganyi Portfolio
   Handles: navbar scroll, mobile nav, fade-up animations,
            skill bars, portfolio filter, preview modal,
            chat widget, WhatsApp button, contact/forms
   ═══════════════════════════════════════════════════════════ */

/* ── 1. Navbar scroll effect ─────────────────────────────── */
const nav = document.getElementById('nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 50);
  }, { passive: true });
}

/* ── 2. Mobile nav ───────────────────────────────────────── */
const hamburger  = document.getElementById('hamburger');
const mobileNav  = document.getElementById('mobile-nav');
const mobileClose = document.getElementById('mobile-close');

if (hamburger && mobileNav) {
  hamburger.addEventListener('click', () => {
    mobileNav.classList.add('open');
    document.body.style.overflow = 'hidden';
  });
}
if (mobileClose && mobileNav) {
  mobileClose.addEventListener('click', () => {
    mobileNav.classList.remove('open');
    document.body.style.overflow = '';
  });
}
if (mobileNav) {
  mobileNav.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mobileNav.classList.remove('open');
      document.body.style.overflow = '';
    });
  });
}

/* ── 3. Fade-up IntersectionObserver ─────────────────────── */
const fadeEls = document.querySelectorAll('.fade-up');
if (fadeEls.length) {
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: 0.12 });
  fadeEls.forEach(el => observer.observe(el));
}

/* ── 4. Skill bars ───────────────────────────────────────── */
const skillBars = document.querySelectorAll('.skill-bar');
if (skillBars.length) {
  const barObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target;
        bar.style.width = bar.dataset.width || '0%';
        barObserver.unobserve(bar);
      }
    });
  }, { threshold: 0.3 });
  skillBars.forEach(bar => barObserver.observe(bar));
}

/* ── 5. Portfolio filter ─────────────────────────────────── */
const filterBtns  = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio-item');

filterBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    filterBtns.forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    const filter = btn.dataset.filter;
    portfolioItems.forEach(item => {
      const show = filter === 'all' || item.dataset.category === filter;
      item.style.display = show ? '' : 'none';
    });
  });
});

/* ── 6. Preview modal (footer size buttons) ──────────────── */
const previewModal    = document.getElementById('preview-modal');
const previewFrame    = document.getElementById('preview-frame');
const previewFrameWrap = document.getElementById('preview-frame-wrap');
const previewSizeLabel = document.getElementById('preview-size-label');
const previewClose    = document.getElementById('preview-close');

const SIZES = {
  desktop : { wrap: [1100, 660], frame: [1280, 800], label: 'Desktop — 1280 × 800' },
  laptop  : { wrap: [900,  540], frame: [1024, 640], label: 'Laptop — 1024 × 640'  },
  tablet  : { wrap: [620,  820], frame: [768,  1024], label: 'Tablet — 768 × 1024' },
  mobile  : { wrap: [390,  780], frame: [390,  844], label: 'Mobile — 390 × 844'   },
};

document.querySelectorAll('.preview-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const size = SIZES[btn.dataset.size];
    if (!size || !previewModal) return;
    previewFrameWrap.style.width  = size.wrap[0] + 'px';
    previewFrameWrap.style.height = size.wrap[1] + 'px';
    previewFrame.style.width  = size.frame[0] + 'px';
    previewFrame.style.height = size.frame[1] + 'px';
    if (previewSizeLabel) previewSizeLabel.textContent = size.label;
    previewFrame.src = window.location.href;
    previewModal.style.display = 'flex';
    document.body.style.overflow = 'hidden';
  });
});

if (previewClose) {
  previewClose.addEventListener('click', () => {
    previewModal.style.display = 'none';
    document.body.style.overflow = '';
    previewFrame.src = 'about:blank';
  });
}
if (previewModal) {
  previewModal.addEventListener('click', e => {
    if (e.target === previewModal) {
      previewModal.style.display = 'none';
      document.body.style.overflow = '';
      previewFrame.src = 'about:blank';
    }
  });
}

/* ── 7. Chat widget ──────────────────────────────────────── */
const chatToggle = document.getElementById('chat-toggle');
const chatWidget = document.getElementById('chat-widget');
const chatClose  = document.getElementById('chat-close');

if (chatToggle && chatWidget) {
  chatToggle.addEventListener('click', () => chatWidget.classList.toggle('open'));
}
if (chatClose && chatWidget) {
  chatClose.addEventListener('click', () => chatWidget.classList.remove('open'));
}

/* Chat lead form → step 2 */
const chatLeadForm = document.getElementById('chat-lead-form');
if (chatLeadForm) {
  chatLeadForm.addEventListener('submit', e => {
    e.preventDefault();
    document.getElementById('step-intro').classList.remove('active');
    document.getElementById('step-confirm').classList.add('active');
  });
}

/* Chat send email button */
const chatSendEmail = document.getElementById('chat-send-email');
if (chatSendEmail) {
  chatSendEmail.addEventListener('click', async () => {
    const name  = document.getElementById('lead-name')?.value  || '';
    const email = document.getElementById('lead-email')?.value || '';
    const phone = document.getElementById('lead-phone')?.value || 'N/A';
    chatSendEmail.textContent = 'Sending…';
    chatSendEmail.disabled = true;
    try {
      await emailjs.send('service_odp9kem', 'template_zno6u62', {
        from_name  : name,
        from_email : email,
        subject    : `Chat Lead — ${name}`,
        message    : `Phone: ${phone}\n\n[Submitted via chat widget]`,
        to_email   : 'ajaymanganyi@gmail.com'
      });
    } catch (err) {
      console.error('EmailJS error:', err);
    }
    document.getElementById('step-confirm').classList.remove('active');
    document.getElementById('step-success').classList.add('active');
  });
}

/* ── 8. WhatsApp float button ────────────────────────────── */
const waBtn = document.getElementById('whatsapp-btn');
if (waBtn) {
  waBtn.addEventListener('click', () => {
    window.open('https://wa.me/27732314863', '_blank');
  });
}

/* ── 9. Main contact form (EmailJS) ──────────────────────── */
const contactForm = document.getElementById('contact-form');
if (contactForm) {
  contactForm.addEventListener('submit', async function(e) {
    e.preventDefault();
    const btn  = this.querySelector('button[type="submit"]');
    const orig = btn.innerHTML;
    btn.innerHTML = '<span>Sending…</span>'; btn.disabled = true;
    const data = Object.fromEntries(new FormData(this));
    try {
      await emailjs.send('service_odp9kem', 'template_zno6u62', {
        from_name  : data.name,
        from_email : data.email,
        subject    : data.subject || 'Portfolio Contact',
        message    : `Phone: ${data.phone || 'N/A'}\n\n${data.message}`,
        to_email   : 'ajaymanganyi@gmail.com'
      });
      this.reset();
      btn.innerHTML = orig; btn.disabled = false;
      showToast("Message sent! I'll be in touch soon 🎉");
    } catch (err) {
      console.error('EmailJS error:', err);
      btn.innerHTML = orig; btn.disabled = false;
      showToast('Something went wrong. Please try again.', '#ef4444');
    }
  });
}

/* ── 10. Toast helper ────────────────────────────────────── */
function showToast(msg, color) {
  const t = document.createElement('div');
  Object.assign(t.style, {
    position: 'fixed', bottom: '2rem', left: '50%',
    transform: 'translateX(-50%) translateY(20px)',
    background: color || '#10b981', color: '#fff',
    padding: '0.85rem 1.5rem', borderRadius: '8px',
    fontSize: '0.88rem', fontWeight: '500', zIndex: '9999',
    boxShadow: '0 8px 30px rgba(0,0,0,0.4)',
    transition: 'all 0.35s ease', opacity: '0',
    fontFamily: "'DM Sans', sans-serif"
  });
  t.textContent = msg;
  document.body.appendChild(t);
  requestAnimationFrame(() => {
    t.style.transform = 'translateX(-50%) translateY(0)';
    t.style.opacity = '1';
  });
  setTimeout(() => {
    t.style.opacity = '0';
    t.style.transform = 'translateX(-50%) translateY(10px)';
    setTimeout(() => t.remove(), 400);
  }, 3500);
}

/* ── 12. Back to top button ──────────────────────────────── */
const backToTop = document.getElementById('back-to-top');
if (backToTop) {
  window.addEventListener('scroll', () => {
    backToTop.classList.toggle('visible', window.scrollY > 400);
  }, { passive: true });

  backToTop.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
}
const sections  = document.querySelectorAll('section[id]');
const navLinks  = document.querySelectorAll('.nav-links a, .mobile-nav a');

window.addEventListener('scroll', () => {
  let current = '';
  sections.forEach(section => {
    if (window.scrollY >= section.offsetTop - 120) current = section.id;
  });
  navLinks.forEach(link => {
    link.classList.toggle('active', link.getAttribute('href') === `#${current}`);
  });
}, { passive: true });
