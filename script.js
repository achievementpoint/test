// FAQ Accordion
document.querySelectorAll('.faq-question').forEach(function(btn){
    btn.addEventListener('click', function() {
        const card = btn.closest('.faq-card');
        card.classList.toggle('active');
        // Close others
        document.querySelectorAll('.faq-card').forEach(function(el){
            if(el !== card) el.classList.remove('active');
        });
    });
});

// Testimonial Slider
let testimonials = document.querySelectorAll('.testimonial');
let idx = 0;
setInterval(()=>{
    testimonials[idx].classList.remove('active');
    idx = (idx + 1) % testimonials.length;
    testimonials[idx].classList.add('active');
}, 3400);
