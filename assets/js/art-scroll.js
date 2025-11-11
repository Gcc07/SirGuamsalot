// PS5-style smooth scrolling for art tabs
document.addEventListener('DOMContentLoaded', function() {
    const artScrollWrapper = document.querySelector('.art-scroll-wrapper');
    const artScrollContainer = document.querySelector('.art-scroll-container');
    
    if (!artScrollWrapper || !artScrollContainer) return;
    
    // Function to update fade gradients based on scroll position
    function updateArtFadeGradients() {
        const scrollLeft = artScrollWrapper.scrollLeft;
        const scrollWidth = artScrollWrapper.scrollWidth;
        const clientWidth = artScrollWrapper.clientWidth;
        const maxScroll = scrollWidth - clientWidth;
        
        // Show/hide left fade
        if (scrollLeft <= 5) {
            document.documentElement.style.setProperty('--art-left-fade-opacity', '0');
        } else {
            document.documentElement.style.setProperty('--art-left-fade-opacity', '1');
        }
        
        // Show/hide right fade
        if (scrollLeft >= maxScroll - 5) {
            document.documentElement.style.setProperty('--art-right-fade-opacity', '0');
        } else {
            document.documentElement.style.setProperty('--art-right-fade-opacity', '1');
        }
    }
    
    // Smooth horizontal scrolling with mouse wheel
    artScrollWrapper.addEventListener('wheel', function(e) {
        // Only scroll horizontally if there's horizontal overflow
        if (artScrollWrapper.scrollWidth > artScrollWrapper.clientWidth) {
            e.preventDefault();
            
            // Smooth scroll horizontally
            artScrollWrapper.scrollBy({
                left: e.deltaY * 0.5, // Adjust scroll speed
                behavior: 'smooth'
            });
        }
    }, { passive: false });
    
    // Update fade gradients on scroll
    artScrollWrapper.addEventListener('scroll', updateArtFadeGradients);
    
    // Initial fade gradient update
    updateArtFadeGradients();
    
    // Handle resize to update gradients
    window.addEventListener('resize', updateArtFadeGradients);
});

