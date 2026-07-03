/* 
 * Beraxis Brandbook Showcase Application Logic
 */

document.addEventListener('DOMContentLoaded', () => {
  initThemeToggle();
  initCopyToClipboard();
  initTypographyTester();
  initBusinessCardFlip();
});

/**
 * Theme toggler logic (Dark / Light mode)
 */
function initThemeToggle() {
  const themeToggle = document.getElementById('theme-toggle');
  const htmlElement = document.documentElement;
  const navLogo = document.getElementById('nav-logo');
  
  // Set default theme from localStorage or system preferences
  const savedTheme = localStorage.getItem('theme') || 'dark';
  htmlElement.setAttribute('data-theme', savedTheme);
  updateLogoTheme(savedTheme, navLogo);

  themeToggle.addEventListener('click', () => {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    
    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
    
    updateLogoTheme(newTheme, navLogo);
    showToast(`Modo ${newTheme === 'dark' ? 'Oscuro' : 'Claro'} activado`, 'info');
  });
}

function updateLogoTheme(theme, logoImg) {
  if (!logoImg) return;
  // logoImg source can remain logo_principal.svg since CSS filter handles color in dark mode
}

/**
 * Clipboard Copy utilities and Toast feedback
 */
function initCopyToClipboard() {
  window.copyToClipboard = function(text, description) {
    navigator.clipboard.writeText(text).then(() => {
      showToast(`¡Código ${description} copiado!`);
    }).catch(err => {
      console.error('Error al copiar al portapapeles: ', err);
      showToast('Error al copiar al portapapeles', 'info');
    });
  };
}

function showToast(message, type = 'success') {
  const container = document.getElementById('toast-container');
  if (!container) return;

  const toast = document.createElement('div');
  toast.className = `toast ${type === 'info' ? 'toast-info' : ''}`;
  toast.innerHTML = `
    <span>${type === 'success' ? '✓' : 'ℹ'}</span>
    <span>${message}</span>
  `;

  container.appendChild(toast);

  // Automatically remove toast after 3 seconds (matching CSS animation)
  setTimeout(() => {
    toast.remove();
  }, 3000);
}

/**
 * Font Sandbox testing
 */
function initTypographyTester() {
  const orbitronInput = document.getElementById('orbitron-test-input');
  const interInput = document.getElementById('inter-test-input');

  if (orbitronInput) {
    orbitronInput.addEventListener('input', (e) => {
      // Input value binds automatically to input value, but we can animate or handle changes
    });
  }

  if (interInput) {
    interInput.addEventListener('input', (e) => {
      // Ready for any custom text tracking
    });
  }
}

/**
 * 3D Business Card flip on click
 */
function initBusinessCardFlip() {
  const card3d = document.getElementById('business-card-3d');
  if (card3d) {
    card3d.addEventListener('click', () => {
      card3d.classList.toggle('is-flipped');
    });
  }
}
