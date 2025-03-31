// Smooth scroll untuk navbar
document.querySelectorAll('a.nav-link').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        if (this.getAttribute("href").startsWith("#")) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: "smooth"
                });
            }
        }
    });
});

// Efek transisi navbar saat scroll
window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 50) {
        navbar.classList.add("shadow-sm", "bg-white");
    } else {
        navbar.classList.remove("shadow-sm", "bg-white");
    }
});

// Efek hover pada portfolio
document.querySelectorAll('.portfolio-item').forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
        item.style.transition = '0.3s ease-in-out';
    });
    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});