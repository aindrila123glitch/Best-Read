/**
 * BESTREAD Publications and Digital Services Private Limited
 * Authoritative Corporate Single-Page Website Mechanics
 */

document.addEventListener('DOMContentLoaded', () => {

  // ==========================================================================
  // 1. MOBILE NAVIGATION HAMBURGER SYSTEM
  // ==========================================================================
  const mobileNavToggle = document.getElementById('mobile-nav-toggle');
  const navMenu = document.getElementById('nav-menu');
  const navLinks = document.querySelectorAll('.nav-link');

  if (mobileNavToggle && navMenu) {
    mobileNavToggle.addEventListener('click', () => {
      const isExpanded = mobileNavToggle.getAttribute('aria-expanded') === 'true';
      
      // Update states
      mobileNavToggle.setAttribute('aria-expanded', !isExpanded);
      mobileNavToggle.classList.toggle('is-active');
      navMenu.classList.toggle('is-active');
    });

    // Close menu when clicking navigation items for instant smooth navigation
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        mobileNavToggle.classList.remove('is-active');
        navMenu.classList.remove('is-active');
        mobileNavToggle.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // ==========================================================================
  // 2. SCROLL STATE NAV-HEADER TRIGGERS
  // ==========================================================================
  const header = document.getElementById('main-header');
  
  const handleHeaderScroll = () => {
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  };

  // Run on load and add listener
  handleHeaderScroll();
  window.addEventListener('scroll', handleHeaderScroll);

  // ==========================================================================
  // 3. INTERSECT OBSERVER FOR ACTIVE NAV INDICATORS
  // ==========================================================================
  const sections = document.querySelectorAll('section, footer');
  
  const observerOptions = {
    root: null,
    rootMargin: '-30% 0px -50% 0px', // Triggers when section occupies the key viewport center
    threshold: 0
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        
        navLinks.forEach(link => {
          link.classList.remove('active');
          if (link.getAttribute('href') === `#${id}`) {
            link.classList.add('active');
          }
        });
        
        // Handle footer active state for Contact Us link
        if (id === 'contact') {
          const contactLink = document.getElementById('nav-link-contact');
          navLinks.forEach(l => l.classList.remove('active'));
          if (contactLink) contactLink.classList.add('active');
        }
      }
    });
  }, observerOptions);

  sections.forEach(section => {
    observer.observe(section);
  });

  // ==========================================================================
  // 4. INTERACTIVE DYNAMIC MODALS OVERLAY SYSTEM
  // ==========================================================================
  
  // Data mappings for Coming Soon modals
  const modalContents = {
    publishing: {
      tag: 'Printed & E-Book Publishing',
      title: 'Your Story Deserves the Spotlight',
      desc: `
        <div class="modal-rich-content">
          <p class="modal-sub-headline">Let us help you publish with confidence, quality, and impact.</p>
          
          <div class="modal-services-container">
            <!-- Block 1: Editorial -->
            <div class="modal-service-block">
              <div class="modal-service-header">
                <div class="modal-service-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
                </div>
                <h4 class="modal-service-title">Editorial & Content Perfection</h4>
              </div>
              <p class="modal-service-desc">Polish your work to a professional standard with our bilingual editing and translation team.</p>
              <div class="modal-service-tags">
                <span class="modal-service-tag-item">Copy Editing</span>
                <span class="modal-service-tag-item">Proofreading</span>
                <span class="modal-service-tag-item">English & Bengali Translation</span>
              </div>
            </div>

            <!-- Block 2: Design -->
            <div class="modal-service-block">
              <div class="modal-service-header">
                <div class="modal-service-icon">
                  <svg viewBox="0 0 24 24"><path d="M12 2a10 10 0 0 0-10 10c0 5.52 4.48 10 10 10 1.1 0 2-.9 2-2 0-.48-.17-.93-.46-1.28l-.04-.04c-.38-.45-.6-.99-.6-1.58 0-1.1.9-2 2-2h1.62c3 0 5.5-2.5 5.5-5.5a8.5 8.5 0 0 0-10-7.5zm-5 9c-.83 0-1.5-.67-1.5-1.5S6.17 8 7 8s1.5.67 1.5 1.5S7.83 11 7 11zm3-3c-.83 0-1.5-.67-1.5-1.5S9.17 5 10 5s1.5.67 1.5 1.5S10.83 8 10 8zm4 0c-.83 0-1.5-.67-1.5-1.5S13.17 5 14 5s1.5.67 1.5 1.5S14.83 8 14 8zm3 3c-.83 0-1.5-.67-1.5-1.5S16.17 8 17 8s1.5.67 1.5 1.5S17.83 11 17 11z"></path></svg>
                </div>
                <h4 class="modal-service-title">Design That Captivates</h4>
              </div>
              <p class="modal-service-desc">Make an outstanding visual impression across physical print layouts and digital display covers.</p>
              <div class="modal-service-tags">
                <span class="modal-service-tag-item">Custom Illustration</span>
                <span class="modal-service-tag-item">Cover Design</span>
                <span class="modal-service-tag-item">Layout & Formatting</span>
              </div>
            </div>

            <!-- Block 3: Production -->
            <div class="modal-service-block">
              <div class="modal-service-header">
                <div class="modal-service-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"></path><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"></path></svg>
                </div>
                <h4 class="modal-service-title">Production & Global Publishing</h4>
              </div>
              <p class="modal-service-desc">We compile your books into ready formats with formal identifiers and high-quality parameters.</p>
              <div class="modal-service-tags">
                <span class="modal-service-tag-item">ISBN Allocation</span>
                <span class="modal-service-tag-item">Premium Print & Binding</span>
                <span class="modal-service-tag-item">EPUB & PDF Digitization</span>
              </div>
            </div>

            <!-- Block 4: Promotion -->
            <div class="modal-service-block">
              <div class="modal-service-header">
                <div class="modal-service-icon">
                  <svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
                </div>
                <h4 class="modal-service-title">Promotion & Visibility</h4>
              </div>
              <p class="modal-service-desc">Amplify your presence through structured book launches and verified review networks.</p>
              <div class="modal-service-tags">
                <span class="modal-service-tag-item">Launch Campaigns</span>
                <span class="modal-service-tag-item">Digital Marketing</span>
                <span class="modal-service-tag-item">Influencer Reviews</span>
              </div>
            </div>

            <!-- Block 5: Sales & Global Reach -->
            <div class="modal-service-block">
              <div class="modal-service-header">
                <div class="modal-service-icon">
                  <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><line x1="2" y1="12" x2="22" y2="12"></line><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path></svg>
                </div>
                <h4 class="modal-service-title">Sales, Distribution & Reach</h4>
              </div>
              <p class="modal-service-desc">Get your book distributed on international storefronts and showcased at major book fair networks.</p>
              <div class="modal-service-tags">
                <span class="modal-service-tag-item">Amazon & Flipkart</span>
                <span class="modal-service-tag-item">Offline Retail Network</span>
                <span class="modal-service-tag-item">Kolkata Book Fair</span>
                <span class="modal-service-tag-item">Worldwide Delivery</span>
              </div>
            </div>
          </div>

          <div style="margin-top: 40px; margin-bottom: 20px;">
            <p><strong>Tailored Services for Every Format:</strong></p>
            <div class="modal-formats-container">
              <div class="modal-format-card">
                <div class="modal-format-icon">
                  <svg viewBox="0 0 24 24"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"></path><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"></path></svg>
                </div>
                <div class="modal-format-title">Printed Books</div>
                <p class="modal-format-desc">Complete lifecycle: editing, layout, physical offset print, and global shipping.</p>
              </div>
              <div class="modal-format-card">
                <div class="modal-format-icon">
                  <svg viewBox="0 0 24 24"><rect x="5" y="2" width="14" height="20" rx="2" ry="2"></rect><line x1="12" y1="18" x2="12.01" y2="18"></line></svg>
                </div>
                <div class="modal-format-title">E-Books</div>
                <p class="modal-format-desc">Digitally optimized, DRM-compatible conversion with retail store integration.</p>
              </div>
              <div class="modal-format-card">
                <div class="modal-format-icon">
                  <svg viewBox="0 0 24 24"><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-2 2zm0 0a2 2 0 0 1-2-2v-9c0-1.1.9-2 2-2h2"></path><path d="M18 14h-8M15 18h-5M10 6h8v4h-8z"></path></svg>
                </div>
                <div class="modal-format-title">Periodicals</div>
                <p class="modal-format-desc">High-quality design, production, and distribution for magazines & journals.</p>
              </div>
            </div>
          </div>

          <div style="margin-top: 40px;">
            <p><strong>Why Choose Us?</strong></p>
            <div class="modal-why-us-grid">
              <div class="modal-why-us-item">
                <strong>Bilingual Expertise</strong>
                <span>Specialized English & Bengali capabilities.</span>
              </div>
              <div class="modal-why-us-item">
                <strong>Offline Distribution</strong>
                <span>Direct presence at major global book fairs.</span>
              </div>
              <div class="modal-why-us-item">
                <strong>Premium Execution</strong>
                <span>Typographical precision and high-grade print finishes.</span>
              </div>
              <div class="modal-why-us-item">
                <strong>Integrated Strategy</strong>
                <span>Online stores combined with physical logistics networks.</span>
              </div>
            </div>
          </div>
        </div>
      `
    },
    printing: {
      tag: 'Custom Printing Services',
      title: 'Custom Printing Solutions',
      desc: `
        <div class="modal-rich-content">
          <p class="modal-sub-headline">High-Fidelity Presswork & Bespoke Corporate Collateral.</p>
          
          <div class="modal-grid-3">
            
            <!-- Sub-section 1: Stationery -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Stationery</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect></svg>
              </div>
              <a href="assets/catalogues/stationery.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 2: Seminar -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Seminar</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M23 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
              </div>
              <a href="assets/catalogues/seminar.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 3: Publicity -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Publicity</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><path d="M11 5L6 9H2v6h4l5 4V5zM15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
              </div>
              <a href="assets/catalogues/publicity.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 4: Display -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Display</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><rect x="3" y="3" width="18" height="18" rx="2" ry="2"></rect><circle cx="8.5" cy="8.5" r="1.5"></circle><polyline points="21 15 16 10 5 21"></polyline></svg>
              </div>
              <a href="assets/catalogues/display.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 5: Report -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Report</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line></svg>
              </div>
              <a href="assets/catalogues/report.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 6: Gift & Prize -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Gift & Prize</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><path d="M20 12v10H4V12M2 7h20v5H2zM12 22V7M12 7H7.5a2.5 2.5 0 0 1 0-5C11 2 12 7 12 7zM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7z"></path></svg>
              </div>
              <a href="assets/catalogues/gift_prize.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

          </div>
        </div>
      `
    },
    digital: {
      tag: 'Digital Development',
      title: 'Digital Systems & Engineering',
      desc: `
        <div class="modal-rich-content">
          <p class="modal-sub-headline">Engineering Scalable Web Products, Native Apps, and Automation Pipelines.</p>
          
          <div class="modal-grid-3">
            
            <!-- Sub-section 1: Website -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Website</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><rect x="2" y="3" width="20" height="14" rx="2" ry="2"></rect><line x1="8" y1="21" x2="16" y2="21"></line><line x1="12" y1="17" x2="12" y2="21"></line></svg>
              </div>
              <a href="assets/catalogues/website.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 2: Blog -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Blog</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><path d="M12 20h9M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path></svg>
              </div>
              <a href="assets/catalogues/blog.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 3: E-tail Store -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">E-tail Store</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><circle cx="9" cy="21" r="1"></circle><circle cx="20" cy="21" r="1"></circle><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"></path></svg>
              </div>
              <a href="assets/catalogues/etail_store.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 4: App -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">App</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24">
                  <rect x="4" y="2" width="10" height="18" rx="2" ry="2" fill="none" stroke="currentColor" stroke-width="1.5"></rect>
                  <rect x="9" y="5" width="11" height="17" rx="2" ry="2" fill="var(--color-bg-white)" stroke="var(--color-primary)" stroke-width="1.5"></rect>
                  <circle cx="9" cy="18" r="0.5" fill="currentColor"></circle>
                  <circle cx="14.5" cy="20" r="0.5" fill="var(--color-primary)"></circle>
                </svg>
              </div>
              <a href="assets/catalogues/app.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 5: Automation -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Automation</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><circle cx="12" cy="12" r="3"></circle><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33H9a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82V9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"></path></svg>
              </div>
              <a href="assets/catalogues/automation.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

            <!-- Sub-section 6: Social Media -->
            <div class="modal-subsection-card">
              <div class="modal-subsection-title">Social Media</div>
              <div class="modal-subsection-icon">
                <svg viewBox="0 0 24 24"><path d="M18 8a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3zM6 15a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3zM18 15a3 3 0 0 0-3-3 3 3 0 0 0-3 3 3 3 0 0 0 3 3 3 3 0 0 0 3-3z"></path><line x1="8.59" y1="13.51" x2="15.42" y2="9.49"></line><line x1="15.41" y1="14.51" x2="8.59" y2="10.49"></line></svg>
              </div>
              <a href="assets/catalogues/social_media.pdf" target="_blank" rel="noopener noreferrer" class="modal-catalogue-btn">Catalogue</a>
            </div>

          </div>
        </div>
      `
    }
  };

  const interactiveCards = document.querySelectorAll('[data-modal]');
  const modal = document.getElementById('interactive-modal');
  const modalTag = document.getElementById('modal-category-tag');
  const modalTitle = document.getElementById('modal-headline-text');
  const modalDesc = document.getElementById('modal-description-text');
  const closeTrigger = document.getElementById('modal-close-trigger');
  const closeCta = document.getElementById('modal-return-cta');
  const backdropOverlay = document.getElementById('modal-backdrop-overlay');

  const openModal = (type) => {
    const data = modalContents[type];
    if (!data) return;

    // Inject data into layout elements
    modalTag.textContent = data.tag;
    modalTitle.textContent = data.title;
    modalDesc.innerHTML = data.desc;

    // Make modal active
    modal.classList.add('is-active');
    modal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Stop page scroll behind overlay
    
    // Focus close CTA for keyboard accessibility
    if (closeCta) closeCta.focus();
  };

  const closeModal = () => {
    modal.classList.remove('is-active');
    modal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = ''; // Re-enable scroll
  };

  // Bind click handlers to interactive Grid cards
  interactiveCards.forEach(card => {
    card.addEventListener('click', () => {
      const type = card.getAttribute('data-modal');
      openModal(type);
    });
  });

  // Bind dismiss handlers
  [closeTrigger, backdropOverlay].forEach(trigger => {
    if (trigger) {
      trigger.addEventListener('click', closeModal);
    }
  });

  if (closeCta) {
    closeCta.addEventListener('click', () => {
      closeModal();
      // Wait for modal transition to finish, then scroll smoothly
      setTimeout(() => {
        const contactSection = document.getElementById('contact');
        if (contactSection) {
          contactSection.scrollIntoView({ behavior: 'smooth' });
        }
      }, 400); // 400ms corresponds to --transition-modal (0.4s)
    });
  }

  // ESC Key listener to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

  // ==========================================================================
  // 5. CONTACT FORM INTERACTIVE SUBMIT & MICRO-STATES WITH SPAM CAPTCHA & FORMSUBMIT AJAX
  // ==========================================================================
  const contactForm = document.getElementById('main-contact-form');
  const submitSuccessToast = document.getElementById('submit-success-toast');
  const submitBtn = document.getElementById('form-submit-btn');
  const captchaInput = document.getElementById('form-input-captcha');
  const formCanvas = document.getElementById('form-captcha-canvas');
  const formRefreshBtn = document.getElementById('btn-refresh-form-captcha');

  let formCaptchaValue = '';

  const generateCaptchaText = () => {
    const chars = 'ABCDEFGHJKLMNPQRSTUVWXYZ23456789';
    let result = '';
    for (let i = 0; i < 5; i++) {
      result += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return result;
  };

  const drawCaptcha = (canvas, code) => {
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    ctx.fillStyle = '#1A1A1A';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Background noise lines
    ctx.strokeStyle = '#3A3A3A';
    for (let i = 0; i < 4; i++) {
      ctx.beginPath();
      ctx.moveTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.lineTo(Math.random() * canvas.width, Math.random() * canvas.height);
      ctx.stroke();
    }

    // Distorted text characters
    ctx.textBaseline = 'middle';
    ctx.font = 'bold 20px monospace';
    const charWidth = canvas.width / (code.length + 1);

    for (let i = 0; i < code.length; i++) {
      const char = code[i];
      const x = (i + 0.5) * charWidth + (Math.random() * 4 - 2);
      const y = canvas.height / 2 + (Math.random() * 6 - 3);
      const angle = (Math.random() * 30 - 15) * Math.PI / 180;
      
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      
      const colors = ['#FA1920', '#FFFFFF', '#CCCCCC', '#999999'];
      ctx.fillStyle = colors[Math.floor(Math.random() * colors.length)];
      ctx.fillText(char, -8, 0);
      ctx.restore();
    }

    // Dots noise
    ctx.fillStyle = '#444444';
    for (let i = 0; i < 20; i++) {
      ctx.fillRect(Math.random() * canvas.width, Math.random() * canvas.height, 2, 2);
    }
  };

  const generateFormCaptcha = () => {
    if (!formCanvas) return;
    formCaptchaValue = generateCaptchaText();
    drawCaptcha(formCanvas, formCaptchaValue);
    if (captchaInput) captchaInput.value = '';
  };

  // Initialize Captcha
  generateFormCaptcha();

  if (formRefreshBtn) {
    formRefreshBtn.addEventListener('click', generateFormCaptcha);
  }

  // Generate new captcha if canvas is clicked directly
  if (formCanvas) {
    formCanvas.addEventListener('click', generateFormCaptcha);
  }

  if (captchaInput) {
    captchaInput.addEventListener('input', () => {
      captchaInput.setCustomValidity('');
    });
  }

  if (contactForm && submitSuccessToast && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Bypass actual action redirect

      // Validate Captcha Answer
      const userAnswer = captchaInput.value.trim().toUpperCase();
      if (userAnswer !== formCaptchaValue) {
        captchaInput.setCustomValidity("Verification code is incorrect. Please try again.");
        captchaInput.reportValidity();
        generateFormCaptcha();
        return;
      }

      // Trigger loading micro-state
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Transmitting Message...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Gather form values
      const formData = {
        name: document.getElementById('form-input-name').value,
        email: document.getElementById('form-input-email').value,
        subject: document.getElementById('form-input-subject').value,
        message: document.getElementById('form-input-message').value,
        _honey: contactForm.querySelector('input[name="_honey"]').value
      };

      // AJAX Submit to FormSubmit endpoint
      fetch("https://formsubmit.co/ajax/bestread2222@gmail.com", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "application/json"
        },
        body: JSON.stringify(formData)
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        if (data.success === "true" || data.success === true) {
          // Update to success state
          submitBtn.textContent = 'Message Sent';
          submitBtn.style.backgroundColor = '#000000';
          submitBtn.style.color = '#FFFFFF';
          submitBtn.style.borderColor = '#000000';

          // Trigger premium dynamic toast notification
          submitSuccessToast.classList.add('is-visible');

          // Reset form and regenerate captcha
          contactForm.reset();
          generateFormCaptcha();

          // Dismiss Toast notification after 4 seconds
          setTimeout(() => {
            submitSuccessToast.classList.remove('is-visible');

            // Smoothly restore CTA button back to normal
            setTimeout(() => {
              submitBtn.textContent = originalText;
              submitBtn.disabled = false;
              submitBtn.style.opacity = '';
              submitBtn.style.backgroundColor = '';
              submitBtn.style.color = '';
              submitBtn.style.borderColor = '';
            }, 400);

          }, 4000);
        } else {
          throw new Error(data.message || 'FormSubmit failed to process submission');
        }
      })
      .catch(err => {
        // Revert submit button and alert user
        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
        submitBtn.style.opacity = '';
        alert("Failed to submit message: " + err.message + ". Please try again.");
        generateFormCaptcha();
      });
    });
  }

  // ==========================================================================
  // 6. INLINE EMAIL REVEAL CAPTCHA MECHANICS
  // ==========================================================================
  const revealBtn = document.getElementById('btn-reveal-email-trigger');
  const revealCaptchaGroup = document.getElementById('reveal-email-captcha-group');
  const revealCanvas = document.getElementById('reveal-captcha-canvas');
  const revealRefreshBtn = document.getElementById('btn-refresh-reveal-captcha');
  const revealInput = document.getElementById('reveal-captcha-input');
  const revealVerifyBtn = document.getElementById('btn-reveal-captcha-verify');
  const revealBlock = document.getElementById('reveal-email-block');

  let revealCaptchaValue = '';

  const generateRevealCaptcha = () => {
    if (!revealCanvas) return;
    revealCaptchaValue = generateCaptchaText();
    drawCaptcha(revealCanvas, revealCaptchaValue);
    if (revealInput) {
      revealInput.value = '';
      revealInput.style.borderBottomColor = '#555555';
    }
  };

  if (revealBtn && revealCaptchaGroup) {
    revealBtn.addEventListener('click', () => {
      generateRevealCaptcha();
      revealBtn.style.display = 'none';
      revealCaptchaGroup.style.display = 'flex';
      if (revealInput) revealInput.focus();
    });
  }

  if (revealRefreshBtn) {
    revealRefreshBtn.addEventListener('click', generateRevealCaptcha);
  }

  if (revealCanvas) {
    revealCanvas.addEventListener('click', generateRevealCaptcha);
  }

  const handleRevealVerify = () => {
    if (!revealInput || !revealBlock) return;
    const userAnswer = revealInput.value.trim().toUpperCase();
    if (userAnswer === revealCaptchaValue) {
      // Reveal the corporate email link!
      revealBlock.innerHTML = `<a href="mailto:bestread2222@gmail.com" class="corporate-email" id="corporate-email-link">bestread2222@gmail.com</a>`;
    } else {
      // Show red error highlight and reset
      revealInput.style.borderBottomColor = 'var(--color-primary)';
      revealInput.value = '';
      revealInput.placeholder = 'Err';
      setTimeout(() => {
        generateRevealCaptcha();
        revealInput.placeholder = 'Code';
      }, 800);
    }
  };

  if (revealVerifyBtn) {
    revealVerifyBtn.addEventListener('click', handleRevealVerify);
  }

  if (revealInput) {
    revealInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        e.preventDefault();
        handleRevealVerify();
      }
    });
  }

});
