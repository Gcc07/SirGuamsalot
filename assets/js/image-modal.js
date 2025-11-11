// Full-screen image modal functionality
document.addEventListener('DOMContentLoaded', function() {
    const modal = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const closeBtn = document.querySelector('.modal-close');
    const artTabs = document.querySelectorAll('.art-tab');
    
    if (!modal || !modalImage || !closeBtn) return;
    
    // Function to open modal
    function openModal(imageSrc, imageAlt, captionText) {
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt;
        modalCaption.textContent = captionText || imageAlt;
        modal.classList.add('active');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }
    
    // Function to close modal
    function closeModal() {
        modal.classList.remove('active');
        document.body.style.overflow = ''; // Restore scrolling
    }
    
    // Add click event to entire art tabs
    artTabs.forEach(tab => {
        tab.addEventListener('click', function() {
            const image = this.querySelector('.art-tab-image');
            if (!image) return;
            
            const imageSrc = image.src;
            const imageAlt = image.alt;
            // Get caption from the art-tab-content h3
            const tabContent = this.querySelector('.art-tab-content');
            const caption = tabContent?.querySelector('h3')?.textContent || imageAlt;
            openModal(imageSrc, imageAlt, caption);
        });
    });
    
    // Close modal when clicking the close button
    closeBtn.addEventListener('click', closeModal);
    
    // Close modal when clicking outside the image
    modal.addEventListener('click', function(e) {
        if (e.target === modal) {
            closeModal();
        }
    });
    
    // Close modal with Escape key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.classList.contains('active')) {
            closeModal();
        }
    });
});

