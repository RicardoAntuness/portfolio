// Animação de scroll
const sections = document.querySelectorAll('.section');
const timelineItems = document.querySelectorAll('.timeline-item');
const navButtons = document.querySelectorAll('.nav-button');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
timelineItems.forEach(item => observer.observe(item));

// Atualizar botão ativo da navbar conforme a seção visível
const sectionIds = ['home', 'sobre', 'certificados', 'contato'];

const activateNav = () => {
    let current = 'home';

    sectionIds.forEach((id) => {
        const section = document.getElementById(id);
        if (section) {
            const rect = section.getBoundingClientRect();
            if (rect.top <= 150 && rect.bottom >= 150) {
                current = id;
            }
        }
    });

    navButtons.forEach((button) => {
        const href = button.getAttribute('href')?.replace('#', '');
        button.classList.toggle('active', href === current);
    });
};

window.addEventListener('scroll', activateNav);
window.addEventListener('load', activateNav);