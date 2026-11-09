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
    <svg viewBox="0 0 178.35 179.74" fill="currentColor">
      <path fill-rule="evenodd" d="M 90.79 179.74 C 42.44 179.74, 3.24 140.54, 3.24 92.18 C 3.24 75.64, 7.83 60.17, 15.80 46.97 L 0.00 0.00 L 48.47 15.52 C 61.02 8.58, 75.44 4.63, 90.79 4.63 C 139.15 4.63, 178.35 43.83, 178.35 92.18 C 178.35 140.54, 139.15 179.74, 90.79 179.74 Z M 90.79 19.30 C 75.99 19.30, 62.20 23.74, 50.69 31.35 L 22.68 22.38 L 31.79 49.45 C 23.06 61.47, 17.91 76.23, 17.91 92.18 C 17.91 132.38, 50.60 165.07, 90.79 165.07 C 130.99 165.07, 163.68 132.38, 163.68 92.18 C 163.68 51.99, 130.99 19.30, 90.79 19.30 Z M 131.84 72.29 C 129.65 73.49, 118.87 79.31, 116.85 80.13 C 114.83 80.95, 113.35 81.38, 111.77 79.20 C 110.20 77.02, 105.73 72.15, 104.37 70.71 C 103.01 69.26, 101.70 69.13, 99.50 70.33 C 97.31 71.53, 90.20 74.16, 81.95 82.09 C 75.53 88.27, 71.32 95.75, 70.10 98.04 C 68.87 100.32, 70.09 101.49, 71.25 102.56 C 72.29 103.52, 73.58 105.09, 74.75 106.35 C 75.91 107.61, 76.32 108.53, 77.12 109.99 C 77.92 111.46, 77.60 112.78, 77.08 113.91 C 76.56 115.05, 72.51 126.22, 70.81 130.76 C 69.12 135.30, 67.23 134.63, 65.92 134.68 C 64.62 134.72, 63.14 134.97, 61.65 135.02 C 60.16 135.08, 57.71 134.61, 55.58 132.45 C 53.45 130.29, 47.47 125.10, 47.06 114.10 C 46.65 103.11, 54.26 92.18, 55.32 90.65 C 56.38 89.12, 69.85 65.28, 92.23 55.48 C 114.62 45.68, 114.74 48.67, 118.84 48.89 C 122.95 49.10, 132.27 53.80, 134.33 58.95 C 136.39 64.09, 136.55 68.57, 136.03 69.52 C 135.50 70.47, 134.04 71.09, 131.84 72.29 Z" />
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
