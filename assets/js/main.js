// Menu overlay toggle
(function () {
  const menuBtn = document.getElementById('menu-btn');
  const closeBtn = document.getElementById('menu-close');
  const overlay = document.getElementById('menu-overlay');

  function openMenu() {
    overlay.classList.add('is-open');
    overlay.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden';
    closeBtn.focus();
  }

  function closeMenu() {
    overlay.classList.remove('is-open');
    overlay.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    menuBtn.focus();
  }

  menuBtn.addEventListener('click', openMenu);
  closeBtn.addEventListener('click', closeMenu);

  // Close on Escape key
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && overlay.classList.contains('is-open')) {
      closeMenu();
    }
  });
})();

// Video Modal toggle & Autoplay logic
(function () {
  const trailerBtns = document.querySelectorAll('a[href="#trailer"]');
  const videoModal = document.getElementById('video-modal');
  const videoCloseBtn = document.getElementById('video-close');
  const videoIframe = document.getElementById('video-iframe');

  // Using the requested YouTube URL, adding autoplay and hiding related videos
  const youtubeSrc = 'https://www.youtube.com/embed/fxz8_j4x7CM?autoplay=1&rel=0';

  function openVideoModal(e) {
    e.preventDefault();
    videoModal.classList.add('is-open');
    videoModal.setAttribute('aria-hidden', 'false');
    document.body.style.overflow = 'hidden'; // Prevent scrolling
    
    // Inject src to start video autoplaying
    videoIframe.src = youtubeSrc;
    
    videoCloseBtn.focus();
  }

  function closeVideoModal() {
    videoModal.classList.remove('is-open');
    videoModal.setAttribute('aria-hidden', 'true');
    document.body.style.overflow = '';
    
    // Remove src to stop video and audio entirely (reset)
    videoIframe.src = '';
  }

  trailerBtns.forEach(btn => {
    btn.addEventListener('click', openVideoModal);
  });

  videoCloseBtn.addEventListener('click', closeVideoModal);

  // Close on Escape key or clicking outside the video (on the backdrop)
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && videoModal.classList.contains('is-open')) {
      closeVideoModal();
    }
  });

  videoModal.addEventListener('click', function (e) {
    // If the click is on the backdrop (not inside the video content)
    if (e.target === videoModal) {
      closeVideoModal();
    }
  });
})();

// Galeria Swiper Init
(function () {
  // Verifica se o Swiper foi carregado globalmente antes de instanciar
  if (typeof Swiper !== 'undefined') {
    const galeriaSwiper = new Swiper('.galeria__slider', {
      loop: true,
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      grabCursor: true,
    });
  }
})();
