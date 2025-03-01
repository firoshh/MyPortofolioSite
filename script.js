// Dark Mode Toggle
const themeToggle = document.getElementById('theme-toggle');

// Check if the user has a saved theme in localStorage
if (localStorage.getItem('theme') === 'dark') {
    document.body.classList.add('dark-mode');
    themeToggle.textContent = '🌞'; // Set to light mode icon
} else {
    document.body.classList.remove('dark-mode');
    themeToggle.textContent = '🌙'; // Set to dark mode icon
}

// Toggle dark mode and save preference in localStorage
themeToggle.addEventListener('click', () => {
    // Toggle the dark mode class
    document.body.classList.toggle('dark-mode');
    
    // If dark mode is enabled, change the button to show the sun icon
    if (document.body.classList.contains('dark-mode')) {
        themeToggle.textContent = '🌞'; // Switch to light mode icon
        localStorage.setItem('theme', 'dark'); // Save dark mode to localStorage
    } else {
        themeToggle.textContent = '🌙'; // Switch to dark mode icon
        localStorage.setItem('theme', 'light'); // Save light mode to localStorage
    }
});

// Fade-in Animation for Sections
const sections = document.querySelectorAll('.section');

window.addEventListener('scroll', () => {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < window.innerHeight - 150) {
            section.style.opacity = 1;
            section.style.transform = 'translateY(0)';
        }
    });
});
