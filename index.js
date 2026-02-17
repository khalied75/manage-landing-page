// Mobile Menu Logic
        const btn = document.getElementById('menu-btn');
        const nav = document.getElementById('menu');
       const hamburger=document.querySelector('.hamburger')
       const icon_close=document.querySelector("#icon-close")
        hamburger.addEventListener('click', () => {
        
            icon_close.classList.remove('hidden') 
            icon_close.classList.add('flex')
            nav.classList.add("flex");
            nav.classList.remove("hidden");
            hamburger.classList.add('hidden')
        });
 icon_close.addEventListener('click', () => {
         console.log("done")
            nav.classList.add("hidden"); 
            nav.classList.remove("flex");
            hamburger.classList.remove('hidden')
            icon_close.classList.add('hidden')

        });

        // Email Validation Logic (Matches image_4df7bc.png)
        const form = document.getElementById('newsletter-form');
        const input = document.getElementById('email-input');
        const errorMsg = document.getElementById('error-msg');

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            const emailValue = input.value;
            const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

            if (!re.test(emailValue)) {
                errorMsg.classList.remove('hidden');
                input.classList.add('border-brightRed', 'text-brightRed');
            } else {
                errorMsg.classList.add('hidden');
                input.classList.remove('border-brightRed', 'text-brightRed');
               
            }
        });
// slide x
const slider = document.getElementById('slider');
const dots = document.querySelectorAll('.dot');

slider.addEventListener('scroll', () => {
    // حساب رقم البطاقة الظاهرة حالياً بناءً على مكان التمرير
    const index = Math.round(slider.scrollLeft / slider.offsetWidth);
    
    dots.forEach((dot, i) => {
        if (i === index) {
            dot.classList.add('bg-brightRed');
        } else {
            dot.classList.remove('bg-brightRed');
        }
    });
});

// لجعل النقاط قابلة للضغط أيضاً
dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        slider.scrollTo({
            left: i * slider.offsetWidth,
            behavior: 'smooth'
        });
    });
});        