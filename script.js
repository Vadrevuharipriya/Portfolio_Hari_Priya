function pageTransitions() {
  // Selectors
  const sections = document.querySelectorAll('.section');
  const sectBtns = document.querySelectorAll('.control');
  const allSections = document.querySelector('.main-content');

  // Button click active class
  sectBtns.forEach((btn) => {
    btn.addEventListener('click', function() {
      // Remove 'active-btn' class from all buttons
      sectBtns.forEach((button) => {
        button.classList.remove('active-btn');
      });
      // Add 'active-btn' class to clicked button
      this.classList.add('active-btn');

      // Hide all sections
      sections.forEach((section) => {
        section.classList.remove('active');
      });

      // Show clicked section
      const id = this.dataset.id;
      const activeSection = document.getElementById(id);
      if (activeSection) {
        activeSection.classList.add('active');
      }
    });
  });

  // Toggle theme
  const themeBtn = document.querySelector('.theme-btn');
  themeBtn.addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
  });
}

// DOM Content Loaded
window.addEventListener('DOMContentLoaded', () => {
  pageTransitions();
  
  // Set default section active
  const defaultSection = document.getElementById('sec2');
  if (defaultSection) {
    defaultSection.classList.add('active');
    const defaultBtn = document.querySelector(`[data-id="${defaultSection.id}"]`);
    if (defaultBtn) {
      defaultBtn.classList.add('active-btn');
    }
  } else {
    console.error('The default section does not exist!');
  }
});
