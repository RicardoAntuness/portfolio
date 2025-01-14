// Animação de scroll
const sections = document.querySelectorAll('.section');
const timelineItems = document.querySelectorAll('.timeline-item');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

sections.forEach(section => observer.observe(section));
timelineItems.forEach(item => observer.observe(item));

// Adicionar certificado
document.querySelector('.add-certificate').addEventListener('click', () => {
    const certificateTitle = prompt('Digite o título do certificado:');
    if (certificateTitle) {
        const certificatesContainer = document.querySelector('.certificates');
        const newCertificate = document.createElement('div');
        newCertificate.className = 'certificate-card';
        newCertificate.innerHTML = `
            <h3>${certificateTitle}</h3>
            <p>Clique para editar a descrição</p>
        `;
        certificatesContainer.insertBefore(newCertificate, document.querySelector('.add-certificate'));
    }
});