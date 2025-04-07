document.addEventListener('DOMContentLoaded', () => {
    const splashScreen = document.querySelector('.splash-screen');
    const mainContent = document.querySelector('.main-content');
    const title = document.querySelector('.animated-title');

    // Add initial glow effect to title
    title.style.textShadow = '0 0 20px rgba(255, 255, 255, 0.8)';

    splashScreen.addEventListener('click', () => {
        // Add dramatic exit animation to splash screen
        splashScreen.style.transform = 'scale(1.2)';
        splashScreen.style.opacity = '0';

        setTimeout(() => {
            splashScreen.style.display = 'none';
            mainContent.style.display = 'block';
            setTimeout(() => {
                mainContent.style.opacity = '1';
            }, 100);
        }, 800);
    });

    // Add hover effect to title
    title.addEventListener('mouseover', () => {
        title.style.transform = 'scale(1.1)';
        title.style.textShadow = '0 0 30px rgba(255, 255, 255, 1)';
    });

    title.addEventListener('mouseout', () => {
        title.style.transform = 'scale(1)';
        title.style.textShadow = '0 0 10px rgba(255, 255, 255, 0.5)';
    });

    // Animate sections on scroll
    const sections = document.querySelectorAll('.section');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });

    sections.forEach(section => {
        observer.observe(section);
    });
}); 