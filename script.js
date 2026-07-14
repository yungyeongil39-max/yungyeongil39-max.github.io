const menuButton = document.querySelector('.menu-button');
const siteNav = document.querySelector('.site-nav');

function closeMenu() {
  siteNav.classList.remove('is-open');
  menuButton.setAttribute('aria-expanded', 'false');
  menuButton.setAttribute('aria-label', '메뉴 열기');
  menuButton.querySelector('i').className = 'bi bi-list';
}

menuButton.addEventListener('click', () => {
  const willOpen = !siteNav.classList.contains('is-open');
  siteNav.classList.toggle('is-open', willOpen);
  menuButton.setAttribute('aria-expanded', String(willOpen));
  menuButton.setAttribute('aria-label', willOpen ? '메뉴 닫기' : '메뉴 열기');
  menuButton.querySelector('i').className = willOpen ? 'bi bi-x-lg' : 'bi bi-list';
});

siteNav.addEventListener('click', (event) => {
  if (event.target.matches('a')) closeMenu();
});

document.addEventListener('click', (event) => {
  if (!event.target.closest('.site-header')) closeMenu();
});

document.querySelectorAll('.accordion details').forEach((item) => {
  item.addEventListener('toggle', () => {
    if (!item.open) return;
    document.querySelectorAll('.accordion details').forEach((other) => {
      if (other !== item) other.open = false;
    });
  });
});
