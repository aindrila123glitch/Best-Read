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
      tag: 'Printed Book Publishing',
      title: 'Premium Publishing Pipeline',
      desc: 'COMING SOON — We are currently structuring our premium publishing pipeline. Our editorial staff, proofreading systems, and global distribution networks are aligning to bring authoritative literature and bespoke physical books to stores and readers worldwide.'
    },
    printing: {
      tag: 'Custom Printing Services',
      title: 'Tailored Commercial Printing',
      desc: 'COMING SOON — Tailored commercial printing services are arriving shortly. High-fidelity offset presses, custom hardcover binding machinery, and volume distribution structures are currently being integrated into our physical operational workflow.'
    },
    digital: {
      tag: 'Digital Development',
      title: 'Digital Systems & Engineering',
      desc: 'COMING SOON — Cutting-edge digital architecture and platform engineering services are currently in incubation. We are engineering scalable web technologies, robust e-book distribution ecosystems, and custom software systems for content authors and enterprise businesses.'
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
    modalDesc.textContent = data.desc;

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
  [closeTrigger, closeCta, backdropOverlay].forEach(trigger => {
    if (trigger) {
      trigger.addEventListener('click', closeModal);
    }
  });

  // ESC Key listener to close modal
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && modal.classList.contains('is-active')) {
      closeModal();
    }
  });

  // ==========================================================================
  // 5. CONTACT FORM INTERACTIVE SUBMIT & MICRO-STATES
  // ==========================================================================
  const contactForm = document.getElementById('main-contact-form');
  const submitSuccessToast = document.getElementById('submit-success-toast');
  const submitBtn = document.getElementById('form-submit-btn');

  if (contactForm && submitSuccessToast && submitBtn) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault(); // Bypass actual action redirect

      // Trigger loading micro-state
      const originalText = submitBtn.textContent;
      submitBtn.textContent = 'Transmitting Message...';
      submitBtn.disabled = true;
      submitBtn.style.opacity = '0.7';

      // Mock network latency (1.2 seconds)
      setTimeout(() => {
        
        // Update to success state
        submitBtn.textContent = 'Message Sent';
        submitBtn.style.backgroundColor = '#000000';
        submitBtn.style.color = '#FFFFFF';
        submitBtn.style.borderColor = '#000000';

        // Trigger premium dynamic toast notification
        submitSuccessToast.classList.add('is-visible');

        // Reset form variables
        contactForm.reset();

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

      }, 1200);
    });
  }

});
