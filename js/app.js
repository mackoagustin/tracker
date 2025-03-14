import "../components/button/button.js";
import "../components/text-block/text-block.js";
import "../components/icon-text/icon-text.js";
import "../components/benefit-block/benefit-block.js";
import "../components/app-section/app-section.js";
import "../components/app-section-right/app-section-right.js";
import "../components/price-block/price-block.js";
import "../components/faq/faq.js";
import "../components/tabs/tabs.js";
import "../components/nav-bar/nav-bar.js";
import "../components/form/form.js";
import "../components/footer/footer.js";
import "../components/testimonial/testimonial.js";

document.addEventListener('DOMContentLoaded', function () {
    const scrollContent = document.querySelector('.scroll-content');
    const arrowLeft = document.getElementById('arrow-left');
    const arrowRight = document.getElementById('arrow-right');


    setTimeout(() => {
        const testimonialBlocks = document.querySelectorAll('testimonial-block');
        
        if (testimonialBlocks.length === 0) {
            console.error('No se encontraron testimonial-blocks en el DOM.');
            return;
        }

        const cardWidth = testimonialBlocks[0].offsetWidth + 100; // Ancho de la tarjeta + espacio entre ellas
        let currentPosition = 0;

        arrowRight.addEventListener('click', function () {
            if (currentPosition < scrollContent.scrollWidth - scrollContent.offsetWidth) {
                currentPosition += cardWidth;
                scrollContent.style.transform = `translateX(-${currentPosition}px)`;
            }
        });

        arrowLeft.addEventListener('click', function () {
            if (currentPosition > 0) {
                currentPosition -= cardWidth;
                scrollContent.style.transform = `translateX(-${currentPosition}px)`;
            }
        });

    }, 500); 
});
