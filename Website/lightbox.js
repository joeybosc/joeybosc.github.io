// Lightbox functionality for image grid
(function() {
    function initLightbox() {
        const lightbox = document.getElementById('lightbox');
        const lightboxImage = document.getElementById('lightbox-image');
        const lightboxCaption = document.getElementById('lightbox-caption');
        const closeBtn = document.querySelector('.lightbox-close');
        
        if (!lightbox || !lightboxImage || !lightboxCaption || !closeBtn) {
            console.warn('Lightbox elements not found');
            return;
        }
        
        const images = document.querySelectorAll('.image-grid img');
        console.log('Lightbox: found ' + images.length + ' images');
        
        images.forEach(img => {
            img.addEventListener('click', function(e) {
                e.preventDefault();
                const src = this.src;
                const figure = this.closest('figure');
                const caption = figure ? figure.querySelector('figcaption').textContent : '';
                
                lightboxImage.src = src;
                lightboxImage.alt = caption;
                lightboxCaption.textContent = caption;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            });
        });
        
        closeBtn.addEventListener('click', () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = '';
        });
        
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
        
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && lightbox.classList.contains('active')) {
                lightbox.classList.remove('active');
                document.body.style.overflow = '';
            }
        });
    }
    
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initLightbox);
    } else {
        initLightbox();
    }
})();
                                                 
                                                 