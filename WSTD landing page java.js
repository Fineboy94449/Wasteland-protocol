// === Fade and slide up top header on scroll ===
window.addEventListener('scroll', () => {
  const topHeader = document.querySelector('.top-header');
  const scrollTop = window.scrollY;

  if (topHeader) {
    topHeader.style.transition = 'all 0.4s ease';
    if (scrollTop > 100) {
      topHeader.style.opacity = '0';
      topHeader.style.transform = 'translateY(-50px)';
      topHeader.style.pointerEvents = 'none';
    } else {
      topHeader.style.opacity = '1';
      topHeader.style.transform = 'translateY(0)';
      topHeader.style.pointerEvents = 'auto';
    }
  }
});

// === Add shadow to sticky nav when scrolling ===
window.addEventListener('scroll', () => {
  const nav = document.querySelector('.sticky-nav');
  if (nav) {
    nav.classList.toggle('scrolled', window.scrollY > 20);
  }
});

// === Highlight active social link in NB section ===
document.querySelectorAll('#nb-info ul li a').forEach(link => {
  link.addEventListener('click', function () {
    document.querySelectorAll('#nb-info ul li').forEach(item => {
      item.classList.remove('active');
    });
    this.parentElement.classList.add('active');
  });
});

// === Fade in each section when in view ===
const fadeObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
    }
  });
}, {
  threshold: 0.1
});

document.querySelectorAll('section').forEach(section => {
  fadeObserver.observe(section);
});

// === Copy email on click ===
const emailLink = document.querySelector('a[href^="mailto:"]');
if (emailLink) {
  emailLink.addEventListener('click', e => {
    e.preventDefault();
    const email = emailLink.getAttribute('href').replace('mailto:', '');
    navigator.clipboard.writeText(email)
      .then(() => {
        alert(`Email copied: ${email}`);
      })
      .catch(() => {
        alert('Failed to copy email address.');
      });
  });
}
