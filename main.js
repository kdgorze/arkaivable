/* ============================================================
   ARTIST PORTFOLIO — main.js
   ============================================================ */

// ── Page navigation ──────────────────────────────────────────

const pages = document.querySelectorAll('.page');

function showPage(id) {
  pages.forEach(p => {
    p.classList.toggle('active', p.id === id);
  });
  // scroll the incoming page back to top
  const target = document.getElementById(id);
  if (target) target.scrollTop = 0;
}

// Nav cards (home → other pages)
document.querySelectorAll('.nav-card').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target;
    if (target) showPage(target);
  });
});

// Back buttons
document.querySelectorAll('.back-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    const target = btn.dataset.target || 'home';
    showPage(target);
  });
});

// ── Gallery lightbox ─────────────────────────────────────────

const lightbox      = document.getElementById('lightbox');
const lightboxImg   = document.getElementById('lightboxImg');
const lightboxCap   = document.getElementById('lightboxCaption');
const lightboxClose = document.getElementById('lightboxClose');

function openLightbox(src, caption) {
  lightboxImg.src = src;
  lightboxImg.alt = caption;
  lightboxCap.textContent = caption;
  lightbox.classList.add('open');
  document.body.style.overflow = 'hidden';
  lightboxClose.focus();
}

function closeLightbox() {
  lightbox.classList.remove('open');
  lightboxImg.src = '';
  document.body.style.overflow = '';
}

document.querySelectorAll('.gallery-item').forEach(item => {
  item.addEventListener('click', () => {
    const img     = item.querySelector('img');
    const caption = item.querySelector('.piece-title')?.textContent || '';
    if (img?.src) openLightbox(img.src, caption);
  });
  // keyboard support
  item.setAttribute('tabindex', '0');
  item.setAttribute('role', 'button');
  item.addEventListener('keydown', e => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      item.click();
    }
  });
});

lightboxClose.addEventListener('click', closeLightbox);

lightbox.addEventListener('click', e => {
  if (e.target === lightbox) closeLightbox();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && lightbox.classList.contains('open')) closeLightbox();
});

// ── Contact / commission form ─────────────────────────────────

const sendBtn  = document.getElementById('sendBtn');
const formNote = document.getElementById('formNote');

sendBtn?.addEventListener('click', () => {
  const name  = document.getElementById('name')?.value.trim();
  const email = document.getElementById('email')?.value.trim();
  const idea  = document.getElementById('idea')?.value.trim();

  if (!name || !email || !idea) {
    formNote.textContent = 'Fill in all three fields first.';
    return;
  }

  // ── Replace the mailto line below with your actual back-end or
  //    a service like Formspree (https://formspree.io) ──────────
  const subject = encodeURIComponent(`Commission inquiry from ${name}`);
  const body    = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${idea}`);
  window.location.href = `mailto:your@email.com?subject=${subject}&body=${body}`;

  formNote.textContent = 'Opening your mail app…';
});

// ── Graceful image fallback ──────────────────────────────────
// If a nav/send image is missing, show a styled text-only fallback

document.querySelectorAll('.nav-img, .send-btn-img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.display = 'none';
    const fallback = document.createElement('div');
    fallback.className = 'img-fallback';
    fallback.setAttribute('aria-hidden', 'true');
    fallback.style.cssText = `
      width: 100%;
      aspect-ratio: 3 / 4;
      background: var(--canvas-mid);
      border: 1px dashed var(--canvas-dark);
      border-radius: 2px;
      display: flex;
      align-items: center;
      justify-content: center;
      font-family: 'Courier New', monospace;
      font-size: 0.65rem;
      letter-spacing: 0.1em;
      text-transform: uppercase;
      color: var(--ink-light);
      padding: 0.5rem;
      text-align: center;
    `;
    fallback.textContent = img.alt || 'image';
    img.parentNode.insertBefore(fallback, img);
  });
});

// same for gallery items — but keep the placeholder subtle
document.querySelectorAll('.gallery-item img').forEach(img => {
  img.addEventListener('error', () => {
    img.style.cssText = `
      background: var(--canvas-mid);
      border: 1px dashed var(--canvas-dark);
      min-height: 180px;
    `;
  });
});
