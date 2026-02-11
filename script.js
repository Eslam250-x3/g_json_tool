// Filter buttons - scroll to section
document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', function() {
        const section = this.dataset.section;
        document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
        this.classList.add('active');
        
        if (section) {
            const el = document.getElementById(section);
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
            document.querySelector('.hero')?.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Update active filter on scroll
const filterBtns = document.querySelectorAll('.filter-btn');
const sections = document.querySelectorAll('.section-card');

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        const id = entry.target.id;
        filterBtns.forEach(btn => {
            const match = id ? btn.dataset.section === id : btn === filterBtns[0];
            if (match) {
                filterBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');
            }
        });
    });
}, { threshold: 0.2, rootMargin: '-80px 0px' });

sections.forEach(s => observer.observe(s));

// Format cards - click to expand/collapse Structure & Example
document.querySelectorAll('.format-card').forEach(card => {
    card.addEventListener('click', function() {
        this.classList.toggle('expanded');
    });
});

// Initialize Lucide icons
if (typeof lucide !== 'undefined') {
    lucide.createIcons();
}
