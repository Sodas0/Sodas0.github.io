// Wait for the DOM to load
document.addEventListener('DOMContentLoaded', () => {
    const directoryItems = document.querySelectorAll('#directory li');
    const sections = document.querySelectorAll('section');

    // highlight the section and navigate to it
    directoryItems.forEach(item => {
        item.addEventListener('click', () => {
            const sectionId = item.getAttribute('data-section');
            const section = document.getElementById(sectionId);

            // Scroll to the section
            section.scrollIntoView({ behavior: 'smooth' });

            // Highlight the clicked section
            sections.forEach(sec => sec.classList.remove('visible'));
            section.classList.add('visible');
        });
    });

    // Add 'visible' class when sections enter the viewport
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, { threshold: 0.2 });

    sections.forEach(section => observer.observe(section));
});
