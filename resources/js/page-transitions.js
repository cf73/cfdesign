import Swup from 'swup';

// Initialize Swup with fade transition
const swup = new Swup({
    containers: ['#swup'],
    animationSelector: '[class*="transition-"]',
    cache: true,
    // Wait for all images to load before completing transition
    animateHistoryBrowsing: true,
    plugins: []
});

// Simple content replacement without image loading wait
// (Images are lazy-loaded anyway, and Glide optimizes them)

// Initialize header scroll behavior
function initHeaderScroll() {
    const header = document.getElementById('site-header');
    if (!header) return; // No header on homepage
    
    let lastScrollTop = 0;
    let scrollBuffer = 50;
    let isHeaderVisible = true;
    
    // Remove any existing scroll listeners
    const oldListener = header._scrollListener;
    if (oldListener) {
        window.removeEventListener('scroll', oldListener);
    }
    
    // Create new scroll listener
    const scrollListener = function() {
        const currentScroll = window.pageYOffset || document.documentElement.scrollTop;
        
        // Don't hide header if we're at the very top
        if (currentScroll <= 0) {
            if (!isHeaderVisible) {
                header.style.transform = 'translateY(0)';
                isHeaderVisible = true;
            }
            lastScrollTop = currentScroll;
            return;
        }
        
        // Check if scroll difference is greater than buffer
        const scrollDiff = Math.abs(currentScroll - lastScrollTop);
        
        if (scrollDiff > scrollBuffer) {
            if (currentScroll > lastScrollTop && isHeaderVisible) {
                // Scrolling down - hide header
                header.style.transform = 'translateY(-100%)';
                isHeaderVisible = false;
            } else if (currentScroll < lastScrollTop && !isHeaderVisible) {
                // Scrolling up - show header
                header.style.transform = 'translateY(0)';
                isHeaderVisible = true;
            }
            lastScrollTop = currentScroll;
        }
    };
    
    // Store reference and add listener
    header._scrollListener = scrollListener;
    window.addEventListener('scroll', scrollListener, { passive: true });
}

// Initialize on page load
initHeaderScroll();

// Reinitialize header after page transition
swup.hooks.on('content:replace', () => {
    // Reinitialize header scroll behavior
    initHeaderScroll();

    // Reinitialize Preline components if they exist
    if (typeof HSStaticMethods !== 'undefined') {
        HSStaticMethods.autoInit();
    }
});

