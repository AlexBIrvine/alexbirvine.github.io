// Spooky warping effect on mouse over
document.querySelectorAll('.main, .sidebar, .quote').forEach(element => {
    element.addEventListener('mousemove', (e) => {
        const { left, top, width, height } = element.getBoundingClientRect();
        const x = (e.clientX - left) / width - 0.5;
        const y = (e.clientY - top) / height - 0.5;

        gsap.to(element, {
            duration: 0.3,
            transform: `perspective(500px) rotateY(${x * 10}deg) rotateX(${-y * 10}deg) scale(1.05)`,
            boxShadow: `
                ${-x * 20}px ${-y * 20}px 20px rgba(255, 102, 0, 0.3),
                ${x * 20}px ${y * 20}px 20px rgba(255, 102, 0, 0.3)
            `
        });
    });

    element.addEventListener('mouseleave', () => {
        gsap.to(element, {
            duration: 0.3,
            transform: 'perspective(500px) rotateY(0) rotateX(0) scale(1)',
            boxShadow: 'none'
        });
    });
});

// Random flicker effect for spooky ambiance
setInterval(() => {
    const elements = document.querySelectorAll('h1, h2, h3, p');
    const randomElement = elements[Math.floor(Math.random() * elements.length)];
    gsap.to(randomElement, {
        opacity: 0.5,
        duration: 0.1,
        yoyo: true,
        repeat: 1
    });
}, 2000);
