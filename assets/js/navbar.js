// Hamburger click toggle
const hamburger = document.getElementById('hamburger');
const header = document.getElementById('header');

hamburger.addEventListener('click', () => {
  header.classList.toggle('header-show');
});

// Handle window resize (mobile/desktop switch)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    header.classList.add('header-show');
  } else {
    header.classList.remove('header-show');
  }
});

// On load
if (window.innerWidth >= 1024) {
  header.classList.add('header-show');
}
