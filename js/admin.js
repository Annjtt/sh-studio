document.addEventListener('DOMContentLoaded', () => {
    // Placeholder for Telegram API integration and admin logic
    console.log('Admin panel script loaded.');

    // Navigation logic to switch between sections
    const navLinks = document.querySelectorAll('.sidebar-nav a');
    const sections = document.querySelectorAll('.content-section');

    // Function to show a specific section
    const showSection = (targetId) => {
        sections.forEach(section => {
            if (section.id === targetId + '-section') {
                section.classList.add('active');
            } else {
                section.classList.remove('active');
            }
        });
    };

    // Add click event listeners to navigation links
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);

            showSection(targetId);

            navLinks.forEach(nav => nav.classList.remove('active'));
            link.classList.add('active');
        });
    });

    // Show the default section on page load (e.g., view-applications)
    const defaultSectionId = 'view-applications'; // Set the ID of the default section
    showSection(defaultSectionId);
});