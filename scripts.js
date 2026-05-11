const HEADER_FALLBACK = `
<div class="top-note"><span></span>Premium aesthetic clinic treatments in Dubai<span></span></div>
<header class="site-header" id="site-header"><div class="shell header-shell"><a href="index.html" class="brand"><img src="assets/images/logo-light.png" alt="BodyNova Beauty Center" class="brand-logo brand-logo-light" loading="eager" decoding="async"><img src="assets/images/logo-dark.png" alt="" class="brand-logo brand-logo-dark" loading="eager" decoding="async" aria-hidden="true"></a><nav class="desktop-nav"><a href="index.html#home">Home</a><a href="about.html">About</a><a href="index.html#how">How It Works</a><a href="index.html#moments">Moments</a><div class="nav-dropdown" data-dropdown><a href="services.html" class="nav-dropdown-trigger" aria-haspopup="true" aria-expanded="false">Services<svg viewBox="0 0 24 24" width="12" height="12" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></a><div class="nav-dropdown-menu" role="menu"><a href="service-body-sculpting.html" role="menuitem">Body Sculpting &amp; Fat Removal</a><a href="service-hydra-facial.html" role="menuitem">Hydra Facial</a><a href="service-body-contouring.html" role="menuitem">Body Contouring</a><a href="service-body-slimming.html" role="menuitem">Body Slimming</a><a href="service-skin-tightening.html" role="menuitem">Skin Tightening</a><a href="service-lymphatic-drainage.html" role="menuitem">Lymphatic Drainage</a><a href="service-cellulite-reduction.html" role="menuitem">Cellulite Reduction</a><a href="service-detox-body-wrap.html" role="menuitem">Detox Body Wrap</a></div></div><a href="index.html#offers">Offers</a><a href="index.html#reviews">Reviews</a><a href="contact.html">Contact</a></nav><div class="header-actions"><a href="#" class="header-call js-call">Call</a><a href="#" class="header-book js-book">Book Now</a></div><button class="menu-toggle" id="menu-toggle" type="button" aria-label="Open menu"><span></span><span></span><span></span></button></div><div class="mobile-panel" id="mobile-panel"><nav class="mobile-nav"><a href="index.html#home">Home</a><a href="about.html">About</a><a href="index.html#how">How It Works</a><a href="index.html#moments">Moments</a><div class="mobile-submenu" data-mobile-submenu><button type="button" class="mobile-submenu-toggle" aria-expanded="false"><span>Services</span><svg viewBox="0 0 24 24" width="14" height="14" fill="none" stroke="currentColor" stroke-width="2.4" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="m6 9 6 6 6-6"/></svg></button><div class="mobile-submenu-list"><a href="services.html">All Services</a><a href="service-body-sculpting.html">Body Sculpting &amp; Fat Removal</a><a href="service-hydra-facial.html">Hydra Facial</a><a href="service-body-contouring.html">Body Contouring</a><a href="service-body-slimming.html">Body Slimming</a><a href="service-skin-tightening.html">Skin Tightening</a><a href="service-lymphatic-drainage.html">Lymphatic Drainage</a><a href="service-cellulite-reduction.html">Cellulite Reduction</a><a href="service-detox-body-wrap.html">Detox Body Wrap</a></div></div><a href="index.html#offers">Offers</a><a href="index.html#reviews">Reviews</a><a href="contact.html">Contact</a></nav><div class="mobile-actions"><a href="#" class="soft-btn js-call">Call Now</a><a href="#" class="main-btn js-whatsapp">WhatsApp</a></div></div></header>`;

const FOOTER_FALLBACK = `
<footer class="footer" id="contact"><div class="shell footer-shell"><div class="footer-topline"><p class="eyebrow">BodyNova Beauty Center</p><div class="footer-topline-actions"><a href="#" class="main-btn js-whatsapp">Book on WhatsApp</a><a href="#" class="soft-btn js-call">Call Now</a></div></div><div class="footer-grid footer-grid-cards"><div class="footer-card footer-intro-card"><h2>Luxury aesthetic care with calm precision.</h2><p>Clinic based beauty and body treatments designed for comfort, confidence, and refined results. Thoughtful care, advanced treatments, and a premium experience.</p><div class="footer-socials"><a href="#" id="footer-instagram">IG</a><a href="#" id="footer-facebook">FB</a><a href="#" id="footer-tiktok">TT</a><a href="#" id="footer-whatsapp">WA</a></div></div><div class="footer-card footer-menu-card"><h4>Menu</h4><div class="footer-link-list"><a href="index.html#home"><span>Home</span><small>01</small></a><a href="about.html"><span>About Us</span><small>02</small></a><a href="index.html#services"><span>Services</span><small>03</small></a><a href="contact.html#contact-faq"><span>FAQs</span><small>04</small></a><a href="contact.html"><span>Contact Us</span><small>05</small></a></div></div><div class="footer-card footer-services-card"><h4>Services</h4><div class="footer-link-list"><a href="service-body-sculpting.html"><span>Body Sculpting</span></a><a href="service-hydra-facial.html"><span>Hydra Facial</span></a><a href="service-body-contouring.html"><span>Body Contouring</span></a><a href="service-skin-tightening.html"><span>Skin Tightening</span></a><a href="service-lymphatic-drainage.html"><span>Lymphatic Drainage</span></a></div></div><div class="footer-card footer-contact-card"><h4>Contact</h4><div class="footer-contact-stack"><div class="footer-contact-item"><span class="footer-label">Phone</span><a href="#" id="footer-phone-link"></a></div><div class="footer-contact-item"><span class="footer-label">Email</span><a href="#" id="footer-email-link"></a></div><div class="footer-contact-item"><span class="footer-label">Address</span><span id="footer-address"></span></div></div></div></div><div class="footer-bottom"><p id="footer-copy-text"></p><div class="payment-row"><span>Visa</span><span>Mastercard</span><span>Tabby</span><span>Apple Pay</span></div><div class="footer-bottom-links"><a href="#">Terms</a><a href="#">Privacy</a></div></div></div></footer>`;

async function loadPartial(selector, url, fallback) {
  const mount = document.querySelector(selector);
  if (!mount) return;
  try {
    const res = await fetch(url);
    if (!res.ok) throw new Error(url);
    mount.innerHTML = await res.text();
  } catch (error) {
    mount.innerHTML = fallback;
  }
}

function applyConfig() {
  if (typeof CONFIG === 'undefined') return;
  document.querySelectorAll('.js-whatsapp').forEach(el => el.href = CONFIG.whatsappUrl);
  document.querySelectorAll('.js-call').forEach(el => el.href = CONFIG.phoneUrl);
  document.querySelectorAll('.js-book').forEach(el => el.href = CONFIG.bookingLink);

  const phone = document.getElementById('footer-phone-link');
  if (phone) { phone.href = CONFIG.phoneUrl; phone.textContent = CONFIG.phoneDisplay; }
  const email = document.getElementById('footer-email-link');
  if (email) { email.href = `mailto:${CONFIG.email}`; email.textContent = CONFIG.email; }
  const address = document.getElementById('footer-address');
  if (address) address.textContent = CONFIG.address;
  const copy = document.getElementById('footer-copy-text');
  if (copy) copy.textContent = `© ${new Date().getFullYear()} ${CONFIG.brandName}. All rights reserved.`;
  const ig = document.getElementById('footer-instagram');
  const fb = document.getElementById('footer-facebook');
  const tt = document.getElementById('footer-tiktok');
  const wa = document.getElementById('footer-whatsapp');
  if (ig) ig.href = CONFIG.instagramLink;
  if (fb) fb.href = CONFIG.facebookLink;
  if (tt) tt.href = CONFIG.tiktokLink;
  if (wa) wa.href = CONFIG.whatsappUrl;
}

function initMenu() {
  const btn = document.getElementById('menu-toggle');
  const panel = document.getElementById('mobile-panel');
  if (!btn || !panel) return;
  btn.addEventListener('click', () => {
    const open = panel.classList.toggle('is-open');
    btn.classList.toggle('is-open', open);
    btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    panel.setAttribute('aria-hidden', open ? 'false' : 'true');
  });
  panel.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
    panel.classList.remove('is-open');
    btn.classList.remove('is-open');
    btn.setAttribute('aria-expanded', 'false');
  }));
}

function initReveal() {
  const items = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
        observer.unobserve(entry.target);
      }
    });
  }, { threshold: .12 });
  items.forEach(item => observer.observe(item));
}

function initSlider() {
  const slides = [...document.querySelectorAll('.slide')];
  const dots = [...document.querySelectorAll('.slider-dots button')];
  if (!slides.length) return;
  let active = 0;
  function go(index) {
    slides[active].classList.remove('active');
    dots[active]?.classList.remove('active');
    active = (index + slides.length) % slides.length;
    slides[active].classList.add('active');
    dots[active]?.classList.add('active');
  }
  dots.forEach((dot, index) => dot.addEventListener('click', () => go(index)));
  setInterval(() => go(active + 1), 5200);
}


function initStoryMedia() {
  if (typeof CONFIG === 'undefined') return;
  const img = document.getElementById('story-media-image');
  const video = document.getElementById('story-media-video');
  const source = document.getElementById('story-media-source');
  const placeholder = document.getElementById('story-media-placeholder');
  if (!img || !video || !source || !placeholder) return;
  const imageSrc = CONFIG.aboutShowcaseImage || 'assets/images/about-showcase.jpg';
  const posterSrc = CONFIG.aboutShowcasePoster || imageSrc;
  const videoSrc = CONFIG.aboutShowcaseVideo || '';
  const mode = (CONFIG.aboutShowcaseMediaType || 'image').toLowerCase();
  img.src = imageSrc;
  img.onerror = () => { if (!video.classList.contains('is-active')) placeholder.classList.add('is-active'); img.classList.remove('is-active'); };
  video.poster = posterSrc;
  source.src = videoSrc;
  video.load();
  function showImage(){ img.classList.add('is-active'); video.classList.remove('is-active'); placeholder.classList.remove('is-active'); video.pause(); }
  function showVideo(){ video.classList.add('is-active'); img.classList.remove('is-active'); placeholder.classList.remove('is-active'); const p = video.play(); if (p && typeof p.catch === 'function') p.catch(() => showImage()); }
  video.addEventListener('error', showImage, { once:true });
  if (mode === 'video' && videoSrc) showVideo(); else showImage();
}


function initBookingForm() {
  const form = document.getElementById('booking-form');
  if (!form || typeof CONFIG === 'undefined') return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const lines = [
      'Hi BodyNova, I want to request a booking.',
      '',
      `Name: ${data.get('name') || ''}`,
      `Phone: ${data.get('phone') || ''}`,
      `Service: ${data.get('service') || ''}`,
      `Area: ${data.get('location') || ''}`,
      `Preferred date: ${data.get('date') || ''}`,
      `Preferred time: ${data.get('time') || ''}`,
      `Notes: ${data.get('notes') || 'None'}`
    ];
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank');
  });
}

function initAmbientMotion() {
  document.querySelectorAll('.product-row article, .service-card, .mini-offers article').forEach((card, index) => {
    card.style.transitionDelay = `${Math.min(index * 40, 180)}ms`;
  });
}

function initHeroSlider() {
  const slides = [...document.querySelectorAll('.hero-slide')];
  const dots   = [...document.querySelectorAll('.hero-dot')];
  const prev   = document.querySelector('.hero-prev');
  const next   = document.querySelector('.hero-next');
  const nav    = document.querySelector('.hero-slider-nav');
  if (!slides.length) return;

  let active = 0;
  let timer;

  function goTo(idx) {
    slides[active].classList.remove('is-active');
    dots[active]?.classList.remove('is-active');
    active = (idx + slides.length) % slides.length;
    slides[active].classList.add('is-active');
    dots[active]?.classList.add('is-active');
    if (nav) {
      nav.setAttribute('data-current', active + 1);
      nav.setAttribute('data-total', slides.length);
    }
  }

  function startAuto() {
    clearInterval(timer);
    timer = setInterval(() => goTo(active + 1), 5500);
  }

  // Init counter attrs
  if (nav) {
    nav.setAttribute('data-current', '1');
    nav.setAttribute('data-total', slides.length);
  }

  dots.forEach((d, i) => d.addEventListener('click', () => { goTo(i); startAuto(); }));
  prev?.addEventListener('click', () => { goTo(active - 1); startAuto(); });
  next?.addEventListener('click', () => { goTo(active + 1); startAuto(); });

  startAuto();
}


/* Transparent header to sticky solid header */
function initTransparentStickyHeader() {
  const header = document.getElementById('site-header');
  const topNote = document.querySelector('.top-note');
  if (!header) return;

  const update = () => {
    const scrolled = window.scrollY > 48;
    header.classList.toggle('is-scrolled', scrolled);
    header.classList.toggle('is-transparent', !scrolled);

    if (topNote) {
      topNote.classList.toggle('top-note-hidden', scrolled);
      header.style.top = scrolled ? '0px' : `${topNote.offsetHeight}px`;
    }
  };

  update();
  window.addEventListener('scroll', update, { passive: true });
  window.addEventListener('resize', update, { passive: true });
}

function initSmoothScroll() {
  document.addEventListener('click', event => {
    const link = event.target.closest('a[href^="#"]');
    if (!link) return;
    const href = link.getAttribute('href');
    if (href === '#') return;
    const target = document.querySelector(href);
    if (!target) return;
    event.preventDefault();
    target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  });
}

/* Desktop dropdown (Services) — opens on hover and on focus / keyboard
   activation. Tap on touch devices opens it without navigating. */
function initNavDropdowns() {
  const dropdowns = document.querySelectorAll('[data-dropdown]');
  dropdowns.forEach(dd => {
    const trigger = dd.querySelector('.nav-dropdown-trigger');
    if (!trigger) return;

    function setOpen(open) {
      dd.classList.toggle('is-open', open);
      trigger.setAttribute('aria-expanded', open ? 'true' : 'false');
    }

    // Tap-to-open on touch devices: first tap opens, second tap navigates.
    trigger.addEventListener('click', e => {
      const isTouch = window.matchMedia('(hover: none)').matches;
      if (isTouch && !dd.classList.contains('is-open')) {
        e.preventDefault();
        setOpen(true);
      }
    });

    // Close on outside click.
    document.addEventListener('click', e => {
      if (!dd.contains(e.target)) setOpen(false);
    });

    // Close on Escape.
    dd.addEventListener('keydown', e => {
      if (e.key === 'Escape') {
        setOpen(false);
        trigger.focus();
      }
    });
  });
}

/* Mobile submenu inside the burger panel. */
function initMobileSubmenus() {
  document.querySelectorAll('[data-mobile-submenu]').forEach(group => {
    const btn = group.querySelector('.mobile-submenu-toggle');
    if (!btn) return;
    btn.addEventListener('click', () => {
      const open = group.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  });
}

/* Generic Service-page booking form -> WhatsApp.
   Used by every service-detail page and the services hub CTA. */
function initServiceBookingForm() {
  const form = document.getElementById('service-booking-form');
  if (!form || typeof CONFIG === 'undefined') return;
  form.addEventListener('submit', event => {
    event.preventDefault();
    const data = new FormData(form);
    const name    = (data.get('name')    || '').toString().trim();
    const phone   = (data.get('phone')   || '').toString().trim();
    const service = (data.get('service') || '').toString().trim();
    const date    = (data.get('date')    || '').toString().trim();
    const message = (data.get('message') || '').toString().trim();
    if (!name || !phone) { form.reportValidity(); return; }
    const lines = [
      'Hi BodyNova, I would like to request an appointment.',
      `Name: ${name}`,
      `Phone: ${phone}`,
    ];
    if (service) lines.push(`Treatment: ${service}`);
    if (date)    lines.push(`Preferred date: ${date}`);
    if (message) lines.push(`Message: ${message}`);
    const url = `https://wa.me/${CONFIG.whatsappNumber}?text=${encodeURIComponent(lines.join('\n'))}`;
    window.open(url, '_blank', 'noopener');
  });
}

async function init() {
  await Promise.all([
    loadPartial('#header-placeholder', 'header.html', HEADER_FALLBACK),
    loadPartial('#footer-placeholder', 'footer.html', FOOTER_FALLBACK)
  ]);
  applyConfig();
  initMenu();
  initReveal();
  initSlider();
  initStoryMedia();
  initBookingForm();
  initAmbientMotion();
  initHeroSlider();
  initTransparentStickyHeader();
  initSmoothScroll();
  initNavDropdowns();
  initMobileSubmenus();
  initServiceBookingForm();
}

document.addEventListener('DOMContentLoaded', init);
