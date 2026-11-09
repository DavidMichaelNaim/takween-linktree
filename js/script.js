/**
 * Takween Linktree - Dynamic Data Loader & UI Interactions
 */

// Embedded fallback data ensuring 100% functionality even when opened directly via file://
const DEFAULT_DATA = {
  brand: {
    name: "تكوين | Takween",
    slogan: "هديتك... على طريقتك",
    description: "شكرًا لثقتك واختيارك لينا — سعداء إننا كنا جزء من اختيارك",
    logo: "logo.svg"
  },
  featuredAction: {
    id: "catalog",
    title: "تصفح كتالوج المنتجات",
    subtitle: "اكتشف أحدث التصاميم والمنتجات",
    url: "https://drive.google.com/file/d/1kdmuynI2LaT-xco_KB71YyWGpDWmgU9D/view?usp=sharing",
    badge: "جديد ومميز",
    icon: "catalog",
    buttonText: "فتح الكتالوج الآن",
    isExternal: true
  },
  contactLinks: [
    {
      "id": "whatsapp",
      "title": "تواصل عبر واتساب",
      "subtitle": "+20 10 99314937 • للاستفسار و الطلب",
      "url": "https://wa.me/201099314937",
      "phone": "+20 10 99314937",
      "icon": "whatsapp",
      "isExternal": true
    },
    {
      "id": "facebook",
      "title": "تابعنا على فيسبوك",
      "subtitle": "أحدث البوستات، الموديلات، وآراء العملاء",
      "url": "https://www.facebook.com/profile.php?id=61595610625652",
      "icon": "facebook",
      "badge": "صفحتنا الرسمية",
      "isExternal": true
    }
  ],
  socialIcons: [
    {
      name: "واتساب",
      url: "https://wa.me/201099314937",
      icon: "whatsapp",
      ariaLabel: "تواصل عبر واتساب"
    },
    {
      name: "فيسبوك",
      url: "https://www.facebook.com/profile.php?id=61595610625652",
      icon: "facebook",
      ariaLabel: "صفحة فيسبوك"
    },
    {
      name: "اتصال",
      url: "tel:+201099314937",
      icon: "phone",
      ariaLabel: "اتصال هاتفي"
    }
  ],
  footer: {
    copyright: "جميع الحقوق محفوظة © تكوين Takween",
    year: 2026
  }
};

// Inline SVG Icons Map for sharp, high-performance rendering
const ICONS = {
  catalog: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path>
      <path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path>
      <line x1="9" y1="7" x2="15" y2="7"></line>
      <line x1="9" y1="11" x2="15" y2="11"></line>
    </svg>
  `,
  whatsapp: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91C2.13 13.66 2.59 15.36 3.45 16.86L2.05 22L7.3 20.62C8.75 21.41 10.38 21.83 12.04 21.83C17.5 21.83 21.95 17.38 21.95 11.92C21.95 9.27 20.92 6.78 19.05 4.91C17.18 3.04 14.69 2 12.04 2M12.05 3.67C14.25 3.67 16.31 4.53 17.87 6.09C19.42 7.65 20.28 9.72 20.28 11.92C20.28 16.46 16.58 20.15 12.04 20.15C10.56 20.15 9.11 19.76 7.85 19L7.55 18.83L4.43 19.65L5.26 16.61L5.06 16.29C4.24 15 3.8 13.47 3.8 11.91C3.81 7.37 7.5 3.67 12.05 3.67M9.11 7.14C8.94 7.14 8.67 7.2 8.44 7.45C8.21 7.7 7.56 8.31 7.56 9.56C7.56 10.81 8.47 12.02 8.6 12.19C8.73 12.36 10.37 14.88 12.87 15.96C13.46 16.22 13.92 16.37 14.28 16.49C14.87 16.68 15.41 16.65 15.83 16.59C16.31 16.52 17.29 16 17.5 15.42C17.7 14.84 17.7 14.34 17.64 14.24C17.58 14.14 17.43 14.08 17.2 13.97C16.97 13.86 15.85 13.31 15.64 13.23C15.43 13.15 15.28 13.11 15.13 13.34C14.98 13.57 14.55 14.08 14.42 14.23C14.29 14.38 14.16 14.4 13.93 14.29C13.7 14.18 12.96 13.94 12.08 13.15C11.39 12.53 10.93 11.77 10.8 11.54C10.67 11.31 10.79 11.19 10.9 11.08C11 10.98 11.13 10.81 11.25 10.67C11.37 10.53 11.41 10.43 11.49 10.27C11.57 10.11 11.53 9.97 11.47 9.85C11.41 9.73 10.96 8.62 10.78 8.16C10.6 7.72 10.42 7.78 10.28 7.77C10.14 7.76 9.98 7.76 9.82 7.76C9.66 7.76 9.4 7.82 9.18 8.05C8.96 8.28 8.35 8.85 8.35 10.02C8.35 11.19 9.2 12.32 9.32 12.48C9.44 12.64 10.99 15.02 13.36 16.05C15.73 17.08 15.73 16.74 16.15 16.7C16.57 16.66 17.5 16.14 17.69 15.58C17.88 15.02 17.88 14.54 17.82 14.44C17.76 14.34 17.6 14.28 17.37 14.17L9.11 7.14Z"/>
    </svg>
  `,
  facebook: `
    <svg viewBox="0 0 24 24" fill="currentColor">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95C18.05 21.45 22 17.19 22 12z"/>
    </svg>
  `,
  phone: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
    </svg>
  `,
  copy: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <rect x="9" y="9" width="13" height="13" rx="2" ry="2"></rect>
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"></path>
    </svg>
  `,
  arrow: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round">
      <line x1="5" y1="12" x2="19" y2="12"></line>
      <polyline points="12 5 19 12 12 19"></polyline>
    </svg>
  `,
  external: `
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path>
      <polyline points="15 3 21 3 21 9"></polyline>
      <line x1="10" y1="14" x2="21" y2="3"></line>
    </svg>
  `
};

/**
 * Main application initializer
 */
document.addEventListener('DOMContentLoaded', async () => {
  const data = await loadData();
  renderApp(data);
  setupInteractions(data);
});

/**
 * Loads data from data.json or falls back to DEFAULT_DATA
 */
async function loadData() {
  try {
    const response = await fetch('data/data.json', { cache: 'no-cache' });
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
    const json = await response.json();
    return json;
  } catch (error) {
    console.warn('Using embedded fallback data (offline / file:// mode):', error);
    return DEFAULT_DATA;
  }
}

/**
 * Renders the entire interface using data
 */
function renderApp(data) {
  renderBrand(data.brand);
  renderFeatured(data.featuredAction);
  renderLinks(data.contactLinks);
  renderSocials(data.socialIcons);
  renderFooter(data.footer);
}

/**
 * Renders Brand Information
 */
function renderBrand(brand) {
  if (!brand) return;
  
  const logoEl = document.getElementById('brandLogo');
  const titleEl = document.getElementById('brandTitle'); // sr-only h1
  const sloganEl = document.getElementById('brandSlogan');
  const descEl = document.getElementById('brandDescription');

  if (logoEl && brand.logo) {
    logoEl.src = brand.logo.includes('/') ? brand.logo : 'assets/' + brand.logo;
  }
  if (titleEl && brand.name) titleEl.textContent = brand.name;
  if (sloganEl && brand.slogan) sloganEl.textContent = brand.slogan;
  if (descEl && brand.description) descEl.textContent = brand.description;
}

/**
 * Renders Featured Action (The Catalog Button)
 */
function renderFeatured(action) {
  const container = document.getElementById('featuredSection');
  if (!container || !action) return;

  const iconSvg = ICONS[action.icon] || ICONS.catalog;

  container.innerHTML = `
    <a href="${escapeHtml(action.url)}" target="_blank" rel="noopener noreferrer" class="featured-card" id="catalogCard">
      <div class="featured-badge">
        <span class="featured-badge-dot"></span>
        <span>${escapeHtml(action.badge || 'مميز')}</span>
      </div>
      <div class="featured-body">
        <div class="featured-info">
          <h2 class="featured-title">${escapeHtml(action.title)}</h2>
          <p class="featured-subtitle">${escapeHtml(action.subtitle || '')}</p>
        </div>
        <div class="featured-icon-wrapper" aria-hidden="true">
          ${iconSvg}
        </div>
      </div>
      <div class="featured-cta-button">
        <span>${escapeHtml(action.buttonText || 'فتح الكتالوج')}</span>
        ${ICONS.external}
      </div>
    </a>
  `;
}

/**
 * Formats text with LTR isolation for phone numbers to prevent bidirectional layout glitches
 */
function formatSubtitle(text) {
  if (!text) return '';
  return escapeHtml(text).replace(/(\+?\d[\d\s-]{6,}\d)/g, '<bdi dir="ltr" class="ltr-text">$1</bdi>');
}

/**
 * Renders the Contacts & Links List
 */
function renderLinks(links) {
  const container = document.getElementById('linksContainer');
  if (!container || !Array.isArray(links)) return;

  container.innerHTML = links.map(link => {
    const iconSvg = ICONS[link.icon] || ICONS.arrow;
    const isTargetBlank = link.isExternal !== false;
    const targetAttr = isTargetBlank ? 'target="_blank" rel="noopener noreferrer"' : '';
    const badgeHtml = link.badge ? `<span class="link-badge ${link.badgeClass || ''}">${escapeHtml(link.badge)}</span>` : '';
    
    // Quick copy button if link has a phone number
    const copyButtonHtml = link.phone ? `
      <button class="copy-mini-btn" data-copy="${escapeHtml(link.phone)}" title="نسخ الرقم" aria-label="نسخ الرقم">
        ${ICONS.copy}
      </button>
    ` : '';

    return `
      <div class="link-card-wrapper" style="position: relative;">
        <a href="${escapeHtml(link.url)}" ${targetAttr} class="link-card" id="link-${escapeHtml(link.id || '')}">
          <div class="link-icon-box icon-${escapeHtml(link.icon || 'default')}" aria-hidden="true">
            ${iconSvg}
          </div>
          <div class="link-content">
            <div class="link-header-row">
              <span class="link-title">${escapeHtml(link.title)}</span>
              ${badgeHtml}
            </div>
            <div class="link-subtitle">${formatSubtitle(link.subtitle)}</div>
          </div>
          <div class="link-actions">
            ${copyButtonHtml}
            <div class="link-arrow" aria-hidden="true">
              ${ICONS.arrow}
            </div>
          </div>
        </a>
      </div>
    `;
  }).join('');

  // Attach click listener for phone copy buttons
  container.querySelectorAll('.copy-mini-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const text = btn.getAttribute('data-copy');
      if (text) {
        copyToClipboard(text, 'تم نسخ رقم الهاتف بنجاح!');
      }
    });
  });
}

/**
 * Renders Bottom Quick Social Icons
 */
function renderSocials(socials) {
  const container = document.getElementById('socialRow');
  if (!container || !Array.isArray(socials)) return;

  container.innerHTML = socials.map(item => {
    const iconSvg = ICONS[item.icon] || ICONS.arrow;
    return `
      <a href="${escapeHtml(item.url)}" target="_blank" rel="noopener noreferrer" class="social-circle-btn" aria-label="${escapeHtml(item.ariaLabel || item.name)}" title="${escapeHtml(item.name)}">
        ${iconSvg}
      </a>
    `;
  }).join('');
}

/**
 * Renders the Footer
 */
function renderFooter(footer) {
  const footerEl = document.getElementById('copyrightText');
  if (!footerEl || !footer) return;

  const year = footer.year || new Date().getFullYear();
  footerEl.textContent = `${footer.copyright || 'جميع الحقوق محفوظة © تكوين Takween'} - ${year}`;
}

/**
 * Setup Event Handlers & Sharing
 */
function setupInteractions(data) {
  const shareBtn = document.getElementById('shareBtn');
  const modal = document.getElementById('shareModal');
  const closeModalBtn = document.getElementById('closeModalBtn');
  const shareUrlInput = document.getElementById('shareUrlInput');
  const copyUrlBtn = document.getElementById('copyUrlBtn');
  const modalSocials = document.getElementById('modalSocials');

  const pageUrl = window.location.href;
  if (shareUrlInput) shareUrlInput.value = pageUrl;

  // Render social share buttons in modal
  if (modalSocials) {
    const encodedUrl = encodeURIComponent(pageUrl);
    const encodedTitle = encodeURIComponent('تكوين | Takween - رابط أعمالنا والتواصل معنا');
    
    modalSocials.innerHTML = `
      <a href="https://wa.me/?text=${encodedTitle}%20${encodedUrl}" target="_blank" class="modal-social-btn modal-social-whatsapp">
        ${ICONS.whatsapp}
        <span>واتساب</span>
      </a>
      <a href="https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}" target="_blank" class="modal-social-btn modal-social-facebook">
        ${ICONS.facebook}
        <span>فيسبوك</span>
      </a>
    `;
  }

  // Share button click handler
  if (shareBtn) {
    shareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try {
          await navigator.share({
            title: 'تكوين | Takween',
            text: 'تواصل مع تكوين واكتشف كتالوج منتجات الطباعة ثلاثية الأبعاد:',
            url: window.location.href
          });
          return;
        } catch (err) {
          // If user cancelled, do nothing. If not supported, open modal.
          if (err.name === 'AbortError') return;
        }
      }
      openShareModal();
    });
  }

  // Modal close handlers
  if (closeModalBtn) closeModalBtn.addEventListener('click', closeShareModal);
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) closeShareModal();
    });
  }

  // Copy URL button handler
  if (copyUrlBtn) {
    copyUrlBtn.addEventListener('click', () => {
      copyToClipboard(window.location.href, 'تم نسخ رابط الصفحة بنجاح!');
      closeShareModal();
    });
  }

  function openShareModal() {
    if (modal && typeof modal.showModal === 'function') {
      modal.showModal();
    } else if (modal) {
      modal.setAttribute('open', '');
    }
  }

  function closeShareModal() {
    if (modal && typeof modal.close === 'function') {
      modal.close();
    } else if (modal) {
      modal.removeAttribute('open');
    }
  }
}

/**
 * Clipboard Copy Helper
 */
function copyToClipboard(text, successMessage) {
  if (navigator.clipboard && window.isSecureContext) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(successMessage || 'تم النسخ بنجاح!');
    }).catch(() => fallbackCopy(text, successMessage));
  } else {
    fallbackCopy(text, successMessage);
  }
}

function fallbackCopy(text, successMessage) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.style.position = 'fixed';
  textArea.style.opacity = '0';
  document.body.appendChild(textArea);
  textArea.select();
  try {
    document.execCommand('copy');
    showToast(successMessage || 'تم النسخ بنجاح!');
  } catch (err) {
    showToast('تعذر النسخ التلقائي');
  }
  document.body.removeChild(textArea);
}

/**
 * Toast Notification Display
 */
let toastTimeout;
function showToast(message) {
  const toast = document.getElementById('toast');
  const toastMsg = document.getElementById('toastMessage');
  if (!toast) return;

  if (toastMsg) toastMsg.textContent = message;
  toast.classList.add('show');

  clearTimeout(toastTimeout);
  toastTimeout = setTimeout(() => {
    toast.classList.remove('show');
  }, 2800);
}

/**
 * Helper to escape HTML characters to prevent XSS
 */
function escapeHtml(str) {
  if (typeof str !== 'string') return '';
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}
